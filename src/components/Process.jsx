import React from 'react'

const steps = [
  {
    title: '1. Discover',
    desc: 'A quick call to learn about your business, audience, and goals.',
  },
  {
    title: '2. Design',
    desc: 'We create a clean, modern design that reflects your brand.',
  },
  {
    title: '3. Build',
    desc: 'We develop a fast, responsive site optimized for conversions.',
  },
  {
    title: '4. Launch & Grow',
    desc: 'We deploy, track results, and keep improving with you.',
  },
]

function Process() {
  return (
    <section id="process" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How it works</h2>
          <p className="mt-3 text-blue-100/90">A simple, transparent process keeps your project on track.</p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <li key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-blue-600 text-white font-bold grid place-items-center shadow-lg shadow-blue-600/30">{i+1}</span>
              <h3 className="text-white font-semibold">{step.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
