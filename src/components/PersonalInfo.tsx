interface PersonalInfoProps {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
}

export function PersonalInfo({ name, title, email, phone, location, linkedin }: PersonalInfoProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      <p className="text-lg text-gray-600">{title}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>
          {email} | {phone}
        </p>
        <p>
          {location} | LinkedIn: {linkedin}
        </p>
      </div>
    </div>
  )
}

