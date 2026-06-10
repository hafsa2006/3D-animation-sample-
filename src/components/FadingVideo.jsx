import { useEffect, useRef } from 'react'

const FADE_MS = 500
const FADE_OUT_LEAD = 0.55 // seconds before the end to start fading out

/**
 * Background video with a JS-driven crossfade loop.
 * Opacity is animated with requestAnimationFrame (no CSS transitions) and
 * looping is manual: fade out near the end, reset on `ended`, fade back in.
 */
export default function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null)
  const rafRef = useRef(null)
  const fadingOutRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Resumes from the video's current opacity so overlapping fades stay smooth.
    const fadeTo = (target, duration = FADE_MS) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const from = parseFloat(video.style.opacity || '0')
      const start = performance.now()

      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        video.style.opacity = String(from + (target - from) * t)
        if (t < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const onLoadedData = () => {
      video.style.opacity = '0'
      video.play().catch(() => {})
      fadeTo(1)
    }

    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true
        fadeTo(0)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadingOutRef.current = false
        fadeTo(1)
      }, 100)
    }

    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  )
}
