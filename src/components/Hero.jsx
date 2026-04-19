export default function Hero() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const s = {
    section: {
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden'
    },
    bg: {
      position: 'absolute', inset: 0,
      backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")',
      backgroundSize: 'cover', backgroundPosition: 'center'
    },
    overlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.3))'
    },
    content: {
      position: 'relative', zIndex: 2,
      maxWidth: '1280px', margin: '0 auto',
      padding: '0 32px', paddingTop: '80px'
    },
    tag: {
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      background: 'rgba(201,169,110,0.2)', border: '1px solid rgba(201,169,110,0.5)',
      padding: '8px 16px', borderRadius: '50px', marginBottom: '24px',
      color: '#f0d9a8', fontSize: '14px', fontWeight: 600, letterSpacing: '1px'
    },
    title: {
      fontSize: 'clamp(2.5rem, 7vw, 5rem)',
      fontWeight: 900, color: 'white', lineHeight: 1.1,
      marginBottom: '24px', fontFamily: 'Georgia, serif'
    },
    gold: { color: '#c9a96e' },
    sub: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      color: '#e5e5e5', marginBottom: '40px', maxWidth: '550px', lineHeight: 1.7
    },
    buttons: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
    stats: { display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap' },
    statNum: { fontSize: '32px', fontWeight: 'bold', color: '#c9a96e' },
    statLabel: { fontSize: '13px', color: '#ccc', marginTop: '4px' }
  }

  return (
    <section id="inicio" style={s.section}>
      <div style={s.bg}></div>
      <div style={s.overlay}></div>
      <div style={s.content}>
        <div className="animate-left">
          <div style={s.tag}>ESPECIALISTAS EM BELEZA</div>
          <h1 style={s.title}>
            Realce sua <span style={s.gold}>beleza</span><br />
            com quem <span style={s.gold}>entende</span>
          </h1>
          <p style={s.sub}>
            No Daniela Studio Hair, cada detalhe é pensado para você se sentir incrível.
            Alisamentos, unhas, sobrancelhas e muito mais com qualidade e carinho.
          </p>
          <div style={s.buttons}>
            <a href="https://wa.me/message/P7NDYDACOJ4NN1" target="_blank" className="btn-primary">
              Agendar Agora
            </a>
            <button className="btn-outline" onClick={() => scroll('servicos')}
              style={{ color: 'white', borderColor: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2d2d2d' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
            >
              Ver Serviços
            </button>
          </div>
          <div style={s.stats}>
            <div><div style={s.statNum}>500+</div><div style={s.statLabel}>Clientes satisfeitas</div></div>
            <div><div style={s.statNum}>7+</div><div style={s.statLabel}>Serviços especializados</div></div>
            <div><div style={s.statNum}>5★</div><div style={s.statLabel}>Avaliação média</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
