import { Suspense, lazy, Component } from 'react'

const V4WarmElegant = lazy(() => import('./pages/V4WarmElegant'))

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF8F3] text-[#3D2418] px-6">
          <div className="text-center max-w-md">
            <h2 className="font-playfair text-3xl font-bold mb-4">Something went wrong</h2>
            <p className="font-inter text-[#7A5C4D] mb-6">We're sorry — please reload the page.</p>
            <button onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
              className="bg-gradient-to-r from-[#C9876D] to-[#D4A0A0] text-white font-inter text-sm font-semibold px-8 py-3 rounded-full cursor-pointer shadow-lg shadow-[#C9876D]/30">
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
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F3]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#C9876D] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-playfair text-[#7A5C4D] text-sm">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <V4WarmElegant />
      </Suspense>
    </ErrorBoundary>
  )
}
