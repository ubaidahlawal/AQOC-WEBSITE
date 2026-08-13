
import { Mail, ExternalLink, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-[#C9A24B] font-bold text-lg mb-2 font-display">AQOC</h3>
          <p className="text-sm text-gray-300">
            Alhusmany Qur'aanic Online Class — Eradicating Qur'anic Illiteracy.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#C9A24B]">Home</Link></li>
            <li><Link to="/programs" className="hover:text-[#C9A24B]">Programs</Link></li>
            <li><Link to="/about" className="hover:text-[#C9A24B]">About</Link></li>
            <li><Link to="/register" className="hover:text-[#C9A24B]">Register</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9A24B]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#C9A24B]" />
              <a href="https://wa.me/2349035573621" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A24B]">
                +234 903 557 3621
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#C9A24B]" />
              <a href="mailto:alhusmany2020@gmail.com" className="hover:text-[#C9A24B]">
                alhusmany2020@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink size={16} className="text-[#C9A24B]" />
              <a href="https://www.facebook.com/share/1CECrCvK75/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A24B]">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 AQOC. All rights reserved.
      </div>
    </footer>
  )
}