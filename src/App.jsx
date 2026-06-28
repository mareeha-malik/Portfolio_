import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loader from './components/Loader'
import DrawingOverlay from './components/DrawingOverlay'
import Home from './pages/Home'
import Designer from './pages/Designer'
import Developer from './pages/Developer'
import Skills from './pages/Skills'
import Clients from './pages/Clients'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'
import PeekFlork from './components/PeekFlork'

export default function App() {
  const location = useLocation()
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Nav />
      {/* pt-24 accounts for the floating pill navbar (16px margin + 64px height) */}
      <main className="pt-24 min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <DrawingOverlay />
      <PeekFlork />
    </>
  )
}
