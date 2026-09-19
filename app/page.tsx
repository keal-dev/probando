import React from "react";

export default function SenatiPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-xl tracking-tighter">S</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-blue-900">SENATI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Inicio</a>
              <a href="#nosotros" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Nosotros</a>
              <a href="#carreras" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Carreras</a>
              <a href="#admision" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Admisión</a>
            </nav>
            <div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Intranet
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-400 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto pt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 font-medium text-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Admisión 2024 Abierta
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              Domina la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Tecnología</span> <br />
              Lidera la Industria
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Fórmate con los mejores profesionales en el instituto líder en tecnología y formación industrial del Perú. Educación dual para el mundo real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
                Postula Ahora
              </button>
              <button className="bg-blue-800/50 backdrop-blur-sm border border-blue-400/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800/80 transition-all transform hover:-translate-y-1">
                Ver Carreras
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 flex flex-col md:flex-row justify-around gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-700 mb-2">98%</h3>
            <p className="text-slate-500 font-medium">Inserción Laboral</p>
          </div>
          <div className="w-px bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-700 mb-2">70+</h3>
            <p className="text-slate-500 font-medium">Carreras Profesionales</p>
          </div>
          <div className="w-px bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-700 mb-2">82</h3>
            <p className="text-slate-500 font-medium">Sedes a Nivel Nacional</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-3">Sobre Nosotros</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Excelencia académica al servicio de la industria
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                SENATI es la institución líder en formación profesional tecnológica del Perú. Con más de 60 años de experiencia, nuestro modelo de formación dual combina el aprendizaje en aulas y talleres con la práctica real en empresas.
              </p>
              <ul className="space-y-4 mb-8">
                {['Equipamiento de última generación', 'Docentes altamente capacitados', 'Convenios con empresas líderes', 'Certificaciones internacionales'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white rounded-3xl p-8 shadow-xl relative z-10 border border-slate-100 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Misión</h4>
                <p className="text-slate-600 mb-8 relative z-10">Formar profesionales técnicos innovadores y altamente productivos que el Perú y el mundo necesitan.</p>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Visión</h4>
                <p className="text-slate-600 relative z-10">Liderar en el Perú y América Latina, la educación técnico productiva para la competitividad integral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="carreras" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-3">Escuelas Profesionales</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Encuentra tu vocación</h3>
            <p className="text-slate-600 text-lg">Ofrecemos programas diseñados con las empresas, asegurando que aprendas exactamente lo que el mercado laboral demanda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tecnologías de la Información', icon: '💻', desc: 'Desarrollo de software, ciberseguridad y redes.', color: 'from-blue-500 to-cyan-500' },
              { title: 'Mecánica Automotriz', icon: '🚗', desc: 'Mecatrónica y diagnóstico avanzado de vehículos.', color: 'from-red-500 to-orange-500' },
              { title: 'Electrotecnia', icon: '⚡', desc: 'Automatización industrial y sistemas eléctricos.', color: 'from-yellow-400 to-amber-500' },
              { title: 'Administración', icon: '📊', desc: 'Gestión empresarial y logística industrial.', color: 'from-emerald-400 to-teal-500' },
              { title: 'Metalmecánica', icon: '⚙️', desc: 'Diseño CAD/CAM, soldadura y matricería.', color: 'from-slate-500 to-slate-700' },
              { title: 'Industrias Alimentarias', icon: '🔬', desc: 'Control de calidad y procesos alimentarios.', color: 'from-lime-500 to-green-600' },
            ].map((carrera, i) => (
              <div key={i} className="group rounded-2xl bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-blue-100">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-2xl bg-gradient-to-br ${carrera.color} shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  {carrera.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{carrera.title}</h4>
                <p className="text-slate-600 mb-6">{carrera.desc}</p>
                <a href="#" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800">
                  Saber más
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-extrabold text-2xl text-white tracking-tight">SENATI</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
                El futuro está en tus manos. Fórmate en la institución líder en tecnología aplicada y haz despegar tu carrera profesional hoy mismo.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Admisión 2024</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Carreras Profesionales</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Sedes a Nivel Nacional</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Convenios</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Intranet</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-400 text-sm">
                  <span className="text-blue-500">📍</span>
                  Sede Central: Av. Alfredo Mendiola 3520, Independencia, Lima
                </li>
                <li className="flex gap-3 text-slate-400 text-sm">
                  <span className="text-blue-500">📞</span>
                  0801 - 11100
                </li>
                <li className="flex gap-3 text-slate-400 text-sm">
                  <span className="text-blue-500">✉️</span>
                  informes@senati.edu.pe
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} SENATI. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Términos de servicio</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
