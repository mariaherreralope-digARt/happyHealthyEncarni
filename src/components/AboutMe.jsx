import { motion } from 'framer-motion';
import aboutImg from "../assets/aboutImg.png";

const AboutMe = () => {
  return (
    <section id='quiensoy' className='max-w-8xl mx-auto px-8 md:px-24 py-16 md:pt-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20'>

        {/* LEFT column: Text */}
        <motion.div
          className='md:w-2/5 w-full space-y-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-2xl text-primary md:text-3xl font-heading mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Encarni L. Cerrillo
          </motion.h2>

          <motion.h3
            className="text-lg text-btt font-body mb-4 italic"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PhD & Life Wellness Coach
          </motion.h3>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong>Happy Healthy TMV</strong> significa vivir feliz y saludable , en armonía para alcanzar <strong>Tu Mejor Versión</strong>.
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Es un estado de bienestar integral  que surge  cuando mente, cuerpo y alma están en sincronía es bienestar holístico.
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Soy tu coach , Doctora  en Educación. Licenciada en ciencias de la Actividad física y deporte.


          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >

            Especializada en Inteligencia Emocional, Mindfullness, PNL  e implementación de hábitos para la gestión del estrés y la ansiedad.
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-gray-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Te acompaño en un viaje de transformación personal para vivir con propósito - encontrar tu  razón de ser - IKIGAI- y alcanzar tu propia felicidad.
          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-primary font-semibold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Mi misión es acompañarte - guiarte desde el autoconocimiento y la   introspección, para descubrir  tu fortaleza interior y crear la vida que te mereces incrementando tu  bienestar físico, emocional , mental y espiritual.

          </motion.p>

          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body italic text-center leading-relaxed text-btt"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            “Juntos es más fácil”
          </motion.p>

        </motion.div>

        {/* RIGHT column: Image */}
        <motion.div
          className='md:w-3/5 w-full'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        >
          <img
            src={aboutImg}
            alt="Encarni L. Cerrillo - Happy Healthy Coach"
            className='w-full max-w-md mx-auto pl-4 md:pl-0 h-auto object-cover '
          />
        </motion.div>

      </div>
      <div className="flex flex-col  items-center justify-between ">
        <h2 className=" mt-6 text-xl text-primary md:text-2xl font-heading mb-4">¿Qué representa nuestro logo? </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-md font-body italic text-center leading-relaxed text-btt">El árbol de la vida representa el crecimiento personal, las raíces , la conexión interior y la expansión. <br />
          El leoncito simboliza valentía y corage, esa fuerza interna que todos tenemos, incluso cuando no la vemos.  <br />Ambas tu t r a n s f o r m a c i ó n.</p>
      </div>
    </section>
  );
};

export default AboutMe;
