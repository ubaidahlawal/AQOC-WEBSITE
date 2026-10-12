// import { useState } from 'react'
// import { schools } from '../data/program'

// export default function Register() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     age: '',
//     gender: '',
//     school: '',
//     course: '',
//     phone: '',
//     email: '',
//   })
//   const [receipt, setReceipt] = useState<File | null>(null)
//   const [submitting, setSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)
//   const [error, setError] = useState('')

//   const selectedSchool = schools.find((s) => s.id === formData.school)

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === 'school' ? { course: '' } : {}),
//     }))
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setReceipt(e.target.files[0])
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitting(true)
//     setError('')

//     try {
//       const data = new FormData()
//       data.append('form-name', 'registration')
//       data.append('fullName', formData.fullName)
//       data.append('age', formData.age)
//       data.append('gender', formData.gender)
//       data.append(
//         'school',
//         selectedSchool ? selectedSchool.name : formData.school
//       )
//       data.append('course', formData.course)
//       data.append('phone', formData.phone)
//       data.append('email', formData.email)
//       if (receipt) {
//         data.append('receipt', receipt)
//       }

//       await fetch('/', {
//         method: 'POST',
//         body: data,
//       })

//       setSubmitted(true)
//     } catch (err) {
//       setError('Something went wrong. Please try again or contact us directly.')
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   if (submitted) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center px-6">
//         <div className="text-center max-w-md">
//           <h2 className="font-display text-3xl font-bold text-black mb-4">
//             Registration <span className="text-[#C9A24B]">Received!</span>
//           </h2>
//           <p className="text-gray-600">
//             JazaakumuLlahu Khayrā for registering. Our team will review your
//             payment and reach out to you shortly to confirm your enrollment.
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="bg-black text-white text-center py-14 px-6">
//         <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
//           Register for a <span className="text-[#C9A24B]">Program</span>
//         </h1>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           Fill out the form below to begin your Qur'anic learning journey with
//           AQOC.
//         </p>
//       </div>

//       <div className="max-w-2xl mx-auto px-6 py-14">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6"
//         >
//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               required
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-semibold text-black mb-1">
//                 Age
//               </label>
//               <input
//                 type="number"
//                 name="age"
//                 required
//                 min={1}
//                 value={formData.age}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-black mb-1">
//                 Gender
//               </label>
//               <select
//                 name="gender"
//                 required
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//               >
//                 <option value="">Select</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               School
//             </label>
//             <select
//               name="school"
//               required
//               value={formData.school}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//             >
//               <option value="">Select a school</option>
//               {schools.map((school) => (
//                 <option key={school.id} value={school.id}>
//                   {school.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               Course
//             </label>
//             <select
//               name="course"
//               required
//               disabled={!formData.school}
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B] disabled:bg-gray-100"
//             >
//               <option value="">
//                 {formData.school ? 'Select a course' : 'Select a school first'}
//               </option>
//               {selectedSchool?.courses.map((course) => (
//                 <option key={course.name} value={course.name}>
//                   {course.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               Phone / WhatsApp Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//             />
//           </div>

//           <div className="bg-[#C9A24B]/10 border border-[#C9A24B]/30 rounded-xl p-5">
//             <h3 className="font-display font-bold text-black mb-2">
//               Payment Details
//             </h3>
//             <p className="text-sm text-gray-700">
//               Account Number: <span className="font-semibold">3082336687</span>
//             </p>
//             <p className="text-sm text-gray-700">
//               Account Name:{' '}
//               <span className="font-semibold">Hamzat Usman Olamide</span>
//             </p>
//             <p className="text-sm text-gray-700">
//               Bank: <span className="font-semibold">First Bank</span>
//             </p>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-black mb-1">
//               Upload Payment Receipt
//             </label>
//             <input
//               type="file"
//               name="receipt"
//               accept="image/*,.pdf"
//               required
//               onChange={handleFileChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
//             />
//           </div>

//           {error && <p className="text-red-600 text-sm">{error}</p>}

//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-[#C9A24B] text-black py-3 rounded-full font-semibold hover:bg-[#b8923f] transition disabled:opacity-50"
//           >
//             {submitting ? 'Submitting...' : 'Submit Registration'}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }





import { useState } from 'react'
import { schools } from '../data/program'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    school: '',
    course: '',
    phone: '',
    email: '',
  })
  const [receipt, setReceipt] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const selectedSchool = schools.find((s) => s.id === formData.school)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'school' ? { course: '' } : {}),
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const data = new FormData()
      data.append('form-name', 'registration')
      data.append('fullName', formData.fullName)
      data.append('age', formData.age)
      data.append('gender', formData.gender)
      data.append(
        'school',
        selectedSchool ? selectedSchool.name : formData.school
      )
      data.append('course', formData.course)
      data.append('phone', formData.phone)
      data.append('email', formData.email)
      if (receipt) {
        data.append('receipt', receipt)
      }

      await fetch('/', {
        method: 'POST',
        body: data,
      })

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h2 className="font-display text-3xl font-bold text-black mb-4">
            Registration <span className="text-[#C9A24B]">Received!</span>
          </h2>
          <p className="text-gray-600">
            JazaakumuLlahu Khayrā for registering. Our team will review your
            payment and reach out to you shortly to confirm your enrollment.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-black text-white text-center py-14 px-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-5">
          Register for a <span className="text-[#C9A24B]">Program</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Fill out the form below to begin your Qur'anic learning journey with
          AQOC.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-14">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                required
                min={1}
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Gender
              </label>
              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              School
            </label>
            <select
              name="school"
              required
              value={formData.school}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            >
              <option value="">Select a school</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Course
            </label>
            <select
              name="course"
              required
              disabled={!formData.school}
              value={formData.course}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B] disabled:bg-gray-100"
            >
              <option value="">
                {formData.school ? 'Select a course' : 'Select a school first'}
              </option>
              {selectedSchool?.courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {formData.course && selectedSchool && (
            <div className="bg-[#C9A24B]/10 border border-[#C9A24B]/30 rounded-lg p-3 text-sm">
              {selectedSchool.courses
                .find((c) => c.name === formData.course)
                ?.pricing.map((price, idx) => (
                  <p key={idx} className="text-gray-700">
                    <span className="font-semibold">{price.type}:</span>{' '}
                    {price.amount}
                    {price.unit && ` ${price.unit}`}
                  </p>
                ))}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
          </div>

          <div className="bg-[#C9A24B]/10 border border-[#C9A24B]/30 rounded-xl p-5">
            <h3 className="font-display font-bold text-black mb-2">
              Payment Details
            </h3>
            <p className="text-sm text-gray-700">
              Account Number: <span className="font-semibold">3082336687</span>
            </p>
            <p className="text-sm text-gray-700">
              Account Name:{' '}
              <span className="font-semibold">Hamzat Usman Olamide</span>
            </p>
            <p className="text-sm text-gray-700">
              Bank: <span className="font-semibold">First Bank</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Upload Payment Receipt
            </label>
            <input
              type="file"
              name="receipt"
              accept="image/*,.pdf"
              required
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#C9A24B] text-black py-3 rounded-full font-semibold hover:bg-[#b8923f] transition disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  )
}