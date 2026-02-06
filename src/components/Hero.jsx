import React, { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { useDrawer } from "../components/DrawerContext";
import MobileDrawer from "../components/Mobile";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import bro from "../assets/bro.png"
const Hero = () => {
  const [active, setActive] = useState("home");
  const { toggleDrawer } = useDrawer();
  const navigate = useNavigate();

  const menu = ["home", "services", "projects", "about",];

  // smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);
  };

  // auto-active on scroll
  useEffect(() => {
    const sections = menu
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen w-full scroll-mt-24 ">
      <div className="relative min-h-screen bg-[#03141d] overflow-hidden">
        {/* DOT PATTERN */}
        <svg className="absolute inset-0 h-full w-full opacity-15">
          <defs>
            <pattern
              id="heroPattern"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>

        {/* HEADER */}
        <header className=" z-20 mx-auto flex  items-center justify-between px-4 py-4 lg:px-8 fixed bg-[#03141d] w-full">
          <div
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="h-10" />
            <span className="text-white font-semibold lg:hidden">
              DS Photography
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition
                  ${
                    active === item
                      ? "text-[#43bfd0]"
                      : "text-white/80 hover:text-[#43bfd0]"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/919942619744"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex rounded-full bg-[#43bfd0] px-5 py-2 text-sm font-semibold text-[#03141d] items-center gap-2"
          >
            Contact Me
          </a>

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={toggleDrawer}>
            <Menu className="text-white" />
          </button>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mt-10 mx-auto flex max-w-7xl flex-col px-4 pt-16  lg:flex-row lg:items-center lg:px-8 lg:pt-28">
          {/* TEXT */}
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
              Hello, I’m <span className="text-[#43bfd0]">Ganesh</span>
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-6xl">
              Photographer <br />
              <span className="text-[#43bfd0]">
                Capturing Your Best Moments
              </span>
              <br />
              in Trichy
            </h1>

            <p className="mt-6 text-white/70 max-w-xl">
              At DS Photography, we don't just take pictures; we preserve your legacy. Combining years of technical expertise with a passion for storytelling, we offer a full suite of photography and videography services tailored to your family's most important milestones.
            </p>

            <button onClick={()=> window.open("https://dsphotography02.myportfolio.com/", "_blank")} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#43bfd0] px-6 py-3 font-semibold text-[#03141d]">
              Explore Our Gallery
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950 text-white">
                <ArrowRight />
              </span>
            </button>
          </div>

          {/* IMAGE */}
          <div className="mt-16 flex justify-center lg:mt-0 lg:flex-1">
            <img
              src={bro}
              alt="Photographer"
              className="max-w "
            />
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <MobileDrawer
          active={active}
          setActive={setActive}
          onNavigate={scrollToSection}
        />
      </div>
    </section>
  );
};

export default Hero;
