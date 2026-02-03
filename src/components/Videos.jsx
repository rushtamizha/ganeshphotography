

import { useState } from "react";
import Footer from "./Footer";
import ScheduleSession from "./ScheduleSession";
import Testimonials from "./Testimonials";
import { DrawerProvider } from "./DrawerContext";

/* ================= DATA ================= */

const videos = [
  {
    title: "Wedding Photography Highlights",
    category: "Wedding",
    youtubeUrl: "https://youtu.be/DO7HoKTQJVM?si=DmMtrFy4hYJjhva4",
  },
  {
    title: "Family Portrait Session",
    category: "Portrait",
    youtubeUrl: "https://youtu.be/DO7HoKTQJVM?si=DmMtrFy4hYJjhva4",
  },
  {
    title: "Fashion Photoshoot BTS",
    category: "Fashion",
    youtubeUrl: "https://youtu.be/DO7HoKTQJVM?si=DmMtrFy4hYJjhva4",
  },
];

const images = [
  {
    title: "Wedding Moment",
    category: "Wedding",
    image: "https://cdn.myportfolio.com/9332f852-9457-4f36-966c-165fd7c7e99e/b0f79fde-9cf8-447d-9948-a7c9f0cd897e_rw_600.jpg?h=1e5ce8a29baf4bc4143e2ba184f76e3b",
  },
  {
    title: "Family Portrait",
    category: "Portrait",
    image: "https://cdn.myportfolio.com/9332f852-9457-4f36-966c-165fd7c7e99e/b0f79fde-9cf8-447d-9948-a7c9f0cd897e_rw_600.jpg?h=1e5ce8a29baf4bc4143e2ba184f76e3b",
  },
  {
    title: "Commercial Shoot",
    category: "Commercial",
    image: "https://cdn.myportfolio.com/9332f852-9457-4f36-966c-165fd7c7e99e/b0f79fde-9cf8-447d-9948-a7c9f0cd897e_rw_600.jpg?h=1e5ce8a29baf4bc4143e2ba184f76e3b",
  },
];

/* ================= HELPER ================= */
const getYouTubeId = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function Media() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <DrawerProvider>
      <section id="media" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* HEADER */}
          <div className="mb-10 text-center">
            <span className="text-sm text-[#0c628f]">( My Work )</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Photos & Video Projects
            </h2>
          </div>

          {/* TOGGLE */}
          <div className="mb-12 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("videos")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                activeTab === "videos"
                  ? "bg-[#03141d] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Videos
            </button>

            <button
              onClick={() => setActiveTab("images")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                activeTab === "images"
                  ? "bg-[#03141d] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Images
            </button>
          </div>

          {/* ================= VIDEOS ================= */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, index) => {
                const videoId = getYouTubeId(video.youtubeUrl);

                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                  >
                    <div className="aspect-video w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    <div className="p-4">
                      <span className="text-xs text-gray-500">
                        {video.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ================= IMAGES ================= */}
          {activeTab === "images" && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <img
                    src={img.image}
                    alt={img.title}
                    className=" w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <div className="p-4">
                    <span className="text-xs text-gray-500">
                      {img.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Testimonials />
      <ScheduleSession />
      <Footer />
    </DrawerProvider>
  );
}
