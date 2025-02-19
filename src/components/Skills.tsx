interface SkillsProps {
  skills: string[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
      <ul className="space-y-1 print:space-y-0 print:flex print:flex-wrap print:gap-x-4">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm text-gray-600">
            <span className="print:hidden">• </span>{skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

