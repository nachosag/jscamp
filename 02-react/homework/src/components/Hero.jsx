import '../styles/Hero.css'

export function Hero() {
  return (
    <section className="hero-section">
      <h1>Encuentra el trabajo de tus sueños</h1>
      <p>Únete a la comunidad de desarrolladores y encuentra tu próxima oportunidad.</p>
      <div className="search-bar">
        <div className="input-group">
          <span className="search-icon">🔍</span>
          <input type="text" className="search-input" placeholder='Buscar empleos por título, habilidad o empresa' />
        </div>
        <button className="btn-search">Buscar</button>
      </div>
    </section>
  )
}