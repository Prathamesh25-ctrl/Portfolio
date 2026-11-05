
import React from 'react'
import { ExternalLink,  FolderCode, Code2 } from 'lucide-react'

function Project() {

  const projectData = [
    {
      title: "Weather App",
      description:
        "Responsive weather application that displays real-time weather information using a weather API.",
      image: "../weather.png",
      technologies: ["React.js", "Tailwind CSS", "API"],
      liveLink: "https://weather-appsreact.netlify.app/",
      githubLink: "https://github.com/Prathamesh25-ctrl/Weather-app"
    },
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce website with product listings, shopping cart and checkout interface.",
      image: "../e-comm.png",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      liveLink: "https://e-commerece-webapp.netlify.app/",
      githubLink: "https://github.com/Prathamesh25-ctrl/quick-cart"
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracking application to manage daily income and expenses with a clean interface.",
      image: "/expense.png",
      technologies: ["React.js", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    }
  ]

  return (
    <section id="projects" className="w-full">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className=" mb-14 space-y-3">
          <p className="text-sm uppercase tracking-[4px] text-gray-400 font-semibold">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">
            Featured Projects
          </h2>

          <p className="text-gray-500  mx-auto text-sm md:text-base">
            Here are some projects I've built using modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">

                <div className="flex items-center justify-between">
                  <FolderCode size={25} className="" />

                  <span className="text-xs text-gray-400">
                    Project 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-2 rounded-lg bg-blue-50 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-3">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-600 transition"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Code2 size={19} />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project;
