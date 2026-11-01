import Navbar from './coponents/Navbar';
import Main from './coponents/Main';
import About from './coponents/About';
import Skills from './coponents/Skills';
import Projects from './coponents/Projects';
import Contact from './coponents/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [title, settitle] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            settitle(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f8fafc] bg-radial-glow bg-grid-pattern min-h-screen select-none relative text-slate-800 font-sans overflow-x-hidden">
      {/* Ambient background light gradients for glass refraction */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-300/35 blur-[130px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="fixed top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-300/30 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-300/25 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: "4s" }}></div>
      <div className="fixed top-[65%] left-[-5%] w-[450px] h-[450px] rounded-full bg-sky-200/40 blur-[130px] pointer-events-none -z-10"></div>

      <div className='w-11/12 max-w-6xl mx-auto my-4 h-16 rounded-full bg-white/70 backdrop-blur-2xl border border-white/90 shadow-lg shadow-indigo-500/5 sticky top-4 z-50 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-indigo-500/10'>
        <Navbar title={title} settitle={settitle}/>
      </div>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
