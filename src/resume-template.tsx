import { PersonalInfo } from "./components/PersonalInfo"
import { Summary } from "./components/Summary"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import resumeContent from "./resume-content.json"

export default function ResumeTemplate() {
  return (
    <div className="bg-white min-h-screen p-4 md:p-8 print:p-0 print:bg-white">
      <div className="max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none print:max-w-full">
        <div className="p-6 md:p-8 print:p-4">
          <PersonalInfo {...resumeContent.personalInfo} />
          <Summary content={resumeContent.summary} />

          {/* Regular screen layout */}
          <div className="md:flex md:gap-6 print:block">
            {/* Skills section - moves to top in print layout */}
            <div className="md:w-1/3 md:order-2 print:w-full print:mb-6">
              <Skills skills={resumeContent.skills} />
            </div>

            {/* Main content */}
            <div className="md:w-2/3 md:order-1 print:w-full">
              <Experience experiences={resumeContent.experience} />
              <Education {...resumeContent.education} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

