/* Global UI scripts: mobile menu + language switch */

const i18n = {
  ru: {
    "nav.home": "Главная",
    "nav.roster": "Состав",
    "nav.news": "Новости",
    "nav.about": "О команде",
    "nav.contacts": "Контакты",
    "nav.highlights": "Хайлайты",
    "lang.toggle": "RU",

    "home.hero.subtitle": "ЧРЕЗВЫЧАЙНО МОЩНАЯ ОРГАНИЗАЦИЯ",
    "home.section.roster": "СОСТАВ КОМАНДЫ",
    "home.section.achievements": "ДОСТИЖЕНИЯ",

    "about.hero.title": "НАША КОМАНДА",
    "about.hero.subtitle": "TEAM EXPOO",
    "about.section.values": "CORE VALUES",
    "about.section.staff": "MANAGEMENT & ROSTER",

    "roster.hero.title": "СОСТАВ КОМАНДЫ",
    "roster.hero.subtitle": "ВТСРЕЧАЙТЕ СИЛЬНЕЙШИХ",

    "news.hero.title": "ПОСЛЕДНИЕ НОВОСТИ",
    "news.hero.subtitle": "БУДЬ В КУРСЕ",

    "contacts.hero.title": "КОНТАКТЫ",
    "contacts.hero.subtitle": "СВЯЖИТЕСЬ С НАМИ",
    "contacts.section.send": "ОТПРАВЬТЕ НАМ СООБЩЕНИЕ",

    "profile.section.bio": "БИОГРАФИЯ",
    "profile.section.gear": "GAMING GEAR",
    "profile.section.settings": "IN-GAME SETTINGS",
    "profile.section.specs": "PC SPECS",
  },
  en: {
    "nav.home": "Home",
    "nav.roster": "Roster",
    "nav.news": "News",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "nav.highlights": "Highlights",
    "lang.toggle": "EN",

    "home.hero.subtitle": "Extremely Powerful Organization",
    "home.section.roster": "ACTIVE ROSTER",
    "home.section.achievements": "ACHIEVEMENTS",

    "about.hero.title": "OUR CLUB",
    "about.hero.subtitle": "TEAM EXPOO",
    "about.section.values": "CORE VALUES",
    "about.section.staff": "MANAGEMENT & ROSTER",

    "roster.hero.title": "ACTIVE ROSTER",
    "roster.hero.subtitle": "MEET THE SQUAD",

    "news.hero.title": "LATEST NEWS",
    "news.hero.subtitle": "STAY UPDATED",

    "contacts.hero.title": "CONTACTS",
    "contacts.hero.subtitle": "GET IN TOUCH WITH US",
    "contacts.section.send": "SEND US A MESSAGE",

    "profile.section.bio": "BIOGRAPHY",
    "profile.section.gear": "GAMING GEAR",
    "profile.section.settings": "IN-GAME SETTINGS",
    "profile.section.specs": "PC SPECS",
  }
};

function setLanguage(lang) {
  if (!i18n[lang]) return;

  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    const translation = i18n[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });

  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.textContent = i18n[lang]['lang.toggle'];
  }

  localStorage.setItem('expo-lang', lang);
}

function initLang() {
  const savedLang = localStorage.getItem('expo-lang');
  const defaultLang = savedLang || 'ru';
  setLanguage(defaultLang);

  const switchBtn = document.querySelector('.lang-switch');
  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      const current = document.body.dataset.lang || 'ru';
      const next = current === 'ru' ? 'en' : 'ru';
      setLanguage(next);
    });
  }
}

const newsData = [
  {
    slug: 'ltl-low-cup',
    tag: 'TOURNAMENT',
    title: 'TEAM EXPOO ПРИМЕТ УЧАСТИЕ НА LTL LOW CUP',
    date: '14.03.2026',
    image: 'https://media.discordapp.net/attachments/859329714748129342/1482409437732802601/IMG_20260314_210541_411.jpg?ex=69b7819f&is=69b6301f&hm=dce8fc4bc6c4c75c1ce4ccb14978690926e50be8b7046a5caf7d88196d1e6184&=&format=webp',
    excerpt: 'TE стала восьмой командой, которая зарегистрировалась на турнире. Матч стартует уже на следующей неделе.',
    content: '<p>Team Expoo официально подтверждает участие в LTL LOW CUP. Команда готовится к отборочным матчам и объявляет свой состав... (здесь можно добавить полный текст новости).</p>',
    featured: true,
  },
  {
    slug: 'wortex-loss',
    tag: 'MATCH',
    title: 'TE проигрывают WORTEX',
    date: '10.03.2026',
    image: 'https://media.discordapp.net/attachments/859329714748129342/1481985361818419361/IMG_20260313_170017_706.jpg',
    excerpt: 'Team Expoo проигрывают WORTEX Team со счётом 13:8. Команда готовится к реваншу.',
    content: '<p>После тяжёлого матча против WORTEX команда Team Expoo потерпела поражение 13:8. Главные выводы...</p>',
  },
  {
    slug: 'semifinal-win',
    tag: 'MATCH',
    title: 'TE выигрывают Cancers и выходят в полуфинал',
    date: '10.03.2026',
    image: 'https://media.discordapp.net/attachments/859329714748129342/1481985529661755453/IMG_20260313_170111_333.jpg',
    excerpt: 'Team Expoo выигрывают Cancers со счетом 2:0 и проходят дальше в турнире.',
    content: '<p>Команда показала уверенную игру и прошла в полуфинал турнира. Лучшие моменты матча...</p>',
  },
  {
    slug: 'raze-cup',
    tag: 'ANNOUNCEMENT',
    title: 'TEAM EXPOO ПРИМЕТ УЧАСТИЕ НА RAZE CUP SEASON 6',
    date: '12.03.2026',
    image: 'https://media.discordapp.net/attachments/859329714748129342/1481985529661755453/IMG_20260313_170111_333.jpg',
    excerpt: 'Команда зарегистрирована на RAZE CUP Season 6. Первый матч против Echofall AC.',
    content: '<p>Мы рады объявить, что Team Expoo примет участие в турнире RAZE CUP Season 6. Ниже расписание...</p>',
  },
  {
  slug: 'new-player',
  tag: 'ROSTER',
  title: 'Dortiz присоединяется к TE',
  date: '04.02.2026',
  image: 'images/KAZAKH.png',
  excerpt: 'Встречайте нового игрока...',
  content: '<p>Новый игрок присоединяется к команде. Dortiz — молодой талант из Казахстана. Он будет выступать за TE в ближайших матчах.</p>',
  },
  {
  slug: 'barcket-ltl',
  tag: 'TOURNAMENT',
  title: 'TE сыгрыют свой первый матч против BMPM',
  date: '15.03.2026',
  image: 'https://media.discordapp.net/attachments/859329714748129342/1482676023253270559/IMG_20260315_144456_710.jpg?ex=69b7d126&is=69b67fa6&hm=1ea91924177358e887d06be55b115c9b21a0c47159f1b6cfb98e6ddd238c2254&=&format=webp',
  excerpt: 'TLT Представили сетку турнира. Первый матч против BMPM уже 20 марта.',
  content: '<p>LTL LOW CUP стартует 20 марта. TE сыграют свой первый матч против BMPM. Организаторы представили сетку турнира.</p>',
  }
];

// HIGHLIGHTS DATA
const highlightsData = [
  {
    id: 'clutch-1v3-raze',
    title: 'SW1K 1v3 клатч на Anubis',
    game: 'CS2 — RAZE CUP S5',
    date: '2026-03-10',
    duration: '0:34',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/nXwFDnKYyzc?si=X0YGkyRCygQFIYsl' // TODO: замени на реальный URL
  },
  {
    id: 'ace-mirage',
    title: 'SHINTRIX AWP ACE на Mirage',
    game: 'CS2 — LTL LOW CUP',
    date: '2026-03-14',
    duration: '0:47',
    platform: 'youtube',
    url: 'https://youtu.be/dQw4w9WgXcQ?si=iFikMwON1W_4sdjO'
  },
  {
    id: 'entry-rush',
    title: 'NEXT_TIME — быстрый выход B',
    game: 'CS2 — MIX CUP',
    date: '2026-02-28',
    duration: '0:29',
    platform: 'youtube',
    url: 'https://youtu.be/8vQS5DZZ38k?si=B4ZMljUOJ4RuKJIF'
  }
];

// MATCH CENTER (HOME)
const matchCenterData = {
  nextMatch: {
    event: 'LTL LOW CUP',
    format: 'BO3',
    opponentTag: 'BPM',
    opponentName: 'BMPM',
    timeText: '20 марта • 21:00',
    mapText: 'Map: ?, ?, ?'
  },
  lastResults: [
    { opponent: 'Virtuos Team', event: 'PRAC', score: '2:0', status: 'win' },
    { opponent: 'Wortex Esports', event: 'PRAC', score: '0:2', status: 'loss' },
    { opponent: 'Echofall AC', event: 'RAZE CUP', score: '0:1', status: 'loss' }
  ]
};

function getPlaceholderImage() {
  return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22120%22 viewBox=%220 0 200 120%22%3E%3Crect width=%22200%22 height=%22120%22 fill=%22%23030b14%22/%3E%3Ctext x=%2210%22 y=%2268%22 fill=%22%2388b6ff%22 font-family=%22Segoe UI%22 font-size=%2214%22%3ENo image%3C/text%3E%3C/svg%3E';
}

function renderNews() {
  const featuredContainer = document.getElementById('news-featured');
  const gridContainer = document.getElementById('news-grid');

  if (!featuredContainer || !gridContainer) return;

  const featured = newsData.find(n => n.featured) || newsData[0];
  const regular = newsData.filter(n => n !== featured);

  featuredContainer.innerHTML = getFeaturedMarkup(featured);
  gridContainer.innerHTML = regular.map(getCardMarkup).join('');

  document.querySelectorAll('[data-news-action="open"]').forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      const slug = el.dataset.newsSlug;
      const item = newsData.find(n => n.slug === slug);
      if (item) {
        openNewsModal(item);
      }
    });
  });

  // Handle image errors (missing images)
  document.querySelectorAll('img[data-news-img]').forEach(img => {
    img.addEventListener('error', () => {
      img.src = getPlaceholderImage();
    });
  });
}

function renderMatchCenter() {
  if (document.body.dataset.page !== 'index') return;

  const nextMeta = document.getElementById('mc-next-meta');
  const nextVersus = document.getElementById('mc-next-versus');
  const nextTime = document.getElementById('mc-next-time');
  const nextMap = document.getElementById('mc-next-map');
  const resultsList = document.getElementById('mc-results-list');

  if (!nextMeta || !nextVersus || !nextTime || !nextMap || !resultsList) return;

  nextMeta.textContent = `${matchCenterData.nextMatch.event} • ${matchCenterData.nextMatch.format}`;
  nextTime.textContent = matchCenterData.nextMatch.timeText;
  nextMap.textContent = matchCenterData.nextMatch.mapText;

  // Update opponent tags/names inside vs block
  const right = nextVersus.querySelector('.mc-team-right');
  if (right) {
    const tag = right.querySelector('.mc-team-tag');
    const name = right.querySelector('.mc-team-name');
    if (tag) tag.textContent = matchCenterData.nextMatch.opponentTag;
    if (name) name.textContent = matchCenterData.nextMatch.opponentName;
  }

  resultsList.innerHTML = matchCenterData.lastResults.map(r => `
    <div class="mc-result ${r.status}">
      <div class="mc-result-main">
        <div class="mc-result-title">TE vs ${r.opponent}</div>
        <div class="mc-result-sub">${r.event}</div>
      </div>
      <div class="mc-result-score">${r.score}</div>
    </div>
  `).join('');
}

function getFeaturedMarkup(item) {
  return `
    <article class="news-featured">
      <div class="news-img-wrap">
        <img data-news-img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="news-content">
        <span class="news-tag">${item.tag}</span>
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <div class="news-footer">
          <span class="news-date">${item.date}</span>
          <a href="#" class="read-more" data-news-action="open" data-news-slug="${item.slug}">ЧИТАТЬ ПОЛНОСТЬЮ →</a>
        </div>
      </div>
    </article>
  `;
}

function getCardMarkup(item) {
  return `
    <article class="news-card">
      <div class="news-card-img"><img data-news-img src="${item.image}" alt="${item.title}" /></div>
      <div class="news-card-body">
        <span class="news-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="news-footer">
          <span class="news-date">${item.date}</span>
          <a href="#" class="read-more" data-news-action="open" data-news-slug="${item.slug}">Читать</a>
        </div>
      </div>
    </article>
  `;
}

function openNewsModal(item) {
  const modal = document.getElementById('news-modal');
  const body = document.getElementById('news-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <h2>${item.title}</h2>
    <div class="news-modal-meta">
      <span class="news-tag">${item.tag}</span>
      <span class="news-date">${item.date}</span>
    </div>
    <div class="news-modal-img">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='${getPlaceholderImage()}'" />
    </div>
    <div class="news-modal-text">${item.content}</div>
  `;

  modal.classList.remove('hidden');
  modal.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const closeButton = modal.querySelector('.news-modal-close');
  if (closeButton) closeButton.focus();
}

function closeNewsModal() {
  const modal = document.getElementById('news-modal');
  if (!modal) return;

  modal.classList.add('hidden');
}

function initModalLogic() {
  const newsModal = document.getElementById('news-modal');
  const highlightModal = document.getElementById('highlight-modal');

  if (newsModal) {
    newsModal.addEventListener('click', event => {
      if (event.target.closest('[data-close]')) {
        closeNewsModal();
      }
    });
  }

  if (highlightModal) {
    highlightModal.addEventListener('click', event => {
      if (event.target.closest('[data-close]')) {
        closeHighlightModal();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeNewsModal();
      closeHighlightModal();
    }
  });
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  // close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });
}

function initReveal() {
  const sections = document.querySelectorAll('section');
  if (!sections.length) return;

  // На мобильных устройствах не прячем секции, сразу показываем их без анимации
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    sections.forEach(section => {
      section.classList.remove('reveal');
      section.classList.add('active');
    });
    return;
  }

  sections.forEach(section => section.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => observer.observe(section));
}

// HIGHLIGHTS HELPERS + RENDER
function getYouTubeId(url) {
  if (!url) return null;

  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/shorts\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtube\.com\/live\/([^?]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

function getHighlightThumb(item) {
  if (item.platform === 'youtube') {
    const id = getYouTubeId(item.url);
    if (id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
  }
  return getPlaceholderImage();
}

function renderHighlights() {
  const grid = document.getElementById('highlights-grid');
  if (!grid || !highlightsData.length) return;

  grid.innerHTML = highlightsData.map(item => {
    const thumb = getHighlightThumb(item);

    return `
      <article class="highlight-card" data-highlight-id="${item.id}">
        <div class="highlight-thumb">
          <img src="${thumb}" alt="${item.title}">
        </div>
        <div class="highlight-meta">
          <span class="highlight-game">${item.game}</span>
          <h3 class="highlight-title">${item.title}</h3>
          <div class="highlight-info">
            <span>${item.duration}</span>
            <span>${item.date}</span>
          </div>
          <a class="highlight-watch" href="${item.url}" target="_blank" rel="noopener">
            Смотреть на ${item.platform === 'youtube' ? 'YouTube' : 'платформе'} →
          </a>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('[data-highlight-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.highlightId;
      const item = highlightsData.find(h => h.id === id);
      if (item) {
        openHighlightModal(item);
      }
    });
  });

  grid.querySelectorAll('.highlight-watch').forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
}

  

function openHighlightModal(item) {
  const modal = document.getElementById('highlight-modal');
  const body = document.getElementById('highlight-modal-body');
  if (!modal || !body) return;

  const ytId = item.platform === 'youtube' ? getYouTubeId(item.url) : null;
  const isFileProtocol = window.location.protocol === 'file:';

  // IMPORTANT: YouTube embed часто ломается на file:// (origin = "null"), даём подсказку
  if (isFileProtocol && ytId) {
    body.innerHTML = `
      <h2>${item.title}</h2>
      <div class="highlight-modal-meta">
        <span>${item.game}</span>
        <span>${item.date}</span>
        <span>${item.duration}</span>
      </div>
      <div class="highlight-modal-desc">
        Плеер YouTube часто не работает, если сайт открыт как файл (<b>file://</b>).<br>
        Решение: открой проект через локальный сервер (например, расширение <b>Live Server</b> в VS Code/Cursor) или загрузи на хостинг.
        <br><br>
        Сейчас можно открыть видео напрямую:
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">открыть на YouTube</a>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const closeButton = modal.querySelector('.highlight-modal-close');
    if (closeButton) closeButton.focus();
    return;
  }

  const embedUrl = ytId
    ? `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`
    : item.url;

  body.innerHTML = `
    <h2>${item.title}</h2>
    <div class="highlight-modal-meta">
      <span>${item.game}</span>
      <span>${item.date}</span>
      <span>${item.duration}</span>
    </div>

    <div class="highlight-modal-video">
      <iframe
        src="${embedUrl}"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>

    <div class="highlight-modal-desc">
      Смотреть момент без перехода с сайта. Оригинальная ссылка: 
      <a href="${item.url}" target="_blank" rel="noopener">
        открыть на ${item.platform === 'youtube' ? 'YouTube' : 'платформе'}
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const closeButton = modal.querySelector('.highlight-modal-close');
  if (closeButton) closeButton.focus();
}

function closeHighlightModal() {
  const modal = document.getElementById('highlight-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  const body = document.getElementById('highlight-modal-body');
  if (body) body.innerHTML = '';
}

// =========================
// PLAYER PROFILE LOGIC
// =========================

const playersData = {
  shintrix: {
    id: 'shintrix',
    nick: 'SHINTRIX',
    realname: 'Тимофей "SHINTRIX" Ефимов',
    role: 'AWP',
    age: 17,
    country: 'RUSSIA',
    photo: 'images/TimofeyShintrix.png',
    bio: 'Играет за Team Expoo с 2025 года. Снайпер команды, отвечает за открывающие фраги и контроль ключевых позиций.',
    gear: {
      mouse: 'XTRFY M8',
      keyboard: 'HyperX Alloy FPS',
      headset: 'HyperX Cloud II',
      monitor: 'Zowie XL2546 (240Hz)',
      mousepad: 'SteelSeries QcK+'
    },
    settings: {
      dpi: 800,
      sens: 1.2,
      edpi: 960,
      hz: 1000,
      res: '1280x960',
      aspect: '4:3 (Stretched)',
      crosshair: 'CSGO-XXXX-XXXX-XXXX-XXXX-XXXX'
    },
    pc: {
      cpu: 'Intel Core i5',
      gpu: 'NVIDIA GTX 1660',
      ram: '16GB DDR4 3200MHz',
      storage: '1TB SSD',
      mobo: 'MSI B560'
    }
  },

  zelofa1n: {
    id: 'zelofa1n',
    nick: 'ZELOFA1N',
    realname: 'Владислав "ZELOFA1N" Гумашев',
    role: 'LURKER',
    age: 17,
    country: 'RUSSIA',
    photo: 'images/ZELOFA1Nvlad.png',
    bio: 'Луркер и клатч-машина. Умеет находить лазейки в защите соперника и закрывать раунды в меньшинстве.',
    gear: {
      mouse: 'Logitech G Pro X Superlight',
      keyboard: 'Razer Huntsman Mini',
      headset: 'Logitech G Pro X',
      monitor: 'BenQ XL2411 (144Hz)',
      mousepad: 'Zowie G-SR'
    },
    settings: {
      dpi: 800,
      sens: 1.0,
      edpi: 800,
      hz: 1000,
      res: '1280x960',
      aspect: '4:3 (Stretched)',
      crosshair: 'CSGO-YYYY-YYYY-YYYY-YYYY-YYYY'
    },
    pc: {
      cpu: 'Intel Core i5',
      gpu: 'NVIDIA RTX 3050',
      ram: '16GB DDR4 3200MHz',
      storage: '512GB SSD',
      mobo: 'ASUS B560'
    }
  },

  dortiz: {
    id: 'dortiz',
    nick: 'DORTIZ',
    realname: 'Эльнур "Nick" Мамбетов',
    role: 'SUPPORT',
    age: 12,
    country: 'KAZAKHSTAN',
    photo: 'images/KAZAKH.png',
    bio: 'Саппорт, который всегда подстрахует тиммейтов флешками и гранатами. Делает грязную работу ради победы команды.',
    gear: {
      mouse: 'Razer DeathAdder V2',
      keyboard: 'Redragon Kumara',
      headset: 'HyperX Cloud Stinger',
      monitor: 'AOC 144Hz',
      mousepad: 'Logitech G240'
    },
    settings: {
      dpi: 800,
      sens: 1.4,
      edpi: 1120,
      hz: 1000,
      res: '1280x1024',
      aspect: '5:4',
      crosshair: 'CSGO-ZZZZ-ZZZZ-ZZZZ-ZZZZ-ZZZZ'
    },
    pc: {
      cpu: 'Ryzen 5 3600',
      gpu: 'NVIDIA GTX 1650',
      ram: '16GB DDR4 3200MHz',
      storage: '1TB SSD',
      mobo: 'Gigabyte B450'
    }
  },

  sw1k: {
    id: 'sw1k',
    nick: 'SW1K',
    realname: 'Богдан "SW1K" Важов',
    role: 'IGL',
    age: 16,
    country: 'RUSSIA',
    photo: 'images/Sw1kBOgdan.png',
    bio: 'Ин-игровой лидер Team Expoo. Отвечает за тактики, тайминги и общее направление игры коллектива.',
    gear: {
      mouse: 'VGN VXE R1',
      keyboard: 'REDSQUARE KEYROX TKL',
      headset: 'MOONDROP CHU II',
      monitor: 'REDMI G24 (180Hz)',
      mousepad: 'NO NAME BIG'
    },
    settings: {
      dpi: 1100,
      sens: 1.25,
      edpi: 1375,
      hz: 1000,
      res: '1280x960',
      aspect: '4:3 (Stretched)',
      crosshair: 'CSGO-KoKYK-eL4FP-Tj6db-Y9pAt-bciaB'
    },
    pc: {
      cpu: 'INTEL',
      gpu: 'NVIDIA GTX 1650',
      ram: '16GB DDR4 3200MHz',
      storage: '1TB SSD',
      mobo: '?'
    }
  },

  next_time: {
    id: 'next_time',
    nick: 'NEXT_TIME',
    realname: 'Данил "NEXT_TIME" Марков',
    role: 'ENTRY FRAGGER',
    age: 15,
    country: 'RUSSIA',
    photo: 'images/DaniilNextTime.png',
    bio: 'Энтри-фраггер, который первым врывается на плент и создаёт пространство для тиммейтов.',
    gear: {
      mouse: 'Zowie EC2',
      keyboard: 'SteelSeries Apex 3',
      headset: 'Razer BlackShark V2',
      monitor: 'LG 144Hz',
      mousepad: 'Zowie G-SR-SE'
    },
    settings: {
      dpi: 800,
      sens: 1.3,
      edpi: 1040,
      hz: 1000,
      res: '1280x960',
      aspect: '4:3 (Stretched)',
      crosshair: 'CSGO-AAAA-AAAA-AAAA-AAAA-AAAA'
    },
    pc: {
      cpu: 'Ryzen 5 2600',
      gpu: 'NVIDIA GTX 1660 Super',
      ram: '16GB DDR4 3000MHz',
      storage: '1TB SSD',
      mobo: 'ASRock B450'
    }
  }
};

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function initPlayerProfile() {
  const page = document.body.dataset.page;
  if (page !== 'profile') return;

  let id = getQueryParam('id') || 'sw1k';
  if (!playersData[id]) {
    id = 'sw1k';
  }

  const p = playersData[id];

  // header
  const photoEl = document.getElementById('player-photo');
  const roleEl = document.getElementById('player-role');
  const nickEl = document.getElementById('player-nick');
  const realnameEl = document.getElementById('player-realname');
  const ageCountryEl = document.getElementById('player-age-country');
  const bioEl = document.getElementById('player-bio');

  if (photoEl) {
    photoEl.src = p.photo;
    photoEl.alt = p.nick;
  }
  if (roleEl) {
    roleEl.textContent = p.role;
  }
  if (nickEl) {
    nickEl.textContent = p.nick;
  }
  if (realnameEl) {
    realnameEl.textContent = p.realname;
  }
  if (ageCountryEl) {
    ageCountryEl.innerHTML = `AGE:&emsp; ${p.age} <br> COUNTRY:&emsp; ${p.country} <br>`;
  }
  if (bioEl) {
    bioEl.textContent = p.bio;
  }

  // gear
  const gear = p.gear;
  const gearMap = {
    'gear-mouse': gear.mouse,
    'gear-keyboard': gear.keyboard,
    'gear-headset': gear.headset,
    'gear-monitor': gear.monitor,
    'gear-mousepad': gear.mousepad
  };
  Object.entries(gearMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  });

  // settings
  const s = p.settings;
  const settingsMap = {
    'set-dpi': s.dpi,
    'set-sens': s.sens,
    'set-edpi': s.edpi,
    'set-hz': s.hz,
    'set-res': s.res,
    'set-aspect': s.aspect
  };
  Object.entries(settingsMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  });
  const crosshairEl = document.getElementById('set-crosshair');
  if (crosshairEl) {
    crosshairEl.textContent = s.crosshair;
  }

  // pc specs
  const pc = p.pc;
  const pcMap = {
    'pc-cpu': pc.cpu,
    'pc-gpu': pc.gpu,
    'pc-ram': pc.ram,
    'pc-storage': pc.storage,
    'pc-mobo': pc.mobo
  };
  Object.entries(pcMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initLang();
  initMenu();
  initReveal();
  initModalLogic();
  renderMatchCenter();

  if (document.body.dataset.page === 'news') {
    renderNews();
  }

  if (document.body.dataset.page === 'highlights') {
    renderHighlights();
  }

  initPlayerProfile();
});
