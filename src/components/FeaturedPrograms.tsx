
import { Link } from 'react-router-dom'

const featured = [
  {
    name: "School of Qur'an Literacy",
    tagline: "The best among you is the one who learns the Qur'an and teaches others.",
    description: "Learn to spell, read, and recite the Qur'an from the very basics.",
  },
  {
    name: "School of Qur'an Memorization",
    tagline: "And We send down of the Qur'an that which is healing and mercy for the believers.",
    description: "Begin or further your journey of memorizing the Glorious Qur'an.",
  },
  {
    name: 'AQOC Kiddies',
    tagline: "Whoever follows a path in pursuit of knowledge, Allah makes easy for him a path to Paradise.",
    description: "A structured Islamic foundation for children age 4 and above.",
  },
  {
    name: 'School of Arabic Proficiency',
    tagline: "Indeed, We have sent it down as an Arabic Qur'an that you might understand.",
    description: 'Master Arabic grammar and comprehension over a 2-year program.',
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="bg-gradient-to-b from-[#C9A24B]/10 via-white to-[#C9A24B]/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-3">
            What We <span className="text-[#C9A24B]">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seven schools of learning, structured to guide every student's Qur'anic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((school) => (
            <div
              key={school.name}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-md transition"
            >
              <h3 className="font-display text-lg font-bold text-[#C9A24B] mb-2 min-h-[3.5rem] flex items-center">
                {school.name}
              </h3>
              <p className="italic text-xs text-gray-500 mb-3 min-h-[3rem]">"{school.tagline}"</p>
              <p className="text-sm text-black flex-1">{school.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-block bg-[#C9A24B] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8923f] transition"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}