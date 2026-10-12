
import { videoTestimonials } from '../data/videos'

export default function VideoTestimonials() {
  if (videoTestimonials.length === 0) return null

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-10">
          Hear From Our <span className="text-[#C9A24B]">Students</span>
        </h2>

        <div
          className={`grid grid-cols-1 ${
            videoTestimonials.length > 1 ? 'md:grid-cols-2' : ''
          } gap-8 justify-items-center`}
        >
          {videoTestimonials.map((videoId) => (
            <div
              key={videoId}
              className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden border border-[#C9A24B]/30 shadow-sm"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="AQOC student testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}