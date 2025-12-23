import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {
  BsPauseFill,
  BsPlayFill,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';

import card1 from "../assets/testimonios1.jpeg";
import card2 from "../assets/testimonios2.jpeg";
import card3 from "../assets/testimonios3.jpeg";
import card4 from "../assets/testimonios4.jpeg";
import card5 from "../assets/testimonios5.jpeg";
import card6 from "../assets/testimonios6.jpeg";

const slides = [
  { image: card1 },
  { image: card2 },
  { image: card3 },
  { image: card4 },
  { image: card5 },
  { image: card6 },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    isPaused
      ? swiperRef.current.autoplay.start()
      : swiperRef.current.autoplay.stop();
    setIsPaused(!isPaused);
  };

  return (
    <section id="retiros" className="relative mx-6 md:mx-24 py-12">
      {/* Header */}
      <div className="text-center mb-10 text-gray-700 drop-shadow-md">
        <h2 className="text-2xl text-primary md:text-3xl font-heading">
          TESTIMONIOS
        </h2>
        <p className="text-lg text-btt font-body italic">
          A través de retiros, cursos y coaching uno a uno,
          <br />
          nuestra comunidad ha encontrado claridad, equilibrio y crecimiento duradero.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative flex flex-col md:h-[550px] group">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          loop
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="relative md:absolute md:inset-0 w-full z-0"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={slide.image}
                alt={`Testimonio ${idx + 1}`}
                className="w-full h-auto md:h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="relative md:absolute md:inset-0 bg-slate-700/30 z-10 flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            />
          </AnimatePresence>
        </div>

        {/* Controls (mobile below / md overlay) */}
        <div className="relative md:absolute md:inset-0 z-20 flex flex-row items-center justify-between px-4 mt-4 md:mt-0 pointer-events-none">
          {/* Left */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              pointer-events-auto
              bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary
              text-white rounded-full p-2 transition duration-300
              md:absolute md:left-[-3rem] md:top-1/2 md:-translate-y-1/2
            "
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>

          {/* Play / Pause */}
          <button
            onClick={toggleAutoplay}
            className="
              pointer-events-auto
              bg-white/30 hover:bg-white/60 text-black
              rounded-full p-3 transition duration-300 my-4 md:my-0
            "
            title={isPaused ? 'Reanudar presentación' : 'Pausar presentación'}
          >
            {isPaused ? (
              <BsPlayFill className="w-6 h-6" />
            ) : (
              <BsPauseFill className="w-6 h-6" />
            )}
          </button>

          {/* Right */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
              pointer-events-auto
              bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary
              text-white rounded-full p-2 transition duration-300
              md:absolute md:right-[-3rem] md:top-1/2 md:-translate-y-1/2
            "
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
