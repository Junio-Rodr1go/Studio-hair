export default function Footer() {
  const s = {
    footer: { background: '#1a1a1a', padding: '32px', textAlign: 'center', borderTop: '1px solid rgba(201,169,110,0.2)' },
    logo: { fontSize: '20px', fontWeight: 'bold', fontFamily: 'Georgia, serif', color: 'white', marginBottom: '8px' },
    gold: { color: '#c9a96e' },
    text: { color: '#666', fontSize: '14px' }
  }

  return (
    <footer style={s.footer}>
      <p style={s.logo}>Daniela <span style={s.gold}>Studio Hair</span></p>
      <p style={s.text}>© {new Date().getFullYear()} Daniela Studio Hair. Todos os direitos reservados.</p>
    </footer>
  )
}
