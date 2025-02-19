interface Project {
  name: string
  details: string[]
}

interface ExperienceItem {
  company: string
  position: string
  period: string
  responsibilities: string[]
  projects: Project[]
}

interface ExperienceProps {
  experiences: ExperienceItem[]
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className={index < experiences.length - 1 ? "border-b border-gray-200 pb-4 print:border-none print:pb-0" : ""}>
            <h3 className="font-semibold">{exp.position}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {exp.company} | {exp.period}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 break-after-avoid">Key Projects:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-2">
                {exp.projects.map((project, projectIndex) => (
                  <li key={projectIndex}>
                    <span className="font-medium">{project.name}</span>
                    <ul className="list-none ml-6 mt-1 break-inside-avoid">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>- {detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

