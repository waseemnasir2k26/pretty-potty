import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, Send, User, Mail, Phone, Calendar, MapPin, Users, MessageSquare } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Event date is required'),
  guestCount: z.string().min(1, 'Guest count is required'),
  trailer: z.string().optional(),
  venue: z.string().optional(),
  city: z.string().optional(),
  message: z.string().optional(),
})

const stepFields = [
  ['name', 'email', 'phone'],
  ['eventType', 'eventDate', 'guestCount'],
  ['trailer', 'venue', 'city', 'message'],
]

export default function QuoteForm({ theme = 'dark' }) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const isDark = theme === 'dark'
  const isGreen = theme === 'green'

  // Color configs per theme
  const t = {
    dark: {
      bg: 'bg-white/[0.04]', border: 'border-white/10', input: 'bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A96E]',
      label: 'text-white/50', accent: 'bg-[#C9A96E] text-[#0a0a14]', accentHover: 'hover:bg-[#d4b478]',
      outline: 'border-white/20 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E]',
      stepActive: 'bg-[#C9A96E] text-[#0a0a14]', stepDone: 'bg-[#C9A96E]/20 text-[#C9A96E]', stepPending: 'bg-white/5 text-white/20',
      select: 'bg-white/[0.06] border-white/10 text-white', error: 'text-red-400',
    },
    light: {
      bg: 'bg-gray-50', border: 'border-gray-200', input: 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb]',
      label: 'text-gray-500', accent: 'bg-[#2563eb] text-white', accentHover: 'hover:bg-[#1d4ed8]',
      outline: 'border-gray-200 text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb]',
      stepActive: 'bg-[#2563eb] text-white', stepDone: 'bg-[#2563eb]/10 text-[#2563eb]', stepPending: 'bg-gray-100 text-gray-300',
      select: 'bg-white border-gray-200 text-gray-900', error: 'text-red-500',
    },
    green: {
      bg: 'bg-white/[0.04]', border: 'border-white/10', input: 'bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-[#D4C5A0]',
      label: 'text-white/50', accent: 'bg-[#D4C5A0] text-[#0D3B2E]', accentHover: 'hover:bg-[#c4b590]',
      outline: 'border-white/20 text-white/60 hover:border-[#D4C5A0] hover:text-[#D4C5A0]',
      stepActive: 'bg-[#D4C5A0] text-[#0D3B2E]', stepDone: 'bg-[#D4C5A0]/20 text-[#D4C5A0]', stepPending: 'bg-white/5 text-white/20',
      select: 'bg-white/[0.06] border-white/10 text-white', error: 'text-red-400',
    },
    rose: {
      bg: 'bg-white/[0.04]', border: 'border-white/10', input: 'bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-[#B76E79]',
      label: 'text-white/50', accent: 'bg-[#B76E79] text-white', accentHover: 'hover:bg-[#a35d67]',
      outline: 'border-white/20 text-white/60 hover:border-[#B76E79] hover:text-[#B76E79]',
      stepActive: 'bg-[#B76E79] text-white', stepDone: 'bg-[#B76E79]/20 text-[#B76E79]', stepPending: 'bg-white/5 text-white/20',
      select: 'bg-white/[0.06] border-white/10 text-white', error: 'text-red-400',
    },
    warm: {
      bg: 'bg-white/95 backdrop-blur-sm shadow-2xl shadow-[#C9876D]/10', border: 'border-[#E8C9A7]/40',
      input: 'bg-[#FFF8F3] border-[#E8C9A7]/50 text-[#3D2418] placeholder:text-[#7A5C4D]/40 focus:border-[#C9876D]',
      label: 'text-[#7A5C4D]', accent: 'bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] text-white shadow-lg shadow-[#C9876D]/30', accentHover: 'hover:from-[#b6735a] hover:to-[#c08e8e]',
      outline: 'border-[#E8C9A7] text-[#7A5C4D] hover:border-[#C9876D] hover:text-[#C9876D]',
      stepActive: 'bg-gradient-to-br from-[#C9876D] to-[#D4A0A0] text-white shadow-md shadow-[#C9876D]/30',
      stepDone: 'bg-[#C9876D]/15 text-[#C9876D]',
      stepPending: 'bg-[#FFF8F3] text-[#C9876D]/30 border border-[#E8C9A7]/40',
      select: 'bg-[#FFF8F3] border-[#E8C9A7]/50 text-[#3D2418]', error: 'text-rose-600',
    },
  }
  const c = t[theme] || t.dark

  const { register, handleSubmit, trigger, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const nextStep = async () => {
    const valid = await trigger(stepFields[step])
    if (valid) setStep(s => Math.min(s + 1, 2))
  }

  const onSubmit = (data) => {
    console.log('Quote request:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className={`${c.bg} border ${c.border} rounded-2xl p-10 text-center`}>
        <CheckCircle2 size={48} className={theme === 'light' ? 'text-green-500 mx-auto mb-4' : theme === 'warm' ? 'text-[#C9876D] mx-auto mb-4' : 'text-[#C9A96E] mx-auto mb-4'} />
        <h3 className={`font-playfair text-2xl font-bold mb-3 ${theme === 'light' || theme === 'warm' ? 'text-[#3D2418]' : 'text-white'}`}>
          Quote Request Received!
        </h3>
        <p className={`font-inter text-sm ${c.label} mb-2`}>
          We'll get back to you within 2 hours with a personalized quote.
        </p>
        <p className={`font-inter text-xs ${c.label}`}>
          Check your email for a confirmation.
        </p>
      </motion.div>
    )
  }

  const steps = ['Your Info', 'Event Details', 'Location & Notes']

  return (
    <div className={`${c.bg} border ${c.border} rounded-2xl p-6 sm:p-8`}>
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <button
              onClick={() => i < step && setStep(i)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all font-inter ${
                i === step ? c.stepActive : i < step ? c.stepDone : c.stepPending
              } ${i < step ? 'cursor-pointer' : 'cursor-default'}`}
              aria-label={`Step ${i + 1}: ${s}`}
            >
              {i < step ? <CheckCircle2 size={14} /> : i + 1}
            </button>
            {i < 2 && <div className={`w-8 h-px ${i < step ? c.stepDone.split(' ')[0] : c.stepPending.split(' ')[0]}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><User size={12} /> Full Name *</label>
                  <input {...register('name')} placeholder="Jane & John Smith"
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.input}`} />
                  {errors.name && <p className={`text-xs mt-1 ${c.error}`}>{errors.name.message}</p>}
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><Mail size={12} /> Email Address *</label>
                  <input {...register('email')} type="email" placeholder="hello@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.input}`} />
                  {errors.email && <p className={`text-xs mt-1 ${c.error}`}>{errors.email.message}</p>}
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><Phone size={12} /> Phone Number *</label>
                  <input {...register('phone')} type="tel" placeholder="(516) 555-0000"
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.input}`} />
                  {errors.phone && <p className={`text-xs mt-1 ${c.error}`}>{errors.phone.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><Calendar size={12} /> Event Type *</label>
                  <select {...register('eventType')} className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.select}`}>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="party">Private Party</option>
                    <option value="festival">Festival / Fair</option>
                    <option value="construction">Construction Site</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.eventType && <p className={`text-xs mt-1 ${c.error}`}>{errors.eventType.message}</p>}
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><Calendar size={12} /> Event Date *</label>
                  <input {...register('eventDate')} type="date"
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.input}`} />
                  {errors.eventDate && <p className={`text-xs mt-1 ${c.error}`}>{errors.eventDate.message}</p>}
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><Users size={12} /> Estimated Guest Count *</label>
                  <select {...register('guestCount')} className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.select}`}>
                    <option value="">Select range</option>
                    <option value="50-100">50 – 100 guests</option>
                    <option value="100-150">100 – 150 guests</option>
                    <option value="150-250">150 – 250 guests</option>
                    <option value="250-400">250 – 400 guests</option>
                    <option value="400+">400+ guests</option>
                  </select>
                  {errors.guestCount && <p className={`text-xs mt-1 ${c.error}`}>{errors.guestCount.message}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}>Preferred Trailer</label>
                  <select {...register('trailer')} className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.select}`}>
                    <option value="">No preference</option>
                    <option value="classic">The Classic (2-Station)</option>
                    <option value="grand">The Grand Estate (4-Station)</option>
                    <option value="royal">The Royal Suite (6-Station)</option>
                  </select>
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><MapPin size={12} /> Venue / Location</label>
                  <input {...register('venue')} placeholder="Venue name or address"
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.input}`} />
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><MapPin size={12} /> City / Area</label>
                  <select {...register('city')} className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors ${c.select}`}>
                    <option value="">Select area</option>
                    <option value="suffolk">Suffolk County</option>
                    <option value="nassau">Nassau County</option>
                    <option value="hamptons">The Hamptons</option>
                    <option value="westchester">Westchester</option>
                    <option value="nyc">New York City</option>
                    <option value="ct">Connecticut</option>
                    <option value="nj">New Jersey</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={`font-inter text-xs ${c.label} mb-1.5 flex items-center gap-2`}><MessageSquare size={12} /> Additional Notes</label>
                  <textarea {...register('message')} rows={3} placeholder="Any special requests, questions, or details..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm font-inter outline-none transition-colors resize-none ${c.input}`} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex gap-3 mt-6">
          {step > 0 && (
            <button type="button" onClick={() => setStep(s => s - 1)}
              className={`flex-1 border px-6 py-3 rounded-lg font-inter text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${c.outline}`}>
              <ArrowLeft size={16} /> Back
            </button>
          )}
          {step < 2 ? (
            <button type="button" onClick={nextStep}
              className={`flex-1 px-6 py-3 rounded-lg font-inter text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${c.accent} ${c.accentHover}`}>
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit"
              className={`flex-1 px-6 py-3 rounded-lg font-inter text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${c.accent} ${c.accentHover}`}>
              <Send size={16} /> Submit Quote Request
            </button>
          )}
        </div>

        <p className={`font-inter text-[10px] ${c.label} text-center mt-4`}>
          Free quote · No obligation · Response within 2 hours
        </p>
      </form>
    </div>
  )
}
