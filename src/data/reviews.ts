export interface Review {
    name: string
    course: string
    quote: string
    gender: 'male' | 'female'
  }
  
  export const reviews: Review[] = [
    {
      name: 'Ademide Martins',
      course: "AQOC Tah'jeeha, 2023",
      quote:
        "AQOC's service is exceptional. I got more than I ever imagined — within a couple of weeks, I observed a transformation I never expected. It was impactful and memorable.",
      gender: 'female',
    },
    {
      name: 'Ummu Aisha',
      course: "AQOC Tah'jeeha & Tajweed, 2022",
      quote:
        "I got more than my expectations. I started as a beginner and can boast of having learnt so many things in the last 13 months. Our Ustadh did the best, from his method of teaching to encouragement and words of admonition. His service is superb.",
      gender: 'female',
    },
    {
      name: 'Adesina Ismaeel',
      course: 'AQOC Tajweed, 2024/25',
      quote:
        "Up till now I couldn't believe an online class could feel so real. I was full of doubts at first, especially about the fees, but after my Tah'jeeha final examination, I was proved wrong. The Tajweed experience beat my imagination. I implore anyone looking to learn or polish their Qur'anic recitation to look no further than AQOC.",
      gender: 'male',
    },
    {
      name: 'Adeleke Aminah',
      course: 'AQOC Tilaawah, 2024',
      quote:
        "AQOC has really helped me build my relationship with the Qur'an in a more positive manner.",
      gender: 'female',
    },
    {
      name: 'Mr. Awwal Toyyib',
      course: 'AQOC Tahfidh, 2023/2024',
      quote:
        'May Allah reward you abundantly. I hope this continues, so Muslims can continue to benefit from this. Looking forward to registering "our unborn AbduRahman."',
      gender: 'male',
    },
    {
      name: 'Ibrahim Ridwanullah',
      course: 'AQOC Tajweed, 2024',
      quote:
        "AQOC is an avenue by which one can accomplish his aim — the aim of becoming a fearless reciter of the glorious Book of Allah, the Qur'an.",
      gender: 'male',
    },
    {
      name: 'Ikeola Rofiat',
      course: "AQOC Tah'jeeha, 2022",
      quote: 'The service was superb. May Allah reward Ustaz and his team.',
      gender: 'female',
    },
    {
      name: 'Albustany',
      course: 'AQOC Tajweed, 2023',
      quote: 'Alhamdulillahi Rabbil Alamin, the service of AQOC is excellent.',
      gender: 'male',
    },
  ]