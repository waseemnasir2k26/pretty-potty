import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, Star, ArrowRight, ChevronDown,
  Menu, X, Users, CheckCircle2, Droplets, Wind, Lock,
  Sparkles, Music, Lightbulb, Globe, Share2, Clock,
  Shield, Heart, Zap, Award, ArrowUpRight
} from 'lucide-react'
import { FadeIn, ScaleIn, IMG } from '../components/shared'

export default function V2CleanMinimal() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const navLinks = ['Features', 'Fleet', 'Gallery', 'Reviews', 'FAQ']

  const testimonials = [
    {
      quote: "Pretty Potty made our wedding feel truly complete. Every guest commented on how beautiful the restroom trailers were.",
      name: 'Sarah & James K.',
      role: 'Hamptons Wedding, June 2025',
      rating: 5,
    },
    {
      quote: "We've used them for three corporate galas now. The level of service and presentation is unmatched in the industry.",
      name: 'Michael Rodriguez',
      role: 'VP Events, Goldman Sachs',
      rating: 5,
    },
    {
      quote: "Hot water, music, beautiful lighting — our guests thought we had built a permanent restroom. Absolutely incredible.",
      name: 'Emily & David L.',
      role: 'Garden Wedding, Nassau County',
      rating: 5,
    },
  ]

  const faqs = [
    {
      q: 'How much does a luxury restroom trailer cost?',
      a: 'Pricing depends on the trailer model, rental duration, and delivery distance. Our 2-station Classic starts at competitive rates for the tri-state area. Request a free quote and we\'ll have a personalized estimate within 2 hours.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'We recommend booking 4-8 weeks ahead, especially during peak season (May through October). Popular weekends book up fast, so the earlier you reach out, the better.',
    },
    {
      q: 'What\'s included in every rental?',
      a: 'Everything you need: climate control (A/C & heat), hot and cold running water, LED lighting, Bluetooth speakers, premium soap and toiletries, cloth hand towels, plus full delivery, professional setup, and removal.',
    },
    {
      q: 'What power and water hookups do you need?',
      a: 'A standard 20-amp outlet and water spigot within 100 feet. We bring our own extension cords and hoses. No hookups available? No problem — we offer generator and fresh water tank add-ons.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve all of Long Island (Suffolk & Nassau), The Hamptons, Westchester, all five NYC boroughs, Connecticut, and New Jersey. Delivery fees may apply for locations beyond 25 miles from our base.',
    },
    {
      q: 'Can I see a trailer before booking?',
      a: 'Absolutely. We offer showroom visits by appointment at our Long Island facility. We can also send a detailed video walkthrough of any trailer in our fleet.',
    },
  ]

  return (
    <div className="bg-white text-gray-900 min-h-screen font-inter">

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="font-playfair text-2xl font-bold text-gray-900">
              Pretty <span className="text-[#2563eb]">Potty</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
            >
              Get a Free Quote
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-900 cursor-pointer"
          >
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#quote"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-[#2563eb] text-white font-semibold px-6 py-3 rounded-full mt-4 cursor-pointer"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      {/* ── HERO (Split Layout) ── */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-0">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              Now booking 2026 events
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] text-gray-900 mb-6"
            >
              Elevate Every{' '}
              <span className="relative">
                <span className="text-[#2563eb]">Event</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed"
            >
              Premium mobile restrooms with climate control, running hot water,
              and complete privacy. Designed for New York's most memorable occasions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#quote"
                className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-700 font-medium px-8 py-4 rounded-full transition-all cursor-pointer"
              >
                View Fleet
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-100"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-[#2563eb]">
                      {['S', 'M', 'E', 'J'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                  <span className="text-sm font-semibold text-gray-900 ml-1">4.9</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Trusted by 500+ events</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={IMG.hero2}
                alt="Elegant outdoor event setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center shrink-0">
                  <Shield size={22} className="text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">White-Glove Service</p>
                  <p className="text-xs text-gray-500">Full delivery, setup & removal included</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C9A96E]/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>


      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Events Served', icon: Award },
            { value: '4.9★', label: 'Average Rating', icon: Star },
            { value: '<2hr', label: 'Response Time', icon: Clock },
            { value: '100%', label: 'Satisfaction Rate', icon: Heart },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2563eb]/5 mb-4">
                  <stat.icon size={20} className="text-[#2563eb]" />
                </div>
                <p className="font-playfair text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* ── FEATURES (Icon Grid) ── */}
      <section id="features" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">Why Pretty Potty</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                Not Your Average <span className="text-[#C9A96E]">Porta Potty</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Every detail is designed to make your guests feel like they never left the venue.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wind,
                title: 'Climate Controlled',
                desc: 'Full A/C and heating systems keep every trailer comfortable in any weather, any season.',
              },
              {
                icon: Droplets,
                title: 'Hot & Cold Water',
                desc: 'Real running water with on-demand hot water heaters. Porcelain sinks, not plastic.',
              },
              {
                icon: Lightbulb,
                title: 'Designer Lighting',
                desc: 'Soft LED vanity lighting and ambient accents create a warm, inviting atmosphere.',
              },
              {
                icon: Music,
                title: 'Bluetooth Audio',
                desc: 'Built-in premium speakers. Play ambient music or connect to your event\'s playlist.',
              },
              {
                icon: Lock,
                title: 'Complete Privacy',
                desc: 'Individual suites with solid doors, full-length mirrors, and premium finishes.',
              },
              {
                icon: Sparkles,
                title: 'Luxury Finishes',
                desc: 'Granite countertops, porcelain fixtures, stainless steel hardware, and fresh flowers.',
              },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-100/80 hover:border-gray-200 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/5 group-hover:bg-[#2563eb]/10 flex items-center justify-center mb-6 transition-colors">
                    <feature.icon size={24} className="text-[#2563eb]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── FLEET CARDS ── */}
      <section id="fleet" className="py-24 lg:py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">Our Collection</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                The <span className="text-[#C9A96E]">Fleet</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Three meticulously maintained trailers for events of every scale.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'The Classic',
                subtitle: '2-Station Trailer',
                guests: '150',
                img: IMG.bath1,
                features: ['Climate Control', 'Running Hot Water', 'LED Vanity Mirrors', 'Porcelain Fixtures'],
                tag: null,
                accent: 'bg-gray-100',
              },
              {
                name: 'The Grand Estate',
                subtitle: '4-Station Trailer',
                guests: '250',
                img: IMG.bath2,
                features: ['Granite Countertops', 'Bluetooth Sound System', 'Chandelier Lighting', 'Premium Vanities'],
                tag: 'Most Popular',
                accent: 'bg-[#2563eb]',
              },
              {
                name: 'The Royal Suite',
                subtitle: '6-Station Trailer',
                guests: '400',
                img: IMG.bath6,
                features: ['Bridal Suite Option', 'Attendant Station', 'Full-Length Mirrors', 'Luxury Toiletries'],
                tag: 'Premium',
                accent: 'bg-[#C9A96E]',
              },
            ].map((trailer, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 ${
                  i === 1 ? 'lg:-translate-y-4' : ''
                }`}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={trailer.img}
                      alt={trailer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {trailer.tag && (
                      <div className={`absolute top-4 right-4 ${trailer.accent} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}>
                        {trailer.tag}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-1">{trailer.subtitle}</p>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">{trailer.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-2 mb-6">
                      <Users size={14} className="text-[#2563eb]/60" />
                      Up to {trailer.guests} guests
                    </p>

                    <ul className="space-y-3 mb-8">
                      {trailer.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle2 size={16} className="text-[#2563eb]/60 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#quote"
                      className={`block text-center font-semibold text-sm py-3.5 rounded-xl transition-all cursor-pointer ${
                        i === 1
                          ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white hover:shadow-lg hover:shadow-blue-500/25'
                          : 'border border-gray-200 hover:border-[#2563eb] text-gray-700 hover:text-[#2563eb]'
                      }`}
                    >
                      Request a Quote
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── GALLERY (Clean Grid) ── */}
      <section id="gallery" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">Gallery</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                See the <span className="text-[#C9A96E]">Difference</span>
              </h2>
              <p className="text-lg text-gray-500">
                Real photos from real events across the tri-state area.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: IMG.bath1, span: 'md:col-span-2 md:row-span-2' },
              { src: IMG.wedding1, span: '' },
              { src: IMG.bath4, span: '' },
              { src: IMG.bath5, span: '' },
              { src: IMG.wedding2, span: '' },
              { src: IMG.outdoor1, span: 'md:col-span-2' },
              { src: IMG.bath7, span: '' },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.06} className={img.span}>
                <div className="relative rounded-2xl overflow-hidden h-48 md:h-full min-h-[200px] group cursor-pointer">
                  <img
                    src={img.src}
                    alt="Event photo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <ArrowUpRight size={18} className="text-gray-900" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="py-24 lg:py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">Testimonials</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900">
                Loved by <span className="text-[#C9A96E]">Hundreds</span>
              </h2>
            </div>
          </FadeIn>

          <ScaleIn>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-14 relative">
              {/* Rating stars */}
              <div className="flex items-center justify-center gap-1.5 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>

              {/* Testimonial content */}
              <div className="min-h-[180px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <p className="font-playfair text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700 mb-8">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    <p className="text-base font-semibold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === activeTestimonial
                        ? 'w-8 bg-[#2563eb]'
                        : 'w-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScaleIn>

          {/* Review platforms */}
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <span>Also reviewed on:</span>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Globe size={16} /> Google
                  <span className="text-[#C9A96E] font-bold">4.9</span>
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Share2 size={16} /> The Knot
                  <span className="text-[#C9A96E] font-bold">5.0</span>
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Star size={16} /> WeddingWire
                  <span className="text-[#C9A96E] font-bold">4.9</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── HOW IT WORKS ── */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">How It Works</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                Simple as <span className="text-[#C9A96E]">1-2-3</span>
              </h2>
              <p className="text-lg text-gray-500">
                From first inquiry to flawless event day — we handle it all.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {[
              {
                step: '01',
                title: 'Request a Quote',
                desc: 'Tell us your date, location, and guest count. We respond within 2 hours with a personalized quote.',
                icon: Mail,
              },
              {
                step: '02',
                title: 'Choose Your Trailer',
                desc: 'Pick from our luxury collection. We\'ll recommend the perfect match for your event size and style.',
                icon: CheckCircle2,
              },
              {
                step: '03',
                title: 'Enjoy Your Event',
                desc: 'We deliver, set up, maintain, and remove. You never lift a finger. Your guests just enjoy.',
                icon: Sparkles,
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-[#2563eb]/5 border border-[#2563eb]/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon size={28} className="text-[#2563eb]" />
                  </div>
                  <span className="inline-block text-xs font-bold text-[#2563eb] bg-[#2563eb]/5 px-3 py-1 rounded-full mb-4">
                    Step {step.step}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section id="faq" className="py-24 lg:py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#2563eb] mb-3">FAQ</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                Common <span className="text-[#C9A96E]">Questions</span>
              </h2>
              <p className="text-lg text-gray-500">
                Everything you need to know before booking.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#2563eb]/5 flex items-center justify-center shrink-0 transition-all ${
                      faqOpen === i ? 'bg-[#2563eb]/10' : ''
                    }`}>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-300 ${
                          faqOpen === i ? 'rotate-180 text-[#2563eb]' : ''
                        }`}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-500 leading-relaxed px-6 pb-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── CONTACT CTA ── */}
      <section id="quote" className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden p-10 md:p-16 lg:p-20 text-center">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 via-transparent to-[#C9A96E]/10" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A96E]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Elevate{' '}
                  <span className="text-[#C9A96E]">Your Event?</span>
                </h2>
                <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                  Join 500+ events across New York that chose luxury over compromise.
                  Get a personalized quote in under 2 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@prettypottyny.com"
                    className="group inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-10 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer"
                  >
                    Get Your Free Quote
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="tel:+15165551234"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-10 py-4 rounded-full transition-all cursor-pointer"
                  >
                    <Phone size={18} />
                    (516) 555-1234
                  </a>
                </div>

                <p className="text-xs text-white/30 mt-8">
                  Free quotes &middot; No obligation &middot; Response within 2 hours
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <p className="font-playfair text-xl font-bold text-gray-900 mb-4">
                Pretty <span className="text-[#2563eb]">Potty</span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Luxury mobile restrooms for New York's most unforgettable events.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#2563eb]/5 flex items-center justify-center text-gray-400 hover:text-[#2563eb] transition-all cursor-pointer"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#2563eb]/5 flex items-center justify-center text-gray-400 hover:text-[#2563eb] transition-all cursor-pointer"
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</p>
              {['Fleet', 'Features', 'Gallery', 'Reviews', 'FAQ', 'Get a Quote'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className="block text-sm text-gray-400 hover:text-[#2563eb] py-1.5 transition-colors cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Service Areas */}
            <div>
              <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Service Areas</p>
              {['Suffolk County', 'Nassau County', 'The Hamptons', 'Westchester', 'New York City', 'Connecticut', 'New Jersey'].map(area => (
                <p key={area} className="text-sm text-gray-400 py-1.5 flex items-center gap-2">
                  <MapPin size={12} className="text-gray-300 shrink-0" />
                  {area}
                </p>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</p>
              <a href="tel:+15165551234" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#2563eb] py-2 transition-colors cursor-pointer">
                <Phone size={16} className="text-gray-300" />
                (516) 555-1234
              </a>
              <a href="mailto:info@prettypottyny.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#2563eb] py-2 transition-colors cursor-pointer">
                <Mail size={16} className="text-gray-300" />
                info@prettypottyny.com
              </a>
              <p className="flex items-center gap-3 text-sm text-gray-400 py-2">
                <MapPin size={16} className="text-gray-300" />
                Long Island, New York
              </p>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs font-semibold text-gray-900 mb-1">Response Guarantee</p>
                <p className="text-xs text-gray-400">Every inquiry answered within 2 hours during business hours.</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-300">
              &copy; {new Date().getFullYear()} Pretty Potty Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors cursor-pointer">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>


      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed bottom-0 inset-x-0 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-3 flex gap-3 z-50">
        <a
          href="#quote"
          className="flex-[3] bg-[#2563eb] text-white font-semibold text-sm py-3.5 rounded-full text-center cursor-pointer"
        >
          Get a Free Quote
        </a>
        <a
          href="tel:+15165551234"
          className="flex-1 border border-gray-200 text-gray-700 flex items-center justify-center rounded-full cursor-pointer"
        >
          <Phone size={18} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  )
}
