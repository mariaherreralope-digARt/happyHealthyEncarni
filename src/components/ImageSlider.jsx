import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsPauseFill, BsPlayFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import card9 from "../assets/card9.png";



const slides = [
  {
    image: card1,
    title: "CONECTADO A TI",
    description: "Un retiro donde el tiempo se convierte en tu aliado  para potenciar tu crecimiento personal y reconectar contigo mism@.",
  },
  {
    image: card2,
    title: "PODEROSA NATURALEZA",
    description: "Descubre prácticas de atención plena que te ayudarán a comprender -  calmar tu mente disfrutando del presente consciente en entornos únicos",
  },
  {
    image: card3,
    title: "FOCUS",
    description: "Una experiencia con acompañamiento profesional para aclarar tus metas, desbloquear tu potencial y reconectar con tu propósito de vida.",
  },
  {
    image: card4,
    title: "HOLISTIC WELLNESS",
    description: " Equilibra tu cuerpo y tu mente a través del movimiento, la respiración consciente y los hábitos potenciadores para tu bienestar con baños de sol y mar.",
  },
  {
    image: card5,
    title: "IKIGAI MOMENTS",
    description: "Viaja a Japón y vive una transformación que despertará tu ilusión y pasión por la vida.",
  },
  {
    image: card6,
    title: "INSIDE",
    description: "Silencio, introspección, naturaleza y mindfulness para fortalecer tu equilibrio interior.",
  },
  {
    image: card7,
    title: "FLOW EXPERIENCE",
    description: "Vive una experiencia enriquecedora y desafiante que te invita a fluir, soltar y reconectar con tu esencia.",
  },
  {
    image: card8,
    title: "MINDFUL EXPERIENCE",
    description: "Descubre herramientas prácticas para transformar tu bienestar cultivando momentos de presencia y consciencia a través del mindfulness.",
  },
  {
    image: card9,
    title: "EXCLUSIVE EXPERIENCE",
    description: "Personaliza tu experiencia y crea un viaje de bienestar a tu medida.",
  },

];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
    setIsPaused(!isPaused);
  };

  return (
    <section id="retiros" className="relative mx-24 py-12">

      <div className="text-center mb-10 mt-0 pt-0 text-gray-700 drop-shadow-md">
        <h2 className="text-2xl text-primary md:text-3xl font-heading mb-0">RETIROS</h2>
        <p className="text-lg text-btt font-body mb-4 italic">Sumérgete en uno de nuestros retiros, donde cada experiencia está diseñada para inspirar calma, renovación y crecimiento personal.</p>
      </div>

      {/* Image Slider Container */}
      <div className="relative  h-[500px] w-90vw md:h-[350px] flex items-center group">
        {/* Navigation Buttons */}
        <button
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsChevronRight className="w-6 h-6" />
        </button>
        <button
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsChevronLeft className="w-6 h-6" />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          loop
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-700/30 z-10 flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <h2 className="text-slate-300 font-heading text-2xl md:text-3xl font-bold mb-4">
                {slides[activeIndex].title}
              </h2>
              <p className="text-white text-lg md:text-xl">
                {slides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          {/* Pause/Play Button - centered below text */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={toggleAutoplay}
              className="bg-white/30 hover:bg-white/60 text-black rounded-full p-3 transition duration-300"
              title={isPaused ? 'Reanudar presentación' : 'Pausar presentación'}
            >
              {isPaused ? <BsPlayFill className="w-6 h-6" /> : <BsPauseFill className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

