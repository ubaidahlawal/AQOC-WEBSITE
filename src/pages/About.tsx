import cert1 from '../assets/cert-7.jpeg'
import cert2 from '../assets/cert-6.jpeg'
import cert3 from '../assets/cert-4.jpeg'
import cert4 from '../assets/cert-3.jpeg'
import cert5 from '../assets/cert-5.jpeg'
import cert6 from '../assets/cert-8.jpeg'
import DirectorSection from '../components/DirectorSection'

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6]

export default function About() {
  return (
    <div className="bg-white">
  
      <div className="bg-black text-white text-center py-14 px-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          About <span className="text-[#C9A24B]">AQOC</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn more about our mission, our journey, our Director, and the students we've had
          the honor of teaching.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className=' border border-gray-200 rounded-2xl p-8 flex flex-col justify-center 
        bg-gradient-to-b from-[#C9A24B]/10 via-white to-[#C9A24B]/10 border border-[#C9A24B]/30'>
          <h2 className="font-display text-2xl font-bold text-[#C9A24B] mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To be the trusted online home where Muslim children and adults begin,
            grow, and excel in their Qur'anic and Islamic journey.
          </p>
        </div>
        <div className='border border-gray-200 rounded-2xl p-8 flex flex-col justify-center
         bg-gradient-to-b from-[#C9A24B]/10 via-white to-[#C9A24B]/10 border border-[#C9A24B]/30'>
          <h2 className="font-display text-2xl font-bold text-[#C9A24B] mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700">
            AQOC is dedicated to delivering accessible, high-quality Qur'anic and
            Islamic education online. We offer age-appropriate classes in
            Qur'anic Spellings, Tilawah, Hifz, Hadith, Adhkaar, Arabic Language,
            and General Islamic Studies. Our aim is to produce learners who
            recite correctly, memorize perfectly, understand deeply, and live by
            Islamic values.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-black mb-6">
            Our <span className="text-[#C9A24B]">Story</span>
          </h2>
          <p className="text-gray-700 mb-4 text-left">
            Founded on 19th February 2020, Alhusmany Qur'anic Online Classes
            (AQOC) began with a single student in our Tah'jeeha/Spellings
            Department. By the grace of Allah, we have grown into a thriving
            online institute serving children from age 4 and adults across the
            globe. We are now home to{' '}
            <span className="text-[#C9A24B] font-semibold">7</span> core
            departments and having taught over{' '}
            <span className="text-[#C9A24B] font-semibold">200</span> students.
          </p>
          <p className="text-gray-700 text-left">
            To support consistent spiritual growth, we run specialized flagship
            programs alongside our core departments — including our{' '}
            <span className="font-semibold">Holiday Coaching Program</span>,
            offering intensive Qur'an and Islamic studies during school breaks,
            and our{' '}
            <span className="font-semibold">Pre-Ramadan Muroja'ah</span>{' '}
            program, a structured revision and preparation program before the
            month of Ramadan. We continue to strive for excellence in nurturing
            hearts upon the Qur'an.
          </p>
        </div>
      </div>

      <DirectorSection/>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-extrabold text-black mb-3">
            Certificates of <span className="text-[#C9A24B]">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse at some of our students' achievements and completed
            milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <img
              key={idx}
              src={cert}
              alt={`AQOC student certificate ${idx + 1}`}
              className="rounded-xl shadow-md border border-gray-200 w-full h-auto max-w-sm mx-auto sm:max-w-none"
            />
          ))}
        </div>
      </div>
    </div>
  )
}