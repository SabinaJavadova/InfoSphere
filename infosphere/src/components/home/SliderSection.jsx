"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function SliderSection() {
  const cards = [
    {
      title: "Innovation",
      description: "Modern solutions for modern problems."
    },
    {
      title: "Technology",
      description: "Built with scalable architecture."
    },
    {
      title: "Scalability",
      description: "Grow without limits."
    },
    {
      title: "Performance",
      description: "Fast and optimized systems."
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-secondary/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-10">
          <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition">
            <ChevronRight size={20} />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="group h-72 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col justify-center transition duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/30">

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition">
                  {card.title}
                </h3>

                <p className="text-gray-300">
                  {card.description}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}