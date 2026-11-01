import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

    try {
      const response = await fetch(`${baseUrl}/api/v1/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", description: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMsg("Network error or server unreachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-20 px-4 text-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-11/12 max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md shadow-sm">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
            Have a project in mind, an opportunity, or just want to connect? Send a message and let's talk!
          </p>
        </div>

        {/* Contact Info & Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/90 flex flex-col gap-6 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Details</h3>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  <AiOutlineMail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:pandeyravi2891@gmail.com" className="text-slate-900 font-semibold hover:text-blue-600 transition text-sm sm:text-base">
                    pandeyravi2891@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone</p>
                  <a href="tel:+918957653394" className="text-slate-900 font-semibold hover:text-blue-600 transition text-sm sm:text-base">
                    +91 8957653394
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-slate-900 font-semibold text-sm sm:text-base">Lucknow, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  <FaRegClock />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Availability</p>
                  <p className="text-slate-900 font-semibold text-sm sm:text-base">Open to Remote & Full-time Roles</p>
                </div>
              </div>

              {/* SLA Response Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-xs text-blue-700 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
                <span>Typically responds within <strong className="text-slate-900">24 hours</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/90 flex flex-col gap-5 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 text-xl shadow-sm">
                  <GrSend />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send Me a Message</h3>
                  <p className="text-xs text-slate-500">Fill out the form below to reach out directly.</p>
                </div>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                  <span>✓</span> Thank you! Your message has been sent successfully.
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-sm font-semibold flex items-center gap-2">
                  <span>✕</span> {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full glass-input px-4 py-3.5 rounded-2xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none"
                  />
                  <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-input px-4 py-3.5 rounded-2xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none"
                  />
                  <AiOutlineMail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full glass-input px-4 py-3.5 rounded-2xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  required
                  placeholder="Your Message *"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full glass-input px-4 py-3.5 rounded-2xl text-slate-800 text-sm placeholder-slate-400 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer border border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-20 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-900 font-bold">Ravi Pandey</span>. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ravi-kant-pandey-154623384"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:border-blue-400/40 transition duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:border-blue-400/40 transition duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:border-blue-400/40 transition duration-200 shadow-sm"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/argument_boy_11_07"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-600 hover:text-blue-600 hover:border-blue-400/40 transition duration-200 shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/80 transition-all duration-200 shadow-sm"
            title="Back to Top"
          >
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
