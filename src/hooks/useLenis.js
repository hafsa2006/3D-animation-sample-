import { useEffect } from 'react'
import Lenis from 'lenis'

// Enables Lenis smooth scrolling for the whole page.
// Call once near the root (e.g. in App) when scroll sections are added.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
