import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className=" py-16 px-6 text-center bg-gradient-to-b from-[#C9A24B]/10 via-white to-[#C9A24B]/10">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-4">
        Ready to Begin Your <span className="text-[#C9A24B]">Qur'anic Journey?</span>
      </h2>
      <p className="text-black max-w-xl mx-auto mb-8">
        Join hundreds of students worldwide learning to recite, memorize, and
        understand the Glorious Qur'an with AQOC.
      </p>
      <Link
        to="/register"
        className="inline-block bg-[#C9A24B] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8923f] transition"
      >
        Register Now
      </Link>
    </section>
  )
}