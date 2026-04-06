
import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <h3>YM Regalos & Eventos</h3>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <button>Crea tu bandeja</button>
    </header>
  )
}

export default Header