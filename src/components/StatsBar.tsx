import StatCounter from "./StatCounter"

export default function StatsBar() {
    return (
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCounter target={200} suffix="+" label="Students Taught" />
          <StatCounter target={7} label="Departments" />
          <StatCounter target={2020} label="Founded" />
        </div>
      </section>
    )
  }