import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import fondo from '../assets/plants-background-kzi68ynjd78a5nea.jpg';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div style={{
      position: 'fixed', // Esto asegura que cubra toda la pantalla
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url(' + fondo + ')', // Cambia la ruta según tu estructura de carpetas
      backgroundSize: 'cover', // Cubre todo el espacio disponible
      backgroundPosition: 'center', // Centra la imagen
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // Para efecto parallax
      overflow: 'auto' // Permite scroll si el contenido es muy largo
    }}>
      <div style={{
        backgroundColor: 'rgb(233, 211, 189)',
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '20px' }}>
          Analizador de Enfermedades en Plantas 🌿
        </h1>
        <ImageUpload onPrediction={setResult} />
        {result && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: 'rgba(245, 245, 220, 1)',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <h2 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>Resultado:</h2>
            <p><strong>Clasificación:</strong> {result.class}</p>
            <p><strong>Consejo:</strong> {result.consejo}</p>
          </div>
        )}
      </div>
    </div>
  );
}