import React from 'react'

const services = [
  {
    title: 'Custom Websites',
    desc: 'Tailor‑made sites designed to match your brand and convert visitors into customers.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8h20" />
      </svg>
    ),
  },
  {
    title: 'Online Stores',
    desc: 'Sell products with secure checkout, inventory, and easy order management.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2l3 7h8l3-7" />
        <path d="M6 2L3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9L17 2" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: 'Local SEO',
    desc: 'Be found on Google and maps. Optimized pages that bring more foot traffic.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Care',
    desc: 'Fast hosting, updates, and support so you never worry about your site again.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What we do</h2>
          <p className="mt-3 text-blue-100/90">Everything you need to go from idea to launch — and beyond.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white grid place-items-center shadow-lg shadow-cyan-500/20">
                {s.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
