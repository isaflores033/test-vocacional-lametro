/**
 * ¿QUÉ TIPO DE DISEÑADOR ERES? - LA METRO
 * Aplicación interactiva a ancho completo
 */

// ==========================================================
// 1. BASE DE DATOS DE LAS 7 CARRERAS DE LA METRO
// ==========================================================
const CAREERS = {
  industrial: {
    id: 'industrial',
    name: 'Diseño Industrial',
    description: 'Tu creatividad busca convertir ideas en cosas reales. Te interesa imaginar, resolver problemas, experimentar con materiales y crear productos que combinen funcionalidad, estética e innovación.',
    superpower: 'Convertir problemas en soluciones.',
    tagsLabel: 'Podrías diseñar',
    tags: ['Productos', 'Muebles', 'Objetos', 'Prototipos', 'Packaging', 'Soluciones innovadoras']
  },
  grafico: {
    id: 'grafico',
    name: 'Diseño Gráfico',
    description: 'Tu creatividad transforma ideas en imágenes. Te gusta comunicar, experimentar con colores, tipografías, ilustraciones e imágenes para convertir conceptos en mensajes visuales que conecten con las personas.',
    superpower: 'Convertir una idea en una imagen que todos puedan entender.',
    tagsLabel: 'Podrías diseñar',
    tags: ['Identidades de marca', 'Ilustraciones', 'Packaging', 'Editorial', 'Campañas visuales', 'Contenido digital']
  },
  modas: {
    id: 'modas',
    name: 'Diseño de Modas',
    description: 'Tu creatividad se convierte en estilo. Te interesa la estética, las tendencias, los materiales y la manera en que las personas expresan su identidad a través de lo que llevan puesto.',
    superpower: 'Convertir una idea en una propuesta que las personas pueden vestir.',
    tagsLabel: 'Podrías crear',
    tags: ['Colecciones', 'Prendas', 'Accesorios', 'Styling', 'Tendencias', 'Imagen de moda', 'Nuevos conceptos']
  },
  multimedia: {
    id: 'multimedia',
    name: 'Diseño Multimedia',
    description: 'Tu creatividad combina interactividad, animación y tecnología digital. Te apasiona contar historias visuales a través del movimiento, el video, los videojuegos, los efectos visuales y las experiencias inmersivas que atrapan a las personas.',
    superpower: 'Darle vida, movimiento e interactividad a cualquier historia o mundo digital.',
    tagsLabel: 'Podrías crear',
    tags: ['Animación 2D y 3D', 'Videojuegos', 'Motion graphics', 'Efectos visuales', 'Realidad virtual y aumentada', 'Experiencias interactivas']
  },
  publicitario: {
    id: 'publicitario',
    name: 'Diseño Publicitario',
    description: 'Tu creatividad sabe cómo llamar la atención. Te gusta encontrar ideas, crear conceptos y descubrir cómo comunicar un mensaje para que las personas no solo lo vean, sino que quieran saber más y actuar.',
    superpower: 'Convertir una idea en un mensaje que genera una reacción.',
    tagsLabel: 'Podrías crear',
    tags: ['Campañas', 'Conceptos creativos', 'Contenido para redes', 'Estrategias de marca', 'Publicidad digital', 'Narrativas']
  },
  fotografico: {
    id: 'fotografico',
    name: 'Diseño Fotográfico',
    description: 'Tu creatividad encuentra historias detrás de una imagen. Tienes curiosidad por observar, descubrir momentos y encontrar nuevas maneras de representar personas, productos, lugares e historias.',
    superpower: 'Ver lo que otros pasan por alto y convertirlo en una imagen.',
    tagsLabel: 'Podrías crear',
    tags: ['Retratos', 'Fotografía de producto', 'Fotografía de moda', 'Fotografía documental', 'Dirección de fotografía', 'Producción audiovisual']
  },
  interiores: {
    id: 'interiores',
    name: 'Diseño de Interiores',
    description: 'Tu creatividad transforma los espacios. Te interesa cómo las personas viven, trabajan y experimentan un lugar. Te gusta imaginar ambientes, combinar materiales, colores, iluminación y mobiliario para crear espacios con personalidad.',
    superpower: 'Convertir un espacio vacío en una experiencia.',
    tagsLabel: 'Podrías diseñar',
    tags: ['Casas', 'Oficinas', 'Tiendas', 'Restaurantes', 'Espacios comerciales', 'Mobiliario', 'Ambientes']
  }
};

// ==========================================================
// 2. PREGUNTAS Y MATRIZ DE PUNTUACIÓN
// ==========================================================
const QUESTIONS = [
  {
    number: 1,
    question: 'Si te dan una hoja en blanco y te dicen “crea algo”, ¿qué te gustaría hacer?',
    options: [
      { key: 'A', text: 'Crear un logo, una ilustración o una composición visual que comunique una idea.', career: 'grafico' },
      { key: 'B', text: 'Imaginar un objeto que solucione un problema de la vida cotidiana.', career: 'industrial' },
      { key: 'C', text: 'Diseñar una habitación, local o espacio donde las personas se sientan cómodas y sorprendidas.', career: 'interiores' },
      { key: 'D', text: 'Crear una imagen, video o experiencia digital que sorprenda a las personas.', career: 'multimedia' }
    ]
  },
  {
    number: 2,
    question: '¿Cuál de estas actividades te llamaría más la atención?',
    options: [
      { key: 'A', text: 'Crear una colección de ropa y decidir colores, materiales y estilos.', career: 'modas' },
      { key: 'B', text: 'Hacer fotografías que cuenten una historia o transmitan una emoción.', career: 'fotografico' },
      { key: 'C', text: 'Crear una campaña para una marca que consiga llamar la atención de las personas.', career: 'publicitario' },
      { key: 'D', text: 'Crear una experiencia para un espacio, definiendo ambientes, mobiliario e iluminación.', career: 'interiores' }
    ]
  },
  {
    number: 3,
    question: 'Cuando ves un producto, anuncio o espacio que te gusta, ¿qué es lo primero que notas?',
    options: [
      { key: 'A', text: 'Su forma, materiales, funcionamiento y cómo fue construido.', career: 'industrial' },
      { key: 'B', text: 'Los colores, tipografías, imágenes y composición gráfica.', career: 'grafico' },
      { key: 'C', text: 'La distribución del espacio, iluminación, mobiliario y ambiente.', career: 'interiores' },
      { key: 'D', text: 'El concepto, el mensaje y la manera en que consigue llamar mi atención.', career: 'publicitario' }
    ]
  },
  {
    number: 4,
    question: 'Si tuvieras que trabajar durante todo un día en un proyecto creativo, ¿cuál elegirías?',
    options: [
      { key: 'A', text: 'Diseñar una silla, lámpara, mueble o producto innovador.', career: 'industrial' },
      { key: 'B', text: 'Diseñar una colección de ropa y desarrollar su concepto.', career: 'modas' },
      { key: 'C', text: 'Crear fotografías para una marca, artista, producto o campaña.', career: 'fotografico' },
      { key: 'D', text: 'Crear una animación, video, experiencia digital o contenido interactivo.', career: 'multimedia' }
    ]
  },
  {
    number: 5,
    question: '¿Qué te gustaría conseguir con tus diseños?',
    options: [
      { key: 'A', text: 'Que las personas entiendan rápidamente una idea y que una marca tenga una identidad memorable.', career: 'grafico' },
      { key: 'B', text: 'Que un producto sea funcional, atractivo y mejore la vida de las personas.', career: 'industrial' },
      { key: 'C', text: 'Que un espacio tenga personalidad y haga sentir algo especial a quienes lo utilizan.', career: 'interiores' },
      { key: 'D', text: 'Que una campaña genere interés, conversación y consiga que las personas actúen.', career: 'publicitario' }
    ]
  },
  {
    number: 6,
    question: '¿Cuál de estas frases te representa más?',
    options: [
      { key: 'A', text: '“Me gusta transformar ideas en imágenes que comuniquen.”', career: 'grafico' },
      { key: 'B', text: '“Me gusta imaginar cómo podrían ser las cosas que todavía no existen.”', career: 'fotografico' },
      { key: 'C', text: '“Me interesa la estética, las tendencias y la manera en que las personas se expresan.”', career: 'modas' },
      { key: 'D', text: '“Me gusta contar historias utilizando imágenes, videos, tecnología y experiencias.”', career: 'multimedia' }
    ]
  }
];

// ==========================================================
// 3. ESTADO DE LA APLICACIÓN
// ==========================================================
const state = {
  currentStepIndex: 0,
  answers: [], // { questionIndex, selectedKey, career }
  studentName: '',
  soundEnabled: true,
  calculatedResult: null
};

// ==========================================================
// 4. MOTOR DE AUDIO NATIVO Y DUAL (ARCHIVOS REALES + FALLBACK)
// ==========================================================
const SOUND_FILES = {
  pop: 'audio/pop.wav',
  select: 'audio/select.wav',
  fanfare: 'audio/fanfare.wav',
  sparkle: 'audio/sparkle.wav'
};

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      if (!window.__appAudioCtx) {
        window.__appAudioCtx = new AudioContextClass();
      }
      if (window.__appAudioCtx.state === 'suspended') {
        window.__appAudioCtx.resume().catch(() => {});
      }
    }
  } catch (e) {}

  // Priming con reproducción corta
  try {
    const primer = new Audio(SOUND_FILES.pop);
    primer.volume = 0.01;
    primer.play().then(() => primer.pause()).catch(() => {});
  } catch (e) {}
}

window.addEventListener('pointerdown', unlockAudio, { passive: true, once: false });
window.addEventListener('keydown', unlockAudio, { passive: true, once: false });

function playSound(type) {
  if (!state.soundEnabled) return;
  unlockAudio();

  const src = SOUND_FILES[type];
  if (!src) return;

  try {
    // 1. Reproducción inmediata mediante HTML5 Audio
    const audio = new Audio(src);
    audio.volume = type === 'sparkle' ? 0.45 : (type === 'fanfare' ? 0.95 : 0.85);
    const promise = audio.play();

    if (promise !== undefined) {
      promise.catch(() => {
        playWebAudioFallback(type);
      });
    }
  } catch (err) {
    playWebAudioFallback(type);
  }
}

function playWebAudioFallback(type) {
  try {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioClass) return;
    if (!window.__appAudioCtx) window.__appAudioCtx = new AudioClass();
    const ctx = window.__appAudioCtx;
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.07);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'select') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(783.99, now + 0.06);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.17);
    } else if (type === 'fanfare') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + i * 0.12;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.45, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    } else if (type === 'sparkle') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1100, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    }
  } catch (e) {}
}

// ==========================================================
// 5. SISTEMA DE CONFETI EN CANVAS NATIVO
// ==========================================================
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationId = null;
    if (this.canvas) {
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst() {
    if (!this.canvas || !this.ctx) return;
    this.particles = [];
    const colors = ['#ea0029', '#323e48', '#ff7700', '#ffd60a', '#028090', '#7209b7', '#ff0055'];
    const count = 100;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width * (0.35 + Math.random() * 0.3),
        y: this.canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 15 - 5,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.4,
        wobble: Math.random() * 10,
        opacity: 1
      });
    }

    if (!this.animationId) {
      this.loop();
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.985;
      p.rotation += p.rotationSpeed;
      p.wobble += 0.1;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > this.canvas.height + 40) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * (0.6 + Math.sin(p.wobble) * 0.4));
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animationId = null;
    }
  }
}

let confettiInstance = null;

// ==========================================================
// 6. CONTROLADOR DE VISTAS (SPA SCREENS)
// ==========================================================
const screens = {
  welcome: document.getElementById('screen-welcome'),
  quiz: document.getElementById('screen-quiz'),
  calculating: document.getElementById('screen-calculating'),
  result: document.getElementById('screen-result')
};

function showScreen(screenName) {
  Object.values(screens).forEach(sc => {
    if (sc) sc.classList.remove('active');
  });

  const target = screens[screenName];
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Control del botón "Inicio" en el header (solo en header, ninguno duplicado)
  const headerHomeBtn = document.getElementById('btn-header-home');
  if (headerHomeBtn) {
    if (screenName === 'welcome') {
      headerHomeBtn.style.display = 'none';
    } else {
      headerHomeBtn.style.display = 'inline-flex';
    }
  }
}

function formatName(name) {
  if (!name) return '';
  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
}

// ==========================================================
// 7. RENDERIZADO DE PREGUNTAS (ESTILO IMAGE 4 - 4 COLUMNAS)
// ==========================================================
function renderCurrentQuestion() {
  const currentQ = QUESTIONS[state.currentStepIndex];
  if (!currentQ) return;

  const stepNumEl = document.getElementById('current-step-num');
  const totalNumEl = document.getElementById('total-steps-num');
  const kickerEl = document.getElementById('q-kicker');
  const questionTextEl = document.getElementById('question-text');
  const fillEl = document.getElementById('quiz-progress-fill');
  const backBtn = document.getElementById('btn-back');

  if (stepNumEl) stepNumEl.textContent = currentQ.number;
  if (totalNumEl) totalNumEl.textContent = QUESTIONS.length;
  if (kickerEl) kickerEl.textContent = `Pregunta ${currentQ.number} de ${QUESTIONS.length}`;
  if (questionTextEl) questionTextEl.textContent = currentQ.question;

  // Barra de progreso
  const progressPercent = (currentQ.number / QUESTIONS.length) * 100;
  if (fillEl) fillEl.style.width = `${progressPercent}%`;

  if (backBtn) {
    backBtn.disabled = state.currentStepIndex === 0;
  }

  const existingAnswer = state.answers[state.currentStepIndex];

  // Renderizar las 4 tarjetas de opciones
  const optionsContainer = document.getElementById('options-container');
  if (!optionsContainer) return;
  optionsContainer.innerHTML = '';

  currentQ.options.forEach(opt => {
    const card = document.createElement('div');
    const tabClass = `card-tab-${opt.key.toLowerCase()}`;
    card.className = `option-card ${tabClass}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-key', opt.key);

    if (existingAnswer && existingAnswer.selectedKey === opt.key) {
      card.classList.add('selected');
    }

    card.innerHTML = `
      <div class="option-card-header">
        <span class="option-badge-letter">${opt.key}</span>
        <div class="option-select-dot"></div>
      </div>
      <div class="option-card-body">
        <p class="option-card-text">${opt.text}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      handleOptionSelect(opt.key, opt.career, card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOptionSelect(opt.key, opt.career, card);
      }
    });

    optionsContainer.appendChild(card);
  });
}

function handleOptionSelect(selectedKey, career, cardElement) {
  playSound('select');

  const allCards = document.querySelectorAll('.option-card');
  allCards.forEach(c => c.classList.remove('selected'));
  cardElement.classList.add('selected');

  state.answers[state.currentStepIndex] = {
    questionIndex: state.currentStepIndex,
    selectedKey,
    career
  };

  setTimeout(() => {
    if (state.currentStepIndex < QUESTIONS.length - 1) {
      state.currentStepIndex++;
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  }, 220);
}

// ==========================================================
// 8. CÁLCULO DEL PERFIL CREATIVO (MATRIZ DE PUNTUACIÓN)
// ==========================================================
function calculateResult() {
  const scores = {
    industrial: 0,
    grafico: 0,
    modas: 0,
    multimedia: 0,
    publicitario: 0,
    fotografico: 0,
    interiores: 0
  };

  state.answers.forEach(ans => {
    if (ans && ans.career && scores[ans.career] !== undefined) {
      scores[ans.career]++;
    }
  });

  const sortedCareers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const topCareerId = sortedCareers[0];
  const secondCareerId = sortedCareers[1];

  const topScore = scores[topCareerId];
  const secondScore = scores[secondCareerId];
  const isTie = topScore === secondScore && topScore > 0;

  return {
    winner: CAREERS[topCareerId],
    secondary: isTie ? CAREERS[secondCareerId] : null
  };
}

function finishQuiz() {
  showScreen('calculating');
  playSound('pop');

  const resultData = calculateResult();
  state.calculatedResult = resultData;

  setTimeout(() => {
    renderResultScreen(resultData);
    showScreen('result');

    triggerWinnerZoomEffect();
    if (confettiInstance) {
      confettiInstance.burst();
      setTimeout(() => confettiInstance.burst(), 400);
    }
    playSound('fanfare');
  }, 1100);
}

// ==========================================================
// 9. PANTALLA DE RESULTADOS
// ==========================================================
function renderResultScreen(resultData) {
  const { winner, secondary } = resultData;
  if (!winner) return;

  // Saludo sin mayúsculas sostenidas: "¡Isa! Tu ADN creativo es:"
  const greetingEl = document.getElementById('result-student-greeting');
  if (greetingEl) {
    const rawName = state.studentName.trim();
    if (rawName) {
      const formatted = formatName(rawName);
      greetingEl.textContent = `¡${formatted}! Tu ADN creativo es:`;
    } else {
      greetingEl.textContent = '¡Tu ADN creativo es:';
    }
  }

  // Título de la carrera con ZOOM
  const titleEl = document.getElementById('winner-career-title');
  if (titleEl) {
    titleEl.textContent = winner.name;
  }

  // Afinidad secundaria si hubo empate
  const secBox = document.getElementById('secondary-affinity-box');
  const secText = document.getElementById('secondary-affinity-text');
  if (secBox && secText) {
    if (secondary) {
      secBox.style.display = 'inline-block';
      secText.innerHTML = `También tienes afinidad con: <strong>${secondary.name}</strong>`;
    } else {
      secBox.style.display = 'none';
    }
  }

  // Columna 1: Descripción del perfil
  const descEl = document.getElementById('winner-description');
  if (descEl) descEl.textContent = winner.description;

  // Columna 2: Superpoder
  const powerEl = document.getElementById('winner-superpower');
  if (powerEl) powerEl.textContent = winner.superpower;

  // Podrías diseñar / Podrías crear: NUNCA se cortan a los lados
  const tagLabelEl = document.getElementById('create-badge-label');
  if (tagLabelEl) {
    tagLabelEl.textContent = winner.tagsLabel;
  }

  const tagsCloudEl = document.getElementById('winner-tags-cloud');
  if (tagsCloudEl) {
    tagsCloudEl.innerHTML = '';
    winner.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'clean-tag-pill';
      span.textContent = tag;
      tagsCloudEl.appendChild(span);
    });
  }
}

function triggerWinnerZoomEffect() {
  const titleEl = document.getElementById('winner-career-title');
  if (titleEl) {
    titleEl.classList.remove('zoom-entrance');
    void titleEl.offsetWidth; // Reflow
    titleEl.classList.add('zoom-entrance');
  }
}

// ==========================================================
// 10. EMOJIS AL PASAR EL CURSOR POR "DISEÑADOR"
// ==========================================================
function setupDesignerEmojis() {
  const designerWord = document.getElementById('word-designer');

  // Emojis de carreras que saltan al pasar el cursor por "diseñador"
  const CAREER_EMOJIS = ['🎨', '👗', '🪑', '🎬', '📢', '📷', '🏠'];
  let lastSpawnTime = 0;

  function spawnEmoji(targetX, targetY, emojiChar) {
    const emojiEl = document.createElement('span');
    emojiEl.className = 'jumping-career-emoji';
    emojiEl.textContent = emojiChar;

    // Posición inicial con pequeña variación
    const startX = targetX + (Math.random() - 0.5) * 40;
    const startY = targetY + (Math.random() - 0.5) * 20;

    emojiEl.style.left = `${startX}px`;
    emojiEl.style.top = `${startY}px`;

    // Parámetros de animación CSS (fuerza hacia arriba y hacia los lados)
    const dx = (Math.random() - 0.5) * 140; // Movimiento lateral
    const dy = -80 - Math.random() * 90;   // Salto hacia arriba
    const rot = (Math.random() - 0.5) * 50; // Rotación

    emojiEl.style.setProperty('--dx', `${dx}px`);
    emojiEl.style.setProperty('--dy', `${dy}px`);
    emojiEl.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(emojiEl);
    playSound('sparkle');

    setTimeout(() => {
      emojiEl.remove();
    }, 1300);
  }

  function burstEmojisAroundWord(e) {
    const rect = designerWord.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Lanzar ramillete de las 7 carreras
    CAREER_EMOJIS.forEach((char, index) => {
      setTimeout(() => {
        spawnEmoji(centerX, centerY, char);
      }, index * 45);
    });
  }

  if (designerWord) {
    designerWord.addEventListener('mouseenter', (e) => {
      burstEmojisAroundWord(e);
    });

    designerWord.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastSpawnTime > 120) {
        lastSpawnTime = now;
        const randomEmoji = CAREER_EMOJIS[Math.floor(Math.random() * CAREER_EMOJIS.length)];
        spawnEmoji(e.clientX, e.clientY, randomEmoji);
      }
    });
  }
}

// ==========================================================
// 11. REINICIAR TEST / VOLVER AL INICIO
// ==========================================================
function restartQuiz() {
  playSound('pop');
  state.currentStepIndex = 0;
  state.answers = [];
  state.calculatedResult = null;
  showScreen('welcome');
}

// ==========================================================
// 12. INICIALIZACIÓN DE LA APLICACIÓN
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  confettiInstance = new ConfettiEngine();

  // 1. Configurar emojis interactivos al pasar el cursor sobre 'diseñador'
  setupDesignerEmojis();

  // 2. Botón Comenzar
  const startBtn = document.getElementById('btn-start');
  const nameInput = document.getElementById('student-name-input');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      unlockAudio();
      playSound('pop');
      if (nameInput) {
        state.studentName = nameInput.value.trim();
      }
      state.currentStepIndex = 0;
      state.answers = [];
      showScreen('quiz');
      renderCurrentQuestion();
    });
  }

  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        startBtn.click();
      }
    });
  }

  // 3. Navegación: Atrás en preguntas
  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      playSound('pop');
      if (state.currentStepIndex > 0) {
        state.currentStepIndex--;
        renderCurrentQuestion();
      }
    });
  }

  // 4. Botón único para ir al inicio (en el header y logo)
  const navLogoLink = document.getElementById('nav-logo-link');
  if (navLogoLink) {
    navLogoLink.addEventListener('click', (e) => {
      e.preventDefault();
      restartQuiz();
    });
  }

  const headerHomeBtn = document.getElementById('btn-header-home');
  if (headerHomeBtn) {
    headerHomeBtn.addEventListener('click', restartQuiz);
  }

  // 5. Botón Volver a empezar en resultado
  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
  }

  // 6. Botón de Sonido con iconos SVG
  const soundBtn = document.getElementById('sound-toggle');
  const soundIconOn = document.getElementById('sound-icon-on');
  const soundIconOff = document.getElementById('sound-icon-off');

  function updateSoundUI() {
    if (!soundBtn || !soundIconOn || !soundIconOff) return;
    if (state.soundEnabled) {
      soundIconOn.style.display = 'block';
      soundIconOff.style.display = 'none';
      soundBtn.classList.add('is-active');
      soundBtn.setAttribute('title', 'Sonido activado (clic para silenciar)');
    } else {
      soundIconOn.style.display = 'none';
      soundIconOff.style.display = 'block';
      soundBtn.classList.remove('is-active');
      soundBtn.setAttribute('title', 'Sonido silenciado (clic para activar)');
    }
  }

  if (soundBtn && soundIconOn && soundIconOff) {
    updateSoundUI();
    soundBtn.addEventListener('click', () => {
      unlockAudio();
      state.soundEnabled = !state.soundEnabled;
      updateSoundUI();
      if (state.soundEnabled) {
        playSound('select');
      }
    });
  }

  // Iniciar en pantalla de bienvenida
  showScreen('welcome');
});
