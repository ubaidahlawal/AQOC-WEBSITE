import Hero from "../components/Hero"
import StatsBar from "../components/StatsBar"
import FeaturedPrograms from "../components/FeaturedPrograms"
import Achievements from "../components/Achievements"
import CtaBanner from "../components/CtaBanner"

export default function Home() {
    return (
      <div>
        <Hero />
        <StatsBar/>
        <FeaturedPrograms/>
        <Achievements/>
        <CtaBanner/>
      </div>
    )
  }