export default function Dedicatory() {
    return (


        <div style = {{
            width   :"100%",
            height :"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>   
        <div style={{ 
            backgroundColor: '#f0f8ff', 
            borderRadius: '10px', 
            textAlign: 'center', 
            width:"90%",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding:"2%",
            marginBottom:"100px"
        }}>
            <h2 style={{  backgroundImage: 'linear-gradient(135deg, #f25757, #f2858e)',
                WebkitBackgroundClip: 'text',
                color: 'transparent' }}>Para mi querida Angie Mariana Milagros</h2>
            <p style={{ fontSize: '18px', color: '#333' }}>
                No tengo palabras suficientes para describir lo importante que eres en mi vida. 
                Cada momento a tu lado ha sido un regalo, y cada sonrisa tuya una razón más para seguir adelante. 
                La forma en que iluminas mi mundo con tu presencia es algo que jamás podré olvidar.
            </p>
            <p style={{ fontSize: '18px', color: '#333' }}>
                Estoy agradecido por haberte conocido, por todos los momentos felices que hemos compartido 
                y por todo lo que hemos vivido juntos. Cada instante junto a ti queda grabado en mi corazón 
                de una manera profunda e imborrable. Eres mi todo, mi amor.
            </p>
        </div>
        </div>
    );
}
