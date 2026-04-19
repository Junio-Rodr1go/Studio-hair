const testimonials = [
  { name: 'Ana Paula', service: 'Alisamento', text: 'Meu cabelo ficou incrível! A Daniela é muito cuidadosa e atenciosa. Saí do salão me sentindo outra pessoa.', stars: 5 },
  { name: 'Fernanda Lima', service: 'Design de Unhas', text: 'As unhas ficaram perfeitas, exatamente como eu queria. Atendimento maravilhoso, já virei cliente fixa!', stars: 5 },
  { name: 'Juliana Costa', service: 'Sobrancelhas', text: 'Melhor design de sobrancelha que já fiz. Valorizou muito meu rosto. Super recomendo!', stars: 5 },
]

export default function Testimonials() {
  const s = {
    section: { padding: '96px 0', background: 'linear-gradient(to bottom, #fff0f3, #fff8f8)' },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 32px' },
    header: { textAlign: 'center', marginBottom: '64px' },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 16px', fontFamily: 'Georgia, serif' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', margin: '0 auto', borderRadius: '2px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' },
    card: {
      background: 'white', borderRadius: '20px', padding: '32px',
      border: '1px solid #f5e6d3', boxShadow: '0 4px 20px rgba(201,169,110,0.08)',
      transition: 'all 0.3s ease'
    },
    stars: { color: '#c9a96e', fontSize: '20px', marginBottom: '16px' },
    text: { color: '#555', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' },
    name: { fontWeight: 'bold', fontSize: '16px' },
    service: { color: '#c9a96e', fontSize: '13px', marginTop: '4px' }
  }

  return (
    <section id="depoimentos" style={s.section}>
      <div style={s.container}>
        <div style={s.header} className="animate-fade">
          <p style={s.tag}>DEPOIMENTOS</p>
          <h2 style={s.title}>O que nossas clientes dizem</h2>
          <div style={s.divider}></div>
        </div>
        <div style={s.grid}>
          {testimonials.map((t, i) => (
            <div key={i} style={s.card} className="animate-fade"
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#c9a96e' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#f5e6d3' }}
            >
              <div style={s.stars}>{'★'.repeat(t.stars)}</div>
              <p style={s.text}>"{t.text}"</p>
              <div style={s.name}>{t.name}</div>
              <div style={s.service}>{t.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
