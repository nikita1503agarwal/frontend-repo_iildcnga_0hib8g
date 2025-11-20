import React from 'react'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300/80 bg-white/5 border border-cyan-400/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Launch your website in days, not months
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Beautiful, fast websites for small businesses
          </h1>
          <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
            We craft modern, conversion‑focused sites that look great on every device and help you win more customers. No jargon. No headaches. Just results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors">
              Get a free quote
            </a>
            <a href="#work" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 transition-colors">
              See our work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-blue-200/80">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/48?img=${i+5}`} alt="client" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              ))}
            </div>
            <p>Trusted by 100+ local businesses</p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-tr from-slate-800 to-slate-700 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1603038250282-7f0f3e32f229?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWJzaXRlJTIwcHJldmlld3xlbnwwfDB8fHwxNzYzNjMwMTM2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Website preview" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900/80 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur">
            <p className="text-sm text-blue-100">Average turnaround: <span className="font-semibold text-white">7–10 days</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
