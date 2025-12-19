import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useModal } from "./ModalContext";
import GlobalModal from "./GlobalModal";

import intelEmoc from '../assets/intelEmoc.png';
import pnl from '../assets/pnl.png';
import mindfull from '../assets/mindfull.png';
import gestion from '../assets/gestion.png';
import crecimiento from '../assets/crecimiento.png';
import bienestar from '../assets/bienestar.png';

const Cursos = () => {
  const levels = [
    {
      icon: intelEmoc,
      title: "Bienestar Emocional",
      description: `
        <p>Encuentra el equilibrio interior para aprender a gestionar tus emociones desde la consciencia y la madurez emocional. 
        Un espacio para cultivar resiliencia, calma y liderazgo emocional.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>Inteligencia Emocional:</strong> Comprende el lenguaje de tus emociones, mejora tus relaciones y potencia tu autoconfianza. Aprende a transformar la reactividad en claridad emocional.</li>
          <li><strong>Gestión del Estrés y la Ansiedad:</strong> Adquiere herramientas prácticas de regulación emocional, respiración consciente y técnicas de relajación para recuperar tu serenidad mental y corporal.</li>
          <li><strong>FOCUS & FLOW – Lidera tu vida:</strong> Desarrolla foco, equilibrio y propósito. Aprende a fluir con dirección, gestionando tu energía para vivir con claridad y efectividad.</li>
        </ul>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },

    {
      icon: gestion,
      title: "Crecimiento Personal y Transformación",
      description: `
        <p>Un viaje hacia tu autenticidad, propósito y expansión interior. Despierta tus talentos y diseña una vida alineada con tus valores.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>IKIGAI – Propósito y Autoconocimiento:</strong> Descubre tu razón de ser, conecta con tus pasiones y alinea tu vida con lo que realmente te hace sentir pleno y en paz.</li>
          <li><strong>DAFO – Fortalezas internas y oportunidades:</strong> Identifica tus recursos personales, talentos y áreas de mejora. Aprende a crear estrategias para tu crecimiento personal y profesional.</li>
          <li><strong>Creencias y Talento – Reprogramación interior:</strong> Transforma las creencias que te limitan y potencia las que te impulsan. Una experiencia de autoliderazgo y expansión personal.</li>
        </ul>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },
    {
      icon: mindfull,
      title: "Vida Consciente",
      description: `
        <p>Entrena tu mente para vivir con atención, serenidad y presencia. Desarrolla una conciencia más profunda, capaz de responder en lugar de reaccionar.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>Mindfulness:</strong> Practica la atención plena y cultiva la calma interior. Mejora tu enfoque, empatía y conexión contigo mismo.</li>
          <li><strong>PNL y Visualización Consciente:</strong> Aprende a visualizar tus metas, cambiar patrones mentales y dirigir tu energía hacia lo que deseas manifestar. Reprograma tu mente para crear nuevas posibilidades.</li>
          <li><strong>MBSR, MSC y MCE:</strong> Tres enfoques de mindfulness aplicados al bienestar:
            <ul class="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>MBSR (Mindfulness-Based Stress Reduction): reducción del estrés.</li>
              <li>MSC (Mindful Self-Compassion): autocompasión y amabilidad.</li>
              <li>MCE (Mindfulness Compasivo Emocional): equilibrio y resiliencia.</li>
            </ul>
            Programas combinados para desarrollar autocuidado consciente.
          </li>
        </ul>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },

    {
      icon: crecimiento,
      title: "Felicidad y Bienestar Subjetivo",
      description: `
        <p>Una invitación a cultivar la auténtica felicidad desde dentro: no como un estado momentáneo, sino como una forma de vivir con propósito, gratitud y equilibrio emocional.</p>
        <p>Basado en principios de la psicología positiva, el autoconocimiento y la resiliencia emocional, este programa te guía hacia un bienestar profundo y sostenible.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>La Ciencia de la Felicidad:</strong> Explora los pilares del bienestar subjetivo: emociones positivas, relaciones significativas, propósito y realización personal. Aprende cómo cultivar una felicidad real y duradera.</li>
          <li><strong>Happiness Skills – Herramientas para el bienestar diario:</strong> Desarrolla hábitos mentales y emocionales que aumentan tu bienestar: gratitud, optimismo, amabilidad y autocompasión.</li>
          <li><strong>Vivir con Sentido y Alegría:</strong> Conecta con lo esencial. Aprende a equilibrar tus metas con tu bienestar interior, creando una vida coherente, plena y feliz.</li>
        </ul>

        <p class="italic mt-3 text-center">“La felicidad no se busca, se cultiva desde dentro.”<br>“Vivir con alegría consciente es vivir feliz!”</p>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },
    {
      icon: bienestar,
      title: "Bienestar Holístico",
      description: `
        <p>Integra cuerpo, mente y energía. Un enfoque global del bienestar que promueve salud, vitalidad y equilibrio desde dentro hacia fuera.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>Nutrición emocional – Automotivación y equilibrio:</strong> Aprende a “nutrirte” más allá de la alimentación: gestión de emociones, motivación consciente y hábitos que generan bienestar integral.</li>
          <li><strong>Mind & Body – Equilibrio cuerpo–mente:</strong> Explora la conexión entre tu biología y tus pensamientos. Ejercicios de movimiento consciente, respiración y alineación energética.</li>
          <li><strong>Hábitos energéticos saludables:</strong> Desarrolla rutinas diarias que eleven tu energía y claridad mental. Desde el descanso consciente hasta la higiene emocional y la gestión de entornos.</li>
        </ul>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },
    {
      icon: pnl,
      title: "Programas Personalizados",
      description: `
        <p>Diseñados a tu medida, adaptados a tus objetivos personales o profesionales. Un acompañamiento cercano para crear cambios sostenibles y auténticos.</p>

        <ul class="list-disc list-inside mt-3 space-y-2 text-left">
          <li><strong>Talleres específicos:</strong> Sesiones temáticas y prácticas orientadas a resultados concretos: comunicación, autoestima, gestión del tiempo, liderazgo interior y más.</li>
          <li><strong>Planes integrales de Coaching:</strong> Programas individuales enfocados en tu evolución personal o profesional, combinando herramientas de mindfulness, PNL y coaching transformacional.</li>
          <li><strong>Formaciones grupales o empresariales:</strong> Capacitaciones diseñadas para equipos y organizaciones que buscan bienestar, liderazgo consciente y cohesión.</li>
        </ul>
      `,
      overlayColor: "rgba(255, 243, 228, 0.7)",
    },
  ];

  const { openModal } = useModal();

  const handleOpenContactForm = () => {
    openModal(<GlobalModal />);
  };

  const levelsRef = useRef(null);
  const isInView = useInView(levelsRef, { margin: "-100px" });

  return (
    <section
      id="cursos"
      className="max-w-7xl mx-auto px-14 py-16 bg-cover bg-center relative opacity-90"
    >
      {/* Heading */}
      <div className="text-center mb-16 text-gray-700 drop-shadow-md">
        <h2 className="text-2xl md:text-3xl font-heading mb-0 text-primary">
          CURSOS  del programa  HOLISTIC WELLNESS  con  HAPPY.HEALTHY.TMV
        </h2>
        <p className="text-lg text-btt font-body mt-4 italic">
          Un viaje hacia tu bienestar integral: equilibrio emocional, mental, físico y energético.<br />
          Transforma tu vida desde la consciencia y el propósito.<br />
          El arte de vivir con equilibrio y plenitud.
        </p>
      </div>

      {/* Levels grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={levelsRef}>
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col text-center items-center justify-start p-6 overflow-hidden shadow-lg rounded-2xl bg-white/60"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: level.overlayColor,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 0,
              }}
            />

            {/* Icon */}
            <motion.div
              className="relative w-16 h-16 mt-6 mb-6 flex items-center justify-center z-10 rounded-tr-3xl rounded-bl-3xl shadow-lg bg-btt/40"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, type: "spring", stiffness: 500 }}
            >
              <motion.img
                src={level.icon}
                alt={`${level.title} icon`}
                className="w-36 h-36 object-contain"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.2 }}
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl font-medium font-heading mb-3 relative z-10 text-primary drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {level.title}
            </motion.h3>

            {/* Description (renders HTML correctly) */}
            <motion.div
              className="text-gray-700 font-body text-left relative z-10 drop-shadow-md max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
              dangerouslySetInnerHTML={{ __html: level.description }}
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <motion.button
          onClick={handleOpenContactForm}
          className="text-white cursor-pointer px-8 py-3 font-medium relative bg-btt text-sm uppercase hover:bg-white hover:text-btt hover:border hover:border-btt font-body"
        >
          Inscríbete ahora
          <div className="absolute -z-10 w-full h-full blur-lg top-0"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Cursos;
