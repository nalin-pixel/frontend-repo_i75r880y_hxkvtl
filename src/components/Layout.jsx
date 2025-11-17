import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '#acasa', label: 'Acasă' },
    { href: '#despre', label: 'Despre noi' },
    { href: '#servicii', label: 'Servicii' },
    { href: '#oferte', label: 'Oferte' },
    { href: '#recenzii', label: 'Recenzii' },
    { href: '#programari', label: 'Programări' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-rose-50 via-amber-50 to-rose-50 text-rose-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#acasa" className="font-semibold tracking-tight text-rose-900">Lady Salon Brașov</a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-rose-800 hover:text-rose-900">{n.label}</a>
            ))}
            <a href="#programari" className="ml-4 inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-rose-700">Programează-te</a>
          </nav>
          <button className="md:hidden" onClick={()=>setOpen(o=>!o)}>{open? <X/>:<Menu/>}</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-rose-100 bg-white/80">
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-4">
              {nav.map(n => <a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="text-sm text-rose-800">{n.label}</a>)}
              <a href="#programari" onClick={()=>setOpen(false)} className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm">Programează-te</a>
            </div>
          </div>
        )}
      </header>
      <main className="pb-20">
        {children}
      </main>
      <footer className="border-t border-rose-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 text-sm text-rose-800/80">
          © {new Date().getFullYear()} Lady Salon Brașov • Toate drepturile rezervate
        </div>
      </footer>
    </div>
  )
}
