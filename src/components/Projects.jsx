import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ================= YOUTUBE PROJECTS DATA ================= */ const projects =
  [
    {
      title: "60s Marriage Shoot ",
      tags: ["Wedding", "Photography"],
      image: "/marriage/4.jpg",
    },
    {
      title: "Housewarming",
      tags: ["Housewarming", "Candid"],
      image: "/Housewarming/4.jpg",
    }
  ];


export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="relative  bg-[#03141d] py-20" id="projects">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-sm text-white/60">( Our Projects )</span>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-white lg:text-4xl">
              View My Recent <br />
              Video Projects
            </h2>
          </div>

          <button
            onClick={() => navigate("/my-projects")}
            className="flex w-fit items-center gap-3 rounded-full bg-[#43bfd0] px-6 py-3 text-sm font-semibold text-[#03141d]"
          >
            View All My Work
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03141d] text-white">
              →
            </span>
          </button>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => window.open(project.image, "_blank")}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2 text-xs text-white/60">
                      {project.tags.map((tag, i) => (
                        <span key={i}>
                          {tag}
                          {i !== project.tags.length - 1 && " ✕"}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* PLUS BUTTON */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43bfd0] text-lg font-bold text-[#03141d] transition group-hover:scale-110">
                    +
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        .projects-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.3;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
          width: 20px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
