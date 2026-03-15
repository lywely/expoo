/* Global UI scripts: mobile menu + language switch */

const i18n = {
  ru: {
    "nav.home": "Главная",
    "nav.roster": "Состав",
    "nav.news": "Новости",
    "nav.about": "О команде",
    "nav.contacts": "Контакты",
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
  const modal = document.getElementById('news-modal');
  if (!modal) return;

  modal.addEventListener('click', event => {
    if (event.target.closest('[data-close]')) {
      closeNewsModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeNewsModal();
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

window.addEventListener('DOMContentLoaded', () => {
  initLang();
  initMenu();
  initReveal();
  initModalLogic();

  if (document.body.dataset.page === 'news') {
    renderNews();
  }
});
