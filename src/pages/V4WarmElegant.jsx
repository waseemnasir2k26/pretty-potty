import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ArrowRight, ChevronDown, Heart, Menu, X, Users, CheckCircle2, Clock, Shield, Sparkles, Globe, Share2, Leaf, Calendar, Award } from 'lucide-react'
import { FadeIn, ScaleIn, IMG } from '../components/shared'

export default function V4WarmElegant() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const [activeStory, setActiveStory] = useState(0)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Load Cormorant Garamond font
  useEffect(() => {
    if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  const cormorant = { fontFamily: '"Cormorant Garamond", serif' }

  return (
    <div className="bg-[#FEFDFB] text-[#0D3B2E] min-h-screen">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FEFDFB]/95 backdrop-blur-xl shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="text-2xl font-bold" style={cormorant}>
            Pretty <span className="text-[#D4C5A0]">Potty</span>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {['About', 'Collection', 'Gallery', 'Love Stories', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#0D3B2E]/50 hover:text-[#0D3B2E] transition-colors">
                {l}
              </a>
            ))}
            <a href="#book" className="bg-[#D4C5A0] hover:bg-[#c4b590] text-[#0D3B2E] font-inter text-[11px] tracking-[0.15em] uppercase font-semibold px-7 py-3 rounded-full transition-all">
              Plan My Event
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#0D3B2E] cursor-pointer">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FEFDFB] border-t border-[#0D3B2E]/5 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {['About', 'Collection', 'Gallery', 'Love Stories', 'FAQ'].map(l => (
                  <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="block font-inter text-sm text-[#0D3B2E]/70 hover:text-[#0D3B2E]">
                    {l}
                  </a>
                ))}
                <a href="#book" onClick={() => setMenuOpen(false)}
                  className="block bg-[#D4C5A0] text-[#0D3B2E] font-inter text-sm font-semibold px-6 py-3 rounded-full text-center">
                  Plan My Event
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.wedding3} alt="Elegant wedding celebration"
            className="w-full h-full object-cover"
            style={{ animation: 'kenburns 25s ease-in-out infinite' }} />
          <div className="absolute inset-0 bg-[#0D3B2E]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D3B2E]/20 via-transparent to-[#0D3B2E]/50" />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-[#D4C5A0]/10 mix-blend-multiply" />
        </div>

        {/* Floating botanicals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i}
              className="absolute text-[#D4C5A0]/20"
              style={{ left: `${10 + i * 20}%`, top: `${15 + i * 12}%` }}
              animate={{ y: [-10, 10], rotate: [-5, 5], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
            >
              <Leaf size={20 + i * 6} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-8 border border-white/20 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm"
          >
            <Heart size={12} className="text-[#D4C5A0] fill-[#D4C5A0]" />
            <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/80">Now Booking 2026 Celebrations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] mb-8 text-white"
            style={cormorant}
          >
            Where Luxury
            <br />
            Meets <em className="italic text-[#D4C5A0]">Convenience</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Premium mobile restrooms designed for New York's most beautiful celebrations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#book" className="group bg-[#D4C5A0] hover:bg-[#c4b590] text-[#0D3B2E] font-inter text-sm font-semibold px-10 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer">
              Plan My Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#collection" className="border border-white/30 hover:border-[#D4C5A0] text-white hover:text-[#D4C5A0] font-inter text-sm px-10 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer">
              View Collection
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-[#D4C5A0]/60" size={28} />
        </motion.div>
      </section>

      {/* ── ROMANTIC INTRO ── */}
      <section id="about" className="py-28 px-6 bg-[#F0EDE6]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  >
                    <Heart size={14} className="text-[#D4C5A0] fill-[#D4C5A0]" />
                  </motion.div>
                ))}
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-8 leading-tight" style={cormorant}>
              Every Detail of Your Celebration
              <br />
              <em className="italic text-[#0D3B2E]/70">Deserves to Be Beautiful</em>
            </h2>
            <p className="font-inter text-lg text-[#0D3B2E]/50 max-w-2xl mx-auto leading-relaxed mb-8">
              From the ceremony to the dance floor, your guests expect nothing but the best. Our luxury mobile restrooms bring the elegance of a five-star hotel to any venue, any setting, any dream you can imagine.
            </p>
            <div className="w-16 h-px bg-[#D4C5A0] mx-auto" />
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: '500+', label: 'Events Celebrated' },
                { val: '4.9', label: 'Star Rating' },
                { val: '2hr', label: 'Response Time' },
                { val: '100%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-semibold text-[#0D3B2E] mb-1" style={cormorant}>{s.val}</p>
                  <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-[#0D3B2E]/40">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES (2-col with large image) ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden">
                <img src={IMG.bath2} alt="Luxury restroom interior"
                  className="w-full h-[500px] lg:h-[600px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/10 mix-blend-multiply" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#D4C5A0] text-[#D4C5A0]" />)}
                  </div>
                  <p className="font-inter text-xs text-[#0D3B2E]/60 mt-1">Rated #1 in NYC</p>
                </div>
              </div>
            </FadeIn>

            {/* Text side */}
            <FadeIn direction="right">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">Why Pretty Potty</p>
              <h2 className="text-4xl sm:text-5xl mb-8 leading-tight" style={cormorant}>
                Luxury That Your <em className="italic">Guests Will Remember</em>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <Sparkles size={20} />, title: 'Climate Controlled Comfort', desc: 'Heated in winter, air-conditioned in summer. Your guests stay comfortable regardless of the season.' },
                  { icon: <Award size={20} />, title: 'Five-Star Amenities', desc: 'Hot running water, granite countertops, porcelain fixtures, LED vanity mirrors, and premium toiletries.' },
                  { icon: <Shield size={20} />, title: 'Impeccable Service', desc: 'White-glove delivery, professional setup, optional attendants, and spotless maintenance throughout your event.' },
                  { icon: <Clock size={20} />, title: 'Seamless Experience', desc: 'We handle every detail so you can focus on what matters most: celebrating your special day.' },
                ].map((f, i) => (
                  <motion.div key={i} className="flex gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D3B2E]/5 flex items-center justify-center text-[#0D3B2E]/60">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1" style={cormorant}>{f.title}</h3>
                      <p className="font-inter text-sm text-[#0D3B2E]/45 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FLEET / COLLECTION ── */}
      <section id="collection" className="py-28 px-6 bg-[#0D3B2E]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">Our Collection</p>
              <h2 className="text-5xl sm:text-6xl text-white mb-4" style={cormorant}>
                The <em className="italic text-[#D4C5A0]">Fleet</em>
              </h2>
              <p className="font-inter text-white/40 max-w-xl mx-auto">
                Each trailer in our collection has been designed with the elegance and warmth your event deserves.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'The Rosemary',
                sub: '2-Station Trailer',
                guests: '150',
                img: IMG.bath1,
                features: ['Climate Control', 'Running Hot Water', 'LED Vanity Mirrors', 'Fresh Floral Scent'],
                tag: '',
              },
              {
                name: 'The Gardenia',
                sub: '4-Station Trailer',
                guests: '250',
                img: IMG.bath2,
                features: ['Granite Countertops', 'Bluetooth Speakers', 'Chandelier Lighting', 'Premium Vanities'],
                tag: 'Bride\'s Favorite',
              },
              {
                name: 'The Magnolia',
                sub: '6-Station Trailer',
                guests: '400',
                img: IMG.bath6,
                features: ['Bridal Suite Option', 'Attendant Station', 'Full-Length Mirrors', 'Luxury Toiletries'],
                tag: 'Grand Events',
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06] hover:border-[#D4C5A0]/30 transition-all duration-500">
                  {t.tag && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#D4C5A0] text-[#0D3B2E] font-inter text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 rounded-full">
                        {t.tag}
                      </span>
                    </div>
                  )}
                  <div className="relative h-64 overflow-hidden">
                    <img src={t.img} alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B2E] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-[#D4C5A0]/5 mix-blend-multiply" />
                    {t.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#D4C5A0] text-[#0D3B2E] font-inter text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 rounded-full">
                          {t.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-[#D4C5A0]/60 mb-1">{t.sub}</p>
                    <h3 className="text-2xl text-white mb-2" style={cormorant}><em>{t.name}</em></h3>
                    <p className="font-inter text-sm text-white/35 mb-6 flex items-center gap-2">
                      <Users size={14} className="text-[#D4C5A0]/50" /> Up to {t.guests} guests
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {t.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-inter text-white/45">
                          <CheckCircle2 size={14} className="text-[#D4C5A0]/50 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#book" className="block text-center border border-[#D4C5A0]/30 hover:bg-[#D4C5A0] hover:text-[#0D3B2E] text-[#D4C5A0] font-inter text-[11px] tracking-[0.15em] uppercase font-semibold py-4 rounded-full transition-all cursor-pointer">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY (Editorial Grid) ── */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">Portfolio</p>
              <h2 className="text-5xl sm:text-6xl mb-4" style={cormorant}>
                Moments of <em className="italic">Elegance</em>
              </h2>
              <p className="font-inter text-[#0D3B2E]/45 max-w-lg mx-auto">
                A glimpse into the celebrations we've had the honor of being part of.
              </p>
            </div>
          </FadeIn>

          {/* Editorial masonry-like grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
            <FadeIn delay={0} className="col-span-2 md:col-span-7">
              <div className="relative h-72 md:h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
                <img src={IMG.wedding1} alt="Elegant wedding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/0 group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D3B2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-inter text-sm">Garden Wedding, The Hamptons</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="col-span-1 md:col-span-5">
              <div className="relative h-72 md:h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
                <img src={IMG.wedding2} alt="Wedding celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/0 group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D3B2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-inter text-sm">Estate Reception, Westchester</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="col-span-1 md:col-span-4">
              <div className="relative h-60 md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer">
                <img src={IMG.bath1} alt="Luxury interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/0 group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D3B2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-inter text-sm">Interior Detail</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="col-span-1 md:col-span-4">
              <div className="relative h-60 md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer">
                <img src={IMG.wedding4} alt="Outdoor event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/0 group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D3B2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-inter text-sm">Vineyard Wedding, Long Island</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25} className="col-span-2 md:col-span-4">
              <div className="relative h-60 md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer">
                <img src={IMG.bath6} alt="Premium fixtures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#D4C5A0]/0 group-hover:bg-[#D4C5A0]/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D3B2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-inter text-sm">Premium Fixtures</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── LOVE STORIES (Testimonials) ── */}
      <section id="love-stories" className="py-28 px-6 bg-[#F0EDE6]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Heart size={24} className="text-[#D4C5A0] fill-[#D4C5A0]" />
              </div>
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">Testimonials</p>
              <h2 className="text-5xl sm:text-6xl" style={cormorant}>
                Love <em className="italic">Stories</em>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn>
            <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-sm">
              {/* Hearts decoration */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={16} className="text-[#D4C5A0] fill-[#D4C5A0]" />
                ))}
              </div>

              {[
                {
                  q: "Our guests couldn't stop talking about the restrooms! They were more beautiful than many permanent bathrooms. Pretty Potty made our wedding day absolutely perfect.",
                  name: 'Sarah & James K.',
                  event: 'Garden Wedding, The Hamptons',
                  rating: 5,
                },
                {
                  q: "From the chandelier lighting to the hot running water, every detail was exquisite. Pretty Potty understood our vision and delivered beyond our wildest dreams.",
                  name: 'Emily & David L.',
                  event: 'Vineyard Wedding, North Fork',
                  rating: 5,
                },
                {
                  q: "We've used Pretty Potty for three corporate galas now. The level of sophistication and service is unmatched. Our clients always comment on the exceptional experience.",
                  name: 'Michael R.',
                  event: 'Annual Gala, Manhattan',
                  rating: 5,
                },
              ].map((r, i) => (
                i === activeStory && (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} size={16} className="fill-[#D4C5A0] text-[#D4C5A0]" />
                      ))}
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-[#0D3B2E]/70 mb-10" style={cormorant}>
                      <em>"{r.q}"</em>
                    </p>
                    <p className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#0D3B2E] font-semibold">{r.name}</p>
                    <p className="font-inter text-sm text-[#0D3B2E]/40 mt-1">{r.event}</p>
                  </motion.div>
                )
              ))}

              <div className="flex justify-center gap-3 mt-10">
                {[0, 1, 2].map(i => (
                  <button key={i} onClick={() => setActiveStory(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${i === activeStory ? 'w-10 bg-[#D4C5A0]' : 'w-4 bg-[#0D3B2E]/10 hover:bg-[#0D3B2E]/20'}`}
                  />
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">The Process</p>
              <h2 className="text-5xl" style={cormorant}>
                Three Simple <em className="italic">Steps</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#D4C5A0]/30 to-transparent" />

            {[
              { n: '01', title: 'Share Your Vision', desc: 'Tell us about your event -- the date, the venue, the guest count, and the mood you envision. We respond within 2 hours.' },
              { n: '02', title: 'Choose Your Match', desc: 'Browse our collection and select the trailer that speaks to your style. We will recommend the perfect fit for your celebration.' },
              { n: '03', title: 'Celebrate Freely', desc: 'We deliver, set up, maintain, and remove. You never think about a single detail. Just enjoy your beautiful day.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full border-2 border-[#D4C5A0]/20 flex items-center justify-center mx-auto mb-8 bg-[#F0EDE6]/50 relative">
                    <span className="text-3xl font-light text-[#0D3B2E]" style={cormorant}>{s.n}</span>
                    {/* Small heart accent */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                      <Heart size={10} className="text-[#D4C5A0] fill-[#D4C5A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3" style={cormorant}>{s.title}</h3>
                  <p className="font-inter text-sm text-[#0D3B2E]/40 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-28 px-6 bg-[#F0EDE6]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#D4C5A0] mb-4">Questions</p>
              <h2 className="text-5xl" style={cormorant}>
                Frequently <em className="italic">Asked</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-2">
            {[
              { q: 'How much does a luxury restroom rental cost?', a: 'Pricing depends on the trailer model, event duration, and location. Our 2-Station Rosemary starts at competitive rates for the luxury segment. Contact us for a personalized quote -- we respond within 2 hours with full details.' },
              { q: 'How far in advance should we book?', a: 'We recommend booking 4-8 weeks ahead, especially during peak wedding season (May through October). For Saturday dates in summer, earlier is always better. We will do our best to accommodate last-minute requests.' },
              { q: 'What is included in the rental?', a: 'Everything you need for a flawless experience: climate control, hot and cold running water, LED lighting, Bluetooth speakers, premium toiletries, fresh hand towels, plus professional delivery, setup, maintenance, and removal.' },
              { q: 'What power and water connections do you need on site?', a: 'A standard 20-amp electrical outlet and a water spigot within 100 feet. We bring all extension cords and hoses. No hookups available? No problem -- we offer generators and freshwater tanks as add-ons.' },
              { q: 'Do you serve areas outside of Long Island?', a: 'Absolutely! We proudly serve The Hamptons, Westchester, all five NYC boroughs, Connecticut, and New Jersey. A small delivery surcharge may apply for locations beyond 25 miles from our base.' },
              { q: 'Can the trailer be customized for our wedding theme?', a: 'Yes! We offer floral arrangements, custom signage, matching toiletry packaging, and lighting color adjustments. Share your wedding palette and we will make the restroom feel like a seamless extension of your celebration.' },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl overflow-hidden">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer group">
                    <span className="font-inter font-medium text-[#0D3B2E]/80 group-hover:text-[#0D3B2E] transition-colors pr-4">{f.q}</span>
                    <ChevronDown className={`text-[#D4C5A0] shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="font-inter text-sm text-[#0D3B2E]/45 leading-relaxed px-6 pb-6">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK YOUR DATE CTA ── */}
      <section id="book" className="py-32 px-6 relative overflow-hidden bg-[#0D3B2E]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4C5A0]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4C5A0]/5 rounded-full translate-x-1/3 translate-y-1/3" />
          {/* Floating hearts */}
          {[...Array(6)].map((_, i) => (
            <motion.div key={i}
              className="absolute text-[#D4C5A0]/10"
              style={{ left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [-15, 15], opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
            >
              <Heart size={16 + i * 4} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <Calendar size={28} className="text-[#D4C5A0]" />
            </div>
            <h2 className="text-5xl sm:text-6xl text-white mb-6" style={cormorant}>
              Book Your <em className="italic text-[#D4C5A0]">Date</em>
            </h2>
            <p className="font-inter text-lg text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
              Your celebration deserves every beautiful detail. Let us bring luxury and warmth to your most cherished moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@prettypottyny.com"
                className="group bg-[#D4C5A0] hover:bg-[#c4b590] text-[#0D3B2E] font-inter text-sm font-semibold px-12 py-5 rounded-full transition-all cursor-pointer inline-flex items-center justify-center gap-3">
                Plan My Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+15165551234"
                className="border border-white/20 hover:border-[#D4C5A0] text-white/70 hover:text-[#D4C5A0] font-inter text-sm px-12 py-5 rounded-full transition-all cursor-pointer inline-flex items-center justify-center gap-3">
                <Phone size={16} /> (516) 555-1234
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D3B2E] border-t border-white/[0.05] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <p className="text-xl text-white mb-4" style={cormorant}>Pretty <span className="text-[#D4C5A0]">Potty</span></p>
            <p className="font-inter text-sm text-white/30 leading-relaxed">
              Luxury mobile restrooms for New York's most beautiful celebrations.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 hover:border-[#D4C5A0] flex items-center justify-center text-white/40 hover:text-[#D4C5A0] transition-all cursor-pointer">
                <Globe size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 hover:border-[#D4C5A0] flex items-center justify-center text-white/40 hover:text-[#D4C5A0] transition-all cursor-pointer">
                <Share2 size={16} />
              </a>
            </div>
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#D4C5A0] mb-4">Explore</p>
            {['Collection', 'Gallery', 'Love Stories', 'FAQ', 'Plan My Event'].map(l => (
              <a key={l} href="#" className="block font-inter text-sm text-white/30 hover:text-[#D4C5A0] py-1.5 transition-colors cursor-pointer">{l}</a>
            ))}
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#D4C5A0] mb-4">Service Areas</p>
            {['Suffolk County', 'Nassau County', 'The Hamptons', 'Westchester', 'NYC Boroughs', 'Connecticut', 'New Jersey'].map(a => (
              <p key={a} className="font-inter text-sm text-white/30 py-1.5 flex items-center gap-2">
                <MapPin size={10} className="text-[#D4C5A0]/40" /> {a}
              </p>
            ))}
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#D4C5A0] mb-4">Contact</p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1.5">
              <Phone size={14} className="text-[#D4C5A0]/50" /> (516) 555-1234
            </p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1.5">
              <Mail size={14} className="text-[#D4C5A0]/50" /> info@prettypottyny.com
            </p>
            <p className="font-inter text-sm text-white/30 flex items-center gap-2 py-1.5">
              <MapPin size={14} className="text-[#D4C5A0]/50" /> Long Island, New York
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/20">&copy; 2026 Pretty Potty Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-xs text-white/20 hover:text-[#D4C5A0] transition-colors cursor-pointer">Privacy</a>
            <a href="#" className="font-inter text-xs text-white/20 hover:text-[#D4C5A0] transition-colors cursor-pointer">Terms</a>
            <span className="font-inter text-xs text-white/10">Designed with <Heart size={10} className="inline text-[#D4C5A0] fill-[#D4C5A0]" /> in NYC</span>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-[#FEFDFB]/95 backdrop-blur-xl border-t border-[#0D3B2E]/5 px-4 py-3 flex gap-3 z-50">
        <a href="#book" className="flex-[3] bg-[#D4C5A0] text-[#0D3B2E] font-inter text-[11px] font-semibold uppercase tracking-wider py-3.5 rounded-full text-center cursor-pointer">
          Plan My Event
        </a>
        <a href="tel:+15165551234" className="flex-1 border border-[#0D3B2E]/10 text-[#0D3B2E] flex items-center justify-center rounded-full cursor-pointer">
          <Phone size={18} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
