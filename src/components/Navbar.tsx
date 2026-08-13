import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className="bg-black text-white px-6 md:px-12 py-4 relative">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="font-bold text-lg text-[#C9A24B] font-display text-xl ">AQOC</span>
        </Link>

        <div className="hidden md:flex gap-15 absolute left-[47%] -translate-x-1/2">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[#C9A24B]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4 ml-auto mr-5">
          <Link
            to="/register"
            className="bg-[#C9A24B] text-black px-5 py-2 rounded-full font-medium hover:bg-[#b8923f] transition"
          >
            Register
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[#C9A24B]" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="bg-[#C9A24B] text-black px-5 py-2 rounded-full font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/contact"
            className="bg-white text-black px-5 py-2 rounded-full font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}