import React from 'react'

const items = [
  {
    title: 'Brew & Co. Coffee',
    tag: 'Cafe / Local Retail',
    img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Peak Fitness Studio',
    tag: 'Gym / Services',
    img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'GreenLeaf Landscaping',
    tag: 'Home Services',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop'
  },
]

function Work() {
  return (
    <section id="work" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Selected work</h2>
            <p className="mt-3 text-blue-100/90">A few examples from recent projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10">Start your project</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <img src={item.img} alt={item.title} className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-blue-200 text-xs">{item.tag}</p>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
