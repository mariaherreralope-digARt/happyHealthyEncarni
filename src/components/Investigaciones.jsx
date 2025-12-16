import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Your images
import investigaciones1 from "../assets/investigaciones1.png";
import investigaciones2 from "../assets/investigaciones2.png";
import investigaciones3 from "../assets/investigaciones3.png";
import premios1 from "../assets/premios1.png";
import premios2 from "../assets/premios2.png";
import premios3 from "../assets/premios3.png";
import libros1 from "../assets/libros1.png";
import libros2 from "../assets/libros2.png";
import libros3 from "../assets/libros3.png";

const slideColumns = [
  [
    { title: "Investigaciones", image: investigaciones1, description: "Description for card 1." },
    { title: "Investigaciones", image: investigaciones2, description: "Description for card 4." },
    { title: "Investigaciones", image: investigaciones3, description: "Description for card 7." },
  ],
  [
    { title: "Premios", image: premios1, description: "Premio innovación educación." },
    { title: "Premios", image: premios2, description: "Premio Microsoft." },
    { title: "Premios", image: premios3, description: "Agencia de Calidad, Acreditación y Prospectiva de las Universidades de Madrid (acreditar la calidad de las universidades y sus programas académicos)." },

   
  ],
  [
    { title: "Libros", image: libros1, description: "Description for card 3." },
    { title: "Libros", image: libros2, description: "Description for card 6." },
    { title: "Libros", image: libros3, description: "Description for card 9." },
  ],
];

export default function App() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {slideColumns.map((cards, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* ✅ Swiper slider */}
            <div className="relative flex-1">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: `.swiper-button-next-${i}`,
                  prevEl: `.swiper-button-prev-${i}`,
                }}
                loop
                spaceBetween={20}
                className="h-full"
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="flex flex-col justify-between h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="text-xl font-heading text-primary text-center p-4 border-b">
                        {card.title}
                      </h2>

                      <div className="relative w-full h-72 overflow-hidden">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="object-cover w-full h-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      <div className="bg-white p-4 text-center border-t">
                        <p className=" text-btt font-body">{card.description}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ✅ Navigation buttons BELOW the slider */}
            <div className="flex justify-center gap-6 p-4 border-t">
              <button
                className={`swiper-button-prev-${i} bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300`}
              >
                <BsChevronLeft size={20} />
              </button>
              <button
                className={`swiper-button-next-${i} bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white rounded-full p-2 transition duration-300`}
              >
                <BsChevronRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
