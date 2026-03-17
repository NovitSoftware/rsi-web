import './App.css'

const services = [
  {
    icon: '👥',
    title: 'Gestión de RRHH',
    description: 'Administración integral de recursos humanos para tu empresa.',
  },
  {
    icon: '💰',
    title: 'Liquidación de Sueldos',
    description: 'Procesamiento preciso y oportuno de nóminas y remuneraciones.',
  },
  {
    icon: '📋',
    title: 'Gestión de Nómina',
    description: 'Control completo del ciclo de vida de los empleados.',
  },
  {
    icon: '🧾',
    title: 'Rendición de Gastos',
    description: 'Automatización y control de reportes de gastos corporativos.',
  },
  {
    icon: '🏖️',
    title: 'Gestión de Vacaciones',
    description: 'Planificación y seguimiento de licencias y ausencias.',
  },
  {
    icon: '⚙️',
    title: 'HRaaS',
    description: 'Human Resources as a Service: soluciones de RRHH a medida.',
  },
]

const clients = [
  'Arcos Dorados',
  'Supermercados Dia',
  'Solo Deportes',
  'Exo Logística',
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
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag">HRaaS</div>
          <h1>Servicios Profesionales de RRHH</h1>
          <p>
            Somos tu socio estratégico en gestión de recursos humanos.
            Simplificamos la administración de tu capital humano para que puedas
            enfocarte en hacer crecer tu negocio.
          </p>
          <a className="hero-cta" href="#contacto">
            Contactanos
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales de gestión de RRHH adaptadas a las
            necesidades de cada cliente.
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

      {/* Clientes */}
      <section id="clientes" className="section">
        <div className="container">
          <h2 className="section-title">Clientes que Confían en Nosotros</h2>
          <p className="section-subtitle">
            Trabajamos con empresas líderes en Argentina.
          </p>
          <div className="clients-grid">
            {clients.map((name) => (
              <div key={name} className="client-card">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <p>
              ¿Querés saber más sobre nuestros servicios? Escribinos y te
              respondemos a la brevedad.
            </p>
            <a className="contact-email" href="mailto:info@rsiargentina.com">
              info@rsiargentina.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} RSI Argentina. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
