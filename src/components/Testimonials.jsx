import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun & Priya",
      role: "Happy Customer",
      rating: 5.0,
      image: "https://thumbs.dreamstime.com/b/simple-indian-girl-sweet-smile-happy-face-44021920.jpg",
      text: `We hired DS Photography for our wedding in Trichy, and the results were stunning. Ganesh has a great eye for detail and the AI live sharing feature was a huge hit with our guests! Truly professional and creative.`,
    },
    {
      name: "Deepa R",
      role: "Happy Customer",
      rating: 5.0,
      image: "https://photosmix.in/wp-content/uploads/2025/02/real-girl-pic-hidden-face.jpg",
      text: `The newborn shoot was so comfortable and patient. Ganesh handled our baby with such care, and the props he brought were beautiful. We will cherish these portraits forever!`,
    },
    {
      name: "Suresh Kumar",
      role: "Happy Customer",
      rating: 5.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2K8Co39lwnjFb4a2UgOToWgP07I3SOTMcg&s",
      text: `Not just a photographer, but an artist! I ordered a customized resin art piece for my wedding flowers and a premium album. The quality is top-notch and it's the best way to keep our memories alive.`,
    },
  ];

  return (
    <section className="relative bg-[#03141d] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold text-white lg:text-4xl">
              What People Say <br />
              About My Photography
            </h2>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl bg-[#083a54]/60 p-8 md:p-12">

                {/* CONTENT */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center">

                  {/* IMAGE */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#43bfd0]">
                      <svg className="h-full w-full opacity-30">
                        <defs>
                          <pattern
                            id={`pattern-${index}`}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M0 10c5-5 15-5 20 0"
                              fill="none"
                              stroke="rgba(0,0,0,0.25)"
                              strokeWidth="1"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#pattern-${index})`}
                        />
                      </svg>
                    </div>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="relative z-10 h-36 w-36 rounded-full object-cover"
                    />

                    {/* QUOTE ICON */}
                    <div className="absolute -right-2 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#03141d] font-bold">
                      “
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 text-white">
                    {/* RATING */}
                    <div className="mb-3 flex items-center gap-2 text-[#43bfd0]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      <span className="text-sm text-white/70">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>

                    <p className="max-w-xl text-white/80">
                      {item.text}
                    </p>

                    <div className="mt-6">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
          width: 20px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
