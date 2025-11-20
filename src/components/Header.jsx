import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20 grid place-items-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c2.5 3 3 5.5 1.5 7.5S9.5 13 9 16c-.5 3 1.5 6 3 6s3.5-2 3-5 3-4.5 4-7.5C20.5 6 18 3 12 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold leading-none">BlueFlame Media</p>
            <p className="text-xs text-blue-200/70 leading-none mt-1">Websites for small business</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a>
          <a href="#process" className="text-blue-100 hover:text-white transition-colors">Process</a>
          <a href="#work" className="text-blue-100 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg shadow shadow-blue-600/30">Get a quote</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
