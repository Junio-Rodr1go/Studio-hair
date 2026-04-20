const photos = [
  { img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', title: 'Alisamentos', desc: 'Fios lisos, saudáveis e com brilho duradouro usando as melhores técnicas do mercado.' },
  { img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', title: 'Design em Unhas', desc: 'Nail art, esmaltação em gel e designs exclusivos para valorizar suas mãos.' },
  { img: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80', title: 'Sobrancelhas', desc: 'Design personalizado que realça o seu olhar e harmoniza com seu rosto.' },
  { img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', title: 'Blindagem em Gel', desc: 'Proteção e resistência para suas unhas naturais com acabamento impecável.' },
  { img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', title: 'Alongamentos', desc: 'Soft gel de alta qualidade para unhas longas, bonitas e naturais.' },
  { img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', title: 'Escova Progressiva', desc: 'Redução de volume e frizz com fórmulas que respeitam a saúde dos seus fios.' },
  { img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', title: 'Selagem', desc: 'Tratamento que sela as cutículas, devolve brilho e maciez aos cabelos.' },
]

export default function Gallery() {
  const s = {
    section: { padding: '96px 0', background: '#2d2d2d' },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 32px' },
    header: { textAlign: 'center', marginBottom: '64px' },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 16px', fontFamily: 'Georgia, serif', color: '#fff' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', margin: '0 auto', borderRadius: '2px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' },
    card: { position: 'relative', borderRadius: '16px', transition: '.2s ease-in', overflow: 'hidden', height: '280px', cursor: 'pointer' },
    overlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px'
    },
    cardTitle: { color: 'white', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Georgia, serif' },
    cardDesc: { color: '#ddd', fontSize: '13px', marginTop: '6px', lineHeight: 1.5 }
  }

  return (
    <section id="galeria" style={s.section}>
      <div style={s.container}>
        <div style={s.header} className="animate-fade">
          <p style={s.tag}>NOSSO TRABALHO</p>
          <h2 style={s.title}>Serviços</h2>
          <div style={s.divider}></div>
        </div>
        <div style={s.grid}>
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                ...s.card,
                backgroundImage: `url('${photo.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'

              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="overlay" style={s.overlay}>
                <p style={s.cardTitle}>{photo.title}</p>
                <p style={s.cardDesc}>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}