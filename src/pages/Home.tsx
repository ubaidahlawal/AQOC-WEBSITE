import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import FeaturedPrograms from "../components/FeaturedPrograms";
import ReviewsCarousel from "../components/ReviewsCarousel";
import VideoTestimonials from "../components/VideoTestimonials";
import Achievements from "../components/Achievements";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
    return (
      <div>
        <Hero />
        <StatsBar/>
        <FeaturedPrograms/>
        <ReviewsCarousel/>
        <VideoTestimonials/>
        <Achievements/>
        <CtaBanner/>
      </div>
    )
  }