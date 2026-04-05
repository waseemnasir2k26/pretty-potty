import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const dirs = { up: { y: 40 }, down: { y: -40 }, left: { x: 40 }, right: { x: -40 } }
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

export function ParallaxImg({ src, alt, className = '', speed = 0.3 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt}
        className="w-full h-[120%] object-cover"
        style={{ y: 0 }}
        whileInView={{ y: `-${speed * 100}%` }}
        transition={{ duration: 0 }}
      />
    </div>
  )
}

export const IMG = {
  hero1: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80&fit=crop',
  hero2: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80&fit=crop',
  hero3: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80&fit=crop',
  hero4: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80&fit=crop',
  hero5: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80&fit=crop',
  bath1: 'https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath2: 'https://images.pexels.com/photos/6920614/pexels-photo-6920614.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath3: 'https://images.pexels.com/photos/7031565/pexels-photo-7031565.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath4: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath5: 'https://images.pexels.com/photos/7045761/pexels-photo-7045761.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath6: 'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=800',
  bath7: 'https://images.pexels.com/photos/5629141/pexels-photo-5629141.jpeg?auto=compress&cs=tinysrgb&w=800',
  wedding1: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=800',
  wedding2: 'https://images.pexels.com/photos/12876404/pexels-photo-12876404.jpeg?auto=compress&cs=tinysrgb&w=800',
  wedding3: 'https://images.pexels.com/photos/15242526/pexels-photo-15242526.jpeg?auto=compress&cs=tinysrgb&w=800',
  wedding4: 'https://images.pexels.com/photos/16120135/pexels-photo-16120135.jpeg?auto=compress&cs=tinysrgb&w=800',
  outdoor1: 'https://images.pexels.com/photos/28976226/pexels-photo-28976226.jpeg?auto=compress&cs=tinysrgb&w=800',
  event1: 'https://images.pexels.com/photos/19351552/pexels-photo-19351552.jpeg?auto=compress&cs=tinysrgb&w=800',
  nyc1: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80&fit=crop',
  luxury1: 'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=1920',
  portapotty: 'https://images.unsplash.com/photo-1527359443443-5c0ae87ec720?w=600&q=80&fit=crop',
}
