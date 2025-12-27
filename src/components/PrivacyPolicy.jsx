import { Link } from 'react-router-dom';
import logo from '../assets/logo-footer.png';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/10 to-secondary/10">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Logo" className="h-10 rounded-lg" />
            <span className="text-xl font-heading font-bold text-btt">Happy Healthy TMV</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none font-body text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">holisticwellnesstmv.com</p>

            <section>
              <p>
                El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
              </p>
            </section>

            <section>
              <p>
                Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
              </p>
            </section>

            <section>
              <p>
                La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
              </p>
            </section>

            <section>
              <p>
                Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Cookies propias
              </h2>
              <p>
                Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por HOLISTIC WELLNESS para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Cookies de terceros
              </h2>
              <p>
                Son cookies utilizadas y gestionadas por entidades externas que proporcionan a HOLISTIC WELLNESS servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
              </p>
              <p className="mt-4">
                La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
              </p>
              <p className="mt-4">
                Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente(s) enlace(s):
              </p>
              <p className="mt-4">
                La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Cookies de redes sociales
              </h2>
              <p>
                HOLISTIC WELLNESS incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>
                  <strong>Facebook:</strong>{' '}
                  <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.facebook.com/policies/cookies/
                  </a>
                </li>
                <li>
                  <strong>Twitter:</strong>{' '}
                  <a href="https://twitter.com/es/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://twitter.com/es/privacy
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong>{' '}
                  <a href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://help.instagram.com/1896641480634370?ref=ig
                  </a>
                </li>
                <li>
                  <strong>YouTube:</strong>{' '}
                  <a href="https://policies.google.com/privacy?hl=es-419&gl=mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://policies.google.com/privacy?hl=es-419&gl=mx
                  </a>
                </li>
                <li>
                  <strong>Pinterest:</strong>{' '}
                  <a href="https://policy.pinterest.com/es/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://policy.pinterest.com/es/privacy-policy
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
                Deshabilitar, rechazar y eliminar cookies
              </h2>
              <p>
                El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de cookies web gratis online el día 16/12/2025.
              </p>
            </section>
          </div>

          {/* Back to home button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-heading font-semibold"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
