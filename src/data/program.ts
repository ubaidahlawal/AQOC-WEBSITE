export interface PricingOption {
    type: string
    amount: string
    unit?: string
    note?: string
  }
  
  export interface Course {
    name: string
    tagline?: string
    description: string
    eligibility?: string
    duration?: string
    schedule?: string
    pricing: PricingOption[]
    status?: 'open' | 'closed' | 'coming-soon'
  }
  
  export interface School {
    id: string
    name: string
    courses: Course[]
  }
  
  export const schools: School[] = [
    {
      id: 'literacy',
      name: "School of Qur'an Literacy - Group",
      courses: [
        {
          name: "AQOC Tah'jeeha",
          tagline: "The best among you is the one who learns the Qur'an and teaches others.",
          description:
            "A spelling course for adults with zero or residual knowledge of Qur'an recitation, starting from scratch (Alif-ba-ta-tha).",
          eligibility: 'Must be Muslim, not less than 10 years old.',
          duration: 'Minimum 3 months (12 weeks)',
          schedule: '3–5 days a week, live sessions on WhatsApp/Telegram',
          pricing: [
            { type: 'One-off', amount: '₦20,000' },
          ],
          status: 'open',
        },
        {
          name: 'AQOC Tajweed',
          description:
            'Learn the basic to major principles guiding proficient recitation of the Qur\'an.',
          eligibility:
            'Must be Muslim, not less than 10 years old. Should have taken Tah\'jeeha or read Arabic/Qur\'anic verses reasonably well before.',
          duration: 'Minimum 3 months (12 weeks)',
          schedule: '3–5 days a week, live sessions on WhatsApp/Telegram',
          pricing: [
            { type: 'One-off', amount: '₦20,000' },
          ],
          status: 'open',
        },
        {
          name: 'AQOC Tilaawah',
          description:
            "Practical, lip-to-lip Tajweed coaching for those who know the theory but still struggle to apply it. Also known as Applied Tajweed.",
          eligibility:
            'Must be Muslim, not less than 10 years old. Should have basic Tajweed knowledge.',
          duration: 'Minimum 6 months, maximum 12 months',
          schedule: '3–5 days a week, live sessions on WhatsApp/Telegram',
          pricing: [{ type: 'Monthly', amount: '₦10,000' }],
          status: 'open',
        },
      ],
    },
    {
      id: 'memorization',
      name: "School of Qur'an Memorization",
      courses: [
        {
          name: 'AQOC Tahfidh Beginners',
          description:
            "For those beginning or furthering memorization, up to 5 Juzu's.",
          eligibility:
            'Must have taken and passed Tajweed and Tilaawah, or be able to satisfactorily read the Qur\'an with Tajweed.',
          duration: 'Maximum 3 years, divided into 9 terms (4 months each)',
          schedule:
            '5 days a week for memorization (max ½ page/day), weekly and monthly muroojaah',
          pricing: [
            { type: 'Group', amount: '₦20,000', unit: 'per term' },
            { type: 'Personal', amount: '₦10,000', unit: 'per month' },
          ],
          status: 'open',
        },
        {
          name: 'AQOC Tahfidh Advanced',
          description:
            "For those beginning or furthering memorization of the complete Qur'an.",
          eligibility:
            "Excellent Qur'an recitation proficiency or Tajweed/Tilaawah course completed. Must have memorized up to 5 Juzu's before.",
          duration: 'Maximum 3 years, divided into 9 terms (4 months each)',
          schedule:
            '5 days a week for memorization (max ½ page/day), weekly and monthly muroojaah',
          pricing: [
            { type: 'Group', amount: '₦20,000', unit: 'per term' },
            { type: 'Personal', amount: '₦10,000', unit: 'per month' },
          ],
          status: 'open',
        },
      ],
    },
    {
      id: 'muroojaah',
      name: "School of Qur'an Muroja'ah",
      courses: [
        {
          name: 'Pre-Ramadan Muroojaah',
          description:
            "A 2-month program for those who've memorized 5+ Juzu's and want to excellently revise before Ramadan.",
          duration: '2 months',
          pricing: [{ type: 'Program Fee', amount: '₦3,000' }],
          status: 'open',
        },
        {
          name: 'AQOC Muroojaah',
          description:
            "For those who've memorized certain Ajzaa's and want to revise before continuing their memorization journey.",
          duration: 'Flexible, based on your commitment and availability',
          pricing: [
            { type: 'Group', amount: '₦5,000', unit: 'per month' },
            { type: 'Personal', amount: '₦10,000', unit: 'per month' },
          ],
          status: 'open',
        },
      ],
    },
    {
      id: 'personal',
      name: 'School of Personal Programs',
      courses: [
        {
          name: 'AQOC Tilaawah (Private)',
          description:
            "One-on-one practical Tajweed recitation coaching with the director or other qualified tutors, for those who already know the theory but want personal guidance.",
          duration: '6–12 months (flexible pace)',
          pricing: [{ type: 'Monthly', amount: '₦30,000' }],
          status: 'open',
        },
        {
          name: 'AQOC Tajweed (Private)',
          description:
            "One-on-one Tajweed proficiency coaching, paced to the student's own progress.",
          duration: 'Flexible, based on your pace',
          pricing: [{ type: 'Monthly', amount: '₦30,000' }],
          status: 'open',
        },
        {
          name: 'AQOC Tajweed Special',
          description:
            'A self-study course for excellent reciters who want to master the theory behind their recitation. Includes recorded audio/video lessons.',
          duration: '2 months maximum',
          pricing: [{ type: 'One-off', amount: '₦30,000' }],
          status: 'open',
        },
      ],
    },
    {
      id: 'arabic',
      name: 'School of Arabic Proficiency',
      courses: [
        {
          name: 'AQOC Arobiyyah Class (AAC)',
          description:
            "A 2-year Arabic program for beginners and intermediate students, covering Arobiyyah, Nahw, and Sarf.",
          eligibility:
            "Should be able to read the Qur'an averagely with Tajweed and have memorized at least 1 Juzu.",
          duration: '2 years',
          schedule: '3 days a week',
          pricing: [
            { type: 'Termly', amount: '₦80,000', unit: 'per term' },
            { type: 'Monthly (Group)', amount: '₦20,000', unit: 'per month' },
            { type: 'Personal', amount: '₦30,000', unit: 'per month' },
          ],
          status: 'open',
        },
      ],
    },
    {
      id: 'kiddies',
      name: 'AQOC Kiddies',
      courses: [
        {
          name: 'AQOC Kiddies',
          description:
            "Islamic education for children age 4+, covering Qur'an recitation and memorization, Hadith, Adhkaar, and general Islamic knowledge.",
          duration: 'Minimum 3 years',
          schedule: 'Live one-on-one sessions via Telegram, Google Meet, or WhatsApp',
          pricing: [
            {
              type: 'Termly',
              amount: '₦160,000',
              unit: 'per term, per kid',
              note: '1 term = 4 months (≈ ₦40,000/month per kid)',
            },
          ],
          status: 'open',
        },
      ],
    },
    {
      id: 'adults',
      name: 'AQOC Adults',
      courses: [
        {
          name: 'AQOC Adults',
          description:
            "A comprehensive Islamic education program for adults (18+), mirroring the AQOC Kiddies curriculum.",
          pricing: [],
          status: 'coming-soon',
        },
      ],
    },
  ]