import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Cursos from './components/Cursos'
import ImageSlider from './components/ImageSlider'

import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import CookieConsentBanner from './components/CookieConsentBanner'
import Coaching from './components/Coaching'
import Investigaciones from './components/Investigaciones.jsx'
import PrivacyPolicy from './components/PrivacyPolicy'
import LegalNotice from './components/LegalNotice'

import { ModalProvider } from './components/ModalContext'
import GlobalModal from './components/GlobalModal.jsx'

// Home page component
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    <Cursos />
    <ImageSlider />
    <Coaching />
    <Investigaciones />
    <Testimonials />
    <Footer />
    <CookieConsentBanner />
    <GlobalModal />
  </>
)

function App() {
  return (
    <ModalProvider>
      <Router>
        <main className="relative min-h-screen overflow-x-hidden">
          <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>
          <div className="overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
            </Routes>
          </div>
        </main>
      </Router>
    </ModalProvider>
  )
}

export default App
