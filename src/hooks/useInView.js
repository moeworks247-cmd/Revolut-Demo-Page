import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once !== false) observer.disconnect()
        } else if (!options.once) {
          setInView(false)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.once, options.threshold, options.rootMargin])

  return [ref, inView]
}

export function useCountUp(end, duration = 2000, active = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [end, duration, active])

  return value
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
