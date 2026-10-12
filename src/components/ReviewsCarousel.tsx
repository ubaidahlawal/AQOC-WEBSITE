import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews } from '../data/reviews'
import avatarMale from '../assets/avatar-male.jpg'
import avatarFemale from '../assets/avatar-female.jpg'

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const current = reviews[index]
  const avatar = current.gender === 'male' ? avatarMale : avatarFemale

  return (
    <section className="bg-[#C9A24B]/5 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-10">
          What Our <span className="text-[#C9A24B]">Students Say</span>
        </h2>

        <div className="bg-gray-50 border border-[#C9A24B]/30 rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col items-center justify-center">
          <img
            src={avatar}
            alt={current.name}
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#C9A24B]/30"
          />
          <p className="text-gray-700 italic text-base md:text-lg mb-6 max-w-xl">
            "{current.quote}"
          </p>
          <p className="font-display font-bold text-black">{current.name}</p>
          <p className="text-sm text-[#C9A24B] font-semibold">
            {current.course}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#C9A24B] hover:text-[#C9A24B] transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? 'bg-[#C9A24B] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#C9A24B] hover:text-[#C9A24B] transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}