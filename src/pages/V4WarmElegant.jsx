import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, Star, ArrowRight, ChevronDown, Heart, Menu, X,
  Users, CheckCircle2, Clock, Shield, Sparkles, Globe, Share2, Leaf,
  Calendar, Award, Crown, Handshake, TrendingUp, DollarSign, Briefcase, Send,
} from 'lucide-react'
import { FadeIn, ScaleIn } from '../components/shared'
import QuoteForm from '../components/QuoteForm'

const LOGO = '/assets/logo.png'
const PHOTOS = {
  trailer1: '/assets/trailer-1.jpeg',
  trailer2: '/assets/trailer-2.jpeg',
  trailer3: '/assets/trailer-3.jpeg',
  trailer4: '/assets/trailer-4.jpeg',
  interior1: '/assets/interior-1.jpeg',
  interior2: '/assets/interior-2.jpeg',
}
const STOCK = {
  wedding1: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1200',
  wedding2: 'https://images.pexels.com/photos/12876404/pexels-photo-12876404.jpeg?auto=compress&cs=tinysrgb&w=1200',
  wedding3: 'https://images.pexels.com/photos/15242526/pexels-photo-15242526.jpeg?auto=compress&cs=tinysrgb&w=1200',
  wedding4: 'https://images.pexels.com/photos/16120135/pexels-photo-16120135.jpeg?auto=compress&cs=tinysrgb&w=1200',
}

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

  useEffect(() => {
    const t = setInterval(() => setActiveStory(p => (p + 1) % 3), 5500)
    return () => clearInterval(t)
  }, [])

  const cormorant = { fontFamily: '"Cormorant Garamond", serif' }

  // Palette: rose-gold + peach + cream + champagne — no dark backgrounds
  // bg #FFF8F3 cream · #FFEEDD peach · #FCE4D6 blush · #E8C9A7 champagne
  // accent #C9876D deep rose · #D4A0A0 rose pink · #B7896A warm gold
  // text #3D2418 chocolate · #7A5C4D muted

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Collection', href: '#collection' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Love Stories', href: '#love-stories' },
    { label: 'Franchise', href: '#franchise' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <div className="bg-[#FFF8F3] text-[#3D2418] min-h-screen overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FFF8F3]/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(201,135,109,0.08)]' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="flex items-center">
            <img src={LOGO} alt="Pretty Potty NYC" className="h-14 w-auto" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#7A5C4D] hover:text-[#C9876D] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#book" className="bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-[11px] tracking-[0.15em] uppercase font-semibold px-7 py-3 rounded-full transition-all shadow-lg shadow-[#C9876D]/25 hover:shadow-xl hover:shadow-[#C9876D]/35">
              Plan My Event
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#3D2418] cursor-pointer" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FFF8F3] border-t border-[#E8C9A7]/30 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map(l => (
                  <a key={l.label} href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-inter text-sm text-[#7A5C4D] hover:text-[#C9876D]">
                    {l.label}
                  </a>
                ))}
                <a href="#book" onClick={() => setMenuOpen(false)}
                  className="block bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] text-white font-inter text-sm font-semibold px-6 py-3 rounded-full text-center shadow-lg shadow-[#C9876D]/25">
                  Plan My Event
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ── light, vibrant, inviting */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
        {/* Soft gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F3] via-[#FFEEDD] to-[#FCE4D6]" />
        {/* Decorative blobs */}
        <div className="absolute top-32 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D4A0A0]/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E8C9A7]/40 to-transparent blur-3xl" />

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i}
              className="absolute text-[#C9876D]/20"
              style={{ left: `${8 + i * 15}%`, top: `${15 + (i % 3) * 22}%` }}
              animate={{ y: [-12, 12], rotate: [-8, 8], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 5 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
            >
              <Sparkles size={18 + i * 4} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 mb-8 border border-[#C9876D]/30 rounded-full px-5 py-2 bg-white/60 backdrop-blur-sm"
            >
              <Heart size={12} className="text-[#C9876D] fill-[#C9876D]" />
              <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#7A5C4D]">Now Booking 2026 Celebrations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] mb-7 text-[#3D2418]"
              style={cormorant}
            >
              Where Luxury
              <br />
              Meets <em className="italic bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent">Elegance</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-inter text-lg text-[#7A5C4D] max-w-lg mb-10 leading-relaxed"
            >
              Premium mobile restrooms designed for New York's most beautiful celebrations — weddings, galas, estate events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#book" className="group bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-sm font-semibold px-10 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-[#C9876D]/30 hover:shadow-2xl hover:shadow-[#C9876D]/40 hover:-translate-y-0.5">
                Plan My Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#collection" className="border-2 border-[#C9876D]/40 hover:border-[#C9876D] text-[#C9876D] hover:bg-[#C9876D] hover:text-white font-inter text-sm px-10 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer">
                View Collection
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-[#7A5C4D]"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#C9876D] text-[#C9876D]" />)}
                </div>
                <span className="font-inter text-xs">4.9 · 500+ events</span>
              </div>
              <div className="h-4 w-px bg-[#7A5C4D]/20" />
              <span className="font-inter text-xs">Long Island · NYC · Hamptons</span>
            </motion.div>
          </div>

          {/* Right photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[480px] lg:h-[560px]"
          >
            <div className="absolute top-0 right-0 w-[68%] h-[64%] rounded-3xl overflow-hidden shadow-2xl shadow-[#C9876D]/20 border-4 border-white">
              <img src={PHOTOS.interior2} alt="Pretty Potty interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl shadow-[#C9876D]/20 border-4 border-white z-10">
              <img src={PHOTOS.trailer3} alt="Pretty Potty trailer" className="w-full h-full object-cover" />
            </div>
            <motion.div
              animate={{ y: [-8, 8] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', repeatType: 'reverse' }}
              className="absolute top-[55%] right-[6%] bg-white rounded-2xl px-5 py-4 shadow-xl shadow-[#C9876D]/15 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] flex items-center justify-center">
                  <Crown size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#7A5C4D]">Rated</p>
                  <p className="font-semibold text-[#3D2418] text-sm" style={cormorant}>#1 in NYC</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <ChevronDown className="text-[#C9876D]/60" size={28} />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 bg-gradient-to-b from-[#FFF8F3] to-[#FFEEDD]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div key={i}
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  >
                    <Heart size={14} className="text-[#C9876D] fill-[#C9876D]" />
                  </motion.div>
                ))}
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-8 leading-tight" style={cormorant}>
              Every Detail of Your Celebration
              <br />
              <em className="italic bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent">Deserves to Be Beautiful</em>
            </h2>
            <p className="font-inter text-lg text-[#7A5C4D] max-w-2xl mx-auto leading-relaxed mb-8">
              From the ceremony to the dance floor, your guests expect nothing but the best. Our luxury mobile restrooms bring the elegance of a five-star hotel to any venue, any setting, any dream you can imagine.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9876D] to-transparent mx-auto" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: '500+', label: 'Events Celebrated' },
                { val: '4.9', label: 'Star Rating' },
                { val: '2hr', label: 'Response Time' },
                { val: '100%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-semibold bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent mb-1" style={cormorant}>{s.val}</p>
                  <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-[#7A5C4D]">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES (2-col with large image) ── */}
      <section className="py-28 px-6 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#C9876D]/15 border-[6px] border-white">
                <img src={PHOTOS.interior2} alt="Luxury restroom interior"
                  className="w-full h-[500px] lg:h-[600px] object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#C9876D] text-[#C9876D]" />)}
                  </div>
                  <p className="font-inter text-xs text-[#7A5C4D] mt-1">Rated #1 in NYC</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">Why Pretty Potty</p>
              <h2 className="text-4xl sm:text-5xl mb-8 leading-tight" style={cormorant}>
                Luxury That Your <em className="italic text-[#C9876D]">Guests Will Remember</em>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] flex items-center justify-center text-white shadow-md shadow-[#C9876D]/25">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-[#3D2418]" style={cormorant}>{f.title}</h3>
                      <p className="font-inter text-sm text-[#7A5C4D] leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── COLLECTION (Fleet) ── light peach bg, no dark */}
      <section id="collection" className="py-28 px-6 bg-gradient-to-b from-[#FFEEDD] via-[#FCE4D6] to-[#FFEEDD] relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A0A0]/15 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#E8C9A7]/25 blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">Our Collection</p>
              <h2 className="text-5xl sm:text-6xl mb-4 text-[#3D2418]" style={cormorant}>
                The <em className="italic bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent">Fleet</em>
              </h2>
              <p className="font-inter text-[#7A5C4D] max-w-xl mx-auto">
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
                img: PHOTOS.trailer3,
                features: ['Climate Control', 'Running Hot Water', 'LED Vanity Mirrors', 'Fresh Floral Scent'],
                tag: '',
              },
              {
                name: 'The Gardenia',
                sub: '4-Station Trailer',
                guests: '250',
                img: PHOTOS.trailer4,
                features: ['Granite Countertops', 'Bluetooth Speakers', 'Chandelier Lighting', 'Premium Vanities'],
                tag: "Bride's Favorite",
              },
              {
                name: 'The Magnolia',
                sub: '6-Station Trailer',
                guests: '400',
                img: PHOTOS.trailer1,
                features: ['Bridal Suite Option', 'Attendant Station', 'Full-Length Mirrors', 'Luxury Toiletries'],
                tag: 'Grand Events',
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-[#E8C9A7]/40 shadow-xl shadow-[#C9876D]/10 hover:shadow-2xl hover:shadow-[#C9876D]/20 hover:-translate-y-1 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={t.img} alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy" />
                    {t.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] text-white font-inter text-[9px] tracking-[0.15em] uppercase font-bold px-3 py-1.5 rounded-full shadow-lg">
                          {t.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-[#C9876D] mb-1">{t.sub}</p>
                    <h3 className="text-2xl text-[#3D2418] mb-2" style={cormorant}><em>{t.name}</em></h3>
                    <p className="font-inter text-sm text-[#7A5C4D] mb-6 flex items-center gap-2">
                      <Users size={14} className="text-[#C9876D]" /> Up to {t.guests} guests
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {t.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-inter text-[#7A5C4D]">
                          <CheckCircle2 size={14} className="text-[#C9876D] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a href="#book" className="block text-center bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-[11px] tracking-[0.15em] uppercase font-semibold py-4 rounded-full transition-all cursor-pointer shadow-md shadow-[#C9876D]/25">
                      Inquire Now
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-28 px-6 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">Portfolio</p>
              <h2 className="text-5xl sm:text-6xl mb-4 text-[#3D2418]" style={cormorant}>
                Moments of <em className="italic text-[#C9876D]">Elegance</em>
              </h2>
              <p className="font-inter text-[#7A5C4D] max-w-lg mx-auto">
                A glimpse into the celebrations we've had the honor of being part of.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
            {[
              { src: PHOTOS.interior2, label: 'Spa-Style Interior', span: 'col-span-2 md:col-span-7', h: 'h-72 md:h-[480px]' },
              { src: PHOTOS.trailer4, label: 'The Gardenia Exterior', span: 'col-span-1 md:col-span-5', h: 'h-72 md:h-[480px]' },
              { src: PHOTOS.trailer1, label: 'Black-Door Premium Trailer', span: 'col-span-1 md:col-span-4', h: 'h-60 md:h-[360px]' },
              { src: STOCK.wedding1, label: 'Garden Wedding, The Hamptons', span: 'col-span-1 md:col-span-4', h: 'h-60 md:h-[360px]' },
              { src: PHOTOS.trailer3, label: 'Estate Reception, Westchester', span: 'col-span-2 md:col-span-4', h: 'h-60 md:h-[360px]' },
              { src: STOCK.wedding3, label: 'Vineyard Wedding, Long Island', span: 'col-span-1 md:col-span-6', h: 'h-60 md:h-[340px]' },
              { src: PHOTOS.interior1, label: 'Vanity & Mirror Detail', span: 'col-span-1 md:col-span-6', h: 'h-60 md:h-[340px]' },
            ].map((g, i) => (
              <FadeIn key={i} delay={i * 0.05} className={g.span}>
                <div className={`relative ${g.h} rounded-3xl overflow-hidden group cursor-pointer shadow-lg shadow-[#C9876D]/10`}>
                  <img src={g.src} alt={g.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D2418]/70 via-[#3D2418]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white font-inter text-sm">{g.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOVE STORIES ── */}
      <section id="love-stories" className="py-28 px-6 bg-gradient-to-b from-[#FFF8F3] to-[#FCE4D6]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Heart size={28} className="text-[#C9876D] fill-[#C9876D]" />
              </div>
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">Testimonials</p>
              <h2 className="text-5xl sm:text-6xl text-[#3D2418]" style={cormorant}>
                Love <em className="italic text-[#C9876D]">Stories</em>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn>
            <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-[#C9876D]/10 border border-[#E8C9A7]/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#FFF8F3] px-4 py-1 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={14} className="text-[#C9876D] fill-[#C9876D]" />
                ))}
              </div>

              {[
                { q: "Our guests couldn't stop talking about the restrooms! They were more beautiful than many permanent bathrooms. Pretty Potty made our wedding day absolutely perfect.", name: 'Sarah & James K.', event: 'Garden Wedding, The Hamptons', rating: 5 },
                { q: "From the chandelier lighting to the hot running water, every detail was exquisite. Pretty Potty understood our vision and delivered beyond our wildest dreams.", name: 'Emily & David L.', event: 'Vineyard Wedding, North Fork', rating: 5 },
                { q: "We've used Pretty Potty for three corporate galas now. The level of sophistication and service is unmatched. Our clients always comment on the exceptional experience.", name: 'Michael R.', event: 'Annual Gala, Manhattan', rating: 5 },
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
                        <Star key={j} size={16} className="fill-[#C9876D] text-[#C9876D]" />
                      ))}
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-[#3D2418]/85 mb-10" style={cormorant}>
                      <em>"{r.q}"</em>
                    </p>
                    <p className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#C9876D] font-semibold">{r.name}</p>
                    <p className="font-inter text-sm text-[#7A5C4D] mt-1">{r.event}</p>
                  </motion.div>
                )
              ))}

              <div className="flex justify-center gap-3 mt-10">
                {[0, 1, 2].map(i => (
                  <button key={i} onClick={() => setActiveStory(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${i === activeStory ? 'w-10 bg-gradient-to-r from-[#C9876D] to-[#D4A0A0]' : 'w-4 bg-[#C9876D]/20 hover:bg-[#C9876D]/40'}`}
                  />
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6 bg-[#FFF8F3]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">The Process</p>
              <h2 className="text-5xl text-[#3D2418]" style={cormorant}>
                Three Simple <em className="italic text-[#C9876D]">Steps</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#C9876D]/40 to-transparent" />

            {[
              { n: '01', title: 'Share Your Vision', desc: 'Tell us about your event — date, venue, guest count, mood. We respond within 2 hours.' },
              { n: '02', title: 'Choose Your Match', desc: 'Browse our collection and pick the trailer that speaks to your style. We will recommend the perfect fit.' },
              { n: '03', title: 'Celebrate Freely', desc: 'We deliver, set up, maintain, and remove. You never think about a single detail.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white to-[#FFEEDD] border-2 border-[#C9876D]/25 flex items-center justify-center mx-auto mb-8 relative shadow-lg shadow-[#C9876D]/10">
                    <span className="text-3xl font-light text-[#C9876D]" style={cormorant}>{s.n}</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                      <Heart size={10} className="text-[#C9876D] fill-[#C9876D]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-[#3D2418]" style={cormorant}>{s.title}</h3>
                  <p className="font-inter text-sm text-[#7A5C4D] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRANCHISE / PARTNER WITH US ── NEW SECTION */}
      <section id="franchise" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#FFEEDD] via-[#FCE4D6] to-[#FFEEDD]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D4A0A0]/30 to-transparent blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#E8C9A7]/35 to-transparent blur-3xl translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 mb-5 bg-white/80 backdrop-blur-sm border border-[#C9876D]/25 rounded-full px-4 py-1.5">
                <Handshake size={14} className="text-[#C9876D]" />
                <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] font-semibold">Franchise Opportunities</p>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-[#3D2418]" style={cormorant}>
                Partner With Us &
                <br />
                <em className="italic bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent">Build Your Empire</em>
              </h2>
              <p className="font-inter text-lg text-[#7A5C4D] mb-8 leading-relaxed">
                Bring the Pretty Potty experience to your city. We're now offering franchise opportunities for entrepreneurs who share our passion for elegance, service, and unforgettable celebrations.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: <TrendingUp size={18} />, title: 'Proven Business Model', desc: 'Tested in the most demanding NYC market — turnkey playbook included.' },
                  { icon: <Briefcase size={18} />, title: 'Full Operational Training', desc: 'Trailer sourcing, logistics, marketing, customer success — we teach it all.' },
                  { icon: <DollarSign size={18} />, title: 'Premium Margins', desc: 'High-ticket weddings + corporate events deliver luxury-segment unit economics.' },
                  { icon: <Crown size={18} />, title: 'Brand & Marketing Support', desc: 'Use our name, our assets, our lead engine. Hit the ground running.' },
                ].map((b, i) => (
                  <motion.div key={i} className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#C9876D] flex items-center justify-center shadow-md shadow-[#C9876D]/15 border border-[#E8C9A7]/40">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3D2418] mb-1" style={cormorant}>{b.title}</h4>
                      <p className="font-inter text-sm text-[#7A5C4D] leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#franchise-form" className="group bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-sm font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-[#C9876D]/30 hover:-translate-y-0.5">
                  Apply for Franchise <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:franchise@prettypottyny.com" className="border-2 border-[#C9876D]/40 hover:border-[#C9876D] text-[#C9876D] hover:bg-[#C9876D] hover:text-white font-inter text-sm px-8 py-4 rounded-full transition-all inline-flex items-center gap-3 cursor-pointer">
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div id="franchise-form" className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#C9876D]/15 border border-[#E8C9A7]/40">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] mb-4 shadow-lg shadow-[#C9876D]/30">
                    <Handshake size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl mb-2 text-[#3D2418]" style={cormorant}>
                    <em>Become a Partner</em>
                  </h3>
                  <p className="font-inter text-sm text-[#7A5C4D]">Tell us about you and we'll send the Franchise Information Pack.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert('Application received! We will reach out within 48 hours.') }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Full Name *</label>
                      <input required type="text" placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] placeholder:text-[#7A5C4D]/40 outline-none focus:border-[#C9876D] transition-colors" />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Email *</label>
                      <input required type="email" placeholder="hello@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] placeholder:text-[#7A5C4D]/40 outline-none focus:border-[#C9876D] transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Phone *</label>
                      <input required type="tel" placeholder="(555) 555-0000"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] placeholder:text-[#7A5C4D]/40 outline-none focus:border-[#C9876D] transition-colors" />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Target City / Region *</label>
                      <input required type="text" placeholder="e.g. Miami, FL"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] placeholder:text-[#7A5C4D]/40 outline-none focus:border-[#C9876D] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Investment Capacity *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] outline-none focus:border-[#C9876D] transition-colors">
                      <option value="">Select range</option>
                      <option value="50-100">$50K – $100K</option>
                      <option value="100-250">$100K – $250K</option>
                      <option value="250-500">$250K – $500K</option>
                      <option value="500+">$500K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-inter text-xs text-[#7A5C4D] mb-1.5 block">Tell us about you</label>
                    <textarea rows={3} placeholder="Background, business experience, why Pretty Potty..."
                      className="w-full px-4 py-3 rounded-lg border border-[#E8C9A7]/50 bg-[#FFF8F3] text-sm text-[#3D2418] placeholder:text-[#7A5C4D]/40 outline-none focus:border-[#C9876D] transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-sm font-semibold py-4 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C9876D]/30">
                    <Send size={16} /> Submit Application
                  </button>
                  <p className="font-inter text-[10px] text-[#7A5C4D]/70 text-center pt-2">
                    Confidential · 48-hour response · No commitment
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-28 px-6 bg-[#FFF8F3]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-[#C9876D] mb-4">Questions</p>
              <h2 className="text-5xl text-[#3D2418]" style={cormorant}>
                Frequently <em className="italic text-[#C9876D]">Asked</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {[
              { q: 'How much does a luxury restroom rental cost?', a: 'Pricing depends on the trailer model, event duration, and location. Our 2-Station Rosemary starts at competitive rates for the luxury segment. Contact us for a personalized quote — we respond within 2 hours.' },
              { q: 'How far in advance should we book?', a: 'We recommend booking 4-8 weeks ahead, especially during peak wedding season (May through October). For Saturday dates in summer, earlier is always better.' },
              { q: 'What is included in the rental?', a: 'Climate control, hot and cold running water, LED lighting, Bluetooth speakers, premium toiletries, fresh hand towels, plus professional delivery, setup, maintenance, and removal.' },
              { q: 'What power and water connections do you need on site?', a: 'A standard 20-amp electrical outlet and a water spigot within 100 feet. We bring all extension cords and hoses. No hookups? Generators and freshwater tanks available as add-ons.' },
              { q: 'Do you serve areas outside of Long Island?', a: 'Yes — The Hamptons, Westchester, all five NYC boroughs, Connecticut, and New Jersey. Small delivery surcharge beyond 25 miles from our base.' },
              { q: 'Can the trailer be customized for our wedding theme?', a: 'Yes. Floral arrangements, custom signage, matching toiletry packaging, lighting color adjustments. Share your wedding palette and we will make it a seamless extension of your celebration.' },
              { q: 'Do you offer franchise opportunities?', a: 'Yes! We are now expanding nationally. See the Franchise section above or email franchise@prettypottyny.com for the full information pack.' },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-white rounded-2xl overflow-hidden border border-[#E8C9A7]/30 shadow-sm hover:shadow-md transition-shadow">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer group">
                    <span className="font-inter font-medium text-[#3D2418] group-hover:text-[#C9876D] transition-colors pr-4">{f.q}</span>
                    <ChevronDown className={`text-[#C9876D] shrink-0 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="font-inter text-sm text-[#7A5C4D] leading-relaxed px-6 pb-6">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK YOUR DATE CTA ── warm peach gradient, light, inviting */}
      <section id="book" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#FCE4D6] via-[#FFEEDD] to-[#FFF8F3]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A0A0]/25 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E8C9A7]/35 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          {[...Array(8)].map((_, i) => (
            <motion.div key={i}
              className="absolute text-[#C9876D]/15"
              style={{ left: `${5 + i * 12}%`, top: `${15 + (i % 4) * 22}%` }}
              animate={{ y: [-15, 15], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            >
              <Heart size={14 + i * 3} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] flex items-center justify-center shadow-xl shadow-[#C9876D]/30">
                <Calendar size={26} className="text-white" />
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl text-[#3D2418] mb-6" style={cormorant}>
              Book Your <em className="italic bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent">Date</em>
            </h2>
            <p className="font-inter text-lg text-[#7A5C4D] mb-12 max-w-xl mx-auto leading-relaxed">
              Your celebration deserves every beautiful detail. Let us bring luxury and warmth to your most cherished moments.
            </p>

            <div className="max-w-xl mx-auto mb-12">
              <QuoteForm theme="warm" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@prettypottyny.com"
                className="group bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] hover:from-[#b6735a] hover:to-[#c08e8e] text-white font-inter text-sm font-semibold px-12 py-5 rounded-full transition-all cursor-pointer inline-flex items-center justify-center gap-3 shadow-xl shadow-[#C9876D]/30">
                Plan My Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+15165551234"
                className="border-2 border-[#C9876D]/40 hover:border-[#C9876D] text-[#C9876D] hover:bg-[#C9876D] hover:text-white font-inter text-sm px-12 py-5 rounded-full transition-all cursor-pointer inline-flex items-center justify-center gap-3">
                <Phone size={16} /> (516) 555-1234
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── warm cream, not dark */}
      <footer className="bg-gradient-to-b from-[#FFF8F3] to-[#FFEEDD] border-t border-[#E8C9A7]/40 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <img src={LOGO} alt="Pretty Potty NYC" className="h-16 w-auto mb-4" />
            <p className="font-inter text-sm text-[#7A5C4D] leading-relaxed">
              Luxury mobile restrooms for New York's most beautiful celebrations.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-full bg-white border border-[#E8C9A7]/40 hover:border-[#C9876D] flex items-center justify-center text-[#C9876D] transition-all cursor-pointer shadow-sm">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="Share" className="w-9 h-9 rounded-full bg-white border border-[#E8C9A7]/40 hover:border-[#C9876D] flex items-center justify-center text-[#C9876D] transition-all cursor-pointer shadow-sm">
                <Share2 size={16} />
              </a>
            </div>
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#C9876D] mb-4 font-semibold">Explore</p>
            {[
              { label: 'Collection', href: '#collection' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Love Stories', href: '#love-stories' },
              { label: 'Franchise', href: '#franchise' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Plan My Event', href: '#book' },
            ].map(l => (
              <a key={l.label} href={l.href} className="block font-inter text-sm text-[#7A5C4D] hover:text-[#C9876D] py-1.5 transition-colors cursor-pointer">{l.label}</a>
            ))}
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#C9876D] mb-4 font-semibold">Service Areas</p>
            {['Suffolk County', 'Nassau County', 'The Hamptons', 'Westchester', 'NYC Boroughs', 'Connecticut', 'New Jersey'].map(a => (
              <p key={a} className="font-inter text-sm text-[#7A5C4D] py-1.5 flex items-center gap-2">
                <MapPin size={10} className="text-[#C9876D]" /> {a}
              </p>
            ))}
          </div>
          <div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#C9876D] mb-4 font-semibold">Contact</p>
            <p className="font-inter text-sm text-[#7A5C4D] flex items-center gap-2 py-1.5">
              <Phone size={14} className="text-[#C9876D]" /> (516) 555-1234
            </p>
            <a href="mailto:info@prettypottyny.com" className="font-inter text-sm text-[#7A5C4D] hover:text-[#C9876D] flex items-center gap-2 py-1.5">
              <Mail size={14} className="text-[#C9876D]" /> info@prettypottyny.com
            </a>
            <a href="mailto:franchise@prettypottyny.com" className="font-inter text-sm text-[#7A5C4D] hover:text-[#C9876D] flex items-center gap-2 py-1.5">
              <Handshake size={14} className="text-[#C9876D]" /> franchise@prettypottyny.com
            </a>
            <p className="font-inter text-sm text-[#7A5C4D] flex items-center gap-2 py-1.5">
              <MapPin size={14} className="text-[#C9876D]" /> Long Island, New York
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#E8C9A7]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#7A5C4D]/70">&copy; 2026 Pretty Potty Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="font-inter text-xs text-[#7A5C4D]/70 hover:text-[#C9876D] transition-colors cursor-pointer">Privacy</a>
            <a href="#" className="font-inter text-xs text-[#7A5C4D]/70 hover:text-[#C9876D] transition-colors cursor-pointer">Terms</a>
            <span className="font-inter text-xs text-[#7A5C4D]/70">
              Designed &amp; Developed with <Heart size={10} className="inline text-[#C9876D] fill-[#C9876D]" /> by{' '}
              <a href="https://www.skynetjoe.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent hover:underline">
                SkynetLabs
              </a>
              {' '}&amp;{' '}
              <a href="https://www.waseemnasir.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] bg-clip-text text-transparent hover:underline">
                Waseem Nasir
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-[#FFF8F3]/95 backdrop-blur-xl border-t border-[#E8C9A7]/40 px-4 py-3 flex gap-3 z-50">
        <a href="#book" className="flex-[3] bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] text-white font-inter text-[11px] font-semibold uppercase tracking-wider py-3.5 rounded-full text-center cursor-pointer shadow-lg shadow-[#C9876D]/25">
          Plan My Event
        </a>
        <a href="tel:+15165551234" className="flex-1 border border-[#C9876D]/40 text-[#C9876D] flex items-center justify-center rounded-full cursor-pointer">
          <Phone size={18} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  )
}
