
import { Link } from 'react-router'
import './HeaderStyle.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-ym">YM</span>
          <span className="brand-text">Regalos & Eventos</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link active">Inicio</Link>
          <Link to="/catalogo" className="nav-link">Catálogo</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        <button className="header-cta">Crear tu Bandeja</button>
      </div>
    </header>
  )
}

export default Header