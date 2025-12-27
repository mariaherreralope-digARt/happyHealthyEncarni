import { Link } from 'react-router-dom';
import logo from '../assets/logo-footer.png';

const LegalNotice = () => {
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
            Aviso Legal
          </h1>

          <div className="prose prose-lg max-w-none font-body text-gray-700 space-y-6">
            <section>
              <p>
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos identificativos del titular del sitio web:
              </p>
            </section>

            <section className="bg-gray-50 rounded-lg p-6 my-8">
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-primary">Titular:</dt>
                  <dd className="mt-1">Encarni López Cerrillo</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">NIF/DNI:</dt>
                  <dd className="mt-1">45.583.806-Z</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Domicilio:</dt>
                  <dd className="mt-1">C/ Concha Espina, 38<br />28806 Alcalá de Henares, Madrid</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Correo electrónico de contacto:</dt>
                  <dd className="mt-1">
                    <a href="mailto:elopezcerrillo@gmail.com" className="text-primary hover:underline">
                      elopezcerrillo@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Nombre del dominio:</dt>
                  <dd className="mt-1">
                    <a href="http://holisticwellnesstmv.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      http://holisticwellnesstmv.com/
                    </a>
                  </dd>
                </div>
              </dl>
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

export default LegalNotice;
