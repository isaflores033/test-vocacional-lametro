# ¿Qué Diseñador Eres? 👀 · La Metro

Test vocacional interactivo y gamificado para estudiantes de colegio y ferias de orientación vocacional, desarrollado para el **Instituto Metropolitano de Diseño (La Metro)** en Quito, Ecuador.

---

## 🎨 Características del Proyecto

- **Flujo paso a paso (1 página por pregunta):** Las 6 preguntas del test se presentan de forma interactiva e individual, con barra de progreso dinámica y navegación fluida ("Atrás" / "Adelante").
- **Identidad Corporativa de La Metro:**
  - Uso de los colores corporativos oficiales extraídos del logo: **Rojo Metro (`#EA0029`)** y **Gris Grafito/Antracita (`#323E48`)**.
  - Integración de los logotipos oficiales de La Metro (`logo/LOGO VERTICAL.svg` en la portada y pie, y `logo/LOGO HORIZONTAL.png` en la barra superior).
- **Enfoque Juvenil y Divertido para Colegios:**
  - Animación de **TÍTULO GIGANTE CON ZOOM** al revelar el resultado.
  - Efecto de **lluvia de confeti** interactiva en canvas nativo.
  - Efectos de sonido sintetizados mediante **Web Audio API** (sin archivos de audio pesados) con botón para silenciar/activar.
  - Pantalla intermedia de cálculo con suspenso ("Analizando tu ADN creativo... 🧠✨").
  - Opción para ingresar el nombre del estudiante y personalizar el resultado.
- **Puntuación y Resultados:**
  - **Sin mostrar puntajes numéricos:** La puntuación se procesa internamente según la matriz oficial para determinar la carrera ganadora.
  - Muestra el perfil creativo, el **💡 Superpoder**, y las áreas **🚀 Podrías Diseñar / Crear**.
  - Detección de afinidad secundaria en caso de empate.
  - Función de **Descarga de Tarjeta Digital (PNG)** lista para compartir en historias de Instagram o WhatsApp.
  - Botón para **Compartir Resultado** con texto adaptado.
  - Explorador modal para conocer las **7 carreras de La Metro**.
  - Llamado a la acción (CTA) directo al stand de La Metro.

---

## 🚀 Cómo Ejecutar el Proyecto

El proyecto es completamente autónomo y no requiere dependencias externas obligatorias. Puedes usar cualquiera de estas opciones:

### Opción 1: Abrir directamente en el navegador
Haz doble clic sobre el archivo `index.html` o ábrelo con Google Chrome, Safari, Firefox o Edge.

### Opción 2: Servidor local ligero (Recomendado para ferias / tablets)
Desde una terminal en esta carpeta:

```bash
# Con npx
npx serve .

# O con Python 3
python3 -m http.server 3000
```
Luego abre `http://localhost:3000` en tu navegador o en la tablet del stand.

---

## 📂 Estructura de Archivos

```
/Users/Proyectos Google IA/que disenador soy/
├── index.html              # Estructura semántica SPA y componentes
├── styles.css              # Estilos, animación zoom, diseño responsive y colores Metro
├── app.js                  # Lógica del test, matriz de puntaje, audio y confeti
├── package.json            # Scripts de ejecución local
├── README.md               # Documentación del proyecto
└── logo/
    ├── LOGO VERTICAL.svg   # Logo vectorizado oficial para portada
    └── LOGO HORIZONTAL.png # Logo apaisado oficial para barra superior
```

---

## 📊 Matriz de Puntuación Aplicada

| Pregunta | Opción A | Opción B | Opción C | Opción D |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Diseño Gráfico | Diseño Industrial | Diseño de Interiores | Diseño Multimedia |
| **2** | Diseño de Modas | Diseño Fotográfico | Diseño Publicitario | Diseño de Interiores |
| **3** | Diseño Industrial | Diseño Gráfico | Diseño de Interiores | Diseño Publicitario |
| **4** | Diseño Industrial | Diseño de Modas | Diseño Fotográfico | Diseño Multimedia |
| **5** | Diseño Gráfico | Diseño Industrial | Diseño de Interiores | Diseño Publicitario |
| **6** | Diseño Gráfico | Diseño Fotográfico | Diseño de Modas | Diseño Multimedia |
