interface EducationProps {
  degree: string
  institution: string
  graduationYear: number
}

export function Education({ degree, institution, graduationYear }: EducationProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
      <h2 className="font-semibold">{degree}</h2>
      <p className="text-sm text-gray-600">
        {institution} | Graduated {graduationYear}
      </p>
    </div>
  )
}

