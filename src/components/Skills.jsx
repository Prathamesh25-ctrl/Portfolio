
import React from 'react'
import { Code2, Server, Database } from 'lucide-react'

function Skills() {

  const skillsData = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: Code2,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Bootstrap",
        "Tailwind CSS"
      ]
    },

    {
      title: "Backend Development",
      description: "Learning backend programming and application development.",
      icon: Server,
      skills: [
        "Core Java",
        "OOP Concepts",
        "JDBC",
        "Servlets",
        "JSP",
        "Spring Boot"
      ]
    },

    {
      title: "Database & Tools",
      description: "Working with databases and development tools.",
      icon: Database,
      skills: [
        "MySQL",
        "SQL",
        "Oracle SQL",
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse"
      ]
    }
  ]

  return (
    <div id="skills" className="scroll-mt-24 flex flex-col mb-10 gap-10 py-16 px-6">

      {/* Heading */}
      <div className='max-w-6xl mx-auto w-full flex flex-col gap-4'>
        <h1 className='text-gray-500 tracking-widest uppercase text-sm'>
          Expertise
        </h1>

        <h2 className='text-4xl font-serif font-bold'>
          Skills And Technologies
        </h2>
      </div>

      {/* Cards */}
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {skillsData.map((item, index) => {

          const Icon = item.icon

          return (
            <div
              key={index}
              className='bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-5 hover:shadow-xl hover:-translate-y-2 transition duration-300'
            >

              {/* Icon */}
              <div className='w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm'>
                <Icon size={24} strokeWidth={2} />
              </div>

              {/* Title */}
              <h4 className='font-semibold text-xl text-slate-900'>
                {item.title}
              </h4>

              {/* Description */}
              <p className='text-sm text-gray-500'>
                {item.description}
              </p>

              {/* Skills */}
              <div className='flex flex-wrap gap-2 text-xs font-medium'>

                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-600'
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Skills
