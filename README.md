# 🌿 Plant Disease Detector

Este proyecto consiste en una aplicación de análisis de imágenes de hojas de plantas para detectar enfermedades, usando Transfer Learning con MobileNet y el dataset [PlantVillage](https://www.kaggle.com/datasets/emmarex/plantdisease). La aplicación también ofrecerá consejos y soluciones sobre cómo tratar la enfermedad detectada.

## 🧠 Tecnologías utilizadas

- Python
- TensorFlow + Keras
- OpenCV
- FastAPI (API REST)
- React (Frontend futuro)
- PlantVillage Dataset

## 🚀 Cómo iniciar
Crear el entorno

python -m venv venv

venv\Scripts\activate


Instalar las dependencias

pip install -r requirements.txt

Descargar el dataset

Ir a: https://www.kaggle.com/datasets/emmarex/plantdisease

Descargar y descomprimir el ZIP.

Mover la carpeta a: Analizador-Plantas/dataset/PlantVillage/

Ejecutar el script que convierte las imágenes en arrays NumPy:
python preprocess.py

## 🤝 Licencia
Este proyecto es educativo y forma parte del curso de inteligencia artificial aplicada a visión por computadora en ExpoEscom.
