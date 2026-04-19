const photos = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
]

export default function Gallery() {
  const s = {
    section: { padding: '96px 0', background: '#2d2d2d' },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 32px' },
    header: { textAlign: 'center', marginBottom: '64px' },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 16px', fontFamily: 'Georgia, serif', color: 'white' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', margin: '0 auto', borderRadius: '2px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' },
    img: { width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer' }
  }

  return (
    <section id="galeria" style={s.section}>
      <div style={s.container}>
        <div style={s.header} className="animate-fade">
          <p style={s.tag}>NOSSO TRABALHO</p>
          <h2 style={s.title}>Galeria</h2>
          <div style={s.divider}></div>
        </div>
        <div style={s.grid}>
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`Trabalho ${i + 1}`} style={s.img}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.03)'; e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)' }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
