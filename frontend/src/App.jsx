import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
