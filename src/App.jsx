import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200/80">© {new Date().getFullYear()} BlueFlame Media. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-blue-200/80 hover:text-white">Services</a>
            <a href="#process" className="text-blue-200/80 hover:text-white">Process</a>
            <a href="#work" className="text-blue-200/80 hover:text-white">Work</a>
            <a href="#contact" className="text-blue-200/80 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
