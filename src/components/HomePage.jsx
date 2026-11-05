
import React from 'react'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Project from './Project'

function HomePage() {
    return (
        <>
            <section id="home" className='flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center mt-10 mx-auto px-5 md:ml-9 py-10'>

                {/* left part start here */}
                <div className='w-full md:w-auto'>

                    <div className="inline-flex mb-4 items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Available for new opportunities
                    </div>

                    <div className='flex flex-col gap-4'>

                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                            Hi,I'm Prathamesh.
                        </h1>

                        <h2 className='text-4xl sm:text-5xl md:text-6xl text-gray-500 font-serif'>
                            Frontend Developer.
                        </h2>

                        <p className='text-sm sm:text-base'>
                            I build clean, robust, and user-centric web applications with modern technologies.
                            <br />
                            Focused on performance, simplicity, and clean code architecture.
                        </p>

                    </div>

                    <div className='mt-4 flex flex-wrap gap-4'>

                        <a href="#projects" className='p-3 bg-black rounded-2xl text-white font-sans'>
                            View-Project <span className='font-bold'>→</span>
                        </a>

                        <a href="#contact" className='p-3 bg-gray-200 text-gray rounded-2xl'>
                            Contact Me
                        </a>

                    </div>

                </div>
                {/* left part end here */}

                {/* right Side start here */}
                <div className='w-full md:w-auto flex justify-center'>

                    <div className='w-60 sm:w-72 md:w-80'>
                        <img
                            className='w-full rounded-xl shadow-2xl'
                            src="/self.jpeg"
                            alt="Prathamesh"
                        />
                    </div>

                </div>
                {/* right Side end here */}

            </section>

            <div className='flex flex-col'>

                <div>
                    <About />
                </div>

                <div>
                    <Skills />
                </div>

                <div>
                    <Project />
                </div>

                <div>
                    <Contact />
                </div>

            </div>

        </>
    )
}

export default HomePage
