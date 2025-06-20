import { useState } from 'react';
import { FaUpload, FaSearch } from 'react-icons/fa';

export default function ImageUpload({ onPrediction }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("No se ha seleccionado ningún archivo");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file){
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);

    try {
      const res = await fetch('http://127.0.0.1:8010/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      onPrediction(data);
    } catch (error) {
      alert("Error al conectar con el backend.");
      console.error(error);
    }
  };

   return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      {/* Contenedor personalizado para el input file */}
      <div style={{
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <label style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'all 0.3s',
          ':hover': {
            backgroundColor: '#45a049'
          }
        }}>
          <FaUpload />
          Elegir archivo
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
        <span style={{ fontSize: '14px', color: '#666' }}>{fileName}</span>
      </div>

      {preview && (
        <div style={{ margin: '20px 0' }}>
          <img 
            src={preview} 
            alt="Vista previa" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '300px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      )}

      <button 
        type="submit" 
        disabled={!image}
        style={{
          padding: '12px 24px',
          backgroundColor: image ? '#2196F3' : '#cccccc',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: image ? 'pointer' : 'not-allowed',
          fontSize: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s',
          ':hover': {
            backgroundColor: image ? '#0b7dda' : '#cccccc'
          }
        }}
      >
        <FaSearch />
        Analizar imagen
      </button>
    </form>
  );
}