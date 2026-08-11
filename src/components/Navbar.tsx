// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
//       <Link to="/" className="font-bold text-lg text-[#C9A24B]">
//         AQOC
//       </Link>
//       <div className="flex gap-6">
//         <Link to="/" className="hover:text-[#C9A24B]">Home</Link>
//         <Link to="/programs" className="hover:text-[#C9A24B]">Programs</Link>
//         <Link to="/about" className="hover:text-[#C9A24B]">About</Link>
//         <Link to="/register" className="hover:text-[#C9A24B]">Register</Link>
//         <Link to="/contact" className="hover:text-[#C9A24B]">Contact</Link>
//       </div>
//     </nav>
//   )
// }



import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/about', label: 'About' },
    { to: '/register', label: 'Register' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-black text-white px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-[#C9A24B]" onClick={() => setIsOpen(false)}>
          AQOC
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[#C9A24B]">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-[#C9A24B]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}