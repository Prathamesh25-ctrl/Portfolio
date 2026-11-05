
import { Code2, GraduationCap, GraduationCapIcon, Mail, MapPin, MapPinCheck } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <section
  id="about"
  className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 py-20"
>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* About Me Section */}
        <div className="flex flex-col gap-5">

          <h1 className="text-gray-500 tracking-widest uppercase text-sm font-semibold">
            About Me
          </h1>

          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug">
            Passionate about building modern and
             user-friendly web experiences
          </h2>

          <p className="font-serif text-gray-500 text-base leading-8">

            Hello! I'm Prathamesh Surve, an aspiring Frontend Developer
            from Thane, Maharashtra, with a passion for web development,
            creative problem-solving, and learning new technologies.

            <br /><br />

            I have hands-on experience in building responsive and
            interactive web applications using HTML, CSS, JavaScript,
            React.js, Bootstrap, and Tailwind CSS. I enjoy transforming
            ideas into clean, modern, and user-friendly interfaces.

            <br /><br />

            Currently, I'm pursuing Full Stack Java training at
            QuickXpert Infotech, where I'm expanding my knowledge
            of Java, SQL, and backend development.

            <br /><br />

            My goal is to become a skilled developer, work on
            real-world projects, and continuously grow in the tech industry.

          </p>
        </div>


        {/* Quick Facts Section */}
        <div className="flex justify-center lg:justify-end">

          <div className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-lg transition duration-300">

            <h1 className="text-2xl font-bold font-serif mb-7">
              Quick Facts
            </h1>

            <div className="flex flex-col gap-6">

              {/* Education */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <GraduationCapIcon size={23} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    Education
                  </h2>
                  <p className="text-sm text-gray-500">
                    12th Science
                  </p>
                </div>
              </div>


              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl ">
                  <MapPinCheck size={23} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    Location
                  </h2>
                  <p className="text-sm text-gray-500">
                    Thane, Maharashtra, India
                  </p>
                </div>
              </div>


              {/* Career */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl ">
                  <Code2 size={23} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    Career
                  </h2>
                  <p className="text-sm text-gray-500">
                    Aspiring Frontend Developer
                  </p>
                </div>
              </div>


              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl ">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-semibold text-gray-800">
                    Email
                  </h2>
                  <p className="text-sm text-gray-500 break-all">
                    surve1820@gmail.com
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
