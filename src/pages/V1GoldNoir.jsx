import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ArrowRight, ChevronDown, ChevronUp, Sparkles, Menu, X, Users, CheckCircle2, Clock, Shield } from 'lucide-react'
import { FadeIn, ScaleIn, IMG } from '../components/shared'
import QuoteForm from '../components/QuoteForm'

export default function V1GoldNoir() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const [testimonial, setTestimonial] = useState(0)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setTestimonial(p => (p + 1) % 3), 5000)
    return () => clearInterval(t)
  }, [])

  const navLinks = ['Fleet','How It Works','Gallery','Reviews','FAQ']

  return (
    <div className="bg-[#0a0a14] text-white min-h-screen">
      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a14]/95 backdrop-blur-xl border-b border-gold/10' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="font-playfair text-2xl font-bold">Pretty <span className="text-gold">Potty</span></a>
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors">{l}</a>
            ))}
            <a href="#quote" className="relative group">
              <span className="absolute inset-0 bg-gold rounded blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
              <span className="relative bg-gold text-[#0a0a14] font-montserrat text-[11px] tracking-[0.15em] uppercase font-bold px-7 py-3 rounded inline-block">Get a Quote</span>
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white cursor-pointer" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 inset-x-0 z-40 bg-[#0a0a14]/98 backdrop-blur-xl border-b border-gold/10 lg:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/ /g,'-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-montserrat text-[12px] tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors py-3 border-b border-white/[0.05]"
                >
                  {l}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-gold text-[#0a0a14] font-montserrat text-[12px] tracking-[0.15em] uppercase font-bold px-7 py-4 rounded-sm text-center cursor-pointer"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero1} alt="" className="w-full h-full object-cover opacity-40" fetchpriority="high" style={{ animation: 'kenburns 25s ease-in-out infinite' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-transparent to-[#0a0a14]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 to-transparent" />
        </div>

        {/* Gold particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
              animate={{ y: [-20, 20], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8 border border-gold/20 rounded-full px-5 py-2 bg-gold/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold">Now Booking 2026 Events</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.95] mb-8 max-w-4xl">
            Your Guests
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">Deserve</span> Better
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="font-inter text-xl text-white/60 max-w-xl mb-12 leading-relaxed">
            Luxury mobile restrooms with A/C, Bluetooth music, LED lighting & hot water — for New York's most unforgettable events.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4">
            <a href="#quote" className="group relative inline-flex items-center gap-3 bg-gold hover:bg-gold-rich text-[#0a0a14] font-montserrat text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-sm transition-all cursor-pointer" style={{ animation: 'pulse-gold 3s infinite' }}>
              Reserve Your Date <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#fleet" className="inline-flex items-center gap-3 border border-white/20 hover:border-gold text-white/80 hover:text-gold font-montserrat text-sm uppercase tracking-wider px-10 py-5 rounded-sm transition-all cursor-pointer">
              View Collection
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-20 flex flex-wrap gap-12">
            {[
              { val: '500+', label: 'Events Served' },
              { val: '4.9', label: 'Star Rating', icon: <Star size={14} className="fill-gold text-gold" /> },
              { val: '2hr', label: 'Response Time' },
            ].map((s, i) => (
              <div key={i} className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-playfair text-3xl font-bold text-gold">{s.val}</span>
                  {s.icon}
                </div>
                <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-white/30">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-gold/40" size={28} />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-gold/10 py-5 overflow-hidden bg-gold/[0.03]">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 40s linear infinite' }}>
          {[...Array(3)].flatMap(() => ['Climate Controlled','Bluetooth Music','Hot & Cold Water','LED Lighting','Full Privacy','Porcelain Fixtures','Granite Countertops','White-Glove Service']).map((t, i) => (
            <span key={i} className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold/50 mx-10 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/30" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── FLEET ── */}
      <section id="fleet" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Our Collection</p>
            <h2 className="font-playfair text-5xl sm:text-6xl font-bold mb-20">The <span className="text-gold">Fleet</span></h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { name: 'The Classic', sub: '2-Station Trailer', guests: '150', img: IMG.bath1, features: ['Climate Control','Running Hot Water','LED Vanity Mirrors','Porcelain Fixtures'], tag: '' },
              { name: 'The Grand Estate', sub: '4-Station Trailer', guests: '250', img: IMG.bath2, features: ['Granite Countertops','Bluetooth Sound','Chandelier Lighting','Premium Vanities'], tag: 'Most Popular' },
              { name: 'The Royal Suite', sub: '6-Station Trailer', guests: '400', img: IMG.bath6, features: ['Bridal Suite Option','Attendant Station','Full-Length Mirrors','Luxury Toiletries'], tag: 'Premium' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500">
                  {t.tag && (
                    <div className="absolute top-4 right-4 z-10 bg-gold text-[#0a0a14] font-montserrat text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5">{t.tag}</div>
                  )}
                  <div className="relative h-72 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <p className="font-montserrat text-[9px] tracking-[0.25em] uppercase text-gold/60 mb-1">{t.sub}</p>
                    <h3 className="font-playfair text-2xl font-bold mb-2">{t.name}</h3>
                    <p className="font-inter text-sm text-white/40 mb-6 flex items-center gap-2"><Users size={14} className="text-gold/60" /> Up to {t.guests} guests</p>
                    <ul className="space-y-2.5 mb-8">
                      {t.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-inter text-white/50">
                          <CheckCircle2 size={14} className="text-gold/60 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#quote" className="block text-center border border-gold/30 hover:bg-gold hover:text-[#0a0a14] text-gold font-montserrat text-[11px] tracking-[0.15em] uppercase font-semibold py-4 transition-all cursor-pointer">
                      Request a Quote
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-28 px-6 border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4 text-center">Process</p>
            <h2 className="font-playfair text-5xl font-bold text-center mb-20">Simple Luxury in <span className="text-gold">3 Steps</span></h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            {[
              { n: '01', title: 'Request a Quote', desc: 'Tell us your date, location, and guest count. We respond within 2 hours — guaranteed.' },
              { n: '02', title: 'Choose Your Trailer', desc: 'Select from our luxury collection. We\'ll recommend the perfect match for your event.' },
              { n: '03', title: 'We Handle Everything', desc: 'Professional delivery, setup, on-site maintenance, and removal. You never lift a finger.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="text-center relative">
                  <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-8 bg-gold/[0.03]">
                    <span className="font-playfair text-2xl font-bold text-gold">{s.n}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="font-inter text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Portfolio</p>
            <h2 className="font-playfair text-5xl font-bold mb-16">Luxury in <span className="text-gold">Every Detail</span></h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: IMG.bath1, span: 'md:col-span-2 md:row-span-2' },
              { src: IMG.wedding1, span: '' },
              { src: IMG.bath4, span: '' },
              { src: IMG.bath5, span: '' },
              { src: IMG.wedding2, span: '' },
              { src: IMG.outdoor1, span: 'md:col-span-2' },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.08} className={img.span}>
                <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden group cursor-pointer">
                  <img src={img.src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="py-28 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Testimonials</p>
            <h2 className="font-playfair text-5xl font-bold mb-16">Client <span className="text-gold">Love</span></h2>
          </FadeIn>
          <ScaleIn>
            <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-sm p-12 md:p-16">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold text-gold" />)}
              </div>
              {[
                { q: "Pretty Potty transformed our wedding. Guests kept saying the restrooms were nicer than their own bathrooms at home!", name: 'Sarah & James K.', event: 'Hamptons Wedding' },
                { q: "Three corporate events and counting. The trailers are immaculate, the service is flawless, and our clients are always blown away.", name: 'Michael R.', event: 'Corporate Gala, NYC' },
                { q: "The LED lighting, the music, the hot running water — it felt like stepping into a luxury hotel. Best decision we made for our wedding.", name: 'Emily & David L.', event: 'Garden Wedding, Nassau' },
              ].map((r, i) => (
                i === testimonial && (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <p className="font-playfair text-2xl md:text-3xl italic leading-relaxed text-white/80 mb-10">"{r.q}"</p>
                    <p className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-gold font-semibold">{r.name}</p>
                    <p className="font-inter text-sm text-white/30 mt-1">{r.event}</p>
                  </motion.div>
                )
              ))}
              <div className="flex justify-center gap-3 mt-10">
                {[0, 1, 2].map(i => (
                  <button key={i} onClick={() => setTestimonial(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${i === testimonial ? 'w-10 bg-gold' : 'w-4 bg-white/10 hover:bg-white/20'}`} />
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4 text-center">FAQ</p>
            <h2 className="font-playfair text-5xl font-bold text-center mb-16">Common <span className="text-gold">Questions</span></h2>
          </FadeIn>
          {[
            { q: 'How much does a luxury restroom rental cost?', a: 'Pricing varies by trailer model, duration, and location. Our 2-Station Classic starts at competitive rates. Contact us for a personalized quote — we respond within 2 hours.' },
            { q: 'How far in advance should I book?', a: 'We recommend 4-8 weeks in advance, especially for peak season (May-October). Popular dates book fast.' },
            { q: "What's included in the rental?", a: 'Everything: climate control, hot & cold water, LED lighting, Bluetooth speakers, premium toiletries, hand towels, plus delivery, setup, and removal.' },
            { q: 'What power/water do you need?', a: 'A standard 20-amp outlet and water spigot within 100 feet. We bring extension cords and hoses. No hookups? We have generators and water tanks.' },
            { q: 'Do you serve areas outside Long Island?', a: 'Yes! We serve The Hamptons, Westchester, all NYC boroughs, Connecticut, and New Jersey. Delivery fees may apply beyond 25 miles.' },
          ].map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border-b border-white/[0.06]">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group">
                  <span className="font-inter font-medium text-white/80 group-hover:text-gold transition-colors pr-4">{f.q}</span>
                  <ChevronDown className={`text-gold/40 shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="font-inter text-sm text-white/60 leading-relaxed pb-6">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── QUOTE CTA ── */}
      <section id="quote" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-playfair text-5xl sm:text-6xl font-bold mb-6">
              Ready to <span className="text-gold">Elevate</span><br />Your Event?
            </h2>
            <p className="font-inter text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Join 500+ events that chose luxury over compromise. Get your personalized quote in under 2 hours.
            </p>
            <QuoteForm theme="dark" />
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.05] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <p className="font-playfair text-xl font-bold mb-4">Pretty <span className="text-gold">Potty</span></p>
            <p className="font-inter text-sm text-white/30 leading-relaxed">Luxury mobile restrooms for New York's finest events.</p>
          </div>
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gold mb-4">Links</p>
            {[
              { label: 'Fleet', href: '#fleet' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Get a Quote', href: '#quote' },
            ].map(l => (
              <a key={l.label} href={l.href} className="block font-inter text-sm text-white/30 hover:text-gold py-1 transition-colors cursor-pointer">{l.label}</a>
            ))}
          </div>
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gold mb-4">Service Areas</p>
            {['Suffolk County','Nassau County','The Hamptons','Westchester','NYC','Connecticut','New Jersey'].map(a => (
              <p key={a} className="font-inter text-sm text-white/30 py-1 flex items-center gap-2"><MapPin size={10} className="text-gold/40" /> {a}</p>
            ))}
          </div>
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gold mb-4">Contact</p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1"><Phone size={14} className="text-gold/60" /> (516) 555-1234</p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1"><Mail size={14} className="text-gold/60" /> info@prettypottyny.com</p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1"><MapPin size={14} className="text-gold/60" /> Long Island, New York</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/20">&copy; 2026 Pretty Potty Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-xs text-white/20 hover:text-gold transition-colors cursor-pointer">Privacy</a>
            <a href="#" className="font-inter text-xs text-white/20 hover:text-gold transition-colors cursor-pointer">Terms</a>
          </div>
        </div>
      </footer>

      {/* Mobile sticky */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-[#0a0a14]/95 backdrop-blur-xl border-t border-gold/10 px-4 py-3 flex gap-3 z-50">
        <a href="#quote" className="flex-[3] bg-gold text-[#0a0a14] font-montserrat text-[11px] font-bold uppercase tracking-wider py-3.5 rounded-sm text-center cursor-pointer">Request Quote</a>
        <a href="tel:+15165551234" className="flex-1 border border-white/10 text-white flex items-center justify-center rounded-sm cursor-pointer"><Phone size={18} /></a>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  )
}
