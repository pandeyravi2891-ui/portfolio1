import React from "react";
import Ravi from "./ravi.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Main() {
  return (
    <section id="home" className="flex flex-col justify-center items-center py-12 md:py-24 relative px-4 text-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-[140px] pointer-events-none"></div>

      <motion.div
        className="w-11/12 max-w-6xl flex flex-col md:flex-row justify-between items-center relative z-10 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column: Text & CTAs */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
            <span>Available for Full Stack Opportunities</span>
          </div>

          <div className="text-slate-600 text-lg md:text-xl font-semibold mb-1">
            Hi, I'm <span className="text-slate-900 font-bold">RAVI PANDEY</span> 👋
          </div>

          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
            Creative Full Stack
          </h1>

          <div className="text-gradient font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 h-16 sm:h-20">
            <ReactTyped
              strings={["Developer", "UI/UX Designer", "Problem Solver"]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-slate-600 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            I craft high-performance, responsive web applications with modern architectures, clean UI/UX, and scalable backend solutions.
          </p>

          {/* Action Buttons */}
          <div className="w-full sm:w-auto flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-7 py-3.5 rounded-2xl text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/40">
                View Projects
              </div>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="glass-card hover:bg-white text-slate-700 hover:text-slate-900 border border-white/90 hover:border-blue-300 font-bold px-7 py-3.5 rounded-2xl text-base flex justify-center items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
                Contact Me <AiOutlineDownload className="text-xl text-blue-600" />
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-10">
            <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Connect With Me</span>
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <div className="flex items-center gap-3 text-lg">
              <a
                href="https://www.linkedin.com/in/ravi-kant-pandey-154623384"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/80 border border-white/90 text-slate-600 hover:text-blue-600 hover:border-blue-400/50 hover:bg-white hover:scale-110 transition duration-200 shadow-sm backdrop-blur-md"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/pandeyravi2891-ui"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/80 border border-white/90 text-slate-600 hover:text-blue-600 hover:border-blue-400/50 hover:bg-white hover:scale-110 transition duration-200 shadow-sm backdrop-blur-md"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/80 border border-white/90 text-slate-600 hover:text-blue-600 hover:border-blue-400/50 hover:bg-white hover:scale-110 transition duration-200 shadow-sm backdrop-blur-md"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/argument_boy_11_07"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/80 border border-white/90 text-slate-600 hover:text-blue-600 hover:border-blue-400/50 hover:bg-white hover:scale-110 transition duration-200 shadow-sm backdrop-blur-md"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Image with Floating Badges */}
        <div className="w-full md:w-5/12 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>

          {/* Profile Container */}
          <div className="relative p-2 rounded-3xl bg-gradient-to-b from-white/90 via-blue-50/50 to-white/80 border border-white/90 backdrop-blur-xl shadow-2xl glow-blue">
            <img
              src={Ravi}
              alt="Ravi Pandey"
              className="w-full max-w-sm rounded-2xl filter drop-shadow-xl transform hover:scale-102 transition duration-300"
            />

            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -left-4 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-white/90 shadow-lg animate-float">
              <FaReact className="text-cyan-500 text-xl animate-spin" style={{ animationDuration: "10s" }} />
              <span className="text-xs font-bold text-slate-800">React.js</span>
            </div>

            <div
              className="absolute top-1/2 -right-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-white/90 shadow-lg animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <FaNodeJs className="text-emerald-600 text-xl" />
              <span className="text-xs font-bold text-slate-800">Node.js</span>
            </div>

            <div
              className="absolute -bottom-4 left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-white/90 shadow-lg animate-float"
              style={{ animationDelay: "3s" }}
            >
              <SiMongodb className="text-emerald-500 text-xl" />
              <span className="text-xs font-bold text-slate-800">MongoDB</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="text-slate-400 mt-14 flex flex-col justify-center items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600">Scroll Down</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}

export default Main;
