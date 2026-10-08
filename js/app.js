/**
 * APLIKASI UTAMA: JAGO NGIKLAN BANYUMAS
 * Logika State (localStorage), Router Navigasi, Audio Synthesizer,
 * Maskot Kang Mendhoan, dan Interaktivitas Edukatif.
 */

(function () {
  'use strict';

  // --- 1. STATE MANAGEMENT & LOCALSTORAGE ---
  const STORAGE_KEY = 'jago_ngiklan_banyumas_state_v1';

  const defaultState = {
    studentName: '',
    xp: 0,
    currentLevel: 1,
    completedMissions: [], // Array ID misi: ['misi-1', ...]
    discoveredSegments: [], // Array ID segmen kaidah kebahasaan Misi 2
    unlockedBadges: [], // Array ID lencana yang diraih: ['badge-slogan-master', ...]
    quizScores: {},
    reflections: {},
    savedPosters: [],
    soundEnabled: true
  };

  let appState = { ...defaultState };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        appState = { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Penyimpanan lokal tidak tersedia atau dibatasi:", e);
      appState = { ...defaultState };
    }

    // Sinkronkan status keterbukaan misi di APP_DATA
    if (window.APP_DATA && window.APP_DATA.missions) {
      if (appState.completedMissions.includes('misi-1')) {
        if (window.APP_DATA.missions[1]) window.APP_DATA.missions[1].status = 'unlocked';
      }
      if (appState.completedMissions.includes('misi-2')) {
        if (window.APP_DATA.missions[2]) window.APP_DATA.missions[2].status = 'unlocked';
      }
      if (appState.completedMissions.includes('misi-3')) {
        if (window.APP_DATA.missions[3]) window.APP_DATA.missions[3].status = 'unlocked';
      }
      if (appState.completedMissions.includes('misi-4')) {
        if (window.APP_DATA.missions[4]) window.APP_DATA.missions[4].status = 'unlocked';
      }
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn("Gagal menyimpan ke localStorage:", e);
    }
  }

  // --- 2. AUDIO SYNTHESIZER (WEB AUDIO API) ---
  // Menghasilkan bunyi gamelan / nada ceria tanpa unduh file MP3
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
  }

  function playTone(freq, type = 'sine', duration = 0.2, gainVal = 0.15) {
    if (!appState.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
      // Audio tidak didukung atau diblokir browser
    }
  }

  // Nada ceria laras slendro/pelog khas gamelan Banyumas
  function playSuccessChime() {
    playTone(523.25, 'triangle', 0.15, 0.2); // C5
    setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.2), 100); // E5
    setTimeout(() => playTone(783.99, 'triangle', 0.3, 0.25), 200); // G5
  }

  function playClickPop() {
    playTone(440, 'sine', 0.08, 0.1);
  }

  // --- 3. CONFETTI EFFECT (PURE JS CANVAS) ---
  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#E5A93C', '#5C3A21', '#166534', '#EA580C', '#F59E0B', '#DCFCE7'];

    for (let i = 0; i < 70; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        velY: Math.random() * 3 + 2,
        velX: (Math.random() - 0.5) * 4,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    let frames = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.velY;
        p.x += p.velX;
        p.rot += p.rotSpeed;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frames++;
      if (frames < 90) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    render();
  }

  // --- 4. TOAST NOTIFIKASI ---
  function showToast(msg, icon = '✨') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // --- 5. GAMIFIKASI & XP ENGINE ---
  function calculateLevel(xp) {
    const levels = window.APP_DATA ? window.APP_DATA.levels : [];
    let current = levels[0] || { title: "Santri Sinau", rank: "Level 1" };
    for (const lvl of levels) {
      if (xp >= lvl.minXp) {
        current = lvl;
      }
    }
    return current;
  }

  function addXP(amount, reason = "Menyelesaikan Aktivitas") {
    const oldLevel = calculateLevel(appState.xp);
    appState.xp += amount;
    const newLevel = calculateLevel(appState.xp);

    saveState();
    updateUIElements();
    playSuccessChime();
    showToast(`+${amount} XP! ${reason}`, '⭐');

    if (newLevel.rank !== oldLevel.rank) {
      triggerConfetti();
      showToast(`🎉 Selamat! Rika naik pangkat: ${newLevel.title} (${newLevel.rank})!`, '👑');
    }
  }

  // --- 6. ROUTER NAVIGASI ---
  function navigateTo(targetRoute) {
    playClickPop();
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const targetSection = document.getElementById(`view-${targetRoute}`);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      console.warn("Rute tidak ditemukan:", targetRoute);
      const beranda = document.getElementById('view-beranda');
      if (beranda) beranda.classList.add('active');
    }

    // Perbarui active state pada bottom nav & desktop nav
    document.querySelectorAll('[data-route]').forEach(btn => {
      if (btn.getAttribute('data-route') === targetRoute) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 7. MASKOT KANG MENDHOAN INTERACTIVITY ---
  const kangMendhoanQuotes = [
    "Ayo kanca-kanca, madang mendoan anget neng Banyumas pancen paling jos!",
    "Slogan kuwe kudu ringkes, nylekit neng ati, tur gampang dieling-eling!",
    "Iklan sing apik kuwe jujur, ora kena ngapusi utawa nggawe informasi palsu!",
    "Sing semangat sinau! Mengko rika dadi Duta Promosi Banyumas sing hebat!",
    "Mendoan bae ana senine, apa maning gawe poster promosi budaya dhewek!",
    "Kepriwe kabare kanca-kanca? Mayuh kita terusna petualangan keliling Banyumas!"
  ];

  function interactMascot() {
    playSuccessChime();
    const quote = kangMendhoanQuotes[Math.floor(Math.random() * kangMendhoanQuotes.length)];
    const bubbleText = document.getElementById('mascot-speech-text');
    if (bubbleText) {
      bubbleText.innerHTML = `<strong>Kang Mendhoan:</strong> "${quote}"`;
    }
    showToast("Kang Mendhoan mesem seneng!", "🥟");
  }

  // --- 8. MODAL GLOSARIUM NGAPAK ---
  function openNgapakModal(wordKey) {
    playClickPop();
    const data = window.APP_DATA && window.APP_DATA.ngapakGlossary ? window.APP_DATA.ngapakGlossary[wordKey.toLowerCase()] : null;
    const modal = document.getElementById('glossary-modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-word-title');
    const modalArti = document.getElementById('modal-word-arti');
    const modalContoh = document.getElementById('modal-word-contoh');
    const modalCatatan = document.getElementById('modal-word-catatan');

    if (data) {
      if (modalTitle) modalTitle.textContent = data.word;
      if (modalArti) modalArti.textContent = data.arti;
      if (modalContoh) modalContoh.textContent = `"${data.contoh}"`;
      if (modalCatatan) modalCatatan.textContent = data.catatan;
    } else {
      if (modalTitle) modalTitle.textContent = wordKey;
      if (modalArti) modalArti.textContent = "Sapaan / ungkapan dialek Banyumasan.";
      if (modalContoh) modalContoh.textContent = "-";
      if (modalCatatan) modalCatatan.textContent = "Digunakan masyarakat Banyumas dalam percakapan sehari-hari.";
    }

    modal.classList.add('active');
  }

  function closeModal() {
    playClickPop();
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(m => m.classList.remove('active'));
  }

  // --- 9. RENDER ELEMEN DINAMIS & UPDATE UI ---
  function updateUIElements() {
    // 1. Nama Siswa
    const nameDisplays = document.querySelectorAll('.student-name-display');
    const displayName = appState.studentName ? appState.studentName : 'Kanca Jagoan';
    nameDisplays.forEach(el => el.textContent = displayName);

    const inputNameField = document.getElementById('student-name-input');
    if (inputNameField && appState.studentName) {
      inputNameField.value = appState.studentName;
    }

    // Sembunyikan/tampilkan box onboarding jika nama sudah ada
    const onboardingBox = document.getElementById('student-onboarding-box');
    const welcomedBox = document.getElementById('student-welcomed-box');
    if (onboardingBox && welcomedBox) {
      if (appState.studentName) {
        onboardingBox.style.display = 'none';
        welcomedBox.style.display = 'block';
      } else {
        onboardingBox.style.display = 'flex';
        welcomedBox.style.display = 'none';
      }
    }

    // 2. XP & Level
    const xpDisplays = document.querySelectorAll('.student-xp-display');
    xpDisplays.forEach(el => el.textContent = appState.xp);

    const levelObj = calculateLevel(appState.xp);
    const levelDisplays = document.querySelectorAll('.student-level-display');
    levelDisplays.forEach(el => el.textContent = `${levelObj.title} (${levelObj.rank})`);

    // 3. Progress Bar Petualangan (Total 5 Misi)
    const completedCount = appState.completedMissions.length;
    const progressPercent = Math.min(100, Math.round((completedCount / 5) * 100));

    const progressFill = document.getElementById('adventure-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progressPercent}%`;
    }

    const progressText = document.getElementById('adventure-progress-text');
    if (progressText) {
      progressText.textContent = `${completedCount} dari 5 Misi Selesai (${progressPercent}%)`;
    }
  }

  // Render Kartu Misi di Beranda
  function renderMissionCards() {
    const container = document.getElementById('missions-grid');
    if (!container || !window.APP_DATA || !window.APP_DATA.missions) return;

    container.innerHTML = '';
    window.APP_DATA.missions.forEach(mission => {
      const isCompleted = appState.completedMissions.includes(mission.id);
      const isLocked = !isCompleted && mission.status === 'locked';

      const card = document.createElement('div');
      card.className = `mission-card ${isLocked ? 'locked' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Misi ${mission.number}: ${mission.title}`);

      card.innerHTML = `
        <div class="mission-card-top">
          <div class="mission-icon-box" aria-hidden="true">${mission.icon}</div>
          <div class="mission-meta-info">
            <span class="mission-step-pill">MISI ${mission.number}</span>
            <h3 class="mission-title">${mission.title}</h3>
            <span class="mission-subtitle">${mission.subtitle}</span>
          </div>
        </div>
        <p class="mission-card-desc">${mission.desc}</p>
        <div class="mission-card-footer">
          <span class="mission-xp-tag">⭐ +${mission.xpReward} XP</span>
          <span class="mission-status-pill ${isCompleted ? 'status-completed' : (isLocked ? 'status-locked' : 'status-ready')}">
            ${isCompleted ? '✓ Selesai' : (isLocked ? '🔒 Terkunci' : '🚀 Mulai')}
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (isLocked) {
          playTone(220, 'sine', 0.2);
          showToast(`Misi ${mission.number} masih terkunci! Selesaikan misi sebelumnya dahulu ya!`, '🔒');
        } else {
          navigateTo(mission.route);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          card.click();
        }
      });

      container.appendChild(card);
    });
  }

  // Render Khazanah Budaya Banyumas di Beranda
  function renderCultureShowcase() {
    const container = document.getElementById('culture-showcase-row');
    if (!container || !window.APP_DATA || !window.APP_DATA.banyumasCulture) return;

    container.innerHTML = '';
    window.APP_DATA.banyumasCulture.forEach(item => {
      const card = document.createElement('div');
      card.className = 'culture-item-card';
      card.innerHTML = `
        <div class="culture-item-icon" aria-hidden="true">${item.icon}</div>
        <div class="culture-item-category">${item.category}</div>
        <h4 class="culture-item-title">${item.name}</h4>
        <p class="culture-item-desc">${item.desc}</p>
      `;
      container.appendChild(card);
    });
  }

  // =========================================================================
  // --- MODUL MISI 1: KENALI (MATERI LENGKAP & MINI-CEK) ---
  // =========================================================================
  function initMisi1() {
    // 1. Subtab switcher
    const subtabBtns = document.querySelectorAll('#view-misi1 .subtab-btn');
    subtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        const targetSubtab = btn.getAttribute('data-subtab');
        subtabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.m1-subtab-pane').forEach(pane => pane.style.display = 'none');
        const targetPane = document.getElementById(`subtab-${targetSubtab}`);
        if (targetPane) targetPane.style.display = 'block';
      });
    });

    renderM1Concepts();
    renderM1Matrix();
    renderM1Rules();
    renderM1FlipCards();
    renderM1Quiz();
  }

  function renderM1Concepts() {
    const container = document.getElementById('m1-concept-container');
    if (!container || !window.APP_DATA || !window.APP_DATA.misi1) return;

    container.innerHTML = '';
    window.APP_DATA.misi1.concepts.forEach(item => {
      const card = document.createElement('div');
      card.className = 'concept-card';
      card.innerHTML = `
        <div class="concept-card-header">
          <div class="concept-icon" aria-hidden="true">${item.icon}</div>
          <div>
            <h3 class="concept-title">${item.name}</h3>
            <span class="concept-tag">${item.tag}</span>
          </div>
        </div>
        <div class="concept-section-title">Definisi:</div>
        <p class="concept-desc">${item.pengertian}</p>
        
        <div class="concept-section-title">Tujuan:</div>
        <p class="concept-desc">${item.tujuan}</p>
        
        <div class="concept-section-title">Ciri Khas:</div>
        <ul class="concept-list">
          ${item.ciri.map(c => `<li>${c}</li>`).join('')}
        </ul>

        <div class="concept-section-title">Struktur:</div>
        <ul class="concept-list">
          ${item.struktur.map(s => `<li>${s}</li>`).join('')}
        </ul>

        <div class="concept-banyumas-box">
          <strong style="color:var(--color-soga-dark);">🥟 Contoh Banyumas:</strong>
          <p style="margin:0.25rem 0 0.2rem 0; font-weight:700; color:var(--color-oranye);">"${item.contohBanyumas.teks}"</p>
          <span style="color:var(--color-text-muted); font-size:0.78rem;">${item.contohBanyumas.makna}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderM1Matrix() {
    const tbody = document.getElementById('m1-matrix-tbody');
    if (!tbody || !window.APP_DATA || !window.APP_DATA.misi1) return;

    tbody.innerHTML = '';
    window.APP_DATA.misi1.comparisonMatrix.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; color:var(--color-soga-dark);">${row.unsur}</td>
        <td>${row.slogan}</td>
        <td>${row.iklan}</td>
        <td>${row.poster}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderM1Rules() {
    const container = document.getElementById('m1-rules-container');
    if (!container || !window.APP_DATA || !window.APP_DATA.misi1) return;

    container.innerHTML = '';
    window.APP_DATA.misi1.linguisticRules.forEach(rule => {
      const card = document.createElement('div');
      card.className = 'rule-card';
      card.innerHTML = `
        <span class="rule-pill-badge badge-${rule.id}">${rule.badge}</span>
        <h4 style="font-size:1.05rem; color:var(--color-soga-dark); margin-bottom:0.35rem;">${rule.title}</h4>
        <p style="font-size:0.86rem; color:var(--color-text-main); margin-bottom:0.6rem;">${rule.pengertian}</p>
        <div style="background:var(--color-soga-subtle); padding:0.55rem 0.75rem; border-radius:6px; font-size:0.82rem;">
          <strong style="color:var(--color-soga-dark);">Contoh Kalimat:</strong>
          <p style="margin:0.2rem 0 0 0; font-style:italic; color:var(--color-soga); font-weight:600;">"${rule.contoh}"</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderM1FlipCards() {
    const container = document.getElementById('m1-flip-container');
    if (!container || !window.APP_DATA || !window.APP_DATA.misi1) return;

    container.innerHTML = '';
    window.APP_DATA.misi1.flipCards.forEach(fc => {
      const wrapper = document.createElement('div');
      wrapper.className = 'flip-card-wrapper';
      wrapper.setAttribute('role', 'button');
      wrapper.setAttribute('tabindex', '0');
      wrapper.setAttribute('aria-label', `${fc.frontTitle}: Klik untuk melihat jawaban`);

      wrapper.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <span style="font-size:1.8rem; margin-bottom:0.3rem;">❓</span>
            <h4 style="font-size:1.05rem; margin-bottom:0.35rem; color:var(--color-soga-dark);">${fc.frontTitle}</h4>
            <p style="font-size:0.85rem; color:var(--color-text-muted);">${fc.frontDesc}</p>
            <span class="flip-hint">👆 Sentuh untuk Buka Jawaban</span>
          </div>
          <div class="flip-card-back">
            <span style="font-size:1.8rem; margin-bottom:0.3rem;">💡</span>
            <h4 style="font-size:1.05rem; margin-bottom:0.35rem; color:var(--color-mendoan-light);">${fc.backTitle}</h4>
            <p style="font-size:0.82rem; line-height:1.45;">${fc.backDesc}</p>
            <span class="flip-hint" style="color:var(--color-mendoan-light);">👆 Sentuh untuk Kembali</span>
          </div>
        </div>
      `;

      wrapper.addEventListener('click', () => {
        playClickPop();
        wrapper.classList.toggle('flipped');
      });

      wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          wrapper.click();
        }
      });

      container.appendChild(wrapper);
    });
  }

  function renderM1Quiz() {
    const container = document.getElementById('m1-quiz-container');
    if (!container || !window.APP_DATA || !window.APP_DATA.misi1) return;

    container.innerHTML = '';
    const quizData = window.APP_DATA.misi1.miniQuiz;
    const answeredCorrectly = {};

    quizData.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.id = `quiz-card-${q.id}`;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--color-soga); text-transform:uppercase;">SOAL ${idx + 1} DARI ${quizData.length}</span>
          <span class="quiz-status-icon" id="status-icon-${q.id}" style="font-size:1rem;">⏳</span>
        </div>
        <p class="quiz-question-text">${q.question}</p>
        <div class="quiz-options-group">
          ${q.options.map((opt, optIdx) => `
            <button class="quiz-opt-btn" data-qid="${q.id}" data-opt-idx="${optIdx}">
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div id="feedback-${q.id}" style="display:none;" class="quiz-feedback-box"></div>
      `;

      const optBtns = card.querySelectorAll('.quiz-opt-btn');
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const optIndex = parseInt(btn.getAttribute('data-opt-idx'), 10);
          const selectedOpt = q.options[optIndex];
          const feedbackBox = card.querySelector(`#feedback-${q.id}`);
          const statusIcon = card.querySelector(`#status-icon-${q.id}`);

          if (selectedOpt.isCorrect) {
            optBtns.forEach(b => b.classList.remove('incorrect'));
            btn.classList.add('correct');
            playSuccessChime();
            statusIcon.textContent = '✅';
            feedbackBox.className = 'quiz-feedback-box feedback-success';
            feedbackBox.innerHTML = `<strong>Jawaban Tepat!</strong> ${selectedOpt.feedback}`;
            feedbackBox.style.display = 'block';
            answeredCorrectly[q.id] = true;
          } else {
            btn.classList.add('incorrect');
            playTone(200, 'sawtooth', 0.2);
            statusIcon.textContent = '❌';
            feedbackBox.className = 'quiz-feedback-box feedback-fail';
            feedbackBox.innerHTML = `<strong>Ayo coba lagi!</strong> ${selectedOpt.feedback}`;
            feedbackBox.style.display = 'block';
            answeredCorrectly[q.id] = false;
          }

          // Periksa total benar
          const correctCount = Object.values(answeredCorrectly).filter(Boolean).length;
          const scorePill = document.getElementById('m1-quiz-score-pill');
          if (scorePill) {
            scorePill.textContent = `Skor: ${correctCount} / ${quizData.length}`;
          }

          if (correctCount === quizData.length) {
            const completionBox = document.getElementById('m1-quiz-completion-box');
            if (completionBox) completionBox.style.display = 'block';

            if (!appState.completedMissions.includes('misi-1')) {
              appState.completedMissions.push('misi-1');
              if (window.APP_DATA && window.APP_DATA.missions[1]) {
                window.APP_DATA.missions[1].status = 'unlocked';
              }
              addXP(100, "Menyelesaikan Misi 1: Kenali");
              triggerConfetti();
              renderMissionCards();
              saveState();
              updateUIElements();
            }
          }
        });
      });

      container.appendChild(card);
    });

    // Jika sudah pernah selesai sebelumnya, tampilkan box selesai langsung
    if (appState.completedMissions.includes('misi-1')) {
      const completionBox = document.getElementById('m1-quiz-completion-box');
      if (completionBox) completionBox.style.display = 'block';
      const scorePill = document.getElementById('m1-quiz-score-pill');
      if (scorePill) scorePill.textContent = `Skor: 3 / 3 (Selesai)`;
    }
  }

  // =========================================================================
  // --- MODUL MISI 2: BEDAH KAIDAH KEBAHASAAN BANYUMAS ---
  // =========================================================================
  let activeFilterM2 = 'semua';

  function initMisi2() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilterM2 = btn.getAttribute('data-filter');
        renderM2Gallery(activeFilterM2);
      });
    });

    renderM2Gallery('semua');
    updateM2DiscoveredCount();
  }

  function updateM2DiscoveredCount() {
    const countEl = document.getElementById('m2-discovered-count');
    if (countEl) {
      countEl.textContent = `${appState.discoveredSegments.length} Kaidah Ditemukan`;
    }
  }

  function renderM2Gallery(filter = 'semua') {
    const galleryGrid = document.getElementById('m2-gallery-grid');
    if (!galleryGrid || !window.APP_DATA || !window.APP_DATA.misi2) return;

    galleryGrid.innerHTML = '';
    const examples = window.APP_DATA.misi2.examples;

    const filtered = examples.filter(ex => {
      if (filter === 'semua') return true;
      return ex.type === filter;
    });

    filtered.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'bedah-card';
      card.id = `bedah-${ex.id}`;

      // Buat segment teks yang dapat diklik
      const segmentsHtml = ex.segments.map(seg => {
        const isDiscovered = appState.discoveredSegments.includes(seg.id);
        const discoveredClass = isDiscovered ? `discovered-${seg.ruleType}` : '';
        return `<span class="clickable-segment ${discoveredClass}" data-ex-id="${ex.id}" data-seg-id="${seg.id}" title="Klik untuk membedah kaidah ini!">${seg.text}</span>`;
      }).join(' ');

      card.innerHTML = `
        <div class="bedah-header">
          <span class="bedah-type-badge" style="background:${ex.badgeColor};">${ex.categoryLabel}</span>
          <span class="bedah-cultural-tag">${ex.culturalTag}</span>
        </div>
        <h3 style="font-size:1.15rem; color:var(--color-soga-dark); margin-bottom:0.25rem;">${ex.title}</h3>
        <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:0.75rem;">${ex.contextDesc}</p>
        
        <div class="bedah-text-pane" role="region" aria-label="Teks karya yang dapat dianalisis">
          ${segmentsHtml}
        </div>
        <span style="font-size:0.75rem; color:var(--color-text-light); font-style:italic;">
          💡 Klik bagian kalimat di atas untuk menemukan kaidah kebahasaannya.
        </span>
      `;

      // Event listener klik segment di dalam card
      const segmentEls = card.querySelectorAll('.clickable-segment');
      segmentEls.forEach(el => {
        el.addEventListener('click', () => {
          const segId = el.getAttribute('data-seg-id');
          const targetSeg = ex.segments.find(s => s.id === segId);
          if (targetSeg) {
            handleSegmentClick(ex, targetSeg, el);
          }
        });
      });

      galleryGrid.appendChild(card);
    });
  }

  function handleSegmentClick(example, segment, element) {
    playSuccessChime();

    // Hapus status inspected dari semua segment, tambahkan ke elemen ini
    document.querySelectorAll('.clickable-segment').forEach(s => s.classList.remove('inspected'));
    element.classList.add('inspected');
    element.classList.add(`discovered-${segment.ruleType}`);

    // Buka dan perbarui Inspector Box
    const inspectorContainer = document.getElementById('m2-inspector-container');
    const badgeEl = document.getElementById('m2-inspect-badge');
    const textEl = document.getElementById('m2-inspect-text');
    const expEl = document.getElementById('m2-inspect-explanation');
    const crtEl = document.getElementById('m2-inspect-crt');

    if (inspectorContainer) {
      inspectorContainer.style.display = 'block';

      // Warna badge sesuai kaidah
      const colorMap = {
        persuasif: '#2563EB',
        imperatif: '#DC2626',
        diksi: '#D97706',
        rima: '#7C3AED',
        majas: '#059669'
      };
      if (badgeEl) {
        badgeEl.textContent = segment.ruleLabel;
        badgeEl.style.backgroundColor = colorMap[segment.ruleType] || '#5C3A21';
      }
      if (textEl) textEl.textContent = `"${segment.text}"`;
      if (expEl) expEl.textContent = segment.explanation;
      if (crtEl) {
        crtEl.innerHTML = `🌾 <strong>Nilai Budaya Banyumas:</strong> ${segment.crtInsight}`;
      }

      // Scroll halus ke inspector
      inspectorContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Tambahkan XP jika segmen ini baru pertama kali ditemukan
    if (!appState.discoveredSegments.includes(segment.id)) {
      appState.discoveredSegments.push(segment.id);
      addXP(15, `Membedah Kaidah: ${segment.ruleLabel}`);
      saveState();
      updateM2DiscoveredCount();

      // Cek apakah sudah menemukan minimal 6 kaidah untuk menyelesaikan Misi 2
      if (appState.discoveredSegments.length >= 6 && !appState.completedMissions.includes('misi-2')) {
        appState.completedMissions.push('misi-2');
        if (window.APP_DATA && window.APP_DATA.missions[2]) {
          window.APP_DATA.missions[2].status = 'unlocked';
        }
        addXP(150, "Pembedah Bahasa Ulung! Menyelesaikan Misi 2: Bedah");
        triggerConfetti();
        renderMissionCards();
        saveState();
        updateUIElements();
        showToast("🎉 Hebat! Rika lulus Misi 2! Kunci Misi 3 telah terbuka!", "🏆");
      }
    }
  }

  // =========================================================================
  // --- MODUL MISI 3: LATIHAN (DRAG & DROP, KUIS 10 SOAL, HOAKS, MATCHING) ---
  // =========================================================================
  function initMisi3() {
    // 1. Subtab switcher
    const subtabBtns = document.querySelectorAll('#view-misi3 .subtab-btn');
    subtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        const targetSubtab = btn.getAttribute('data-subtab');
        subtabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.m3-subtab-pane').forEach(pane => pane.style.display = 'none');
        const targetPane = document.getElementById(`subtab-${targetSubtab}`);
        if (targetPane) targetPane.style.display = 'block';
      });
    });

    initDragDropSlogan();
    initQuiz10();
    initHoaxVsReal();
    initMatchingGame();
    renderM3Badges();
  }

  // --- LENCANA ENGINE ---
  function unlockBadge(badgeId) {
    if (!appState.unlockedBadges.includes(badgeId)) {
      appState.unlockedBadges.push(badgeId);
      saveState();
      const badgeData = window.APP_DATA && window.APP_DATA.misi3 ? window.APP_DATA.misi3.badges.find(b => b.id === badgeId) : null;
      if (badgeData) {
        triggerConfetti();
        playSuccessChime();
        showToast(`🏅 Lencana Baru: ${badgeData.title}!`, badgeData.icon);
      }
      renderM3Badges();
    }
  }

  function renderM3Badges() {
    const grid = document.getElementById('m3-badges-grid');
    if (!grid || !window.APP_DATA || !window.APP_DATA.misi3) return;

    grid.innerHTML = '';
    window.APP_DATA.misi3.badges.forEach(b => {
      const isUnlocked = appState.unlockedBadges.includes(b.id);
      const card = document.createElement('div');
      card.className = `badge-item-card ${isUnlocked ? 'unlocked' : ''}`;
      card.innerHTML = `
        <div class="badge-item-icon" aria-hidden="true">${b.icon}</div>
        <div class="badge-item-title">${b.title}</div>
        <div class="badge-item-status">${isUnlocked ? '✓ Terbuka' : '🔒 Belum Terbuka'}</div>
        <p style="font-size:0.7rem; color:var(--color-text-muted); margin-top:0.25rem;">${b.desc}</p>
      `;
      grid.appendChild(card);
    });
  }

  function checkMisi3Completion() {
    // Siswa menyelesaikan Misi 3 jika telah menyelesaikan Kuis 10 Soal dan minimal 1 tantangan lain
    if (!appState.completedMissions.includes('misi-3')) {
      appState.completedMissions.push('misi-3');
      if (window.APP_DATA && window.APP_DATA.missions[3]) {
        window.APP_DATA.missions[3].status = 'unlocked';
      }
      addXP(200, "Menyelesaikan Misi 3: Arena Juara Latihan");
      triggerConfetti();
      renderMissionCards();
      saveState();
      updateUIElements();
      showToast("🎉 Luar Biasa! Rika menaklukkan Misi 3! Pintu Misi 4 (Studio Cipta) kini TERBUKA!", "🚀");
    }
  }

  // --- 1. TANTANGAN SUSUN SLOGAN ---
  let currentDDIndex = 0;
  let placedWords = [];

  function initDragDropSlogan() {
    currentDDIndex = 0;
    loadSloganChallenge(currentDDIndex);

    const btnCheck = document.getElementById('btn-check-slogan');
    const btnReset = document.getElementById('btn-reset-slogan');
    const btnNext = document.getElementById('btn-next-slogan');

    if (btnCheck) btnCheck.onclick = checkSloganAnswer;
    if (btnReset) btnReset.onclick = resetCurrentSlogan;
    if (btnNext) btnNext.onclick = () => {
      currentDDIndex++;
      const list = window.APP_DATA.misi3.dragDropSlogans;
      if (currentDDIndex >= list.length) {
        currentDDIndex = 0;
      }
      loadSloganChallenge(currentDDIndex);
    };
  }

  function loadSloganChallenge(index) {
    const list = window.APP_DATA && window.APP_DATA.misi3 ? window.APP_DATA.misi3.dragDropSlogans : [];
    if (!list || !list[index]) return;

    const data = list[index];
    placedWords = [];

    const stepEl = document.getElementById('dd-challenge-step');
    const titleEl = document.getElementById('dd-title');
    const clueEl = document.getElementById('dd-clue');
    const feedbackBox = document.getElementById('dd-feedback-box');
    const nextWrapper = document.getElementById('dd-next-wrapper');

    if (stepEl) stepEl.textContent = `Tantangan ${index + 1} dari ${list.length}`;
    if (titleEl) titleEl.textContent = data.title;
    if (clueEl) clueEl.textContent = `Petunjuk: ${data.clue}`;
    if (feedbackBox) feedbackBox.style.display = 'none';
    if (nextWrapper) nextWrapper.style.display = 'none';

    renderSloganTokens(data);
  }

  function renderSloganTokens(data) {
    const dropzone = document.getElementById('slogan-dropzone');
    const pool = document.getElementById('slogan-word-pool');
    if (!dropzone || !pool) return;

    dropzone.innerHTML = '';
    pool.innerHTML = '';

    if (placedWords.length === 0) {
      dropzone.innerHTML = '<span class="slogan-dropzone-empty" id="dropzone-empty-text">Sentuh atau seret kata ke dalam kotak ini...</span>';
    } else {
      placedWords.forEach((word, wIdx) => {
        const chip = document.createElement('button');
        chip.className = 'word-chip placed';
        chip.textContent = word;
        chip.title = 'Sentuh untuk mengembalikan kata';
        chip.onclick = () => {
          playClickPop();
          placedWords.splice(wIdx, 1);
          renderSloganTokens(data);
        };
        dropzone.appendChild(chip);
      });
    }

    // Tampilkan kata yang belum dimasukkan ke dropzone
    const remainingWords = [...data.scrambledWords];
    placedWords.forEach(pw => {
      const idx = remainingWords.indexOf(pw);
      if (idx > -1) remainingWords.splice(idx, 1);
    });

    remainingWords.forEach(word => {
      const chip = document.createElement('button');
      chip.className = 'word-chip';
      chip.textContent = word;
      chip.title = 'Sentuh untuk memasukkan ke slogan';
      chip.onclick = () => {
        playClickPop();
        placedWords.push(word);
        renderSloganTokens(data);
      };
      pool.appendChild(chip);
    });
  }

  function resetCurrentSlogan() {
    playClickPop();
    const list = window.APP_DATA.misi3.dragDropSlogans;
    placedWords = [];
    renderSloganTokens(list[currentDDIndex]);
    const feedbackBox = document.getElementById('dd-feedback-box');
    if (feedbackBox) feedbackBox.style.display = 'none';
  }

  function checkSloganAnswer() {
    const list = window.APP_DATA.misi3.dragDropSlogans;
    const current = list[currentDDIndex];
    const feedbackBox = document.getElementById('dd-feedback-box');
    const nextWrapper = document.getElementById('dd-next-wrapper');
    if (!feedbackBox) return;

    const isMatch = placedWords.length === current.targetWords.length &&
      placedWords.every((w, i) => w === current.targetWords[i]);

    if (isMatch) {
      playSuccessChime();
      feedbackBox.className = 'quiz-feedback-box feedback-success';
      feedbackBox.innerHTML = `<strong>Susunan Tepat Sekali!</strong> ${current.explanation}`;
      feedbackBox.style.display = 'block';
      if (nextWrapper) nextWrapper.style.display = 'block';

      addXP(current.xpReward, `Menyusun Slogan: ${current.title}`);
      
      // Jika sudah menyelesaikan semua tantangan slogan
      if (currentDDIndex === list.length - 1) {
        unlockBadge('badge-slogan-master');
      }
    } else {
      playTone(200, 'sawtooth', 0.2);
      feedbackBox.className = 'quiz-feedback-box feedback-fail';
      feedbackBox.innerHTML = `<strong>Susunan kata belum pas, lur!</strong> Ingat kembali rima dan pesan utama petunjuknya. Tekan 'Mulai Ulang' lalu susun kembali!`;
      feedbackBox.style.display = 'block';
    }
  }

  // --- 2. KUIS 10 SOAL ACAK ---
  let activeQuiz10Questions = [];
  let currentQuiz10Index = 0;
  let quiz10Score = 0;

  function initQuiz10() {
    startNewQuiz10Session();
    const btnNext = document.getElementById('btn-next-quiz10');
    const btnRestart = document.getElementById('btn-restart-quiz10');

    if (btnNext) {
      btnNext.onclick = () => {
        playClickPop();
        currentQuiz10Index++;
        if (currentQuiz10Index < activeQuiz10Questions.length) {
          renderQuiz10Step();
        } else {
          showQuiz10Results();
        }
      };
    }

    if (btnRestart) {
      btnRestart.onclick = () => {
        playClickPop();
        startNewQuiz10Session();
      };
    }
  }

  function startNewQuiz10Session() {
    const pool = window.APP_DATA && window.APP_DATA.misi3 ? window.APP_DATA.misi3.quizPool : [];
    // Acak soal (Fisher-Yates) dan ambil 10 soal
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    activeQuiz10Questions = shuffled.slice(0, 10);
    currentQuiz10Index = 0;
    quiz10Score = 0;

    const quizCard = document.getElementById('quiz10-card');
    const resultCard = document.getElementById('quiz10-result-card');
    if (quizCard) quizCard.style.display = 'block';
    if (resultCard) resultCard.style.display = 'none';

    renderQuiz10Step();
  }

  function renderQuiz10Step() {
    const q = activeQuiz10Questions[currentQuiz10Index];
    if (!q) return;

    const stepText = document.getElementById('quiz10-step-text');
    const diffBadge = document.getElementById('quiz10-diff-badge');
    const scoreDisplay = document.getElementById('quiz10-score-display');
    const scenarioBox = document.getElementById('quiz10-scenario');
    const questionText = document.getElementById('quiz10-question');
    const optionsGroup = document.getElementById('quiz10-options-group');
    const feedbackBox = document.getElementById('quiz10-feedback-box');
    const nextWrapper = document.getElementById('quiz10-next-wrapper');

    if (stepText) stepText.textContent = `Soal ${currentQuiz10Index + 1} dari ${activeQuiz10Questions.length}`;
    if (diffBadge) {
      diffBadge.textContent = q.difficultyBadge;
      diffBadge.className = `diff-badge diff-${q.difficulty.toLowerCase()}`;
    }
    if (scoreDisplay) scoreDisplay.textContent = `${quiz10Score} Poin`;
    if (scenarioBox) scenarioBox.innerHTML = `<strong>Konteks Kasus Banyumas:</strong> ${q.scenario}`;
    if (questionText) questionText.textContent = q.question;
    if (feedbackBox) feedbackBox.style.display = 'none';
    if (nextWrapper) nextWrapper.style.display = 'none';

    if (optionsGroup) {
      optionsGroup.innerHTML = '';
      q.options.forEach((opt, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span>${opt.text}</span>`;
        btn.onclick = () => handleQuiz10Option(btn, opt, q);
        optionsGroup.appendChild(btn);
      });
    }
  }

  function handleQuiz10Option(selectedBtn, option, question) {
    const optionsGroup = document.getElementById('quiz10-options-group');
    const feedbackBox = document.getElementById('quiz10-feedback-box');
    const nextWrapper = document.getElementById('quiz10-next-wrapper');
    const scoreDisplay = document.getElementById('quiz10-score-display');

    if (optionsGroup) {
      const allBtns = optionsGroup.querySelectorAll('.quiz-opt-btn');
      allBtns.forEach(b => b.disabled = true);
    }

    if (option.isCorrect) {
      selectedBtn.classList.add('correct');
      playSuccessChime();
      quiz10Score += 10;
      if (scoreDisplay) scoreDisplay.textContent = `${quiz10Score} Poin`;
      addXP(10, `Menjawab Soal Kuis (${question.difficulty})`);

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box feedback-success';
        feedbackBox.innerHTML = `<strong>Tepat Sekali!</strong> ${option.feedback}<br><small style="display:block; margin-top:0.35rem;">💡 <em>Pembahasan:</em> ${question.explanation}</small>`;
        feedbackBox.style.display = 'block';
      }
    } else {
      selectedBtn.classList.add('incorrect');
      playTone(200, 'sawtooth', 0.2);

      if (optionsGroup) {
        const allBtns = optionsGroup.querySelectorAll('.quiz-opt-btn');
        question.options.forEach((opt, idx) => {
          if (opt.isCorrect && allBtns[idx]) allBtns[idx].classList.add('correct');
        });
      }

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback-box feedback-fail';
        feedbackBox.innerHTML = `<strong>Kurang Tepat, Lur!</strong> ${option.feedback}<br><small style="display:block; margin-top:0.35rem;">💡 <em>Pembahasan:</em> ${question.explanation}</small>`;
        feedbackBox.style.display = 'block';
      }
    }

    if (nextWrapper) nextWrapper.style.display = 'block';
  }

  function showQuiz10Results() {
    const quizCard = document.getElementById('quiz10-card');
    const resultCard = document.getElementById('quiz10-result-card');
    const scoreNum = document.getElementById('quiz10-final-score');
    const finalMsg = document.getElementById('quiz10-final-msg');

    if (quizCard) quizCard.style.display = 'none';
    if (resultCard) resultCard.style.display = 'block';
    if (scoreNum) scoreNum.textContent = `${quiz10Score}`;

    if (quiz10Score >= 80) {
      triggerConfetti();
      playSuccessChime();
      unlockBadge('badge-quiz-champion');
      if (finalMsg) finalMsg.textContent = "🎉 Luar Biasa! Rika Sangat Memahami Materi dan Berpikir Kritis!";
    } else if (quiz10Score >= 60) {
      playSuccessChime();
      if (finalMsg) finalMsg.textContent = "👍 Bagus! Pemahamanmu sudah baik, coba lagi untuk raih nilai 100!";
    } else {
      if (finalMsg) finalMsg.textContent = "💪 Tetap Semangat! Baca kembali materi Misi 1 dan coba lagi!";
    }

    checkMisi3Completion();
  }

  // --- 3. IKLAN BENERAN VS HOAKS PROMOSI ---
  let currentHvrIndex = 0;
  let hvrCorrectCount = 0;

  function initHoaxVsReal() {
    currentHvrIndex = 0;
    hvrCorrectCount = 0;
    loadHvrCase(currentHvrIndex);

    const realBtn = document.querySelector('[data-verdict="beneran"]');
    const hoaxBtn = document.querySelector('[data-verdict="hoaks"]');
    const btnNext = document.getElementById('btn-next-hvr');

    if (realBtn) realBtn.onclick = () => handleHvrAnswer('beneran');
    if (hoaxBtn) hoaxBtn.onclick = () => handleHvrAnswer('hoaks');

    if (btnNext) {
      btnNext.onclick = () => {
        playClickPop();
        currentHvrIndex++;
        const cases = window.APP_DATA.misi3.hoaxVsReal;
        if (currentHvrIndex < cases.length) {
          loadHvrCase(currentHvrIndex);
        } else {
          if (hvrCorrectCount === cases.length) {
            unlockBadge('badge-anti-hoax');
          }
          currentHvrIndex = 0;
          loadHvrCase(currentHvrIndex);
          showToast(`Selesai Deteksi Hoaks! Benar: ${hvrCorrectCount} dari ${cases.length}`, "🛡️");
        }
      };
    }
  }

  function loadHvrCase(index) {
    const cases = window.APP_DATA && window.APP_DATA.misi3 ? window.APP_DATA.misi3.hoaxVsReal : [];
    if (!cases || !cases[index]) return;

    const c = cases[index];
    const stepTag = document.getElementById('hvr-step-tag');
    const countEl = document.getElementById('hvr-correct-count');
    const titleEl = document.getElementById('hvr-case-title');
    const textEl = document.getElementById('hvr-claim-text');
    const actionsBox = document.getElementById('hvr-actions-container');
    const resultBox = document.getElementById('hvr-result-box');
    const nextWrapper = document.getElementById('hvr-next-wrapper');

    if (stepTag) stepTag.textContent = `Kasus ${index + 1} dari ${cases.length}`;
    if (countEl) countEl.textContent = `${hvrCorrectCount}`;
    if (titleEl) titleEl.textContent = c.title;
    if (textEl) textEl.textContent = `"${c.klaim}"`;
    if (resultBox) resultBox.style.display = 'none';
    if (nextWrapper) nextWrapper.style.display = 'none';

    if (actionsBox) {
      actionsBox.querySelectorAll('.hvr-choice-btn').forEach(b => b.disabled = false);
    }
  }

  function handleHvrAnswer(userChoice) {
    const cases = window.APP_DATA.misi3.hoaxVsReal;
    const c = cases[currentHvrIndex];
    const resultBox = document.getElementById('hvr-result-box');
    const statusTitle = document.getElementById('hvr-status-title');
    const expEl = document.getElementById('hvr-explanation');
    const tipEl = document.getElementById('hvr-tip');
    const nextWrapper = document.getElementById('hvr-next-wrapper');
    const countEl = document.getElementById('hvr-correct-count');
    const actionsBox = document.getElementById('hvr-actions-container');

    if (actionsBox) {
      actionsBox.querySelectorAll('.hvr-choice-btn').forEach(b => b.disabled = true);
    }

    const isCorrect = userChoice === c.verdict;

    if (isCorrect) {
      playSuccessChime();
      hvrCorrectCount++;
      if (countEl) countEl.textContent = `${hvrCorrectCount}`;
      addXP(15, "Analisis Kritis Iklan Beneran vs Hoaks");

      if (resultBox) {
        resultBox.className = 'hvr-result-box hvr-correct';
        if (statusTitle) statusTitle.innerHTML = `✅ Analisis Rika Tepat! (${c.verdictLabel})`;
      }
    } else {
      playTone(200, 'sawtooth', 0.2);
      if (resultBox) {
        resultBox.className = 'hvr-result-box hvr-wrong';
        if (statusTitle) statusTitle.innerHTML = `❌ Kurang Tepat, Lur! Seharusnya: ${c.verdictLabel}`;
      }
    }

    if (expEl) expEl.textContent = c.alasan;
    if (tipEl) tipEl.innerHTML = `💡 <strong>Tips Cerdas:</strong> ${c.tipsKritis}`;
    if (resultBox) resultBox.style.display = 'block';
    if (nextWrapper) nextWrapper.style.display = 'block';

    checkMisi3Completion();
  }

  // --- 4. MATCHING GAME / JODOHKAN CIRI TEKS ---
  function initMatchingGame() {
    const container = document.getElementById('matching-items-container');
    if (!container || !window.APP_DATA || !window.APP_DATA.misi3) return;

    container.innerHTML = '';
    const items = window.APP_DATA.misi3.matchingItems;
    let matchedCount = 0;

    items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'matching-card';
      card.innerHTML = `
        <div style="font-size:0.75rem; font-weight:800; color:var(--color-soga); margin-bottom:0.35rem;">KARAKTERISTIK #${idx + 1}</div>
        <p class="matching-desc-text">${item.deskripsi}</p>
        <div class="matching-options-row">
          <button class="matching-opt-btn" data-cat="slogan">🗣️ Slogan</button>
          <button class="matching-opt-btn" data-cat="iklan">📢 Iklan</button>
          <button class="matching-opt-btn" data-cat="poster">🖼️ Poster</button>
        </div>
      `;

      const btns = card.querySelectorAll('.matching-opt-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedCat = btn.getAttribute('data-cat');
          if (selectedCat === item.correctCategory) {
            playSuccessChime();
            btn.classList.add('selected-correct');
            btns.forEach(b => {
              if (b !== btn) b.style.opacity = '0.4';
              b.disabled = true;
            });
            matchedCount++;
            const pill = document.getElementById('matching-score-pill');
            if (pill) pill.textContent = `Terjodohkan: ${matchedCount} / ${items.length}`;

            if (matchedCount === items.length) {
              const completeBox = document.getElementById('matching-complete-box');
              if (completeBox) completeBox.style.display = 'block';
              unlockBadge('badge-matching-ace');
              addXP(50, "Menyelesaikan Matching Game Tiga Serangkai");
              triggerConfetti();
              checkMisi3Completion();
            }
          } else {
            playTone(200, 'sawtooth', 0.2);
            btn.classList.add('selected-wrong');
            setTimeout(() => btn.classList.remove('selected-wrong'), 600);
          }
        });
      });

      container.appendChild(card);
    });
  }

  // =========================================================================
  // --- 10. MODUL MISI 4 – CIPTA: STUDIO POSTER & SLOGAN PjBL BANYUMAS ---
  // =========================================================================
  function initMisi4() {
    if (!window.APP_DATA || !window.APP_DATA.misi4) return;
    const m4 = window.APP_DATA.misi4;

    // Subtab Switching di Misi 4
    const m4SubtabBtns = document.querySelectorAll('#view-misi4 .subtab-btn');
    const m4Panes = document.querySelectorAll('#view-misi4 .m4-subtab-pane');

    m4SubtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        const targetSubtab = btn.getAttribute('data-subtab');
        m4SubtabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        m4Panes.forEach(pane => {
          if (pane.id === `subtab-${targetSubtab}`) {
            pane.style.display = 'block';
          } else {
            pane.style.display = 'none';
          }
        });

        // Jika membuka studio, trigger render ulang canvas agar ukuran sesuai
        if (targetSubtab === 'm4-studio') {
          setTimeout(renderPosterCanvas, 50);
        }
      });
    });

    // 1. Render PjBL Roadmap
    const roadmapContainer = document.getElementById('pjbl-roadmap-container');
    if (roadmapContainer && m4.pjblSteps) {
      roadmapContainer.innerHTML = '';
      m4.pjblSteps.forEach(s => {
        const card = document.createElement('div');
        card.className = 'pjbl-step-card';
        card.innerHTML = `
          <div class="pjbl-step-badge">${s.icon} Tahap ${s.step}</div>
          <div class="pjbl-step-title">${s.title}</div>
          <div class="pjbl-step-desc">${s.desc}</div>
        `;
        roadmapContainer.appendChild(card);
      });
    }

    const btnToSloganGen = document.getElementById('btn-to-slogan-gen');
    if (btnToSloganGen) {
      btnToSloganGen.addEventListener('click', () => {
        const genTabBtn = document.querySelector('[data-subtab="m4-generator"]');
        if (genTabBtn) genTabBtn.click();
      });
    }

    // 2. Slogan Generator Bantu (Scaffolding Ide Kreatif)
    let selectedProdId = 'mendoan';
    let selectedAudId = 'remaja';
    let selectedToneId = 'santai';

    const prodGroup = document.getElementById('gen-products-group');
    const audGroup = document.getElementById('gen-audiences-group');
    const toneGroup = document.getElementById('gen-tones-group');

    // Render Pilihan Produk
    if (prodGroup && m4.sloganGenerator.products) {
      prodGroup.innerHTML = '';
      m4.sloganGenerator.products.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gen-chip-btn ${p.id === selectedProdId ? 'active' : ''}`;
        btn.innerHTML = `<span>${p.icon}</span> <span>${p.name}</span>`;
        btn.addEventListener('click', () => {
          selectedProdId = p.id;
          prodGroup.querySelectorAll('.gen-chip-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateSloganScaffolding();
          playClickPop();
        });
        prodGroup.appendChild(btn);
      });
    }

    // Render Pilihan Audiens
    if (audGroup && m4.sloganGenerator.audiences) {
      audGroup.innerHTML = '';
      m4.sloganGenerator.audiences.forEach(a => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gen-chip-btn ${a.id === selectedAudId ? 'active' : ''}`;
        btn.textContent = a.label;
        btn.addEventListener('click', () => {
          selectedAudId = a.id;
          audGroup.querySelectorAll('.gen-chip-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateSloganScaffolding();
          playClickPop();
        });
        audGroup.appendChild(btn);
      });
    }

    // Render Pilihan Gaya Bahasa
    if (toneGroup && m4.sloganGenerator.tones) {
      toneGroup.innerHTML = '';
      m4.sloganGenerator.tones.forEach(t => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gen-chip-btn ${t.id === selectedToneId ? 'active' : ''}`;
        btn.textContent = t.label;
        btn.addEventListener('click', () => {
          selectedToneId = t.id;
          toneGroup.querySelectorAll('.gen-chip-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateSloganScaffolding();
          playClickPop();
        });
        toneGroup.appendChild(btn);
      });
    }

    function updateSloganScaffolding() {
      const prod = m4.sloganGenerator.products.find(p => p.id === selectedProdId) || m4.sloganGenerator.products[0];
      const aud = m4.sloganGenerator.audiences.find(a => a.id === selectedAudId) || m4.sloganGenerator.audiences[0];
      const tone = m4.sloganGenerator.tones.find(t => t.id === selectedToneId) || m4.sloganGenerator.tones[0];

      // Keyword cloud
      const cloud = document.getElementById('gen-keywords-cloud');
      const customInput = document.getElementById('student-custom-slogan');
      if (cloud && prod) {
        cloud.innerHTML = '';
        prod.keywords.forEach(kw => {
          const tag = document.createElement('span');
          tag.className = 'keyword-tag';
          tag.textContent = `+ ${kw}`;
          tag.title = 'Klik untuk memasukkan kata ini ke draf sloganmu';
          tag.addEventListener('click', () => {
            if (customInput) {
              const current = customInput.value.trim();
              customInput.value = current ? `${current} ${kw}` : kw;
              customInput.focus();
              playClickPop();
              showToast(`Kata "${kw}" disisipkan!`, '✍️');
            }
          });
          cloud.appendChild(tag);
        });
      }

      // Template kerangka
      const tplEl = document.getElementById('gen-template-text');
      const sampleEl = document.getElementById('gen-sample-text');
      let templateStr = '';
      let sampleStr = '';

      if (selectedToneId === 'santai') {
        templateStr = `"[Kata Sapaan Ngapak] + [Karakter Produk ${prod.keywords[0]}], [Ajakan Guyub/Tindakan]!"`;
        sampleStr = `Contoh: "${prod.hooks[0] || 'Kencot ora? Mendoan anget solusine!'}"`;
      } else if (selectedToneId === 'puitis') {
        templateStr = `"[Keindahan Rasa/Karya ${prod.keywords[0]}], [Metafora Rindu/Abadi] Sepanjang Serayu."`;
        sampleStr = `Contoh: "${prod.hooks[1] || 'Sejuk Airnya Menyapa Jiwa, Lepaskan Penat Seketika!'}"`;
      } else {
        templateStr = `"[Kata Kerja Imperatif Tegas] + [Keaslian Mutu ${prod.keywords[0]}], Pilihan Utama [Target Audiens]!"`;
        sampleStr = `Contoh: "${prod.hooks[2] || 'Mayuh Cicipi Keaslian Tradisi Banyumas Sekarang!'}"`;
      }

      if (tplEl) tplEl.textContent = templateStr;
      if (sampleEl) sampleEl.innerHTML = `<em>${sampleStr}</em> <span style="font-size:0.75rem; color:var(--color-text-muted);">(Audiens: ${aud.label})</span>`;
    }

    updateSloganScaffolding();

    // Tombol Gunakan Slogan di Poster
    const btnUseSlogan = document.getElementById('btn-use-slogan-in-poster');
    if (btnUseSlogan) {
      btnUseSlogan.addEventListener('click', () => {
        const customInput = document.getElementById('student-custom-slogan');
        const posterSloganInput = document.getElementById('inp-poster-slogan');
        let textToUse = customInput ? customInput.value.trim() : '';

        if (!textToUse) {
          const prod = m4.sloganGenerator.products.find(p => p.id === selectedProdId) || m4.sloganGenerator.products[0];
          textToUse = prod.hooks[0] || "Anget Mendoane, Guyub Wargane!";
        }

        if (posterSloganInput) {
          posterSloganInput.value = textToUse;
        }

        playSuccessChime();
        showToast("Slogan berhasil dipasang di poster! 🎨", "✨");

        // Beralih ke tab studio
        const studioTabBtn = document.querySelector('[data-subtab="m4-studio"]');
        if (studioTabBtn) studioTabBtn.click();
        renderPosterCanvas();
      });
    }

    // 3. Studio Poster Maker (Canvas 2D)
    let selectedBgId = 'soga-batik';
    let selectedIconId = 'icon-mendoan';

    const bgGrid = document.getElementById('poster-bg-grid');
    if (bgGrid && m4.backgrounds) {
      bgGrid.innerHTML = '';
      m4.backgrounds.forEach(bg => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `bg-select-btn ${bg.id === selectedBgId ? 'active' : ''}`;
        btn.style.background = bg.bgColor;
        btn.style.color = bg.textColor;
        btn.innerHTML = `<span style="display:block; font-size:0.68rem; opacity:0.8;">${bg.category}</span><strong>${bg.name.split(' ')[0]}</strong>`;
        btn.title = bg.name + ': ' + bg.desc;
        btn.addEventListener('click', () => {
          selectedBgId = bg.id;
          bgGrid.querySelectorAll('.bg-select-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const txtColor = document.getElementById('inp-text-color');
          const accColor = document.getElementById('inp-accent-color');
          if (txtColor) txtColor.value = bg.textColor;
          if (accColor) accColor.value = bg.accentColor;

          renderPosterCanvas();
          playClickPop();
        });
        bgGrid.appendChild(btn);
      });
    }

    const iconGrid = document.getElementById('poster-icon-grid');
    if (iconGrid && m4.svgIcons) {
      iconGrid.innerHTML = '';
      m4.svgIcons.forEach(ic => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `icon-select-chip ${ic.id === selectedIconId ? 'active' : ''}`;
        chip.innerHTML = `<span style="font-size:1.4rem;">${ic.symbol}</span><span>${ic.name.split(' ')[0]}</span>`;
        chip.title = ic.name;
        chip.addEventListener('click', () => {
          selectedIconId = ic.id;
          iconGrid.querySelectorAll('.icon-select-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          renderPosterCanvas();
          playClickPop();
        });
        iconGrid.appendChild(chip);
      });
    }

    // Input listeners untuk re-render instan
    const posterInputs = [
      'inp-poster-headline', 'inp-headline-size',
      'inp-poster-slogan', 'inp-slogan-size',
      'inp-poster-desc', 'inp-poster-cta',
      'inp-text-color', 'inp-accent-color'
    ];
    posterInputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', renderPosterCanvas);
      }
    });

    // Reset Poster ke Bawaan
    const btnResetPoster = document.getElementById('btn-reset-poster');
    if (btnResetPoster) {
      btnResetPoster.addEventListener('click', () => {
        const headline = document.getElementById('inp-poster-headline');
        const slogan = document.getElementById('inp-poster-slogan');
        const desc = document.getElementById('inp-poster-desc');
        const cta = document.getElementById('inp-poster-cta');
        const txtColor = document.getElementById('inp-text-color');
        const accColor = document.getElementById('inp-accent-color');
        const headlineSize = document.getElementById('inp-headline-size');
        const sloganSize = document.getElementById('inp-slogan-size');

        if (headline) headline.value = "FESTIVAL MENDOAN BANYUMAS";
        if (slogan) slogan.value = "Anget Mendoane, Guyub Wargane!";
        if (desc) desc.value = "Pesta 10.000 Mendoan Hangat, Parade Tari Lengger & Bazar UMKM. 15-16 November di Alun-Alun Purwokerto.";
        if (cta) cta.value = "Mayuh teka bareng sedulur! Gratis nggo kabeh warga • Info: 0812-BANYUMAS";
        if (txtColor) txtColor.value = "#FFFFFF";
        if (accColor) accColor.value = "#F59E0B";
        if (headlineSize) headlineSize.value = "48";
        if (sloganSize) sloganSize.value = "28";

        selectedBgId = 'soga-batik';
        selectedIconId = 'icon-mendoan';

        if (bgGrid) {
          bgGrid.querySelectorAll('.bg-select-btn').forEach((b, idx) => {
            b.classList.toggle('active', idx === 0);
          });
        }
        if (iconGrid) {
          iconGrid.querySelectorAll('.icon-select-chip').forEach((c, idx) => {
            c.classList.toggle('active', idx === 0);
          });
        }

        renderPosterCanvas();
        playClickPop();
        showToast("Poster dikembalikan ke desain awal!", "🔄");
      });
    }

    // Fungsi Pembantu Bungkus Teks Kanvas
    function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, align = 'center') {
      const words = text.split(' ');
      let line = '';
      const lines = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          lines.push(line.trim());
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line.trim());

      ctx.textAlign = align;
      let curY = y;
      for (let k = 0; k < lines.length; k++) {
        ctx.fillText(lines[k], x, curY);
        curY += lineHeight;
      }
      return lines.length * lineHeight;
    }

    // ENGINE RENDER POSTER CANVAS (900 x 1200 px)
    function renderPosterCanvas() {
      const canvas = document.getElementById('poster-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;

      const bgData = m4.backgrounds.find(b => b.id === selectedBgId) || m4.backgrounds[0];
      const iconData = m4.svgIcons.find(i => i.id === selectedIconId) || m4.svgIcons[0];

      const headlineText = (document.getElementById('inp-poster-headline')?.value || 'PESONA KULINER BANYUMAS').toUpperCase();
      const headlineSize = parseInt(document.getElementById('inp-headline-size')?.value || '48', 10);
      const sloganText = document.getElementById('inp-poster-slogan')?.value || 'Anget Mendoane, Guyub Wargane!';
      const sloganSize = parseInt(document.getElementById('inp-slogan-size')?.value || '28', 10);
      const descText = document.getElementById('inp-poster-desc')?.value || '';
      const ctaText = document.getElementById('inp-poster-cta')?.value || '';
      const textColor = document.getElementById('inp-text-color')?.value || '#FFFFFF';
      const accentColor = document.getElementById('inp-accent-color')?.value || '#F59E0B';

      // 1. Gambar Latar Belakang Dasar
      ctx.fillStyle = bgData.bgColor;
      ctx.fillRect(0, 0, W, H);

      // 2. Gambar Motif Batik & Pola Budaya
      ctx.save();
      if (bgData.patternType === 'batik-jahe') {
        // Pola geometris Jahe Puger
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
        ctx.lineWidth = 2.5;
        const step = 60;
        for (let x = 0; x < W + step; x += step) {
          for (let y = 0; y < H + step; y += step) {
            ctx.beginPath();
            ctx.moveTo(x, y - 20);
            ctx.lineTo(x + 20, y);
            ctx.lineTo(x, y + 20);
            ctx.lineTo(x - 20, y);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle = 'rgba(245, 158, 11, 0.08)';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (bgData.patternType === 'dots-mendoan') {
        // Bintik keemasan & potongan kucai
        ctx.fillStyle = 'rgba(254, 243, 199, 0.15)';
        for (let i = 0; i < 70; i++) {
          const rx = (i * 137.5) % W;
          const ry = (i * 243.2) % H;
          ctx.beginPath();
          ctx.arc(rx, ry, 6 + (i % 5), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = 'rgba(22, 101, 52, 0.25)';
        for (let j = 0; j < 40; j++) {
          const rx = (j * 179.3) % W;
          const ry = (j * 289.7) % H;
          ctx.fillRect(rx, ry, 14, 5);
        }
      } else if (bgData.patternType === 'bambu-lines') {
        // Garis vertikal rumpun bambu pring sedapur
        ctx.strokeStyle = 'rgba(134, 239, 172, 0.1)';
        ctx.lineWidth = 14;
        for (let x = 40; x < W; x += 90) {
          ctx.beginPath();
          ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.stroke();
          // Ruas bambu
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          for (let y = 80; y < H; y += 160) {
            ctx.fillRect(x - 10, y, 20, 4);
          }
        }
      } else if (bgData.patternType === 'river-waves') {
        // Aliran riam ombak Serayu
        ctx.strokeStyle = 'rgba(147, 197, 253, 0.15)';
        ctx.lineWidth = 3;
        for (let y = 50; y < H; y += 70) {
          ctx.beginPath();
          for (let x = 0; x < W; x += 40) {
            ctx.quadraticCurveTo(x + 10, y - 15, x + 20, y);
            ctx.quadraticCurveTo(x + 30, y + 15, x + 40, y);
          }
          ctx.stroke();
        }
      } else if (bgData.patternType === 'lumbon-leaves') {
        // Lengkungan daun lumbon terakota
        ctx.strokeStyle = 'rgba(252, 211, 77, 0.14)';
        ctx.lineWidth = 3;
        for (let x = 50; x < W; x += 110) {
          for (let y = 60; y < H; y += 120) {
            ctx.beginPath();
            ctx.ellipse(x, y, 35, 18, Math.PI / 4, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      } else {
        // Subtle Border / Garis Emas Klasik
        ctx.strokeStyle = 'rgba(92, 58, 33, 0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(30, 30, W - 60, H - 60);
      }
      ctx.restore();

      // 3. Bingkai Tepi Poster & Ornamen Sudut
      ctx.save();
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 4;
      ctx.strokeRect(28, 28, W - 56, H - 56);

      ctx.strokeStyle = textColor;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(36, 36, W - 72, H - 72);

      // Sudut Jahe Puger (4 Pojok)
      const corners = [
        [36, 36], [W - 36, 36],
        [36, H - 36], [W - 36, H - 36]
      ];
      ctx.fillStyle = accentColor;
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 4. Header Tag Budaya
      ctx.save();
      ctx.fillStyle = accentColor;
      ctx.font = '800 20px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '3px';
      ctx.fillText('• PESONA BUDAYA & UMKM BANYUMAS •', W / 2, 85);

      // Garis aksen header
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 180, 98); ctx.lineTo(W / 2 + 180, 98);
      ctx.stroke();
      ctx.restore();

      // 5. Judul Utama (Headline)
      ctx.save();
      ctx.font = `900 ${headlineSize}px Poppins, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.shadowColor = 'rgba(0,0,0,0.7)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 4;
      wrapCanvasText(ctx, headlineText, W / 2, 160, 780, headlineSize * 1.15, 'center');
      ctx.restore();

      // 6. Ikon Budaya SVG Banyumas
      ctx.save();
      if (iconData && typeof iconData.render === 'function') {
        // Lingkaran halo cahaya di belakang ikon
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.arc(W / 2, 450, 140, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        iconData.render(ctx, W / 2, 450, 240, accentColor);
      }
      ctx.restore();

      // 7. Slogan Persuasif Berbingkai Aksen
      ctx.save();
      ctx.font = `800 ${sloganSize}px Poppins, sans-serif`;
      ctx.textAlign = 'center';

      // Kotak kapsul slogan
      const sloganMetrics = ctx.measureText(`"${sloganText}"`);
      const pillW = Math.min(sloganMetrics.width + 60, 800);
      const pillH = sloganSize + 32;
      const pillX = (W - pillW) / 2;
      const pillY = 640;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = accentColor;
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 8;
      ctx.fillText(`“${sloganText}”`, W / 2, pillY + (pillH / 2) + (sloganSize / 3));
      ctx.restore();

      // 8. Box Deskripsi / Keunggulan
      ctx.save();
      const descCardY = 740;
      const descCardH = 170;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(60, descCardY, W - 120, descCardH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = '600 25px Nunito, sans-serif';
      ctx.fillStyle = textColor;
      wrapCanvasText(ctx, descText, W / 2, descCardY + 45, 720, 36, 'center');
      ctx.restore();

      // 9. Pita Call to Action (CTA Ribbon Bawah)
      ctx.save();
      const ribbonY = 945;
      const ribbonH = 175;
      ctx.fillStyle = '#166534';
      ctx.strokeStyle = '#FEF3C7';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(50, ribbonY, W - 100, ribbonH, 18);
      ctx.fill();
      ctx.stroke();

      // Label CTA
      ctx.font = '800 20px Poppins, sans-serif';
      ctx.fillStyle = '#FDE68A';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ AJAKAN BERTINDAK & INFORMASI LOKASI/KONTAK ⚡', W / 2, ribbonY + 42);

      // Isi CTA
      ctx.font = '800 26px Poppins, sans-serif';
      ctx.fillStyle = '#FFFFFF';
      wrapCanvasText(ctx, ctaText, W / 2, ribbonY + 86, 740, 36, 'center');

      // Cap tanda kreasi
      ctx.font = '700 16px Nunito, sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fillText(`Karya Kreatif Siswa: ${appState.studentName || 'Duta Banyumas'} • Jago Ngiklan Banyumas 2026`, W / 2, ribbonY + 152);
      ctx.restore();
    }

    // Unduh Poster PNG
    const btnDownload = document.getElementById('btn-download-poster');
    if (btnDownload) {
      btnDownload.addEventListener('click', () => {
        const canvas = document.getElementById('poster-canvas');
        if (!canvas) return;

        renderPosterCanvas();
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const safeName = (appState.studentName || 'karya').toLowerCase().replace(/[^a-z0-9]/g, '-');
        link.download = `poster-banyumas-${safeName}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        playSuccessChime();
        triggerConfetti();
        addXP(50, "Mengunduh Karya Poster Digital Banyumas HD");
        showToast("Poster berhasil diunduh dalam format PNG HD! 📥", "🎉");
      });
    }

    // 4. Checklist Kualitas Poster
    const checklistBox = document.getElementById('poster-checklist-items');
    if (checklistBox && m4.checklistItems) {
      checklistBox.innerHTML = '';
      m4.checklistItems.forEach(item => {
        const row = document.createElement('label');
        row.className = 'checklist-item-row';
        row.innerHTML = `
          <input type="checkbox" data-chk="${item.id}">
          <span>${item.label}</span>
        `;
        const cb = row.querySelector('input');
        cb.addEventListener('change', updateChecklistProgress);
        checklistBox.appendChild(row);
      });
    }

    function updateChecklistProgress() {
      const cbs = document.querySelectorAll('#poster-checklist-items input[type="checkbox"]');
      let count = 0;
      cbs.forEach(cb => {
        if (cb.checked) count++;
      });

      const badge = document.getElementById('checklist-counter-badge');
      if (badge) {
        badge.textContent = `${count} / ${cbs.length} Terpenuhi`;
      }

      const claimBox = document.getElementById('m4-claim-box');
      if (claimBox) {
        if (count === cbs.length) {
          claimBox.style.display = 'block';
          playSuccessChime();
        } else {
          claimBox.style.display = 'none';
        }
      }
    }

    // Klaim XP Misi 4 & Buka Misi 5
    const btnClaimM4 = document.getElementById('btn-claim-m4');
    if (btnClaimM4) {
      btnClaimM4.addEventListener('click', () => {
        if (!appState.completedMissions.includes('misi-4')) {
          appState.completedMissions.push('misi-4');
        }
        if (window.APP_DATA && window.APP_DATA.missions && window.APP_DATA.missions[4]) {
          window.APP_DATA.missions[4].status = 'unlocked';
        }
        saveState();
        addXP(250, "Menuntaskan Proyek Cipta Slogan & Poster Banyumas (PjBL)");
        unlockBadge('badge-poster-creator');
        triggerConfetti();
        showToast("Misi 5 (Asesmen & Sertifikat) Berhasil Dibuka! 🏆", "🎉");
        renderMissionCards();

        setTimeout(() => {
          navigateTo('misi5');
        }, 1200);
      });
    }

    setTimeout(renderPosterCanvas, 100);
  }

  // =========================================================================
  // --- 11. MODUL MISI 5 – ASESMEN, REFLEKSI & SERTIFIKAT DIGITAL ---
  // =========================================================================
  function initMisi5() {
    if (!window.APP_DATA || !window.APP_DATA.misi5) return;
    const m5 = window.APP_DATA.misi5;

    // Subtab Switching di Misi 5
    const m5SubtabBtns = document.querySelectorAll('#view-misi5 .subtab-btn');
    const m5Panes = document.querySelectorAll('#view-misi5 .m5-subtab-pane');

    m5SubtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        const targetSubtab = btn.getAttribute('data-subtab');
        m5SubtabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        m5Panes.forEach(pane => {
          if (pane.id === `subtab-${targetSubtab}`) {
            pane.style.display = 'block';
          } else {
            pane.style.display = 'none';
          }
        });

        if (targetSubtab === 'm5-sertifikat') {
          setTimeout(renderCertificateCanvas, 50);
        }
      });
    });

    // 1. Rubrik Penilaian Diri vs Teman Sebaya
    let currentRubricMode = 'self';
    const btnModeSelf = document.getElementById('btn-mode-self');
    const btnModePeer = document.getElementById('btn-mode-peer');
    const peerWrapper = document.getElementById('peer-input-wrapper');

    if (btnModeSelf && btnModePeer) {
      btnModeSelf.addEventListener('click', () => {
        currentRubricMode = 'self';
        btnModeSelf.classList.add('active');
        btnModePeer.classList.remove('active');
        if (peerWrapper) peerWrapper.style.display = 'none';
        playClickPop();
      });

      btnModePeer.addEventListener('click', () => {
        currentRubricMode = 'peer';
        btnModePeer.classList.add('active');
        btnModeSelf.classList.remove('active');
        if (peerWrapper) peerWrapper.style.display = 'block';
        playClickPop();
      });
    }

    const rubricScores = {
      'crit-theme': 4,
      'crit-slogan': 4,
      'crit-visual': 4,
      'crit-structure': 4
    };

    const rubricContainer = document.getElementById('m5-rubric-container');
    if (rubricContainer && m5.rubricCriteria) {
      rubricContainer.innerHTML = '';
      m5.rubricCriteria.forEach(crit => {
        const box = document.createElement('div');
        box.className = 'rubric-criteria-box';
        box.innerHTML = `
          <div style="font-size:0.95rem; font-weight:800; color:var(--color-soga-dark); margin-bottom:0.25rem;">
            ${crit.title}
          </div>
          <div style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:0.6rem;">
            ${crit.desc}
          </div>
          <div class="rubric-score-options" id="opts-${crit.id}"></div>
        `;

        const optsContainer = box.querySelector(`#opts-${crit.id}`);
        crit.levels.forEach(lvl => {
          const pill = document.createElement('button');
          pill.type = 'button';
          pill.className = `score-pill-btn ${lvl.score === rubricScores[crit.id] ? 'selected' : ''}`;
          pill.innerHTML = `
            <div class="score-pill-header">
              <span>${lvl.label}</span>
              <span>⭐ ${lvl.score}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--color-text-main); line-height:1.35;">
              ${lvl.text}
            </div>
          `;
          pill.addEventListener('click', () => {
            rubricScores[crit.id] = lvl.score;
            optsContainer.querySelectorAll('.score-pill-btn').forEach(p => p.classList.remove('selected'));
            pill.classList.add('selected');
            updateRubricSummary();
            playClickPop();
          });
          optsContainer.appendChild(pill);
        });

        rubricContainer.appendChild(box);
      });
    }

    function updateRubricSummary() {
      let total = 0;
      Object.values(rubricScores).forEach(sc => { total += sc; });
      const finalGrade = Math.round((total / 16) * 100);

      const totalEl = document.getElementById('rubric-total-score');
      const gradeEl = document.getElementById('rubric-final-grade');
      const badgeEl = document.getElementById('rubric-predicate-badge');

      if (totalEl) totalEl.textContent = total;
      if (gradeEl) gradeEl.textContent = finalGrade;

      if (badgeEl) {
        if (finalGrade >= 90) {
          badgeEl.textContent = 'Sangat Mahir (A+)';
          badgeEl.style.background = '#DCFCE7';
          badgeEl.style.color = '#14532D';
        } else if (finalGrade >= 80) {
          badgeEl.textContent = 'Mahir (A)';
          badgeEl.style.background = '#FEF3C7';
          badgeEl.style.color = '#92400E';
        } else if (finalGrade >= 70) {
          badgeEl.textContent = 'Berkembang Baik (B)';
          badgeEl.style.background = '#EFF6FF';
          badgeEl.style.color = '#1E40AF';
        } else {
          badgeEl.textContent = 'Perlu Bimbingan (C)';
          badgeEl.style.background = '#FEE2E2';
          badgeEl.style.color = '#991B1B';
        }
      }
    }

    updateRubricSummary();

    // Simpan Penilaian Rubrik
    const btnSaveRubric = document.getElementById('btn-save-rubric');
    if (btnSaveRubric) {
      btnSaveRubric.addEventListener('click', () => {
        let total = 0;
        Object.values(rubricScores).forEach(sc => { total += sc; });
        const finalGrade = Math.round((total / 16) * 100);
        const peerName = document.getElementById('inp-peer-name')?.value.trim() || '';

        if (!appState.quizScores) appState.quizScores = {};
        appState.quizScores.rubric = {
          mode: currentRubricMode,
          peerName,
          scores: rubricScores,
          total,
          finalGrade,
          timestamp: new Date().toISOString()
        };

        const statusEl = document.getElementById('rubric-save-status');
        if (statusEl) {
          statusEl.style.display = 'block';
          statusEl.textContent = `✓ Hasil ${currentRubricMode === 'peer' ? 'penilaian untuk ' + (peerName || 'teman') : 'penilaian diri'} berhasil disimpan (Nilai: ${finalGrade}/100)!`;
        }

        saveState();
        playSuccessChime();
        addXP(100, "Menyelesaikan Asesmen Rubrik 4 Kriteria");
        showToast("Penilaian rubrik tersimpan! ⭐", "✓");
      });
    }

    // 2. Form Refleksi Belajar
    if (appState.reflections) {
      if (document.getElementById('inp-ref-1') && appState.reflections.ref1) {
        document.getElementById('inp-ref-1').value = appState.reflections.ref1;
      }
      if (document.getElementById('inp-ref-2') && appState.reflections.ref2) {
        document.getElementById('inp-ref-2').value = appState.reflections.ref2;
      }
      if (document.getElementById('inp-ref-3') && appState.reflections.ref3) {
        document.getElementById('inp-ref-3').value = appState.reflections.ref3;
      }
    }

    const btnSaveRef = document.getElementById('btn-save-reflection');
    if (btnSaveRef) {
      btnSaveRef.addEventListener('click', () => {
        const r1 = document.getElementById('inp-ref-1')?.value.trim() || '';
        const r2 = document.getElementById('inp-ref-2')?.value.trim() || '';
        const r3 = document.getElementById('inp-ref-3')?.value.trim() || '';

        if (!r1 && !r2 && !r3) {
          alert("Silakan tuliskan setidaknya satu poin refleksi belajarmu, ya!");
          return;
        }

        appState.reflections = {
          ref1: r1,
          ref2: r2,
          ref3: r3,
          savedAt: new Date().toISOString()
        };

        // Tandai Misi 5 selesai
        if (!appState.completedMissions.includes('misi-5')) {
          appState.completedMissions.push('misi-5');
        }

        saveState();
        addXP(100, "Mengisi Catatan Refleksi Pembelajaran Autentik");
        unlockBadge('badge-duta-banyumas');
        triggerConfetti();

        const statusBox = document.getElementById('reflection-status-box');
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.textContent = "✓ Catatan refleksi berhasil disimpan! Rika resmi menjadi Duta Promosi Banyumas!";
        }

        renderCertificateCanvas();
        showToast("Refleksi tersimpan! Sertifikat siap diunduh! 🎓", "🎉");
      });
    }

    // 3. Sertifikat Digital Canvas Engine (800 x 600 px)
    function renderCertificateCanvas() {
      const canvas = document.getElementById('cert-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;

      const studentName = (appState.studentName || 'Siswa Jagoan Banyumas').toUpperCase();
      const currentLvl = calculateLevel(appState.xp);
      const today = new Date();
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      const dateStr = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

      // Latar Bersih Hangat
      ctx.fillStyle = '#FCFAF7';
      ctx.fillRect(0, 0, W, H);

      // Bingkai Ganda Berornamen Cokelat Soga & Emas
      ctx.save();
      ctx.strokeStyle = '#5C3A21';
      ctx.lineWidth = 10;
      ctx.strokeRect(20, 20, W - 40, H - 40);

      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(32, 32, W - 64, H - 64);

      ctx.strokeStyle = '#E5A93C';
      ctx.lineWidth = 1;
      ctx.strokeRect(38, 38, W - 76, H - 76);

      // Ornamen Sudut Batik Jahe Puger
      const corners = [
        [35, 35], [W - 35, 35],
        [35, H - 35], [W - 35, H - 35]
      ];
      ctx.fillStyle = '#5C3A21';
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Medali Bintang Tengah Atas
      ctx.save();
      ctx.fillStyle = '#D97706';
      ctx.beginPath();
      ctx.arc(W / 2, 75, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FEF3C7';
      ctx.beginPath();
      ctx.arc(W / 2, 75, 21, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⭐', W / 2, 83);
      ctx.restore();

      // Teks Judul Sertifikat
      ctx.save();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#5C3A21';
      ctx.font = '900 28px Poppins, serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('SERTIFIKAT PENGHARGAAN', W / 2, 130);

      ctx.font = '700 15px Poppins, sans-serif';
      ctx.fillStyle = '#B45309';
      ctx.fillText('DUTA PROMOSI BUDAYA BANYUMAS', W / 2, 155);

      ctx.font = 'italic 14px Nunito, sans-serif';
      ctx.fillStyle = '#6B7280';
      ctx.fillText('Diberikan dengan penuh rasa bangga dan apresiasi akademik kepada:', W / 2, 195);

      // Nama Siswa Dicetak Menonjol
      ctx.font = '900 32px Poppins, sans-serif';
      ctx.fillStyle = '#166534';
      ctx.shadowColor = 'rgba(22, 101, 52, 0.2)';
      ctx.shadowBlur = 6;
      ctx.fillText(studentName, W / 2, 245);
      ctx.shadowBlur = 0;

      // Garis Aksen Pita di Bawah Nama
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 200, 260); ctx.lineTo(W / 2 + 200, 260);
      ctx.stroke();

      // Deskripsi Kompetensi
      ctx.font = '500 15px Nunito, sans-serif';
      ctx.fillStyle = '#374151';
      const desc1 = "Atas ketuntasan seluruh rangkaian petualangan belajar Bahasa Indonesia Fase D Kurikulum Merdeka";
      const desc2 = "Bab 2: Slogan, Iklan, dan Poster melalui pendekatan Culturally Responsive Teaching (CRT)";
      const desc3 = "serta keberhasilan merancang karya poster kreatif kearifan lokal Banyumas dengan predikat:";
      ctx.fillText(desc1, W / 2, 292);
      ctx.fillText(desc2, W / 2, 314);
      ctx.fillText(desc3, W / 2, 336);

      // Box Predikat & XP
      ctx.fillStyle = '#FEF3C7';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(W / 2 - 220, 355, 440, 42, 21);
      ctx.fill();
      ctx.stroke();

      ctx.font = '800 16px Poppins, sans-serif';
      ctx.fillStyle = '#92400E';
      ctx.fillText(`🏆 ${currentLvl.title} (${currentLvl.rank}) • ${appState.xp} Total XP`, W / 2, 382);

      // Cap Stempel Kang Mendhoan
      ctx.save();
      const sealX = W / 2;
      const sealY = 485;
      ctx.strokeStyle = '#991B1B';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(sealX, sealY, 35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#991B1B';
      ctx.font = '900 8.5px Poppins, sans-serif';
      ctx.fillText('JAGO NGIKLAN BANYUMAS', sealX, sealY - 14);
      ctx.font = '700 8px Poppins, sans-serif';
      ctx.fillText('RESMI DISAHKAN', sealX, sealY + 18);
      ctx.font = '18px sans-serif';
      ctx.fillText('🥟', sealX, sealY + 4);
      ctx.restore();

      // Tanda Tangan Kiri: Kang Mendhoan
      ctx.textAlign = 'center';
      ctx.fillStyle = '#5C3A21';
      ctx.font = 'italic 700 18px "Brush Script MT", cursive, sans-serif';
      ctx.fillText('Kang Mendhoan', 160, 480);
      ctx.strokeStyle = '#5C3A21';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(90, 492); ctx.lineTo(230, 492);
      ctx.stroke();
      ctx.font = '700 12px Poppins, sans-serif';
      ctx.fillText('KANG MENDHOAN', 160, 510);
      ctx.font = '500 11px Nunito, sans-serif';
      ctx.fillStyle = '#6B7280';
      ctx.fillText('Maskot & Pemandu Budaya', 160, 526);

      // Tanda Tangan Kanan: Pendidik Bahasa Indonesia
      ctx.textAlign = 'center';
      ctx.fillStyle = '#5C3A21';
      ctx.font = '500 12px Nunito, sans-serif';
      ctx.fillText(`Banyumas, ${dateStr}`, W - 160, 455);
      ctx.font = 'italic 700 18px "Brush Script MT", cursive, sans-serif';
      ctx.fillText('Guru Pengampu', W - 160, 480);
      ctx.strokeStyle = '#5C3A21';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W - 230, 492); ctx.lineTo(W - 90, 492);
      ctx.stroke();
      ctx.font = '700 12px Poppins, sans-serif';
      ctx.fillText('GURU BAHASA INDONESIA', W - 160, 510);
      ctx.font = '500 11px Nunito, sans-serif';
      ctx.fillStyle = '#6B7280';
      ctx.fillText('Fase D Kurikulum Merdeka', W - 160, 526);

      ctx.restore();
    }

    // Unduh Sertifikat PNG
    const btnDownloadCert = document.getElementById('btn-download-cert');
    if (btnDownloadCert) {
      btnDownloadCert.addEventListener('click', () => {
        const canvas = document.getElementById('cert-canvas');
        if (!canvas) return;

        renderCertificateCanvas();
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const safeName = (appState.studentName || 'siswa').toLowerCase().replace(/[^a-z0-9]/g, '-');
        link.download = `sertifikat-duta-banyumas-${safeName}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        playSuccessChime();
        triggerConfetti();
        showToast("Sertifikat resmi berhasil diunduh! 🎓", "🎉");
      });
    }

    // Cetak Sertifikat
    const btnPrintCert = document.getElementById('btn-print-cert');
    if (btnPrintCert) {
      btnPrintCert.addEventListener('click', () => {
        window.print();
      });
    }

    setTimeout(renderCertificateCanvas, 100);
  }

  // =========================================================================
  // --- 12. MODUL PANDUAN GURU & PEDAGOGI PPG ---
  // =========================================================================
  function initGuru() {
    const tabBtns = document.querySelectorAll('.guru-tab-btn');
    const panes = document.querySelectorAll('.guru-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playClickPop();
        const targetTab = btn.getAttribute('data-gurutab');

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panes.forEach(pane => {
          if (pane.id === targetTab) {
            pane.style.display = 'block';
          } else {
            pane.style.display = 'none';
          }
        });
      });
    });
  }

  // --- 10. EVENT LISTENERS & INISIALISASI ---
  function setupEventListeners() {
    // Tombol Navigasi Router
    document.querySelectorAll('[data-route]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const route = btn.getAttribute('data-route');
        navigateTo(route);
      });
    });

    // Form Simpan Nama Siswa
    const nameForm = document.getElementById('student-name-form');
    if (nameForm) {
      nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('student-name-input');
        if (input && input.value.trim()) {
          appState.studentName = input.value.trim();
          saveState();
          updateUIElements();
          playSuccessChime();
          showToast(`Sugeng rawuh, ${appState.studentName}! Siap dadi Jago Ngiklan!`, '👋');
        }
      });
    }

    // Tombol Ganti Nama Siswa
    const btnChangeName = document.getElementById('btn-change-name');
    if (btnChangeName) {
      btnChangeName.addEventListener('click', () => {
        const onboardingBox = document.getElementById('student-onboarding-box');
        const welcomedBox = document.getElementById('student-welcomed-box');
        if (onboardingBox && welcomedBox) {
          onboardingBox.style.display = 'flex';
          welcomedBox.style.display = 'none';
        }
      });
    }

    const mascotWrapper = document.getElementById('kang-mendhoan-mascot');
    if (mascotWrapper) {
      mascotWrapper.addEventListener('click', interactMascot);
    }

    // Tombol Avatar Profil di Header
    const btnProfile = document.getElementById('btn-open-profile');
    if (btnProfile) {
      btnProfile.addEventListener('click', () => {
        navigateTo('tentang');
      });
    }

    // Interaktivitas Sapaan Ngapak di seluruh halaman
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.ngapak-word');
      if (target) {
        const wordKey = target.getAttribute('data-word') || target.textContent.trim().toLowerCase();
        openNgapakModal(wordKey);
      }
    });

    // Modal Tutup
    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    });

    // Tombol Reset Data untuk Percobaan / Siswa Baru
    const resetBtn = document.getElementById('btn-reset-data');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("Ingin mereset petualangan dan poin XP dari awal?")) {
          localStorage.removeItem(STORAGE_KEY);
          appState = { ...defaultState };
          updateUIElements();
          renderMissionCards();
          showToast("Data petualangan telah direset!", "🔄");
          navigateTo('beranda');
        }
      });
    }

    // Keyboard Accessibility (ESC untuk tutup modal)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // Service Worker Registration untuk Offline Support
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker terdaftar:', reg.scope))
        .catch(err => console.log('Gagal mendaftarkan Service Worker:', err));
    }
  }

  // Jalankan saat DOM siap
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEventListeners();
    updateUIElements();
    renderMissionCards();
    renderCultureShowcase();
    initMisi1();
    initMisi2();
    initMisi3();
    initMisi4();
    initMisi5();
    initGuru();
    registerServiceWorker();

    // Berikan XP sambutan jika pengguna pertama kali mengisi nama
    if (appState.xp === 0 && appState.studentName) {
      addXP(50, "Memulai Petualangan Banyumas");
    }
  });

  // Ekspor API internal untuk modul-modul misi berikutnya
  window.JagoNgiklan = {
    getState: () => appState,
    saveState,
    addXP,
    showToast,
    playSuccessChime,
    playTone,
    triggerConfetti,
    navigateTo,
    openNgapakModal
  };

})();
