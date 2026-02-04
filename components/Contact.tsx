import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully ✅");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="py-24 scroll-mt-28">
      {/* SECTION HEADING */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold text-white">
          Contact <span className="text-blue-400">Me</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Let’s connect and build something great
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        {/* LEFT SIDE */}
        <div className="space-y-8 mx-auto max-w-md lg:max-w-none lg:mx-0">
          {/* CONTACT INFO */}
          <div className="glass p-10 rounded-3xl border border-white/10 space-y-8 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>

            {/* EMAIL */}
            <div className="flex items-center gap-5 p-6 rounded-2xl glass border border-white/10 justify-center lg:justify-start">
              <div className="p-4 rounded-xl bg-blue-500/20 text-blue-400">
                <Mail />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Email</p>
                <a
                  href="mailto:jssudharsan7@gmail.com"
                  className="text-white hover:text-blue-400 break-all"
                >
                  dharshanlak2005@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-5 p-6 rounded-2xl glass border border-white/10 justify-center lg:justify-start">
              <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400">
                <Phone />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Phone</p>
                <a
                  href="tel:+919080600642"
                  className="text-white hover:text-purple-400"
                >
                  +91 90438 13443
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-5 p-6 rounded-2xl glass border border-white/10 justify-center lg:justify-start">
              <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400">
                <MapPin />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Location</p>
                <p className="text-white">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="glass p-8 rounded-3xl border border-white/10 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-6 h-6 text-white hover:scale-110 transition-transform" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-white hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="glass p-10 rounded-3xl border border-white/10 space-y-6 max-w-md mx-auto lg:max-w-none"
        >
          <h3 className="text-2xl font-bold text-white text-center lg:text-left">
            Send Me a Message
          </h3>

          <input
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400/40"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400/40"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-white border border-white/10 resize-none focus:outline-none focus:border-blue-400/40"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex justify-center items-center gap-2 active:scale-95 transition-transform"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
