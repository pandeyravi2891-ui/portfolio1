import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCodeSlash, IoSettingsOutline, IoSparkles } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FcLinux } from "react-icons/fc";

const skillsData = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    tag: "Hooks & SPA",
    description: "Component lifecycle, state architecture, and reusable UI modules",
    icon: FaReact,
    iconColor: "text-cyan-500",
    accentBorder: "hover:border-cyan-400/60",
    pillBg: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    badge: "Core Stack",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    tag: "SSR & App Router",
    description: "Server-side rendering, hybrid data fetching, and SEO optimization",
    icon: RiNextjsFill,
    iconColor: "text-slate-800",
    accentBorder: "hover:border-slate-400/60",
    pillBg: "bg-slate-100 text-slate-700 border-slate-200",
    badge: "Framework",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    tag: "ES6+ & Async",
    description: "Modern syntax, promises, closures, DOM manipulation, and APIs",
    icon: FaJsSquare,
    iconColor: "text-amber-500",
    accentBorder: "hover:border-amber-400/60",
    pillBg: "bg-amber-50 text-amber-700 border-amber-200/80",
    badge: "Language",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    tag: "Design Systems",
    description: "Utility-first design, fluid responsiveness, and custom themes",
    icon: RiTailwindCssFill,
    iconColor: "text-sky-500",
    accentBorder: "hover:border-sky-400/60",
    pillBg: "bg-sky-50 text-sky-700 border-sky-200/80",
    badge: "Styling",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    tag: "Semantic Web",
    description: "Accessible markup, modern DOM structures, and web standards",
    icon: FaHtml5,
    iconColor: "text-orange-500",
    accentBorder: "hover:border-orange-400/60",
    pillBg: "bg-orange-50 text-orange-700 border-orange-200/80",
    badge: "Markup",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    tag: "Flex & Grid",
    description: "Complex layouts, glassmorphic effects, and fluid animations",
    icon: FaCss3Alt,
    iconColor: "text-blue-500",
    accentBorder: "hover:border-blue-400/60",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200/80",
    badge: "Styling",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    tag: "Runtime Engine",
    description: "Asynchronous event-driven I/O, server logic, and microservices",
    icon: FaNodeJs,
    iconColor: "text-emerald-600",
    accentBorder: "hover:border-emerald-400/60",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    badge: "Core Backend",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    tag: "Server Framework",
    description: "REST endpoint routing, secure middleware, and controller logic",
    icon: SiExpress,
    iconColor: "text-slate-800",
    accentBorder: "hover:border-slate-400/60",
    pillBg: "bg-slate-100 text-slate-700 border-slate-200",
    badge: "Framework",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Backend",
    tag: "NoSQL Database",
    description: "Schema modeling with Mongoose, aggregations, and query indexing",
    icon: SiMongodb,
    iconColor: "text-emerald-500",
    accentBorder: "hover:border-emerald-400/60",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    badge: "Database",
  },
  {
    id: "restapi",
    name: "REST APIs",
    category: "Backend",
    tag: "Web Services",
    description: "Stateless architecture, CRUD patterns, and JSON-based messaging",
    icon: TbApi,
    iconColor: "text-blue-600",
    accentBorder: "hover:border-blue-400/60",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200/80",
    badge: "Architecture",
  },
  // Tools & Workflow
  {
    id: "git",
    name: "Git",
    category: "Tools",
    tag: "Version Control",
    description: "Branching strategies, atomic commits, merge conflicts, and logs",
    icon: FaGitAlt,
    iconColor: "text-orange-600",
    accentBorder: "hover:border-orange-400/60",
    pillBg: "bg-orange-50 text-orange-700 border-orange-200/80",
    badge: "DevOps",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    tag: "Code Hosting",
    description: "Pull request reviews, collaboration workflows, and repository management",
    icon: FaGithub,
    iconColor: "text-slate-800",
    accentBorder: "hover:border-slate-400/60",
    pillBg: "bg-slate-100 text-slate-700 border-slate-200",
    badge: "Platform",
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    tag: "API Testing",
    description: "Endpoint validation, automated testing, request collections, and docs",
    icon: SiPostman,
    iconColor: "text-orange-500",
    accentBorder: "hover:border-orange-400/60",
    pillBg: "bg-orange-50 text-orange-700 border-orange-200/80",
    badge: "Testing",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    tag: "Code Editor",
    description: "Custom productivity setup, linting, formatting, and integrated terminal",
    icon: VscVscode,
    iconColor: "text-blue-600",
    accentBorder: "hover:border-blue-400/60",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200/80",
    badge: "Workflow",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools",
    tag: "UI/UX Prototyping",
    description: "Design systems, layout wireframes, high-fidelity mockups, and assets",
    icon: IoLogoFigma,
    iconColor: "text-pink-500",
    accentBorder: "hover:border-pink-400/60",
    pillBg: "bg-pink-50 text-pink-700 border-pink-200/80",
    badge: "Design",
  },
  {
    id: "linux",
    name: "Linux / CLI",
    category: "Tools",
    tag: "Terminal & Shell",
    description: "Package management, command-line automation, and environment setup",
    icon: FcLinux,
    iconColor: "text-slate-800",
    accentBorder: "hover:border-slate-400/60",
    pillBg: "bg-slate-100 text-slate-700 border-slate-200",
    badge: "System",
  },
];



function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { label: "All Stack", value: "All" },
    { label: "Frontend", value: "Frontend", icon: <IoCodeSlash /> },
    { label: "Backend", value: "Backend", icon: <AiFillDatabase /> },
    { label: "Tools & DevOps", value: "Tools", icon: <IoSettingsOutline /> },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 text-slate-800 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm backdrop-blur-md">
            <IoSparkles className="text-blue-600" />
            <span>Technologies & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Technical <span className="text-gradient">Skillset</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
            A comprehensive overview of my core development tools, backend engines, and modern frontend frameworks.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 p-1.5 rounded-2xl glass-card border border-white/90 shadow-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                >
                  {cat.icon && <span>{cat.icon}</span>}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid without percentage bars */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`glass-card p-6 rounded-3xl border border-white/90 ${skill.accentBorder} flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Subtle Top-Right Accent Watermark Icon */}
                  <div className="absolute -top-3 -right-3 text-7xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none text-slate-800">
                    <IconComponent />
                  </div>

                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200/80 shadow-md shadow-slate-200/50 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 flex items-center justify-center">
                        <IconComponent className={`text-3xl ${skill.iconColor}`} />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${skill.pillBg}`}>
                        {skill.badge}
                      </span>
                    </div>

                    {/* Skill Name & Subtitle Tag */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {skill.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 tracking-wide mt-0.5">
                        {skill.tag}
                      </p>
                    </div>

                    {/* Skill Context / Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Indicator Pill */}
                  <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-400 uppercase tracking-wider text-[10px]">Specialization</span>
                    <span className="font-semibold text-slate-700 bg-white/80 px-2.5 py-0.5 rounded-lg border border-slate-200/60">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
