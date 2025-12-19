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
import libros4 from "../assets/libros4.jpeg";

const slideColumns = [
  [
    { title: "Investigaciones", image: investigaciones1, description: "ResearchGate es una red social académica internacional que permite a investigadores y profesionales de la educación y la ciencia compartir publicaciones, proyectos y resultados de investigación. Aqui ves el reflejo de mi trayectoria investigadora.", link: "https://www.researchgate.net/profile/Encarni-Cerrillo?ev=hdr_xprf" },
    // { title: "Investigaciones", image: investigaciones2, description: "Description for card 4." },
    { title: "Investigaciones", image: investigaciones3, description: "ORCID: Identificador digital que distingue de forma única a los investigadores y conecta su actividad académica y científica.", link: "https://orcid.org/0000-0002-5747-4480" },
  ],
  [
    { title: "Reconocimientos", image: premios1, description: "Premio innovación educación." },
    { title: "Reconocimientos", image: premios2, description: "Premio Microsoft." },
    { title: "Reconocimientos", image: premios3, description: "ANECA  y ACAP son las  acreditaciones que evalúan el curriculum del profesorado universitario.  ANECA (Agencia Nacional de Evaluación de la Calidad y Acreditación)  como organismo estatal que evalúa el currículum del profesorado universitario y ACAP (Agencia de Calidad, Acreditación y Prospectiva de las Universidades de Madrid) es el organismo autonómico de la Comunidad de Madrid. Ambas evalúan los méritos del profesor." },


  ],
  [
    { title: "Libros", image: libros1, description: "LIBRO ABUSO PODER: Este libro visibiliza las múltiples caras del abuso de poder, no solo las obvias o extremas, sino también aquellas que aparecen en situaciones cotidianas: decisiones diarias, gestiones, comunicaciones, exclusiones, silencios, jerarquías informales, etc. Busca transformar la comprensión de estas dinámicas, salir del victimismo y ofrecer herramientas de regulación interna y externa frente a estos comportamientos." },
    { title: "Libros", image: libros2, description: "Description for card 6." },
    // { title: "Libros", image: libros3, description: "Description for card 9." },
    { title: "Libros", image: libros4, description: "Este libro combina contenido teórico y práctico desde un enfoque interdisciplinar que recoge aportaciones de salud pública, educación, ciencias ambientales, alimentación, actividad física, género, epidemiología y salud mental, entre otros campos. Además, presenta experiencias reales de personas (alumnado, profesorado y personal administrativo) que trabajan desde hace años para hacer de la Universidad de Alcalá una institución saludable y formar profesionales responsables y solidarios." },
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

                      <div className="relative w-auto h-80 overflow-hidden center flex flex-col items-center justify-center ">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="object-contain w-auto h-full"
                          whileHover={{ scale: 0.90 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      <div className="bg-white p-4 text-center border-t">
                        <p className=" text-btt font-body">{card.description}</p>
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-btt font-body">Ver más</a>
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
