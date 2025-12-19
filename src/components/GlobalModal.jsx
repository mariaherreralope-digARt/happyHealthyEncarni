import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useModal } from "./ModalContext";

const GlobalModal = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration: 0.8,
            }}
            className="bg-white dark:bg-secondary/50 shadow-xl w-full max-w-md p-6 rounded-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-heading text-gray-600 dark:text-gray-100">
                Contacta con Nosotros
              </h1>
              <button onClick={closeModal} aria-label="Close contact form">
                <FiX className="w-6 h-6 text-gray-600 dark:text-gray-100" />
              </button>
            </div>

            {/* Input Form */}
            <form
              action="https://formsubmit.co/happy.healthy.tmv@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Gracias por tu mensaje. Nos pondremos en contacto pronto."
              />

              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu Correo Electrónico"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Tu Número de Teléfono"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  pattern="[0-9+ ]*"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  placeholder="Cuéntanos en qué servicio o programa te gustaría participar."
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="mt-4 text-sm text-gray-700">
  <label className="flex items-start gap-2">
    <input
      type="checkbox"
      required
      className="mt-1"
    />
    <span>
      He leído y acepto la{" "}
      <a
        href="/politica-de-privacidad"
        className="underline text-secondary hover:text-secondary/80"
        target="_blank"
        rel="noopener noreferrer"
      >
        Política de Privacidad
      </a>
    </span>
  </label>
</div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full px-4 py-2 text-white bg-gradient-to-r from-btt to-primary hover:from-primary hover:to-btt transition-all duration-300 font-body rounded-lg"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalModal;
