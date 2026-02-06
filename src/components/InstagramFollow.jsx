import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const instagramPosts = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DR2iqglkwKC/embed",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/DObkSH2j0xX/embed",
  }
];

export default function InstagramFollow() {
  return (
    <section className="bg-[#03141d] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Follow Me on Instagram
            </h2>
          </div>

          <a
            href="https://www.instagram.com/dsphotography_02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 rounded-full bg-[#43bfd0] px-6 py-3 text-sm font-semibold text-[#03141d]"
          >
            Follow Me
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03141d] text-white">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* SWIPER */}
        <div className="rounded-2xl hidden bg-[#43bfd0] p-4 md:p-6">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="instagram-swiper"
          >
            {instagramPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="overflow-hidden hidden rounded-xl bg-white">
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      src={post.embedUrl}
                      className="h-full w-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title="Instagram Reel"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        .instagram-swiper .swiper-pagination-bullet {
          background: #065f46;
          opacity: 0.3;
        }
        .instagram-swiper .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
          width: 20px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
