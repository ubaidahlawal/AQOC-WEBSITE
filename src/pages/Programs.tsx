import { useState } from 'react'
import { schools } from '../data/program'
import ProgramCard from '../components/ProgramCard'

export default function Programs() {
  const [activeSchool, setActiveSchool] = useState(schools[0].id)
  const currentSchool = schools.find((s) => s.id === activeSchool)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-black text-white text-center py-14 px-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Our <span className="text-[#C9A24B]">Programs</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our 7 schools of learning, each designed to guide you or your
          child through a structured Qur'anic and Islamic education journey.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap gap-3 justify-center">
        {schools.map((school) => (
          <button
            key={school.id}
            onClick={() => setActiveSchool(school.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeSchool === school.id
                ? 'bg-[#C9A24B] text-black'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-[#C9A24B]'
            }`}
          >
            {school.name}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-wrap gap-6 justify-center items-stretch">
        {currentSchool?.courses.map((course, idx) => (
          <ProgramCard key={idx} course={course} />
        ))}
      </div>
    </div>
  )
}