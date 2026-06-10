import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Capabilities from './sections/Capabilities'

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Capabilities />
    </main>
  )
}
