import os
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam

# Parámetros
IMG_SIZE = 224
BATCH_SIZE = 32
EPOCHS = 10
DATASET_PATH = 'dataset/PlantVillage'  # Ajusta si está en otra ruta

# 1. Preparación de los datos
train_datagen = ImageDataGenerator(rescale=1./255)
val_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    os.path.join(DATASET_PATH, 'train'),
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

val_generator = val_datagen.flow_from_directory(
    os.path.join(DATASET_PATH, 'val'),
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

# 2. Cargar MobileNetV2 preentrenado
base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(IMG_SIZE, IMG_SIZE, 3))
base_model.trainable = False  # Congelamos las capas del modelo base

# 3. Agregar cabeza personalizada
x = base_model.output
x = GlobalAveragePooling2D()(x)
output = Dense(train_generator.num_classes, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=output)

# 4. Compilar el modelo
model.compile(optimizer=Adam(learning_rate=0.0001),
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# 5. Entrenar
model.fit(
    train_generator,
    validation_data=val_generator,
    epochs=EPOCHS
)

# 6. Guardar el modelo
model.save('src/model/model.h5')
print("✅ Modelo guardado en 'src/model/model.h5'")
