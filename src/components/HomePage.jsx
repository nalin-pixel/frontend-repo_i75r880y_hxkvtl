import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Phone, Calendar, MapPin, Clock, Instagram, Facebook, Star } from 'lucide-react'

function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      {children}
    </section>
  )
}

function Hero() {
  return (
    <div className="relative min-h-[80vh] md:min-h-[86vh] rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-40 pb-16">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-white/70 backdrop-blur px-4 py-1 text-sm text-rose-600 border border-rose-100 shadow-sm">
            Lady Salon Brașov
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-rose-900">
            Răsfață-te cu frumusețea pe care o meriți.
          </h1>
          <p className="mt-5 text-rose-800/80 text-lg md:text-xl max-w-xl">
            Eleganță, profesionalism și confort în inima Brașovului. Cosmetica, coafor, manichiură & pedichiură, tratamente faciale, masaj și sprâncene.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#programari" className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-200 hover:bg-rose-700 transition">
              Programează-te <ArrowRight size={18} />
            </a>
            <a href="#servicii" className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 px-6 py-3 border border-rose-100 hover:bg-rose-50 transition">
              Vezi servicii
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ title, desc, price }) {
  return (
    <div className="group rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-0.5 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
          <p className="text-sm text-rose-800/70 mt-1">{desc}</p>
        </div>
        <span className="rounded-full bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1 border border-amber-100">de la {price} lei</span>
      </div>
      <a href="#programari" className="mt-4 inline-flex items-center gap-2 text-rose-700 hover:text-rose-900">
        Programează-te <ArrowRight size={16} />
      </a>
    </div>
  )
}

function Reviews() {
  const items = [
    { name: 'Ana M.', text: 'Servicii impecabile și o atmosferă deosebită.', rating: 5 },
    { name: 'Ioana P.', text: 'Cel mai frumos salon din Brașov! Recomand cu drag.', rating: 5 },
    { name: 'Maria C.', text: 'Profesionalism și multă grijă pentru detalii.', rating: 5 },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((r, i) => (
        <div key={i} className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-amber-500">
            {Array.from({ length: r.rating }).map((_, idx) => <Star key={idx} size={18} fill="#f59e0b" className="text-amber-500" />)}
          </div>
          <p className="mt-3 text-rose-900">{r.text}</p>
          <p className="mt-4 text-sm text-rose-800/70">{r.name}</p>
        </div>
      ))}
    </div>
  )
}

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', notes: '' })
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const API = import.meta.env.VITE_BACKEND_URL || ''

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, success: null, message: '' })
    try {
      const res = await fetch(`${API}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Eroare la trimiterea programării')
      setStatus({ loading: false, success: true, message: 'Mulțumim! Te vom contacta pentru confirmare.' })
      setForm({ name: '', phone: '', service: '', date: '', time: '', notes: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, message: 'Ne pare rău, a apărut o problemă. Încearcă din nou.' })
    }
  }

  const services = ['Tuns femei', 'Coafat', 'Vopsit', 'Tratamente păr', 'Curățare facială', 'Tratament anti-age', 'Microdermabraziune', 'Împachetări', 'Manichiură clasică', 'Semipermanentă', 'Gel', 'Pedichiură spa', 'Pensat', 'Laminare sprâncene', 'Extensii gene', 'Masaj relaxare', 'Masaj anticelulitic']

  return (
    <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-6 md:p-10 border border-rose-100">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm text-rose-800/80 mb-1">Nume complet</label>
          <input required value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
        </div>
        <div>
          <label className="block text-sm text-rose-800/80 mb-1">Telefon</label>
          <input required value={form.phone} onChange={e=>setForm(f=>({...f, phone:e.target.value}))} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
        </div>
        <div>
          <label className="block text-sm text-rose-800/80 mb-1">Serviciu dorit</label>
          <select required value={form.service} onChange={e=>setForm(f=>({...f, service:e.target.value}))} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300">
            <option value="" disabled>Selectează</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-rose-800/80 mb-1">Data</label>
            <input required type="date" value={form.date} onChange={e=>setForm(f=>({...f, date:e.target.value}))} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm text-rose-800/80 mb-1">Ora</label>
            <input required type="time" value={form.time} onChange={e=>setForm(f=>({...f, time:e.target.value}))} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-rose-800/80 mb-1">Mesaj (opțional)</label>
          <textarea value={form.notes} onChange={e=>setForm(f=>({...f, notes:e.target.value}))} rows={4} className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button disabled={status.loading} className="inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-200 hover:bg-rose-700 transition">
            <Calendar size={18} /> {status.loading ? 'Se trimite...' : 'Trimite programarea'}
          </button>
          {status.message && (
            <span className={"text-sm " + (status.success ? 'text-emerald-700' : 'text-rose-700')}>{status.message}</span>
          )}
        </div>
      </form>
    </div>
  )
}

function Services() {
  const groups = [
    { title: 'Coafor', items: [
      { t: 'Tuns femei', d: 'Tunsori personalizate pe forma feței și tipul părului.', p: 80 },
      { t: 'Coafat', d: 'Coafuri elegante pentru orice ocazie.', p: 90 },
      { t: 'Vopsit', d: 'Culori premium, nuanțe naturale sau îndrăznețe.', p: 180 },
      { t: 'Tratamente păr', d: 'Hidratare intensă, reparare și strălucire.', p: 150 },
    ]},
    { title: 'Cosmetică & Tratamente Faciale', items: [
      { t: 'Curățare facială', d: 'Detoxifiere și purificare pentru un ten curat.', p: 150 },
      { t: 'Tratament anti-age', d: 'Lifting, fermitate și luminozitate.', p: 220 },
      { t: 'Microdermabraziune', d: 'Exfoliere profesională pentru o piele fină.', p: 200 },
      { t: 'Împachetări', d: 'Răsfăț pentru corp, hidratare și remodelare.', p: 180 },
    ]},
    { title: 'Manichiură & Pedichiură', items: [
      { t: 'Manichiură clasică', d: 'Îngrijire completă și oje premium.', p: 80 },
      { t: 'Semipermanentă', d: 'Luciu intens și rezistență îndelungată.', p: 120 },
      { t: 'Gel', d: 'Forme perfecte și rezistență.', p: 160 },
      { t: 'Pedichiură spa', d: 'Relaxare totală și îngrijire.', p: 150 },
    ]},
    { title: 'Sprâncene & Gene', items: [
      { t: 'Pensat', d: 'Arcuire naturală pentru un look îngrijit.', p: 40 },
      { t: 'Laminare sprâncene', d: 'Definire și volum pentru sprâncene perfecte.', p: 150 },
      { t: 'Extensii gene', d: 'Privire intensă, efect natural sau glam.', p: 220 },
    ]},
    { title: 'Masaj', items: [
      { t: 'Masaj relaxare', d: 'Eliberare de stres și tensiune.', p: 160 },
      { t: 'Masaj anticelulitic', d: 'Tonifiere și remodelare.', p: 180 },
    ]},
  ]

  return (
    <div className="grid gap-8">
      {groups.map((g, idx) => (
        <div key={idx}>
          <h3 className="text-2xl font-semibold text-rose-900 mb-4">{g.title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {g.items.map((it, i) => (
              <ServiceCard key={i} title={it.t} desc={it.d} price={it.p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <Section id="acasa">
        <Hero />
      </Section>

      <Section id="despre">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Despre noi</h2>
            <p className="mt-4 text-rose-800/80 leading-relaxed">
              Lady Salon Brașov este un spațiu creat pentru femeile care își doresc rafinament, timp de calitate și rezultate impecabile. Echipa noastră este formată din specialiști cu experiență în coafor, cosmetică, manichiură & pedichiură, masaj și stilizare sprâncene.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-rose-100 text-rose-800"><Phone size={16}/> 0740 000 000</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-rose-100 text-rose-800"><Clock size={16}/> Luni-Sâmbătă: 9:00-20:00</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-rose-100 bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1600&auto=format&fit=crop" alt="Salon" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section id="servicii">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900 mb-6">Servicii</h2>
        <Services />
      </Section>

      <Section id="oferte">
        <div className="rounded-3xl bg-white p-8 border border-rose-100">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Oferte & Pachete</h2>
          <p className="mt-2 text-rose-800/80">Promoții lunare și pachete combinate pentru răsfăț complet.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-rose-100 p-6 bg-gradient-to-br from-rose-50 to-white">
              <h3 className="text-xl font-semibold text-rose-900">Pachet Beauty Glow</h3>
              <p className="text-rose-800/80 mt-1">Manichiură semipermanentă + Tratament facial anti-age</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-rose-700 font-medium">320 lei</span>
                <a href="#programari" className="text-rose-700 hover:text-rose-900 inline-flex items-center gap-2">Programează-te <ArrowRight size={16}/></a>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 p-6 bg-gradient-to-br from-amber-50 to-white">
              <h3 className="text-xl font-semibold text-rose-900">Pachet Relax & Shine</h3>
              <p className="text-rose-800/80 mt-1">Masaj relaxare + Coafat profesional</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-rose-700 font-medium">280 lei</span>
                <a href="#programari" className="text-rose-700 hover:text-rose-900 inline-flex items-center gap-2">Programează-te <ArrowRight size={16}/></a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="recenzii">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-900 mb-6">Recenzii</h2>
        <Reviews />
      </Section>

      <Section id="programari">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Programări</h2>
            <p className="mt-2 text-rose-800/80">Completează formularul pentru a solicita o programare. Te contactăm pentru confirmare.</p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-rose-100">
              <iframe title="harta" className="w-full h-64" src="https://www.google.com/maps?q=Brașov%2C%20Rom%C3%A2nia&output=embed" loading="lazy"></iframe>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-rose-800">
              <span className="inline-flex items-center gap-2"><MapPin size={18}/> Brașov, România</span>
              <span className="inline-flex items-center gap-2"><Clock size={18}/> Luni–Sâmbătă: 9:00–20:00</span>
            </div>
          </div>
          <Booking />
        </div>
      </Section>

      <Section id="contact">
        <div className="rounded-3xl bg-white p-8 border border-rose-100">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Contact</h2>
          <p className="mt-2 text-rose-800/80">Suntem mereu aici pentru tine.</p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-rose-800">
            <a href="tel:+40740000000" className="inline-flex items-center gap-2 hover:text-rose-900"><Phone size={18}/> +40 740 000 000</a>
            <a href="https://wa.me/40740000000" target="_blank" className="inline-flex items-center gap-2 hover:text-rose-900"><Phone size={18}/> WhatsApp</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-rose-900"><Instagram size={18}/> Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-rose-900"><Facebook size={18}/> Facebook</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
