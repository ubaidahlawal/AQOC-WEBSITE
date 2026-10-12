
import avatar from '../assets/director-avatar.jpg'

export default function DirectorSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-3">
            Meet the <span className="text-[#C9A24B]">Director</span>
          </h2>
          <p className="text-gray-600">
            The founder and guiding scholar behind AQOC.
          </p>
        </div>

        <div className="bg-white border border-[#C9A24B]/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src={avatar}
              alt="Mal. Hazmat Usman Olamide, Director of AQOC"
              className="w-40 h-40 rounded-full object-cover border-4 border-[#C9A24B]/30"
            />
            <p className="text-center font-display font-bold text-black mt-4">
              Mal. Hazmat Usman Olamide
            </p>
            <p className="text-center text-sm text-[#C9A24B] font-semibold">
              Founder &amp; Director, AQOC
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-bold text-black mb-2">
                Islamic Education
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mal. Hazmat Usman Olamide is currently pursuing a Master's
                degree in Islamic Studies at the Islamic University of
                Minnesota (Distance Learning), having earned his B.A. in
                Islamic Studies from the same institution in 2026. He holds a
                Diploma in Arabic and Islamic Studies from ZAD Online Academy
                (2022), and completed his Thanawiyyah at Darul Hadith, Gbagi,
                Ibadan, in 2018.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                He completed the full memorization of the Glorious Qur'an at
                Mahdul Arabiyy, Elekuro, Ibadan, in 2017, and is a 2026
                graduate of the Tajweed Department at Madhu Zakariyya (Zakariyya
                Institute of Qur'an Memorization and Arabic Studies), Oja'ba,
                Ibadan. He is currently furthering his studies in the Qira'aat
                Department (Science of Recitation) at the same institute.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-black mb-2">
                Academic Background
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Alongside his Islamic education, he holds a B.Tech in Geology
                from the Federal University of Technology, Minna (FUTMINNA),
                2023, and a National Diploma in Geology from The Polytechnic,
                Ibadan (2016).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}