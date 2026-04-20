export default function About() {
  const s = {
    section: { padding: '96px 0', background: 'linear-gradient(to bottom, #fff0f3, #fff8f8)' },
    container: {
      maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '64px', alignItems: 'center'
    },
    imgWrapper: {
      position: 'relative', borderRadius: '24px', overflow: 'hidden',
      height: '500px', boxShadow: '0 30px 60px rgba(201,169,110,0.2)'
    },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    badge: {
      position: 'absolute', bottom: '24px', left: '24px',
      background: 'linear-gradient(135deg, #c9a96e, #a8843e)',
      color: 'white', padding: '12px 20px', borderRadius: '12px',
      fontWeight: 'bold', fontSize: '14px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 24px', fontFamily: 'Georgia, serif' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', borderRadius: '2px', marginBottom: '24px' },
    text: { color: '#666', lineHeight: 1.8, fontSize: '16px', marginBottom: '16px' },
    highlight: { color: '#c9a96e', fontWeight: 600 },
    features: { display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' },
    feature: { display: 'flex', alignItems: 'center', gap: '12px' },
    featureIcon: {
      width: '40px', height: '40px', borderRadius: '50%',
      background: 'rgba(201,169,110,0.15)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0
    },
    featureText: { color: '#555', fontSize: '15px', lineHeight: 1.5 }
  }

  return (
    <section id="sobre" style={s.section}>
      <div style={s.container}>

        <div className="animate-left" style={s.imgWrapper}>
          <img
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
            alt="Daniela Studio Hair"
            style={s.img}
          />
          <div style={s.badge}>Atendimento exclusivo</div>
        </div>

        <div className="animate-right">
          <p style={s.tag}>SOBRE MIM</p>
          <h2 style={s.title}>Olá, eu sou a <span style={s.highlight}>Daniela</span></h2>
          <div style={s.divider}></div>
          <p style={s.text}>
            Sou cabeleireira especializada em transformar cabelos e realçar a beleza de cada cliente.
            Atendo de forma <span style={s.highlight}>personalizada e exclusiva</span>, dentro do conforto
            do meu espaço particular em condomínio.
          </p>
          <p style={s.text}>
            Aqui você não encontra aquela correria de salão cheio. O atendimento é
            <span style={s.highlight}> só para você</span> com atenção, carinho e tempo dedicado
            para entregar o melhor resultado possível.
          </p>

          <div style={s.features}>
            <div style={s.feature}>
              <div style={s.featureIcon}>🏠</div>
              <span style={s.featureText}>Atendimento em espaço privativo dentro de condomínio</span>
            </div>
            <div style={s.feature}>
              <div style={s.featureIcon}>👩‍🎨</div>
              <span style={s.featureText}>Atendimento solo, foco total em você</span>
            </div>
            <div style={s.feature}>
              <div style={s.featureIcon}>💛</div>
              <span style={s.featureText}>Ambiente aconchegante, seguro e confortável</span>
            </div>
            <div style={s.feature}>
              <div style={s.featureIcon}>📲</div>
              <span style={s.featureText}>Agendamento fácil pelo WhatsApp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
