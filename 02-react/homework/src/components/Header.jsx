import { NavBar } from "./NavBar"
import '../styles/Header.css';

export function Header() {
  return (
    <header className="header-content">
      <a href="#">DevJobs</a>
      <NavBar/>
      <nav className="nav-buttons">
        <a href="#" className="btn-primary">Publicar un empleo</a>
        <a href="#" className="btn-secondary">Iniciar sesión</a>
      </nav>
    </header>
  )
}