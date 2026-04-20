import { Whatsapp } from "react-bootstrap-icons";

const styles = {
    conteiner: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#25d366',
        position: 'fixed',
        bottom: '5px',
        right: '5px',
        padding: '20px',
        zIndex: '2',
        borderRadius: '20px',
        gap: '20%',
        cursor: 'pointer',
    },
    text: {
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        color: '#fff',
    },
    animations: {
        opacityOpen: 'opacity 2s ease-out',
        opacityClose: 'opacityClose 1.5s ease-out',
        open: 'toOpen 1s ease-out',
        close: 'toClose 1s ease-out',
    }
}


function IconZap() {

    return (
        <div>
            <div className="whatsapp" style={styles.conteiner}
                onClick={() => {
                    window.location.href = 'https://wa.me/18998242518'
                }}

                onMouseEnter={e => {
                    e.target.animation = styles.animations.open
                }}
                onMouseLeave={e => {
                    e.target.animation = styles.animations.close
                }}
            >
                <Whatsapp color="#fff" size={45} />
                <p style={styles.text}
                    onMouseEnter={e => {
                        e.target.style.animation = styles.animations.opacityOpen
                    }}
                    onMouseLeave={e => {
                        e.target.animation = styles.animations.opacityClose
                    }}
                >Contato pelo Whatsapp</p>
            </div>
        </div>
    )

}

export default IconZap