import { Whatsapp } from 'react-bootstrap-icons'

export default function Contact() {
  const s = {
    section: { padding: '96px 0', background: '#2d2d2d' },
    container: { maxWidth: '900px', margin: '0 auto', padding: '0 32px', textAlign: 'center' },
    tag: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', margin: '12px 0 16px', fontFamily: 'Georgia, serif', color: 'white' },
    divider: { width: '80px', height: '3px', background: 'linear-gradient(to right, #c9a96e, #f0d9a8)', margin: '0 auto 32px', borderRadius: '2px' },
    sub: { color: '#ccc', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px' },
    card: {
      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,169,110,0.3)',
      borderRadius: '20px', padding: '48px', marginTop: '48px'
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '40px' },
    infoTitle: { color: '#c9a96e', fontWeight: 600, fontSize: '13px', letterSpacing: '1px', marginBottom: '8px' },
    infoText: { color: '#e5e5e5', fontSize: '15px', lineHeight: 1.6 },
    map: { width: '100%', height: '300px', borderRadius: '16px', border: 'none', marginTop: '32px', filter: 'grayscale(20%)' }
  }

  return (
    <section id="contato" style={s.section}>
      <div style={s.container}>
        <div className="animate-fade">
          <p style={s.tag}>AGENDE SEU HORÁRIO</p>
          <h2 style={s.title}>Venha nos visitar</h2>
          <div style={s.divider}></div>
          <p style={s.sub}>
            Pronta para se transformar? Entre em contato pelo WhatsApp e agende seu horário com a gente!
          </p>
          <a href="https://wa.me/message/P7NDYDACOJ4NN1" target="_blank" className="btn-primary" style={{ fontSize: '18px', padding: '16px 48px' }}>
            Agendar pelo WhatsApp
          </a>

          <div style={s.card}>
            <div style={s.grid}>
              <div>
                <p style={s.infoTitle}>ENDEREÇO</p>
                <p style={s.infoText}>Via Agnaldo Fernando dos Santos, 965 - casa 520 - Monterrey, Araçatuba - SP, 16052-805</p>
              </div>
              <div>
                <p style={s.infoTitle}>HORÁRIO</p>
                <p style={s.infoText}>Seg–Sáb: 9h às 19h</p>
              </div>
              <div>
                <p style={s.infoTitle}>WHATSAPP</p>
                <p style={s.infoText}>18 99824-2518</p>
              </div>
            </div>

            {/* Troca o src abaixo pelo link do Google Maps do salão */}
            <iframe
              src="https://www.google.com/maps/place/Daniela+cabelos+e+unhas/@-21.1727197,-50.4319905,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOxJmf5bM2e_9SCghBH2Lei7CaQ3_62ip7YO8FB!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOxJmf5bM2e_9SCghBH2Lei7CaQ3_62ip7YO8FB%3Dw203-h269-k-no!7i3072!8i4080!4m16!1m8!3m7!1s0x949645d68805c909:0xf623bbcbeef56112!2sVia+Agnaldo+Fernando+dos+Santos,+965+-+casa+520+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16052-805!3b1!8m2!3d-21.171963!4d-50.435583!10e5!3m6!1s0x949645ec184ff5b3:0xd2810ddcc3d37cff!8m2!3d-21.1715122!4d-50.4316949!10e5!16s%2Fg%2F11yg9p6hff?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
              style={s.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
