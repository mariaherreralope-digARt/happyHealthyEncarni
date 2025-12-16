import React from "react";
import CoachingImg from "../assets/CoachingImg.png";
import CoachingImg2 from "../assets/CoachingImg2.png"; // second image
import { motion } from "framer-motion";

const Coaching = () => {
  return (
    <section id="coaching" className="max-w-7xl mx-auto px-6 md:px-14 py-16 text-center">
      {/* Heading */}
      <motion.div
        className="mb-16 mt-16 text-gray-700 drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl text-primary font-heading uppercase mb-4">
          Coaching Personalizado
        </h2>
        <motion.p
          className="text-lg text-btt font-body mb-4 mt-4 italic text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Descubre cómo potenciar tu liderazgo, equilibrar tu vida y vivir desde tu Ikigai.
          <br />
          Te acompaño en tu proceso de transformación personal y profesional a través del coaching,
          la mentoría y la formación consciente, para alcanzar un bienestar auténtico y duradero.
        </motion.p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Image 1 + Button */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={CoachingImg}
            alt="coaching personal"
            className="max-w-xs mx-auto h-auto object-cover rounded-tl-[50%] rounded-tr-[50%]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.a
            href="https://forms.gle/WkZ2oPEy8bT7wozWA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-white cursor-pointer px-8 py-3 font-medium relative bg-btt text-sm uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body inline-block transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Reservar mi sesión
          </motion.a>
        </motion.div>

        {/* Image 2 + Button */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={CoachingImg2}
            alt="coaching profesional"
            className="max-w-xs mx-auto h-auto object-cover rounded-tl-[50%] rounded-tr-[50%]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.a
            href="https://forms.gle/EyBfMJbLJx2ixGVf8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-white cursor-pointer px-8 py-3 font-medium relative bg-btt text-sm uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body inline-block transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Evalúa tu nivel de logro
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Coaching;
