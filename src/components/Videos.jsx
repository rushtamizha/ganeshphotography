import { useState } from "react";
import Footer from "./Footer";
import ScheduleSession from "./ScheduleSession";
import Testimonials from "./Testimonials";
import { DrawerProvider } from "./DrawerContext";
/* ================= IMAGE FOLDERS ================= */

const folders = {
  marriage: [
    "/marriage/1.jpg",
    "/marriage/2.jpg",
    "/marriage/3.jpg",
    "/marriage/4.jpg",
    "/marriage/5.jpg",
    "/marriage/6.jpg",
    "/marriage/7.jpg",
  ],
  Housewarming: [
    "/Housewarming/1.jpg",
    "/Housewarming/2.jpg",
    "/Housewarming/3.jpg",
    "/Housewarming/4.jpg",
    "/Housewarming/5.jpg",
    "/Housewarming/6.jpg",
    "/Housewarming/7.jpg",
    "/Housewarming/8.jpg",
    "/Housewarming/9.jpg",
  ]
};

/* ================= COMPONENT ================= */

export default function Media() {
  const [activeTab, setActiveTab] = useState("marriage");
  const [preview, setPreview] = useState(null);


  return (
    <DrawerProvider>
      <section id="media" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* HEADER */}
          <div className="mb-10 text-center">
            <span className="text-sm text-[#0c628f]">( My Work )</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Photography Projects
            </h2>
          </div>

          {/* TOGGLE BUTTONS */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {Object.keys(folders).map((folder) => (
              <button
                key={folder}
                onClick={() => setActiveTab(folder)}
                className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition ${
                  activeTab === folder
                    ? "bg-[#03141d] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {folder}
              </button>
            ))}
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-6 lg:grid-cols-6">
            {folders[activeTab].map((src, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={src}
                  onClick={() => setPreview(src)}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full object-cover h-full transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ScheduleSession />
      <Footer />
      {/* IMAGE PREVIEW LIGHTBOX */}
{preview && (
  <div
    onClick={() => setPreview(null)}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-5xl w-full"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setPreview(null)}
        className="absolute -top-10 right-0 text-white text-3xl"
      >
        ✕
      </button>

      <img
        src={preview}
        alt="Preview"
        className="w-full max-h-[85vh] object-contain rounded-xl "
      />
    </div>
  </div>
)}

    </DrawerProvider>
  );
}
