import { useEffect, useRef, useState } from 'react'

/**
 * Returns a 0–1 progress value representing how far the user has scrolled
 * through the element referenced by `ref`. Used by the Process timeline.
 */
export function useScrollProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function update() {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight

      // Start filling when top of element enters the viewport bottom
      // Finish filling when bottom of element reaches viewport top
      const start = rect.top - windowH * 0.8
      const end = rect.bottom - windowH * 0.2
      const total = end - start
      const scrolled = -start

      const pct = Math.max(0, Math.min(1, scrolled / total))
      setProgress(pct)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return { ref, progress }
}
