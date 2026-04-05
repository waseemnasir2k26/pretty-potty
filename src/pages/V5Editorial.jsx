import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  Phone, Mail, MapPin, Star, ArrowRight, ChevronDown, ChevronUp,
  Menu, X, Users, CheckCircle2, Clock, Shield, Sparkles,
  Droplets, Thermometer, Volume2, Lock, Globe, Share2, ArrowUpRight,
  Wifi, Sun, Music, Eye
} from 'lucide-react'
import { FadeIn, ScaleIn, IMG } from '../components/shared'

export default function V5Editorial() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const [activeReview, setActiveReview] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  const heroTextParallax = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p + 1) % reviews.length), 6000)
    return () => clearInterval(t)
  }, [])

  const colors = {
    midnight: '#0F1B3D',
    rose: '#B76E79',
    white: '#FFFFFF',
    blush: '#E8C4C4',
    roseDark: '#9A5A64',
    midnightLight: '#1A2A52',
    midnightDeep: '#0A1229',
  }

  const navLinks = ['Fleet', 'About', 'Gallery', 'Press', 'FAQ']

  const fleet = [
    {
      name: 'The Classique',
      sub: '2-Station Restroom',
      guests: '150',
      img: IMG.bath1,
      features: ['Climate Control', 'Running Hot Water', 'LED Vanity Mirrors', 'Porcelain Fixtures'],
      editorial: 'Understated elegance for intimate affairs.',
    },
    {
      name: 'The Grand Salon',
      sub: '4-Station Restroom',
      guests: '250',
      img: IMG.bath2,
      features: ['Granite Countertops', 'Bluetooth Sound', 'Chandelier Lighting', 'Premium Vanities'],
      editorial: 'Where form meets function in exquisite balance.',
      featured: true,
    },
    {
      name: 'The Maison Suite',
      sub: '6-Station Restroom',
      guests: '400',
      img: IMG.bath6,
      features: ['Bridal Suite Option', 'Attendant Station', 'Full-Length Mirrors', 'Luxury Toiletries'],
      editorial: 'The definitive statement in mobile luxury.',
    },
  ]

  const reviews = [
    {
      q: "Pretty Potty made our event feel like it belonged in the pages of Architectural Digest. Every detail was considered, every surface immaculate.",
      name: 'Alexandra & Thomas W.',
      event: 'Estate Wedding, The Hamptons',
      pub: 'Featured in The Knot',
    },
    {
      q: "We've produced events for Fortune 100 companies across Manhattan. Pretty Potty is the only vendor that matches our standards without exception.",
      name: 'Marcus Chen',
      event: 'Corporate Gala, The Plaza',
      pub: 'Event Planner Magazine',
    },
    {
      q: "The LED lighting, the temperature control, the Bluetooth speakers playing our playlist. Guests thought it was part of the venue. Extraordinary.",
      name: 'Priya & Raj M.',
      event: 'Garden Ceremony, Westchester',
      pub: 'Brides Magazine Pick',
    },
  ]

  const faqs = [
    { q: 'What is the investment for a luxury restroom rental?', a: 'Our curated collection starts with The Classique at competitive rates scaled to your event. Each quote is bespoke, accounting for trailer selection, duration, location, and seasonal demand. We respond within 2 hours with transparent, detailed pricing.' },
    { q: 'How far in advance should we reserve?', a: 'For peak season events (May through October), we recommend 6-8 weeks. For holiday weekends and prime Hamptons dates, 3 months ensures availability. Off-season events can often be accommodated with 2-3 weeks notice.' },
    { q: 'What amenities are included?', a: 'Every rental includes climate control (heating and A/C), hot and cold running water, LED lighting, Bluetooth speakers, premium toiletries, hand towels, full-length mirrors, plus professional delivery, installation, and removal.' },
    { q: 'What site requirements exist?', a: 'We need a standard 20-amp outlet and water source within 100 feet. For remote locations, we provide generator and fresh water tank packages. Our advance team conducts a complimentary site survey for every booking.' },
    { q: 'Which areas do you serve?', a: 'Our primary territory spans The Hamptons, Nassau and Suffolk Counties, all five NYC boroughs, Westchester, northern New Jersey, and coastal Connecticut. Extended delivery is available throughout the tri-state area.' },
  ]

  const galleryImages = [
    { src: IMG.bath1, span: 'col-span-2 row-span-2', caption: 'The Grand Salon Interior' },
    { src: IMG.wedding1, span: '', caption: 'Estate Wedding Setup' },
    { src: IMG.bath4, span: '', caption: 'Vanity Detail' },
    { src: IMG.bath5, span: 'col-span-2', caption: 'LED Ambient Lighting' },
    { src: IMG.wedding2, span: '', caption: 'Garden Ceremony' },
    { src: IMG.outdoor1, span: '', caption: 'Al Fresco Reception' },
    { src: IMG.bath7, span: 'col-span-2', caption: 'The Maison Suite' },
  ]

  const featureStrip = [
    { icon: <Thermometer size={20} />, label: 'Climate Control' },
    { icon: <Sun size={20} />, label: 'LED Lighting' },
    { icon: <Music size={20} />, label: 'Bluetooth Sound' },
    { icon: <Droplets size={20} />, label: 'Hot & Cold Water' },
    { icon: <Lock size={20} />, label: 'Full Privacy' },
    { icon: <Eye size={20} />, label: 'Full-Length Mirrors' },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');

        .font-editorial { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-garamond { font-family: 'Cormorant Garamond', serif; }

        .editorial-line {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .editorial-line::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: ${colors.rose};
        }

        .editorial-caps {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .diagonal-clip {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        @keyframes editorial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fade-slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rose-glow {
          box-shadow: 0 0 60px ${colors.rose}30, 0 0 120px ${colors.rose}15;
        }

        .editorial-grid-overlay {
          background-image:
            linear-gradient(${colors.rose}08 1px, transparent 1px),
            linear-gradient(90deg, ${colors.rose}08 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .text-rose-gold { color: ${colors.rose}; }
        .bg-rose-gold { background-color: ${colors.rose}; }
        .border-rose-gold { border-color: ${colors.rose}; }
        .bg-midnight { background-color: ${colors.midnight}; }
        .text-midnight { color: ${colors.midnight}; }
        .bg-blush { background-color: ${colors.blush}; }
        .text-blush { color: ${colors.blush}; }
      `}</style>

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'backdrop-blur-xl border-b'
          : ''
      }`} style={{
        backgroundColor: scrolled ? `${colors.midnight}F2` : 'transparent',
        borderColor: scrolled ? `${colors.rose}15` : 'transparent',
      }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
          <a href="#" className="font-editorial text-2xl font-bold text-white tracking-tight">
            Pretty <span style={{ color: colors.rose }}>Potty</span>
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                className="font-body text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors duration-300 relative group">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: colors.rose }} />
              </a>
            ))}
            <a href="#availability"
              className="relative group inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-3.5 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: colors.rose, color: colors.midnight }}>
              <span>Check Availability</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white cursor-pointer">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: colors.midnight }}>
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map(l => (
                  <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">{l}</a>
                ))}
                <a href="#availability" onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.15em] uppercase font-semibold px-8 py-4 cursor-pointer"
                  style={{ backgroundColor: colors.rose, color: colors.midnight }}>
                  Check Availability <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* =====================================================
          HERO - Split Diagonal: Dark left with text, Image right
         ===================================================== */}
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: colors.midnight }}>
        {/* Background grid overlay */}
        <div className="absolute inset-0 editorial-grid-overlay opacity-30" />

        <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            style={{ y: heroTextParallax }}
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 pt-32 pb-16 lg:pt-20 lg:pb-20 relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="editorial-line mb-8">
              <span className="editorial-caps" style={{ color: colors.rose }}>Issue No. 05 / New York</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-editorial text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] text-white mb-8">
              The Restroom{' '}
              <br className="hidden sm:block" />
              Your Event{' '}
              <br />
              <span style={{ color: colors.rose }}>Deserves</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 80 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-[2px] mb-8"
              style={{ backgroundColor: colors.rose }} />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-garamond text-xl sm:text-2xl italic text-white/50 max-w-md leading-relaxed mb-12">
              LED lighting. Climate control. Bluetooth sound. Full privacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 items-center">
              <a href="#availability"
                className="group inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase font-bold px-10 py-5 transition-all duration-300 cursor-pointer rose-glow"
                style={{ backgroundColor: colors.rose, color: '#fff' }}>
                Check Availability
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#fleet"
                className="inline-flex items-center gap-3 border text-white/60 hover:text-white font-body text-[11px] tracking-[0.2em] uppercase px-10 py-5 transition-all duration-300 cursor-pointer"
                style={{ borderColor: `${colors.rose}40` }}>
                Explore Fleet
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16 flex flex-wrap gap-10 border-t pt-8"
              style={{ borderColor: `${colors.rose}15` }}>
              {[
                { val: '500+', label: 'Events Served' },
                { val: '4.9', label: 'Star Rating' },
                { val: '2hr', label: 'Response Time' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-editorial text-3xl font-bold" style={{ color: colors.rose }}>{s.val}</p>
                  <p className="editorial-caps text-white/25 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            style={{ y: heroParallax }}
            className="relative min-h-[50vh] lg:min-h-screen">
            <img
              src={IMG.hero5}
              alt="NYC Skyline"
              className="w-full h-full object-cover"
              style={{ minHeight: '100%' }}
            />
            {/* Diagonal overlay from left */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(105deg, ${colors.midnight} 0%, ${colors.midnight}CC 15%, transparent 45%)`,
            }} />
            {/* Bottom gradient */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to top, ${colors.midnight} 0%, transparent 30%)`,
            }} />
            {/* Rose gold accent line */}
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: `${colors.rose}30` }} />

            {/* Floating editorial badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="absolute bottom-20 right-8 lg:bottom-32 lg:right-12 p-6 backdrop-blur-xl border"
              style={{
                backgroundColor: `${colors.midnight}DD`,
                borderColor: `${colors.rose}20`,
              }}>
              <p className="editorial-caps mb-2" style={{ color: colors.rose }}>Now Booking</p>
              <p className="font-editorial text-3xl font-bold text-white">2026</p>
              <p className="font-body text-xs text-white/30 mt-1">Peak season filling fast</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="editorial-caps text-white/20">Scroll</span>
          <ChevronDown size={20} style={{ color: `${colors.rose}50` }} />
        </motion.div>
      </section>

      {/* =====================================================
          FEATURE STRIP - Rose gold icons on midnight
         ===================================================== */}
      <section className="relative overflow-hidden py-8" style={{ backgroundColor: colors.midnightDeep }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'editorial-marquee 35s linear infinite' }}>
          {[...Array(3)].flatMap(() => featureStrip).map((f, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-10">
              <span style={{ color: colors.rose }}>{f.icon}</span>
              <span className="editorial-caps text-white/40">{f.label}</span>
              <span className="w-1 h-1 rounded-full ml-4" style={{ backgroundColor: `${colors.rose}30` }} />
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          ABOUT - Editorial layout with overlapping image
         ===================================================== */}
      <section id="about" className="relative py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section header with editorial line */}
          <FadeIn>
            <div className="mb-20">
              <div className="flex items-center gap-6 mb-6">
                <div className="h-px flex-1" style={{ backgroundColor: `${colors.midnight}15` }} />
                <span className="editorial-caps" style={{ color: colors.rose }}>The Story</span>
                <div className="h-px flex-1" style={{ backgroundColor: `${colors.midnight}15` }} />
              </div>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Text column */}
            <FadeIn className="lg:col-span-5 lg:pr-12 relative z-10">
              <span className="editorial-caps block mb-4" style={{ color: colors.rose }}>About Pretty Potty</span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8" style={{ color: colors.midnight }}>
                Redefining the{' '}
                <span className="italic font-garamond font-normal" style={{ color: colors.rose }}>portable</span>{' '}
                experience
              </h2>
              <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: colors.rose }} />
              <p className="font-garamond text-xl leading-relaxed mb-6" style={{ color: `${colors.midnight}80` }}>
                In a city that demands perfection, we deliver it. Pretty Potty NYC
                brings hotel-quality restrooms to your outdoor event — complete with
                climate control, hot water, LED lighting, and sound systems that transform
                the ordinary into the extraordinary.
              </p>
              <p className="font-garamond text-xl leading-relaxed mb-10" style={{ color: `${colors.midnight}60` }}>
                Founded on the principle that every detail matters, our fleet of luxury
                mobile restrooms has graced over 500 events across the New York metropolitan
                area — from Hamptons weddings to Manhattan galas.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.rose}15` }}>
                  <Shield size={24} style={{ color: colors.rose }} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold" style={{ color: colors.midnight }}>White-Glove Service</p>
                  <p className="font-body text-sm" style={{ color: `${colors.midnight}50` }}>Delivery, setup, and removal included</p>
                </div>
              </div>
            </FadeIn>

            {/* Image column - overlapping editorial style */}
            <div className="lg:col-span-7 relative">
              <FadeIn delay={0.2}>
                <div className="relative">
                  {/* Main image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <img src={IMG.bath2} alt="Luxury restroom interior"
                      className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  {/* Overlapping accent card */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="absolute -bottom-8 -left-8 lg:-left-16 p-8 max-w-xs border"
                    style={{
                      backgroundColor: colors.midnight,
                      borderColor: `${colors.rose}20`,
                    }}>
                    <p className="font-editorial text-5xl font-bold mb-2" style={{ color: colors.rose }}>500+</p>
                    <p className="font-body text-sm text-white/60">Events across the New York tri-state area</p>
                  </motion.div>

                  {/* Rose gold frame accent */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2"
                    style={{ borderColor: `${colors.rose}40` }} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLEET - Magazine spread style
         ===================================================== */}
      <section id="fleet" className="relative py-32 px-6 lg:px-12" style={{ backgroundColor: colors.midnight }}>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 editorial-grid-overlay opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Editorial section header */}
          <FadeIn>
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px w-16" style={{ backgroundColor: colors.rose }} />
              <span className="editorial-caps" style={{ color: colors.rose }}>The Collection</span>
            </div>
            <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Our <span style={{ color: colors.rose }}>Fleet</span>
            </h2>
            <p className="font-garamond text-xl italic text-white/40 max-w-lg mb-20">
              Three meticulously designed trailers, each an exercise in portable luxury.
            </p>
          </FadeIn>

          {/* Magazine spread cards */}
          <div className="space-y-24">
            {fleet.map((t, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-0 items-stretch ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image side */}
                  <div className={`relative overflow-hidden group ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                    style={{ minHeight: 400 }}>
                    <img src={t.img} alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                      style={{ minHeight: 400 }} />
                    <div className="absolute inset-0" style={{
                      background: i % 2 === 0
                        ? `linear-gradient(to right, transparent 60%, ${colors.midnight})`
                        : `linear-gradient(to left, transparent 60%, ${colors.midnight})`,
                    }} />
                    {t.featured && (
                      <div className="absolute top-6 left-6 px-4 py-2 backdrop-blur-md"
                        style={{ backgroundColor: `${colors.rose}DD` }}>
                        <span className="editorial-caps text-white text-[9px]">Editor's Choice</span>
                      </div>
                    )}
                    {/* Issue number */}
                    <div className="absolute bottom-6 left-6">
                      <span className="font-editorial text-8xl font-bold" style={{ color: `${colors.rose}15` }}>
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-10 lg:p-16 flex flex-col justify-center border ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                    style={{
                      backgroundColor: `${colors.midnightLight}`,
                      borderColor: `${colors.rose}10`,
                    }}>
                    <span className="editorial-caps block mb-3" style={{ color: `${colors.rose}80` }}>{t.sub}</span>
                    <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-3">{t.name}</h3>
                    <p className="font-garamond text-lg italic mb-6" style={{ color: `${colors.rose}80` }}>{t.editorial}</p>

                    <div className="flex items-center gap-3 mb-8 pb-8 border-b" style={{ borderColor: `${colors.rose}10` }}>
                      <Users size={16} style={{ color: colors.rose }} />
                      <span className="font-body text-sm text-white/50">Up to {t.guests} guests</span>
                    </div>

                    <ul className="space-y-3 mb-10">
                      {t.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle2 size={14} style={{ color: colors.rose }} className="shrink-0" />
                          <span className="font-body text-sm text-white/60">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#availability"
                      className="group inline-flex items-center gap-3 border font-body text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-4 transition-all duration-300 w-fit cursor-pointer hover:bg-white/5"
                      style={{ borderColor: `${colors.rose}40`, color: colors.rose }}>
                      Request Details
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY - Editorial masonry
         ===================================================== */}
      <section id="gallery" className="relative py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="flex items-center gap-6 mb-4">
                  <div className="h-px w-16" style={{ backgroundColor: colors.rose }} />
                  <span className="editorial-caps" style={{ color: colors.rose }}>Portfolio</span>
                </div>
                <h2 className="font-editorial text-5xl sm:text-6xl font-bold" style={{ color: colors.midnight }}>
                  The <span style={{ color: colors.rose }}>Edit</span>
                </h2>
              </div>
              <p className="hidden md:block font-garamond text-lg italic max-w-xs text-right" style={{ color: `${colors.midnight}50` }}>
                Curated moments from our most celebrated events
              </p>
            </div>
          </FadeIn>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.06} className={img.span}>
                <div className="relative overflow-hidden group cursor-pointer" style={{ minHeight: 220 }}>
                  <img src={img.src} alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    style={{ minHeight: 220 }} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6"
                    style={{ background: `linear-gradient(to top, ${colors.midnight}CC 0%, transparent 60%)` }}>
                    <div>
                      <div className="w-8 h-px mb-3" style={{ backgroundColor: colors.rose }} />
                      <p className="font-body text-xs tracking-widest uppercase text-white/80">{img.caption}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRESS / REVIEWS - Editorial testimonials
         ===================================================== */}
      <section id="press" className="relative py-32 px-6 lg:px-12 overflow-hidden" style={{ backgroundColor: colors.midnight }}>
        <div className="absolute inset-0 editorial-grid-overlay opacity-15" />

        {/* Large decorative quote mark */}
        <div className="absolute top-20 right-12 font-editorial text-[20rem] leading-none font-bold pointer-events-none select-none"
          style={{ color: `${colors.rose}06` }}>
          &ldquo;
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px w-16" style={{ backgroundColor: colors.rose }} />
              <span className="editorial-caps" style={{ color: colors.rose }}>Press & Praise</span>
            </div>
            <h2 className="font-editorial text-5xl sm:text-6xl font-bold text-white mb-20">
              What They're <span style={{ color: colors.rose }}>Saying</span>
            </h2>
          </FadeIn>

          {/* Active Review */}
          <ScaleIn>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="border-l-2 pl-10 lg:pl-16 py-4"
                  style={{ borderColor: colors.rose }}>
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" style={{ color: colors.rose }} />
                    ))}
                  </div>

                  <p className="font-garamond text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed text-white/80 mb-10">
                    &ldquo;{reviews[activeReview].q}&rdquo;
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px" style={{ backgroundColor: colors.rose }} />
                    <div>
                      <p className="font-body text-sm font-semibold text-white">{reviews[activeReview].name}</p>
                      <p className="font-body text-xs text-white/40 mt-0.5">{reviews[activeReview].event}</p>
                      <p className="editorial-caps text-[9px] mt-2" style={{ color: colors.rose }}>{reviews[activeReview].pub}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex gap-3 mt-12 pl-10 lg:pl-16">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setActiveReview(i)}
                    className="h-1 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === activeReview ? 40 : 16,
                      backgroundColor: i === activeReview ? colors.rose : `${colors.rose}30`,
                    }} />
                ))}
              </div>
            </div>
          </ScaleIn>

          {/* Press logos / mentions */}
          <FadeIn delay={0.3}>
            <div className="mt-24 pt-12 border-t" style={{ borderColor: `${colors.rose}10` }}>
              <p className="editorial-caps text-center mb-8" style={{ color: `${colors.rose}40` }}>As Seen In</p>
              <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
                {['The Knot', 'Brides Magazine', 'Event Planner Mag', 'NY Weddings', 'Vogue Events'].map((pub, i) => (
                  <span key={i} className="font-editorial text-lg sm:text-xl italic text-white/15 hover:text-white/30 transition-colors duration-300 cursor-default">
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          FAQ - Editorial accordion
         ===================================================== */}
      <section id="faq" className="relative py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-6 mb-4">
                  <div className="h-px w-16" style={{ backgroundColor: colors.rose }} />
                  <span className="editorial-caps" style={{ color: colors.rose }}>FAQ</span>
                </div>
                <h2 className="font-editorial text-4xl sm:text-5xl font-bold leading-tight" style={{ color: colors.midnight }}>
                  Common <br /><span style={{ color: colors.rose }}>Questions</span>
                </h2>
              </div>
              <div className="lg:col-span-7 flex items-end">
                <p className="font-garamond text-lg" style={{ color: `${colors.midnight}50` }}>
                  Everything you need to know about elevating your event with our luxury mobile restrooms. Can't find your answer? We respond within 2 hours.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border-b" style={{ borderColor: `${colors.midnight}10` }}>
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between py-7 text-left cursor-pointer group">
                    <div className="flex items-center gap-6 pr-4">
                      <span className="font-editorial text-lg font-medium shrink-0" style={{ color: `${colors.rose}50` }}>
                        0{i + 1}
                      </span>
                      <span className="font-body text-base font-medium transition-colors duration-300"
                        style={{ color: faqOpen === i ? colors.rose : colors.midnight }}>
                        {f.q}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        borderColor: faqOpen === i ? colors.rose : `${colors.midnight}20`,
                        backgroundColor: faqOpen === i ? `${colors.rose}10` : 'transparent',
                      }}>
                      {faqOpen === i
                        ? <ChevronUp size={14} style={{ color: colors.rose }} />
                        : <ChevronDown size={14} style={{ color: `${colors.midnight}40` }} />
                      }
                    </div>
                  </button>

                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}>
                        <div className="pl-14 pb-7">
                          <p className="font-garamond text-lg leading-relaxed" style={{ color: `${colors.midnight}60` }}>
                            {f.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA - Full-bleed image with overlay
         ===================================================== */}
      <section id="availability" className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Full bleed background */}
        <img src={IMG.wedding1} alt="Elegant event"
          className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, ${colors.midnight}F0 0%, ${colors.midnight}CC 40%, ${colors.midnight}99 100%)`,
        }} />
        {/* Rose gold gradient accent */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 80% 50%, ${colors.rose}15 0%, transparent 60%)`,
        }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-4 mb-8 border px-6 py-3 backdrop-blur-sm"
              style={{ borderColor: `${colors.rose}30`, backgroundColor: `${colors.rose}08` }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.rose }} />
              <span className="editorial-caps text-white/60">Limited Dates Remaining for 2026</span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              Ready to{' '}
              <span className="italic font-garamond font-normal" style={{ color: colors.rose }}>Elevate</span>
              <br />Your Event?
            </h2>

            <div className="w-16 h-[2px] mx-auto mb-8" style={{ backgroundColor: colors.rose }} />

            <p className="font-garamond text-xl sm:text-2xl italic text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
              Join five hundred events that chose luxury over compromise. Receive your personalized quote in under two hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:info@prettypottyny.com"
                className="group inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase font-bold px-12 py-5 transition-all duration-300 cursor-pointer rose-glow"
                style={{ backgroundColor: colors.rose, color: '#fff' }}>
                Check Availability
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+15165551234"
                className="inline-flex items-center gap-3 border text-white/60 hover:text-white font-body text-[11px] tracking-[0.2em] uppercase px-12 py-5 transition-all duration-300 cursor-pointer"
                style={{ borderColor: `${colors.rose}40` }}>
                <Phone size={16} /> (516) 555-1234
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          FOOTER
         ===================================================== */}
      <footer className="py-20 px-6 lg:px-12" style={{ backgroundColor: colors.midnightDeep }}>
        <div className="max-w-7xl mx-auto">
          {/* Top: Logo + tagline */}
          <div className="grid md:grid-cols-12 gap-12 pb-16 border-b" style={{ borderColor: `${colors.rose}10` }}>
            <div className="md:col-span-4">
              <p className="font-editorial text-2xl font-bold text-white mb-4">
                Pretty <span style={{ color: colors.rose }}>Potty</span>
              </p>
              <p className="font-garamond text-lg italic text-white/30 leading-relaxed">
                Luxury mobile restrooms for New York's most discerning events.
              </p>
              <div className="flex gap-4 mt-6">
                {[Globe, Share2].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-10 h-10 border flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-white/5"
                    style={{ borderColor: `${colors.rose}20`, color: `${colors.rose}60` }}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 md:col-start-6">
              <p className="editorial-caps mb-5" style={{ color: colors.rose }}>Navigate</p>
              {['Fleet', 'About', 'Gallery', 'Press', 'FAQ', 'Check Availability'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                  className="block font-body text-sm text-white/30 hover:text-white py-1.5 transition-colors cursor-pointer">
                  {l}
                </a>
              ))}
            </div>

            <div className="md:col-span-3">
              <p className="editorial-caps mb-5" style={{ color: colors.rose }}>Service Areas</p>
              {['The Hamptons', 'Suffolk County', 'Nassau County', 'Westchester', 'NYC (All Boroughs)', 'Connecticut', 'New Jersey'].map(a => (
                <p key={a} className="font-body text-sm text-white/30 py-1.5 flex items-center gap-2">
                  <MapPin size={10} style={{ color: `${colors.rose}40` }} /> {a}
                </p>
              ))}
            </div>

            <div className="md:col-span-3">
              <p className="editorial-caps mb-5" style={{ color: colors.rose }}>Contact</p>
              <a href="tel:+15165551234" className="flex items-center gap-3 font-body text-sm text-white/30 hover:text-white py-2 transition-colors cursor-pointer">
                <Phone size={14} style={{ color: `${colors.rose}60` }} /> (516) 555-1234
              </a>
              <a href="mailto:info@prettypottyny.com" className="flex items-center gap-3 font-body text-sm text-white/30 hover:text-white py-2 transition-colors cursor-pointer">
                <Mail size={14} style={{ color: `${colors.rose}60` }} /> info@prettypottyny.com
              </a>
              <p className="flex items-center gap-3 font-body text-sm text-white/30 py-2">
                <MapPin size={14} style={{ color: `${colors.rose}60` }} /> Long Island, New York
              </p>
              <p className="flex items-center gap-3 font-body text-sm text-white/30 py-2">
                <Clock size={14} style={{ color: `${colors.rose}60` }} /> Response within 2 hours
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/15">&copy; 2026 Pretty Potty NYC. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="font-body text-xs text-white/15 hover:text-white/40 transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="font-body text-xs text-white/15 hover:text-white/40 transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="font-body text-xs text-white/15 hover:text-white/40 transition-colors cursor-pointer">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden backdrop-blur-xl border-t px-4 py-3 flex gap-3 z-50"
        style={{ backgroundColor: `${colors.midnight}F5`, borderColor: `${colors.rose}15` }}>
        <a href="#availability"
          className="flex-[3] font-body text-[11px] font-bold uppercase tracking-wider py-3.5 text-center cursor-pointer"
          style={{ backgroundColor: colors.rose, color: '#fff' }}>
          Check Availability
        </a>
        <a href="tel:+15165551234"
          className="flex-1 border flex items-center justify-center cursor-pointer"
          style={{ borderColor: `${colors.rose}30`, color: 'white' }}>
          <Phone size={18} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  )
}
