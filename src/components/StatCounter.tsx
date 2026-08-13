import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: number
  label: string
  suffix?: string
}

export default function StatCounter({ target, label, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-extrabold text-[#C9A24B]">
        {count}
        {suffix}
      </p>
      <p className="text-gray-600 mt-2 text-sm md:text-base">{label}</p>
    </div>
  )
}