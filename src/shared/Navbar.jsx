
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="top-0 left-0 z-50 w-full px-4">

      <div className="flex justify-between items-center rounded-3xl bg-white shadow-xl p-5 mt-4 w-[95%] max-w-6xl mx-auto">

        <h1 className="font-bold font-serif text-xl">
          PrathameshSurve
          <span className="text-green-400 text-3xl">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base">
          <li><a href="#home" className="text-gray-500 hover:text-slate-900">Home</a></li>
          <li><a href="#about" className="text-gray-500 hover:text-slate-900">About</a></li>
          <li><a href="#skills" className="text-gray-500 hover:text-slate-900">Skills</a></li>
          <li><a href="#projects" className="text-gray-500 hover:text-slate-900">Project</a></li>
          <li><a href="#contact" className="text-gray-500 hover:text-slate-900">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-white shadow-xl rounded-2xl p-5 w-[95%] max-w-6xl mx-auto mt-2">

          <li><a onClick={() => setMenuOpen(false)} href="#home" className="text-gray-500 hover:text-slate-900">Home</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#about" className="text-gray-500 hover:text-slate-900">About</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#skills" className="text-gray-500 hover:text-slate-900">Skills</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#projects" className="text-gray-500 hover:text-slate-900">Project</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contact" className="text-gray-500 hover:text-slate-900">Contact</a></li>

        </ul>
      )}

    </nav>
  )
}

export default Navbar
