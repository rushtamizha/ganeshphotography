import {  ArrowRight, Check } from "lucide-react";
import broc from '../assets/broc.png'
export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#03141d] py-20" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-[45%_55%] lg:px-8">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="relative flex justify-center">

          {/* YELLOW PATTERN STRIP */}
          <div className="absolute left-0 top-0 h-full w-[45%] bg-[#43bfd0]">
            <svg className="h-full w-full opacity-30">
              <defs>
                <pattern
                  id="aboutPattern"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 14c4-4 10-4 14 0s10 4 14 0"
                    fill="none"
                    stroke="rgba(0,0,0,0.25)"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutPattern)" />
            </svg>
          </div>

          {/* IMAGE */}
          <img
            src={broc}
            alt="Amelia Davis"
            className="relative z-10 w-[80%] max-w-sm lg:max-w-md"
          />

          {/* EXPERIENCE BADGE */}
        

          {/* CERTIFICATION */}
          <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs text-[#03141d] shadow">
            ✔ You can trust my Photography
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <span className="text-sm text-white/60">( About Me )</span>

          <h2 className="mt-2 text-3xl font-extrabold text-white lg:text-4xl">
            About <span className="text-[#43bfd0]">DS Photography
</span>
          </h2>

          <p className="mt-4 max-w-xl text-white/70">
            Founded by Ganesh, DS Photography brings a unique, tech-savvy approach to the art of capturing light. After years in the Bangalore IT sector, I returned to my roots in Tamil Nadu to build a brand that stands for quality and emotion. Now based in Trichy, we specialize in merging modern technology—like AI-powered live photo sharing—with the traditional warmth of South Indian celebrations
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center lg:text-left hidden">
            <div>
              <p className="text-2xl font-bold text-[#43bfd0]">600+</p>
              <p className="text-sm text-white/60">Project Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#43bfd0]">450+</p>
              <p className="text-sm text-white/60">Happy Customer</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#43bfd0]">20+</p>
              <p className="text-sm text-white/60">States Covered</p>
            </div>
          </div>

          {/* CHECKLIST */}
          <ul className="mt-8 space-y-4">
            {[
              "New Studio: Located in the heart of Kattur, Trichy",
              "Tech-Driven: Fast delivery and AI-integrated services",
              "Customized: Every shoot is tailored to your family's style",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#43bfd0] text-xs text-[#03141d]">
                  <Check/>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#43bfd0] px-6 py-3 font-semibold text-[#03141d]" onClick={()=> window.open("https://wa.me/919942619744", "_blank")}>
            Hire Me Now
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03141d] text-white">
               <ArrowRight/>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
