import { useState, lazy, Suspense, Component } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const V1GoldNoir = lazy(() => import('./pages/V1GoldNoir'))
const V2CleanMinimal = lazy(() => import('./pages/V2CleanMinimal'))
const V3BoldStatement = lazy(() => import('./pages/V3BoldStatement'))
const V4WarmElegant = lazy(() => import('./pages/V4WarmElegant'))
const V5Editorial = lazy(() => import('./pages/V5Editorial'))

const variants = [
  { id: 1, name: 'Gold & Noir', desc: 'Dark luxury with gold accents', colors: ['#0a0a14', '#C9A96E', '#FAFAF8'], Component: V1GoldNoir },
  { id: 2, name: 'Clean Minimal', desc: 'Apple-inspired white & blue', colors: ['#FFFFFF', '#2563eb', '#C9A96E'], Component: V2CleanMinimal },
  { id: 3, name: 'Bold Statement', desc: 'Black & gold, confrontational', colors: ['#000000', '#D4AF37', '#FFFFFF'], Component: V3BoldStatement },
  { id: 4, name: 'Warm Elegant', desc: 'Emerald & champagne, wedding-focused', colors: ['#0D3B2E', '#D4C5A0', '#FEFDFB'], Component: V4WarmElegant },
  { id: 5, name: 'Editorial', desc: 'Midnight & rose gold, magazine-style', colors: ['#0F1B3D', '#B76E79', '#FAFAF8'], Component: V5Editorial },
]

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a14] text-white px-6">
          <div className="text-center max-w-md">
            <h2 className="font-playfair text-3xl font-bold mb-4">Something went wrong</h2>
            <p className="font-inter text-white/50 mb-6">We're sorry — this design variant failed to load.</p>
            <button onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
              className="bg-[#C9A96E] text-[#0a0a14] font-inter text-sm font-semibold px-8 py-3 rounded-lg cursor-pointer">
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a14]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-playfair text-white/50 text-sm">Loading design...</p>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState(0)
  const [selectorOpen, setSelectorOpen] = useState(true)

  const ActiveComponent = variants[active].Component

  return (
    <div className="relative">
      {/* Variant Selector Toggle */}
      <button
        onClick={() => setSelectorOpen(!selectorOpen)}
        aria-label={selectorOpen ? 'Close design selector' : 'Open design selector'}
        aria-expanded={selectorOpen}
        className="fixed top-4 right-4 z-[100] bg-black/80 backdrop-blur-xl text-white/80 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      </button>

      {/* Variant Selector Panel */}
      <AnimatePresence>
        {selectorOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-16 right-4 z-[100] w-72 bg-black/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Design variant selector"
          >
            <div className="p-4 border-b border-white/5">
              <p className="font-playfair text-white text-sm font-bold">Pretty Potty Designs</p>
              <p className="font-inter text-white/30 text-[10px] mt-0.5">5 unique landing pages</p>
            </div>
            <div className="p-2" role="listbox" aria-label="Select design variant">
              {variants.map((v, i) => (
                <button
                  key={v.id}
                  role="option"
                  aria-selected={i === active}
                  onClick={() => { setActive(i); setSelectorOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer group flex items-center gap-3 ${
                    i === active ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex -space-x-1 shrink-0" aria-hidden="true">
                    {v.colors.map((c, j) => (
                      <div key={j} className="w-5 h-5 rounded-full border border-white/10" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-inter text-xs font-semibold truncate ${i === active ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      V{v.id}: {v.name}
                    </p>
                    <p className="font-inter text-[10px] text-white/25 truncate">{v.desc}</p>
                  </div>
                  {i === active && <div className="ml-auto shrink-0 w-2 h-2 rounded-full bg-[#C9A96E]" aria-hidden="true" />}
                </button>
              ))}
            </div>
            <div className="p-3 pt-1 border-t border-white/5">
              <p className="font-inter text-[9px] text-white/15 text-center">
                Click any design to preview · Built for Pretty Potty Inc.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Page */}
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ActiveComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
