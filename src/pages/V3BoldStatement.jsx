import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ArrowRight, ChevronDown, ChevronUp, Menu, X, Users, CheckCircle2, Clock, Shield, Thermometer, Zap, Globe, Share2 } from 'lucide-react'
import { FadeIn, ScaleIn, IMG } from '../components/shared'

export default function V3BoldStatement() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const [testimonial, setTestimonial] = useState(0)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => setTestimonial(p => (p + 1) % 3), 5000)
    return () => clearInterval(timer)
  }, [])

  const slideFromLeft = {
    initial: { opacity: 0, x: -120 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }

  const slideFromRight = {
    initial: { opacity: 0, x: 120 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b-2 border-[#D4AF37]' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="font-montserrat text-2xl font-black uppercase tracking-wider">
            Pretty <span className="text-[#D4AF37]">Potty</span>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {['The Problem', 'Stats', 'Fleet', 'Gallery', 'Reviews', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                className="font-montserrat text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-1">
                {l}
              </a>
            ))}
            <a href="#book" className="relative group">
              <span className="absolute inset-0 bg-[#D4AF37] blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
              <span className="relative bg-[#D4AF37] text-black font-montserrat text-[12px] tracking-[0.15em] uppercase font-black px-8 py-3.5 inline-block border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37] transition-all">
                Book the Upgrade
              </span>
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white cursor-pointer">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-black border-b-2 border-[#D4AF37] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {['The Problem', 'Stats', 'Fleet', 'Gallery', 'Reviews', 'FAQ'].map(l => (
                  <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-montserrat text-sm uppercase tracking-widest text-white/70 hover:text-[#D4AF37] transition-colors py-2">
                    {l}
                  </a>
                ))}
                <a href="#book" onClick={() => setMenuOpen(false)}
                  className="bg-[#D4AF37] text-black font-montserrat text-sm font-black uppercase tracking-wider py-4 text-center mt-2">
                  Book the Upgrade
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO — Full Black, Giant Confrontational Text
         ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with heavy dark overlay */}
        <div className="absolute inset-0">
          <img src={IMG.hero3} alt="" className="w-full h-full object-cover opacity-20" style={{ animation: 'kenburns 30s ease-in-out infinite' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        {/* Diagonal gold accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent transform rotate-12 translate-x-[30vw]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-montserrat text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] border-2 border-[#D4AF37] px-6 py-2.5 inline-block">
              NYC Luxury Restroom Rentals
            </span>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat text-[clamp(2.8rem,10vw,9rem)] font-black uppercase leading-[0.9] mb-8 tracking-tight"
          >
            Not Your
            <br />
            Average
            <br />
            <span className="text-[#D4AF37] relative">
              Porta-Potty
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 bg-[#D4AF37]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            Your guests came for the party. <span className="text-white font-semibold">Give them a restroom that matches.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="#book" className="group relative bg-[#D4AF37] hover:bg-[#e8c54a] text-black font-montserrat text-base sm:text-lg font-black uppercase tracking-widest px-14 py-6 transition-all cursor-pointer inline-flex items-center justify-center gap-3" style={{ animation: 'pulse-gold 3s infinite' }}>
              Book the Upgrade <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#the-problem" className="border-2 border-white/30 hover:border-[#D4AF37] text-white/80 hover:text-[#D4AF37] font-montserrat text-base sm:text-lg uppercase tracking-widest px-14 py-6 transition-all cursor-pointer inline-flex items-center justify-center gap-3">
              See the Difference
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#D4AF37]/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1 bg-[#D4AF37] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          BEFORE / AFTER — The Confrontation
         ══════════════════════════════════════════════════ */}
      <section id="the-problem" className="py-0">
        {/* Section header */}
        <div className="border-y-4 border-[#D4AF37] py-6 bg-[#D4AF37]/5">
          <FadeIn>
            <h2 className="font-montserrat text-3xl sm:text-5xl font-black uppercase text-center tracking-tight">
              Let&apos;s Be <span className="text-[#D4AF37]">Honest</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* LEFT — Standard Rental (ugly) */}
          <motion.div {...slideFromLeft} className="relative overflow-hidden group">
            <img src={IMG.portapotty} alt="Standard porta potty rental" className="w-full h-full object-cover min-h-[400px] opacity-60 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-red-400 mb-3 font-bold">Standard Rental</span>
              <h3 className="font-montserrat text-3xl sm:text-4xl font-black uppercase mb-4">This Is What<br />They&apos;ll Remember</h3>
              <ul className="space-y-3">
                {['No climate control', 'Chemical smell', 'Zero privacy', 'Embarrassing for guests', 'Kills the vibe'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-inter text-sm text-white/60">
                    <X size={16} className="text-red-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Diagonal REJECT stamp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none">
              <span className="font-montserrat text-6xl sm:text-8xl font-black uppercase text-red-500/20 tracking-widest">NOPE</span>
            </div>
          </motion.div>

          {/* RIGHT — Pretty Potty (luxurious) */}
          <motion.div {...slideFromRight} className="relative overflow-hidden group">
            <img src={IMG.bath2} alt="Pretty Potty luxury restroom" className="w-full h-full object-cover min-h-[400px] opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 border-4 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-3 font-bold">Pretty Potty</span>
              <h3 className="font-montserrat text-3xl sm:text-4xl font-black uppercase mb-4">This Is What<br />They <span className="text-[#D4AF37]">Deserve</span></h3>
              <ul className="space-y-3">
                {['68°F climate controlled', 'Luxury fragrance & fresh flowers', 'Complete privacy & sound insulation', 'Guests actually compliment you', 'Elevates the entire event'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-inter text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom challenge bar */}
        <div className="bg-[#D4AF37] py-5 px-6">
          <FadeIn>
            <p className="font-montserrat text-base sm:text-lg font-black uppercase text-center text-black tracking-widest">
              Which one would YOU want at YOUR event?
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BIG STATS — Numbers That Hit Hard
         ══════════════════════════════════════════════════ */}
      <section id="stats" className="py-28 px-6 border-b-4 border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 text-center font-bold">By the Numbers</p>
            <h2 className="font-montserrat text-4xl sm:text-6xl font-black uppercase text-center mb-6 tracking-tight">
              Built <span className="text-[#D4AF37]">Different</span>
            </h2>
            <p className="font-inter text-lg text-white/40 text-center max-w-2xl mx-auto mb-20">
              Every unit is engineered to deliver a five-star experience. No compromises. No exceptions.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '68°F', label: 'Climate Controlled', sub: 'Year-round comfort', icon: <Thermometer size={28} /> },
              { num: '5-Star', label: 'Guest Rated', sub: 'Across 500+ events', icon: <Star size={28} /> },
              { num: '30min', label: 'Full Setup', sub: 'We handle everything', icon: <Clock size={28} /> },
              { num: '100%', label: 'Satisfaction', sub: 'Or your money back', icon: <Shield size={28} /> },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="group border-2 border-white/10 hover:border-[#D4AF37] p-10 text-center transition-all duration-500 bg-white/[0.02] hover:bg-[#D4AF37]/5 relative overflow-hidden">
                  {/* Hover fill effect */}
                  <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="text-[#D4AF37] mb-4 flex justify-center">{stat.icon}</div>
                    <p className="font-montserrat text-5xl sm:text-6xl font-black text-white group-hover:text-[#D4AF37] transition-colors mb-3">{stat.num}</p>
                    <p className="font-montserrat text-[11px] tracking-[0.25em] uppercase font-bold text-white/70 mb-1">{stat.label}</p>
                    <p className="font-inter text-sm text-white/30">{stat.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FLEET — Dramatic Cards with Thick Borders
         ══════════════════════════════════════════════════ */}
      <section id="fleet" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 font-bold">The Arsenal</p>
            <h2 className="font-montserrat text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">
              Choose Your <span className="text-[#D4AF37]">Weapon</span>
            </h2>
            <p className="font-inter text-lg text-white/40 mb-20 max-w-2xl">
              Three tiers of luxury. One standard: perfection.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'The Classic',
                sub: '2-Station Powerhouse',
                guests: '150',
                img: IMG.bath1,
                features: ['Climate Control', 'Running Hot Water', 'LED Vanity Mirrors', 'Porcelain Fixtures', 'Bluetooth Sound'],
                tag: '',
                price: 'Starting at',
              },
              {
                name: 'The Grand Estate',
                sub: '4-Station Beast',
                guests: '250',
                img: IMG.bath2,
                features: ['Granite Countertops', 'Chandelier Lighting', 'Premium Vanities', 'Full-Length Mirrors', 'Luxury Toiletries'],
                tag: 'MOST BOOKED',
                price: 'Most Popular',
              },
              {
                name: 'The Royal Suite',
                sub: '6-Station Empire',
                guests: '400',
                img: IMG.bath6,
                features: ['Bridal Suite Option', 'Attendant Station', 'Dual Climate Zones', 'Sound System', 'VIP Amenities'],
                tag: 'TOP TIER',
                price: 'Premium',
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group relative bg-black border-2 border-white/10 hover:border-[#D4AF37] overflow-hidden transition-all duration-500">
                  {/* Tag */}
                  {t.tag && (
                    <div className="absolute top-0 right-0 z-10 bg-[#D4AF37] text-black font-montserrat text-[10px] tracking-[0.2em] uppercase font-black px-5 py-2">
                      {t.tag}
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    {/* Guest count overlay */}
                    <div className="absolute bottom-4 left-4 bg-black/80 border border-[#D4AF37]/50 px-4 py-2">
                      <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold flex items-center gap-2">
                        <Users size={14} /> Up to {t.guests} guests
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 border-t-2 border-[#D4AF37]/20">
                    <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-1 font-bold">{t.sub}</p>
                    <h3 className="font-montserrat text-2xl font-black uppercase mb-6">{t.name}</h3>
                    <ul className="space-y-3 mb-8">
                      {t.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-inter text-white/60">
                          <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#book" className="block text-center bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-montserrat text-[12px] tracking-[0.2em] uppercase font-black py-5 transition-all cursor-pointer">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DRAMATIC IMAGE BREAK — Full Bleed with Overlay
         ══════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={IMG.hero3} alt="" className="w-full h-full object-cover opacity-40" style={{ animation: 'kenburns 25s ease-in-out infinite' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div {...slideFromLeft}>
              <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 font-bold">Real Talk</p>
              <h2 className="font-montserrat text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 max-w-3xl tracking-tight">
                Your Event Is Only
                <br />
                As Good As Its
                <br />
                <span className="text-[#D4AF37]">Worst Detail</span>
              </h2>
              <p className="font-inter text-lg text-white/50 max-w-xl mb-8">
                Nobody posts about great food but terrible restrooms. Don&apos;t let a porta-potty ruin a $50,000 event.
              </p>
              <a href="#book" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-montserrat text-sm font-black uppercase tracking-widest px-10 py-5 hover:bg-[#e8c54a] transition-all cursor-pointer">
                Fix That Now <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GALLERY — Full Bleed Grid
         ══════════════════════════════════════════════════ */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 font-bold">See for Yourself</p>
            <h2 className="font-montserrat text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
              The <span className="text-[#D4AF37]">Proof</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { src: IMG.bath1, span: 'md:col-span-2 md:row-span-2', label: 'Interior Detail' },
              { src: IMG.wedding1, span: '', label: 'Wedding Setup' },
              { src: IMG.bath4, span: '', label: 'Vanity Station' },
              { src: IMG.bath5, span: '', label: 'Fixtures' },
              { src: IMG.wedding2, span: '', label: 'Event Ready' },
              { src: IMG.outdoor1, span: 'md:col-span-2', label: 'Outdoor Setup' },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.06} className={img.span}>
                <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden group cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-bold">{img.label}</span>
                  </div>
                  {/* Gold corner accents on hover */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          REVIEWS — Bold Testimonials
         ══════════════════════════════════════════════════ */}
      <section id="reviews" className="py-28 px-6 border-y-4 border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 text-center font-bold">Don&apos;t Take Our Word For It</p>
            <h2 className="font-montserrat text-4xl sm:text-6xl font-black uppercase text-center tracking-tight mb-20">
              They <span className="text-[#D4AF37]">Said It</span>
            </h2>
          </FadeIn>

          <ScaleIn>
            <div className="relative bg-white/[0.02] border-2 border-white/10 p-10 sm:p-16">
              {/* Big quotation mark */}
              <div className="absolute -top-8 left-8 sm:left-16">
                <span className="font-montserrat text-[120px] font-black text-[#D4AF37]/10 leading-none">&ldquo;</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 justify-center mb-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#D4AF37] text-[#D4AF37]" />)}
              </div>

              {[
                { q: "Pretty Potty transformed our wedding. Guests kept saying the restrooms were nicer than their own bathrooms at home. That's not a joke.", name: 'Sarah & James K.', event: 'Hamptons Wedding, 300 Guests' },
                { q: "I run events for a living. Pretty Potty is the only vendor where guests actively seek me out to say how impressed they were. That NEVER happens with restrooms.", name: 'Michael R.', event: 'Corporate Gala, Midtown NYC' },
                { q: "We almost went with standard porta-potties. Thank God we didn't. The LED lighting, the music, the hot water — it was like a luxury hotel dropped into our backyard.", name: 'Emily & David L.', event: 'Garden Wedding, Nassau County' },
              ].map((r, i) => (
                i === testimonial && (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <p className="font-inter text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-white/80 mb-12 text-center">&ldquo;{r.q}&rdquo;</p>
                    <div className="text-center">
                      <p className="font-montserrat text-[12px] tracking-[0.25em] uppercase text-[#D4AF37] font-black">{r.name}</p>
                      <p className="font-inter text-sm text-white/30 mt-2">{r.event}</p>
                    </div>
                  </motion.div>
                )
              ))}

              {/* Dots */}
              <div className="flex justify-center gap-4 mt-12">
                {[0, 1, 2].map(i => (
                  <button key={i} onClick={() => setTestimonial(i)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${i === testimonial ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-white/10 hover:bg-white/30'}`} />
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQ — Bold Accordion
         ══════════════════════════════════════════════════ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-montserrat text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 text-center font-bold">Still Skeptical?</p>
            <h2 className="font-montserrat text-4xl sm:text-6xl font-black uppercase text-center tracking-tight mb-20">
              We Get <span className="text-[#D4AF37]">Questions</span>
            </h2>
          </FadeIn>

          {[
            { q: 'How much does it actually cost?', a: "Let's cut the BS — pricing depends on the trailer, event duration, and your location. Our 2-Station Classic is competitively priced and delivers 10x the experience of a standard rental. Contact us for a straight answer within 2 hours." },
            { q: 'How far ahead should I book?', a: "Yesterday. Seriously though, 4-8 weeks minimum. Peak season (May-October) dates vanish fast. We've had to turn away brides who waited too long. Don't be that person." },
            { q: "What's included? What's the catch?", a: "No catch. Everything: climate control, hot & cold running water, LED lighting, Bluetooth speakers, premium toiletries, hand towels, plus professional delivery, setup, on-site maintenance, and removal. You literally do nothing." },
            { q: 'Do you need special power or water hookups?', a: "A standard 20-amp outlet and water spigot within 100 feet. That's it. No hookups at all? We bring generators and freshwater tanks. We've set up on beaches, in forests, on rooftops. We figure it out." },
            { q: 'Where do you actually deliver?', a: "All of NYC, Long Island, The Hamptons, Westchester, Connecticut, and New Jersey. If you're within 100 miles of Manhattan, we'll make it work. Delivery fees may apply beyond 25 miles." },
            { q: "What if something goes wrong during the event?", a: "It won't. But if it did, we offer optional on-site attendants who monitor everything in real time. In 500+ events, we've had zero service failures. Zero." },
          ].map((f, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className={`border-2 mb-3 transition-all duration-300 ${faqOpen === i ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-white/10 hover:border-white/20'}`}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group">
                  <span className={`font-montserrat text-sm sm:text-base uppercase font-bold tracking-wide pr-4 transition-colors ${faqOpen === i ? 'text-[#D4AF37]' : 'text-white/80 group-hover:text-[#D4AF37]'}`}>{f.q}</span>
                  <ChevronDown className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="font-inter text-sm sm:text-base text-white/50 leading-relaxed px-6 pb-6">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — Gold Banner, Final Push
         ══════════════════════════════════════════════════ */}
      <section id="book" className="relative overflow-hidden">
        {/* Gold background */}
        <div className="bg-[#D4AF37] py-20 sm:py-28 px-6 relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 80px)' }} />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="font-montserrat text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-black tracking-tight leading-[0.95] mb-6">
                Stop Settling.
                <br />
                Book the
                <br />
                Upgrade.
              </h2>
              <p className="font-inter text-lg sm:text-xl text-black/60 max-w-xl mx-auto mb-12">
                Join 500+ events that refused to compromise. Get your personalized quote in under 2 hours — guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="mailto:info@prettypottyny.com" className="group bg-black hover:bg-white text-[#D4AF37] hover:text-black font-montserrat text-base sm:text-lg font-black uppercase tracking-widest px-14 py-6 transition-all cursor-pointer inline-flex items-center justify-center gap-3">
                  Get Your Free Quote <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="tel:+15165551234" className="border-2 border-black text-black hover:bg-black hover:text-[#D4AF37] font-montserrat text-base sm:text-lg font-black uppercase tracking-wider px-14 py-6 transition-all cursor-pointer inline-flex items-center justify-center gap-3">
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER — Thick Borders, Bold Typography
         ══════════════════════════════════════════════════ */}
      <footer className="bg-black border-t-4 border-[#D4AF37] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="font-montserrat text-2xl font-black uppercase mb-4">
              Pretty <span className="text-[#D4AF37]">Potty</span>
            </p>
            <p className="font-inter text-sm text-white/30 leading-relaxed mb-6">
              NYC&apos;s most unapologetically luxurious mobile restroom company.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all cursor-pointer">
                <Globe size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white/40 hover:text-[#D4AF37] transition-all cursor-pointer">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 font-bold">Navigate</p>
            {['Fleet', 'Gallery', 'Reviews', 'FAQ', 'Get a Quote'].map(l => (
              <a key={l} href={`#${l === 'Get a Quote' ? 'book' : l.toLowerCase()}`}
                className="block font-montserrat text-sm uppercase tracking-wider text-white/30 hover:text-[#D4AF37] py-2 transition-colors cursor-pointer font-semibold">
                {l}
              </a>
            ))}
          </div>

          {/* Service Areas */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 font-bold">We Roll Up To</p>
            {['Manhattan & All NYC', 'Long Island', 'The Hamptons', 'Westchester', 'Connecticut', 'New Jersey'].map(a => (
              <p key={a} className="font-inter text-sm text-white/30 py-2 flex items-center gap-2">
                <MapPin size={12} className="text-[#D4AF37]/50" /> {a}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 font-bold">Hit Us Up</p>
            <a href="tel:+15165551234" className="flex items-center gap-3 py-2 text-white/30 hover:text-[#D4AF37] transition-colors cursor-pointer">
              <Phone size={16} className="text-[#D4AF37]/60" />
              <span className="font-inter text-sm">(516) 555-1234</span>
            </a>
            <a href="mailto:info@prettypottyny.com" className="flex items-center gap-3 py-2 text-white/30 hover:text-[#D4AF37] transition-colors cursor-pointer">
              <Mail size={16} className="text-[#D4AF37]/60" />
              <span className="font-inter text-sm">info@prettypottyny.com</span>
            </a>
            <div className="flex items-center gap-3 py-2 text-white/30">
              <MapPin size={16} className="text-[#D4AF37]/60" />
              <span className="font-inter text-sm">Long Island, New York</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-xs text-white/20 uppercase tracking-wider">&copy; 2026 Pretty Potty Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-montserrat text-xs text-white/20 hover:text-[#D4AF37] transition-colors cursor-pointer uppercase tracking-wider">Privacy</a>
            <a href="#" className="font-montserrat text-xs text-white/20 hover:text-[#D4AF37] transition-colors cursor-pointer uppercase tracking-wider">Terms</a>
          </div>
        </div>
      </footer>

      {/* ── Mobile Sticky CTA ── */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-black/95 backdrop-blur-xl border-t-2 border-[#D4AF37] px-4 py-3 flex gap-3 z-50">
        <a href="#book" className="flex-[3] bg-[#D4AF37] text-black font-montserrat text-[12px] font-black uppercase tracking-widest py-4 text-center cursor-pointer">
          Book the Upgrade
        </a>
        <a href="tel:+15165551234" className="flex-1 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center cursor-pointer">
          <Phone size={20} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  )
}
