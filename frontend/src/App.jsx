import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Services />
    </div>
  )
}

export default App
