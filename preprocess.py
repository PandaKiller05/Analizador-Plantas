import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split

IMG_SIZE = 224
DATASET_PATH = "dataset/PlantVillage"  # Ajusta si tu subcarpeta tiene otro nombre
OUTPUT_PATH = "data/plant_data.npz"

images = []
labels = []
class_names = os.listdir(DATASET_PATH)

print("🪴 Clases encontradas:", class_names)

for idx, class_name in enumerate(class_names):
    class_path = os.path.join(DATASET_PATH, class_name)
    for img_file in os.listdir(class_path):
        img_path = os.path.join(class_path, img_file)
        try:
            img = cv2.imread(img_path)
            img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
            images.append(img / 255.0)
            labels.append(idx)
        except:
            continue

X = np.array(images)
y = np.array(labels)

print(f"✅ Total de imágenes: {len(X)}")

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

np.savez(OUTPUT_PATH, X_train=X_train, X_test=X_test, y_train=y_train, y_test=y_test)
print(f"🧠 Datos guardados en {OUTPUT_PATH}")
