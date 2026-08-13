import { Link } from 'react-router-dom'
import cert1 from '../assets/cert-1.jpeg'
import cert2 from '../assets/cert-2.jpeg'

const highlights = [
  {
    title: "Qur'an Graduates",
    description: 'Adults who have completed (or are close to completing) full memorization of the Glorious Qur\'an and are currently in revision.',
  },
  {
    title: 'Young Promising Huffaz',
    description: 'Children aged 8–10 who have memorized 5+ Ajzaa\' and can recite confidently with proper Tajweed.',
  },
  {
    title: 'Tajweed Experts',
    description: 'Students, both kids and adults, who can perform detailed Tajweed analysis of Qur\'anic verses.',
  },
  {
    title: 'Community Representatives',
    description: 'AQOC students who have represented their communities in local and international Qur\'anic competitions and achieved excellence.',
  },
]

export default function Achievements() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-4">
            Our <span className="text-[#C9A24B]">Story</span>
          </h2>
          <p className="text-gray-600">
            Founded on 19th February 2020, Alhusmany Qur'anic Online Classes (AQOC)
            began with a single student in our Tah'jeeha/Spellings Department. By the
            grace of Allah, we have grown into a thriving online institute serving
            children from age 4 and adults across the globe. We are now home to <span className='text-[#C9A24B]'>7</span> core
            departments and having taught over <span className='text-[#C9A24B]'>200</span> students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-black border border-gray-200 rounded-2xl p-6 text-center"
            >
              <h3 className="font-display font-bold text-[#C9A24B] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-black mb-2">
            Real Certificates, <span className="text-[#C9A24B]">Real Results</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every AQOC student who completes a course receives a certificate of
            recognition for their dedication and progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-6 sm:px-0">
          <img
            src={cert1}
            alt="AQOC certificate of completion sample"
            className="rounded-xl shadow-md border border-gray-200 max-w-xs mx-auto sm:max-w-none sm:w-full"
          />
          <img
            src={cert2}
            alt="AQOC certificate of completion sample"
            className="rounded-xl shadow-md border border-gray-200 max-w-xs mx-auto sm:max-w-none sm:w-full"
          />
        </div>
        <div className="text-center mt-8">
       <Link
       to="/about"
       className="inline-block border border-[#C9A24B] text-[#C9A24B] px-6 py-2 rounded-full font-semibold hover:bg-[#C9A24B] hover:text-black transition"
      >
      View All Certificates
     </Link>
    </div>
      </div>
    </section>
  )
}