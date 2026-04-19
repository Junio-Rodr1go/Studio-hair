const services = [
  { icon: '💆‍♀️', title: 'Alisamentos', desc: 'Fios lisos, saudáveis e com brilho duradouro usando as melhores técnicas do mercado.' },
  { icon: '💅', title: 'Design em Unhas', desc: 'Nail art, esmaltação em gel e designs exclusivos para valorizar suas mãos.' },
  { icon: '🪮', title: 'Sobrancelhas', desc: 'Design personalizado que realça o seu olhar e harmoniza com seu rosto.' },
  { icon: '✨', title: 'Blindagem em Gel', desc: 'Proteção e resistência para suas unhas naturais com acabamento impecável.' },
  { icon: '💇‍♀️', title: 'Alongamentos', desc: 'Soft gel de alta qualidade para unhas longas, bonitas e naturais.' },
  { icon: '🌿', title: 'Escova Progressiva', desc: 'Redução de volume e frizz com fórmulas que respeitam a saúde dos seus fios.' },
  { icon: '💎', title: 'Selagem', desc: 'Tratamento que sela as cutículas, devolve brilho e maciez aos cabelos.' },
]

export default function Services() {
  const s = {
    section: { padding: '96px 0', background: 'linear-gradient(to bottom, #fff8f8, #fff0f3)' },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 32px' },
    header: { textAlign: 'center', marginBottom: '64px' },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 16px', fontFamily: 'Georgia, serif' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', margin: '0 auto', borderRadius: '2px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' },
    card: {
      background: 'white', borderRadius: '20px', padding: '32px',
      border: '1px solid #f5e6d3', transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(201,169,110,0.08)', cursor: 'default'
    },
    icon: { fontSize: '40px', marginBottom: '16px' },
    cardTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Georgia, serif' },
    cardDesc: { color: '#777', lineHeight: 1.7, fontSize: '15px' }
  }

  return (
    <section id="servicos" style={s.section}>
      <div style={s.container}>
        <div style={s.header} className="animate-fade">
          <p style={s.tag}>O QUE OFERECEMOS</p>
          <h2 style={s.title}>Nossos Serviços</h2>
          <div style={s.divider}></div>
        </div>
        <div style={s.grid}>
          {services.map((sv, i) => (
            <div key={i} style={s.card} className="animate-fade"
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(201,169,110,0.2)'
                e.currentTarget.style.borderColor = '#c9a96e'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,169,110,0.08)'
                e.currentTarget.style.borderColor = '#f5e6d3'
              }}
            >
              <div style={s.icon}>{sv.icon}</div>
              <h3 style={s.cardTitle}>{sv.title}</h3>
              <p style={s.cardDesc}>{sv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
