import { Mail, MessageCircle, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="bg-black text-white text-center py-14 px-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Get in <span className="text-[#C9A24B]">Touch</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a question about our programs? Reach out, we'd love to hear
          from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://wa.me/2349035573621"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md hover:border-[#C9A24B]/50 transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#C9A24B]/10 flex items-center justify-center mb-4">
              <MessageCircle className="text-[#C9A24B]" size={28} />
            </div>
            <h3 className="font-display font-bold text-black mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-600">+234 903 557 3621</p>
          </a>

          <a
            href="mailto:aqoc2020@gmail.com"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md hover:border-[#C9A24B]/50 transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#C9A24B]/10 flex items-center justify-center mb-4">
              <Mail className="text-[#C9A24B]" size={28} />
            </div>
            <h3 className="font-display font-bold text-black mb-1">Email</h3>
            <p className="text-sm text-gray-600">aqoc2020@gmail.com</p>
          </a>

          <a
            href="https://www.facebook.com/share/1CECrCvK75/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md hover:border-[#C9A24B]/50 transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#C9A24B]/10 flex items-center justify-center mb-4">
              <span className="font-display text-2xl font-extrabold text-[#C9A24B]">
                f
              </span>
            </div>
            <h3 className="font-display font-bold text-black mb-1">Facebook</h3>
            <p className="text-sm text-gray-600">Follow us for updates</p>
          </a>
        </div>

        <div className="mt-16 bg-black rounded-2xl p-10 text-center">
          <MapPin className="text-[#C9A24B] mx-auto mb-3" size={28} />
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Fully <span className="text-[#C9A24B]">Online</span>
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto">
            AQOC operates entirely online, welcoming students from anywhere in
            the world. All classes are held via WhatsApp, Telegram, Google
            Meet, or Zoom.
          </p>
        </div>
      </div>
    </div>
  )
}