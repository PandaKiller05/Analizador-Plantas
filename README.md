# 🌿 Plant Disease Detector

Este proyecto consiste en una aplicación de análisis de imágenes de hojas de plantas para detectar enfermedades, usando Transfer Learning con MobileNet y el dataset [PlantVillage](https://www.kaggle.com/datasets/emmarex/plantdisease). La aplicación también ofrecerá consejos y soluciones sobre cómo tratar la enfermedad detectada.

## 🧠 Tecnologías utilizadas

- Python
- TensorFlow + Keras
- OpenCV
- FastAPI (API REST)
- React (Frontend futuro)
- PlantVillage Dataset

## 📁 Estructura del proyecto
PlantDiseaseDetector/
├── dataset/ # Dataset descargado de PlantVillage
├── data/ # Datos preprocesados en formato NumPy
├── src/
│ ├── model/ # Entrenamiento y carga del modelo
│ └── api/ # API REST con FastAPI
├── notebooks/ # Exploraciones y visualización de datos
├── preprocess.py # Preprocesamiento de imágenes
├── requirements.txt
└── README.md

