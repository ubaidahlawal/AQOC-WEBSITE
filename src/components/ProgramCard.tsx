import { Link } from 'react-router-dom'
import type { Course } from '../data/program'

interface ProgramCardProps {
  course: Course
}

export default function ProgramCard({ course }: ProgramCardProps) {
  const isComingSoon = course.status === 'coming-soon'

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col min-h-[320px] w-full sm:w-80">
      <h3 className="font-display text-xl font-bold text-black mb-3">{course.name}</h3>
      <div className="flex-1">
        <p className="text-gray-700 text-sm mb-3 line-clamp-4">{course.description}</p>

        <div className="text-sm text-gray-600 space-y-1">
          {course.eligibility && (
            <p>
              <span className="font-semibold text-black">Eligibility: </span>
              {course.eligibility}
            </p>
          )}
          {course.duration && (
            <p>
              <span className="font-semibold text-black">Duration: </span>
              {course.duration}
            </p>
          )}
          {course.schedule && (
            <p className="line-clamp-2">
              <span className="font-semibold text-black">Schedule: </span>
              {course.schedule}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        {isComingSoon ? (
          <div className="bg-gray-100 text-gray-500 text-center py-2 rounded-full text-sm font-medium mb-3">
            Coming Soon
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {course.pricing.map((price, idx) => (
              <div
                key={idx}
                className="bg-[#C9A24B]/10 border border-[#C9A24B]/30 rounded-lg px-3 py-2 text-center w-36"
              >
                <p className="text-xs text-gray-500">{price.type}</p>
                <p className="font-bold text-black text-sm">
                  {price.amount}
                  {price.unit && (
                    <span className="text-[10px] font-normal text-gray-500 block">
                      {price.unit}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}

        {isComingSoon ? (
          <button
            disabled
            className="w-full bg-gray-200 text-gray-400 py-2 rounded-full font-semibold cursor-not-allowed"
          >
            Not Yet Available
          </button>
        ) : (
          <Link
            to="/register"
            className="block text-center w-full bg-[#C9A24B] text-black py-2 rounded-full font-semibold hover:bg-[#b8923f] transition"
          >
            Register Now
          </Link>
        )}
      </div>
    </div>
  )
}