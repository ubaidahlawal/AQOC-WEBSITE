import { Link } from 'react-router-dom'
import heroBgg from '../assets/hero-bgg.jpg'

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center bg-center"
      style={{ backgroundImage: `url(${heroBgg})`,backgroundSize:"120%" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#C9A24B]/40" />

      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-white text-center md:text-left">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Eradicating Qur'anic Illiteracy,{' '}
          <span className="text-[#C9A24B]">Recite. Memorize. Understand.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          AQOC delivers accessible, high-quality Qur'anic and Islamic education online.
          For children and adults, from Qur'anic Spellings to full memorization.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/programs"
            className="bg-[#C9A24B] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8923f] transition"
          >
            Explore Programs
          </Link>
          <Link
            to="/register"
            className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  )
}