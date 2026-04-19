import { useState, useEffect } from 'react'

const links = ['Início', 'Serviços', 'Galeria', 'Depoimentos', 'Contato']
const ids = ['inicio', 'servicos', 'galeria', 'depoimentos', 'contato']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const s = {
    nav: {
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: '16px 32px',
      background: scrolled ? 'rgba(255,248,248,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(201,169,110,0.15)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    },
    logo: {
      fontSize: '22px', fontWeight: 'bold',
      color: scrolled ? '#2d2d2d' : 'white',
      fontFamily: 'Georgia, serif', letterSpacing: '1px'
    },
    logoSpan: { color: '#c9a96e' },
    links: { display: 'flex', gap: '32px', listStyle: 'none' },
    link: {
      color: scrolled ? '#2d2d2d' : 'white',
      cursor: 'pointer', fontWeight: 500,
      transition: 'color 0.3s', fontSize: '15px'
    },
    hamburger: {
      display: 'none', flexDirection: 'column', gap: '5px',
      cursor: 'pointer', background: 'none', border: 'none'
    },
    bar: { width: '25px', height: '2px', background: scrolled ? '#2d2d2d' : 'white' },
    mobileMenu: {
      position: 'fixed', top: '70px', left: 0, width: '100%',
      background: 'rgba(255,248,248,0.98)', backdropFilter: 'blur(10px)',
      padding: '24px', display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column', gap: '20px', zIndex: 99,
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    mobileLink: { color: '#2d2d2d', cursor: 'pointer', fontWeight: 500, fontSize: '18px' }
  }

  return (
    <>
      <nav style={s.nav}>
        <span style={s.logo}>Daniela <span style={s.logoSpan}>Studio Hair</span></span>
        <ul style={s.links} className="desktop-links">
          {links.map((l, i) => (
            <li key={i} style={s.link} onClick={() => scroll(ids[i])}
              onMouseEnter={e => e.target.style.color = '#c9a96e'}
              onMouseLeave={e => e.target.style.color = scrolled ? '#2d2d2d' : 'white'}
            >{l}</li>
          ))}
        </ul>
        <button style={s.hamburger} onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
          <span style={s.bar}></span>
          <span style={s.bar}></span>
          <span style={s.bar}></span>
        </button>
      </nav>
      <div style={s.mobileMenu}>
        {links.map((l, i) => (
          <span key={i} style={s.mobileLink} onClick={() => scroll(ids[i])}>{l}</span>
        ))}
      </div>
    </>
  )
}
