import React from "react";
import Ravi from "./ravi.png";
import { FiUser } from "react-icons/fi";
import { IoCodeSlash, IoCalendarClearOutline } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineViewQuilt } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { CiMobile3, CiStar } from "react-icons/ci";
import { LuFolderOpen } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";

function About() {
  return (
    <section id="about" className="py-20 px-4 text-slate-800 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Main About Layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Left Column: Photo & Tag */}
          <div className="w-full md:w-5/12 relative group">
            <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/90 via-blue-50/50 to-white/80 border border-white/90 backdrop-blur-xl shadow-2xl glow-blue">
              <img
                src={Ravi}
                alt="Ravi Pandey"
                className="w-full rounded-2xl filter drop-shadow-xl transform group-hover:scale-102 transition duration-300"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 border border-white/90 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-xl text-white shadow-md shadow-blue-500/25">
                <FiUser />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">Ravi Pandey</p>
                <p className="text-blue-600 text-xs font-semibold">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Highlight Cards */}
          <div className="w-full md:w-7/12 flex flex-col justify-center items-start pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
              About Me
            </div>

            <h2 className="text-slate-900 font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight">
              A Passionate <span className="text-gradient">Full Stack Developer</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
              I specialize in creating modern, responsive, and scalable web applications using React, Node.js, Express, and MongoDB. I enjoy turning complex problems into intuitive, sleek user interfaces and robust APIs.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-6">
              <motion.div
                className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 hover:border-blue-300/60"
                whileHover={{ y: -3 }}
              >
                <div className="text-blue-600 text-2xl mb-2">
                  <IoCodeSlash />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-slate-800">MERN Stack</p>
                  <p className="text-xs text-slate-500">React & Node</p>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 hover:border-blue-300/60"
                whileHover={{ y: -3 }}
              >
                <div className="text-blue-600 text-2xl mb-2">
                  <MdOutlineViewQuilt />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-slate-800">Clean UI/UX</p>
                  <p className="text-xs text-slate-500">Modern Design</p>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 hover:border-blue-300/60"
                whileHover={{ y: -3 }}
              >
                <div className="text-blue-600 text-2xl mb-2">
                  <SlEnergy />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-slate-800">Performance</p>
                  <p className="text-xs text-slate-500">Fast & Scalable</p>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 hover:border-blue-300/60"
                whileHover={{ y: -3 }}
              >
                <div className="text-blue-600 text-2xl mb-2">
                  <CiMobile3 />
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-slate-800">Responsive</p>
                  <p className="text-xs text-slate-500">Mobile First</p>
                </div>
              </motion.div>
            </div>

            {/* Stat Counter Boxes */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 text-center">
                <div className="text-blue-600 text-lg mb-1">
                  <IoCalendarClearOutline />
                </div>
                <p className="font-extrabold text-2xl text-slate-900">1+</p>
                <p className="text-xs text-slate-500">Years Exp</p>
              </div>

              <div className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 text-center">
                <div className="text-blue-600 text-lg mb-1">
                  <LuFolderOpen />
                </div>
                <p className="font-extrabold text-2xl text-slate-900">20+</p>
                <p className="text-xs text-slate-500">Projects Done</p>
              </div>

              <div className="glass-card p-4 flex flex-col items-center justify-center rounded-2xl border border-white/90 text-center">
                <div className="text-blue-600 text-lg mb-1">
                  <CiStar />
                </div>
                <p className="font-extrabold text-2xl text-slate-900">100%</p>
                <p className="text-xs text-slate-500">Commitment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Education</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              My <span className="text-gradient">Journey</span>
            </h3>
            <p className="text-slate-500 text-sm max-w-md mt-1">Academic background and continuous learning path</p>
          </div>

          <div className="w-full max-w-4xl flex flex-col gap-6">
            <motion.div
              className="glass-card p-6 rounded-3xl border border-white/90 hover:border-blue-300/60 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="text-3xl p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md shadow-blue-500/25 flex-shrink-0">
                  <IoIosSchool />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap justify-between items-center w-full gap-2">
                    <h4 className="text-xl font-bold text-slate-900">B.Tech Computer Science & Engineering</h4>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200/80 rounded-full px-3 py-0.5 text-xs font-bold">
                      2025 - 2029
                    </span>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">University of Lucknow</div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Studying core computer science topics including algorithms, database management, software engineering principles, and web architectures.
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
                    <span className="text-blue-600 text-xs font-semibold">Currently Enrolled</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-3xl border border-white/90 hover:border-blue-300/60 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="text-3xl p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md shadow-blue-500/25 flex-shrink-0">
                  <FaSchool />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap justify-between items-center w-full gap-2">
                    <h4 className="text-xl font-bold text-slate-900">Class XII - Science</h4>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200/80 rounded-full px-3 py-0.5 text-xs font-bold">
                      2025
                    </span>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">Shia Intermediate School</div>
                  <p className="text-slate-600 text-sm">Completed higher secondary education focusing on Mathematics and Computer Applications with distinction.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 rounded-3xl border border-white/90 hover:border-blue-300/60 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="text-3xl p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md shadow-blue-500/25 flex-shrink-0">
                  <LiaSchoolSolid />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap justify-between items-center w-full gap-2">
                    <h4 className="text-xl font-bold text-slate-900">Class X - Secondary Education</h4>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200/80 rounded-full px-3 py-0.5 text-xs font-bold">
                      2023
                    </span>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">Brilliant Convent School</div>
                  <p className="text-slate-600 text-sm">Achieved 87% score while cultivating strong problem-solving and logical foundation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
