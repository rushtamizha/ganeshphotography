import { X } from "lucide-react";
import { useDrawer } from "../components/DrawerContext";

const menu = ["home", "services", "projects", "pricing", "about"];

export default function MobileDrawer({ active, setActive }) {
  const { drawerOpen, closeDrawer } = useDrawer();

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);
  };
  return (
    <>
      {/* BLUR OVERLAY */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-sm bg-[#03141d]
        transform transition-transform duration-300 ease-in-out
        ${drawerOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Menu</h2>
          <X className="text-white" onClick={closeDrawer} />
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8">
          {menu.map((item) => (
            <button  onClick={() => { scrollToSection(item); setActive(item);
                closeDrawer()} }
              key={item}
              
              className={`text-left capitalize text transition
                ${
                  active === item
                    ? "text-[#43bfd0]"
                    : "text-white/80 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
          <button onClick={()=> window.open("https://wa.me/919942619744","_blank")} className=" md:flex rounded-full bg-[#43bfd0] px-5 py-2 text-sm font-semibold text-[#03141d]">
            Contact Me
          </button>
        </nav>
      </div>
    </>
  );
}
