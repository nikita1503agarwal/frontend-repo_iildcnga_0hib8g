import React from 'react'

function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(59,130,246,0.15),transparent_30%),linear-gradient(300deg,rgba(34,211,238,0.12),transparent_30%)] p-8 sm:p-10">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Tell us about your project</h3>
              <p className="mt-3 text-blue-100/90">Get a free, no‑pressure quote. We’ll respond within one business day.</p>

              <form className="mt-8 grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <input type="text" placeholder="Business name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:col-span-2" />
                <textarea placeholder="What do you need?" rows="4" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:col-span-2" />
                <button type="button" className="sm:w-max px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors">Request quote</button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-blue-200 text-sm">Starting at</p>
                <p className="text-3xl font-extrabold text-white">$1499</p>
                <p className="text-blue-200/80 text-sm">One‑time build. Flexible care plans available.</p>
              </div>
              <ul className="space-y-3 text-blue-100/90 text-sm">
                <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-md bg-green-500/20 text-green-300 grid place-items-center">✓</span> Mobile‑friendly & fast</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-md bg-green-500/20 text-green-300 grid place-items-center">✓</span> Includes basic SEO</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-md bg-green-500/20 text-green-300 grid place-items-center">✓</span> Easy updates</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 rounded-md bg-green-500/20 text-green-300 grid place-items-center">✓</span> Friendly support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
