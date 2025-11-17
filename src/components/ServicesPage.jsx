import { ArrowRight } from 'lucide-react'

const CATS = [
  {
    title: 'Coafor',
    subs: [
      { name: 'Tuns femei', desc: 'Tunsori personalizate pe forma feței și tipul părului.', price: 80 },
      { name: 'Coafat', desc: 'Coafuri elegante pentru orice ocazie.', price: 90 },
      { name: 'Vopsit', desc: 'Culori premium, nuanțe naturale sau îndrăznețe.', price: 180 },
      { name: 'Tratamente păr', desc: 'Hidratare intensă, reparare și strălucire.', price: 150 },
    ]
  },
  {
    title: 'Cosmetică & Tratamente Faciale',
    subs: [
      { name: 'Curățare facială', desc: 'Detoxifiere și purificare pentru un ten curat.', price: 150 },
      { name: 'Tratament anti-age', desc: 'Lifting, fermitate și luminozitate.', price: 220 },
      { name: 'Microdermabraziune', desc: 'Exfoliere profesională pentru o piele fină.', price: 200 },
      { name: 'Împachetări', desc: 'Răsfăț pentru corp, hidratare și remodelare.', price: 180 },
    ]
  },
  {
    title: 'Manichiură & Pedichiură',
    subs: [
      { name: 'Manichiură clasică', desc: 'Îngrijire completă și oje premium.', price: 80 },
      { name: 'Semipermanentă', desc: 'Luciu intens și rezistență îndelungată.', price: 120 },
      { name: 'Gel', desc: 'Forme perfecte și rezistență.', price: 160 },
      { name: 'Pedichiură spa', desc: 'Relaxare totală și îngrijire.', price: 150 },
    ]
  },
  {
    title: 'Sprâncene & Gene',
    subs: [
      { name: 'Pensat', desc: 'Arcuire naturală pentru un look îngrijit.', price: 40 },
      { name: 'Laminare sprâncene', desc: 'Definire și volum pentru sprâncene perfecte.', price: 150 },
      { name: 'Extensii gene', desc: 'Privire intensă, efect natural sau glam.', price: 220 },
    ]
  },
  {
    title: 'Masaj',
    subs: [
      { name: 'Masaj relaxare', desc: 'Eliberare de stres și tensiune.', price: 160 },
      { name: 'Masaj anticelulitic', desc: 'Tonifiere și remodelare.', price: 180 },
    ]
  }
]

function Card({ name, desc, price }){
  return (
    <div className="rounded-2xl border border-rose-100 bg-white/70 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-rose-900">{name}</h4>
          <p className="text-sm text-rose-800/70 mt-1">{desc}</p>
        </div>
        <span className="rounded-full bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1 border border-amber-100">de la {price} lei</span>
      </div>
      <a href="#programari" className="mt-4 inline-flex items-center gap-2 text-rose-700 hover:text-rose-900">Programează-te <ArrowRight size={16}/></a>
    </div>
  )
}

export default function ServicesPage(){
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-rose-900">Servicii</h1>
      <p className="mt-2 text-rose-800/80">Alege categoria dorită și descoperă detaliile.</p>
      <div className="mt-8 grid gap-10">
        {CATS.map((c, i) => (
          <div key={i}>
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-900 mb-4">{c.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.subs.map((s, idx) => <Card key={idx} {...s} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
