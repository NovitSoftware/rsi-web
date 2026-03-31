import './App.css'

const services = [
  {
    icon: '🛡️',
    title: 'Vigilancia Física',
    description:
      'Personal de seguridad capacitado para custodia permanente en plantas industriales, edificios corporativos y comercios.',
  },
  {
    icon: '🗼',
    title: 'Tótems de Seguridad',
    description:
      'Instalación y mantenimiento de tótems de vigilancia con tecnología de detección y disuasión.',
  },
  {
    icon: '📹',
    title: 'Monitoreo CCTV',
    description:
      'Sistemas de circuito cerrado de televisión con monitoreo remoto las 24 horas.',
  },
  {
    icon: '🔐',
    title: 'Control de Accesos',
    description:
      'Implementación de sistemas de control de ingreso y egreso con tecnología biométrica y tarjetas de proximidad.',
  },
  {
    icon: '🏢',
    title: 'Seguridad para Eventos',
    description:
      'Operativos de seguridad para eventos corporativos, ferias y espectáculos.',
  },
  {
    icon: '📋',
    title: 'Consultoría en Seguridad',
    description:
      'Auditorías, análisis de riesgo y diseño de planes de seguridad a medida para su organización.',
  },
]

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              RSI <span>Argentina</span>
            </div>
            <ul className="nav-links">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Seguridad Privada Integral</h1>
          <p>
            Protegemos lo que más importa. Brindamos servicios de vigilancia
            física, monitoreo y soluciones tecnológicas de seguridad para
            empresas en toda la Argentina.
          </p>
          <a className="hero-cta" href="#contacto">
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="section">
        <div className="container about-layout">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&q=80"
              alt="Equipo de profesionales de seguridad"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <h2 className="section-title left-title">Quiénes Somos</h2>
            <p>
              RSI Argentina es una empresa de seguridad privada con presencia
              en el territorio nacional. Contamos con personal operativo en
              campo, vigiladores habilitados y equipamiento tecnológico propio
              para brindar soluciones de protección adaptadas a cada cliente.
            </p>
            <p>
              Nuestro enfoque se basa en la prevención, la capacitación
              continua de nuestro personal y el uso de tecnología aplicada a la
              seguridad.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section section-dark">
        <div className="container">
          <h2 className="section-title light-title">Nuestros Servicios</h2>
          <p className="section-subtitle light-subtitle">
            Soluciones de seguridad adaptadas a las necesidades de cada
            operación.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen de campo */}
      <section className="field-image-section">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=400&fit=crop&q=80"
          alt="Vigilador de seguridad en operación"
          className="field-image"
          loading="lazy"
        />
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Solicitá una cotización o consulta sin compromiso.
          </p>
          <div className="contact-content">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:info@rsiargentina.com">info@rsiargentina.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Teléfono</span>
              <span>+54 11 5555-0199</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Ubicación</span>
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} RSI Argentina. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
