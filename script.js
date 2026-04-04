/* Global UI scripts: mobile menu + language switch */

const i18n = {
  ru: {
    "nav.home": "Главная",
    "nav.roster": "Состав",
    "nav.matches": "Матчи",
    "nav.news": "Новости",
    "nav.about": "О команде",
    "nav.contacts": "Контакты",
    "nav.highlights": "Хайлайты",
    "nav.media": "Медиа Кит",
    "nav.join": "В команду",
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
    "roster.search.placeholder": "ПОИСК ИГРОКА",
    "roster.filter.all": "ВСЕ РОЛИ",
    "roster.empty": "Ничего не найдено",

    "news.hero.title": "ПОСЛЕДНИЕ НОВОСТИ",
    "news.hero.subtitle": "БУДЬ В КУРСЕ",
    "news.noscript": "Для просмотра новостей требуется JavaScript. Пожалуйста, включите его в настройках браузера.",
    "news.tg.title": "TELEGRAM",
    "news.tg.subtitle": "Последние посты из Telegram-канала команды",
    /*"news.tg.fallback": "Посты Telegram сейчас недоступны.",*/
    "news.tg.open": "Открыть канал",

    "contacts.hero.title": "КОНТАКТЫ",
    "contacts.hero.subtitle": "СВЯЖИТЕСЬ С НАМИ",
    "contacts.section.send": "ОТПРАВЬТЕ НАМ СООБЩЕНИЕ",

    "join.hero.title": "JOIN TEAM EXPOO",
    "join.hero.subtitle": "ЗАЯВКА В КОМАНДУ",
    "join.requirements.title": "ЧТО МЫ ЖДЕМ",
    "join.requirements.1": "16+ лет и стабильный онлайн по прайм-тайму",
    "join.requirements.2": "Дисциплина, коммуникация и командный майндсет",
    "join.requirements.3": "Релевантный опыт в CS2 и ссылки на демки",
    "join.requirements.4": "Готовность к пракам и официальным матчам",
    "join.roles.title": "ОТКРЫТЫЕ РОЛИ",
    "join.process": "Обычно мы рассматриваем заявки в течение 3-7 дней.",
    "join.form.title": "АНКЕТА КАНДИДАТА",
    "join.form.subtitle": "Заполни все поля. Чем точнее информация, тем быстрее мы оценим заявку.",
    "join.form.name": "Имя",
    "join.form.age": "Возраст",
    "join.form.nick": "Игровой ник",
    "join.form.role": "Основная роль",
    "join.form.country": "Страна / Часовой пояс",
    "join.form.faceit": "Faceit уровень / ELO",
    "join.form.telegram": "Telegram",
    "join.form.steam": "Ссылка на профиль Steam",
    "join.form.exp": "Опыт в командах",
    "join.form.links": "Ссылки на демки/хайлайты",
    "join.form.about": "Почему хочешь в EXPOO?",
    "join.form.consent": "Я согласен на обработку анкеты для связи по поводу просмотра в команду.",
    "join.form.submit": "Отправить заявку",
    "join.draft.title": "Черновик заявки",
    "join.draft.subtitle": "Прямая отправка пока не настроена. Скопируй текст и отправь нам в Telegram.",
    "join.draft.copy": "Скопировать текст",
    "join.draft.open": "Открыть Telegram",
    "join.success.title": "Заявка отправлена",
    "join.success.subtitle": "Спасибо! Мы получили твою анкету и свяжемся с тобой в Telegram, если ты пройдешь в следующий этап.",
    "join.success.reset": "Отправить еще одну заявку",

    "profile.section.bio": "БИОГРАФИЯ",
    "profile.section.gear": "GAMING GEAR",
    "profile.section.settings": "IN-GAME SETTINGS",
    "profile.section.specs": "PC SPECS",

    "ui.close": "Закрыть",
    "ui.calendar": "Календарь",
    "ui.addToGoogleCalendar": "Добавить в Google Calendar",
    "ui.stream": "Трансляция",
    "ui.open": "Открыть",
    "ui.download": "Скачать",

    "matches.hero.title": "МАТЧИ",
    "matches.hero.subtitle": "РАСПИСАНИЕ И РЕЗУЛЬТАТЫ",
    "matches.schedule.title": "РАСПИСАНИЕ",
    "matches.schedule.subtitle": "Ближайшие матчи Team Expoo",
    "matches.results.title": "РЕЗУЛЬТАТЫ",
    "matches.results.subtitle": "Последние результаты",
    "matches.empty.schedule": "Пока нет ближайших матчей.",
    "matches.empty.results": "Пока нет результатов.",

    "highlights.hero.title": "ХАЙЛАЙТЫ",
    "highlights.hero.subtitle": "ЛУЧШИЕ МОМЕНТЫ TEAM EXPOO",
    "highlights.header.title": "Лучшие моменты",
    "highlights.header.subtitle": "Клатчи, эйсы и самые важные раунды. Все лучшие моменты Team Expoo в одном месте.",
    "highlights.search.placeholder": "Поиск по хайлайтам",
    "highlights.platform.all": "Все платформы",
    "highlights.empty": "Хайлайты не найдены",

    "media.hero.title": "МЕДИА-КИТ",
    "media.hero.subtitle": "БРЕНД • ПАРТНЕРЫ • КОНТАКТЫ",
    "media.section.assets.title": "Бренд-материалы",
    "media.section.assets.text": "Логотипы и материалы для партнеров/медиа. (Сейчас — базовый набор. Можем расширить до полноценного brandbook.)",
    "media.section.colors.title": "Цвета бренда",
    "media.section.colors.text": "Палитра проекта (можно вынести в отдельный JSON и автоматически обновлять).",
    "media.section.sponsors.title": "Для партнеров",
    "media.section.sponsors.text": "Коротко: что можно купить/сделать с командой. Это “скелет” — дальше можно заполнить цифрами и пакетами.",
    "media.section.contacts.title": "Контакты",
    "media.section.contacts.text": "Для партнерств и медиа-запросов:",
    "media.cta.write": "Написать",
  },
  en: {
    "nav.home": "Home",
    "nav.roster": "Roster",
    "nav.matches": "Matches",
    "nav.news": "News",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "nav.highlights": "Highlights",
    "nav.media": "Media Kit",
    "nav.join": "Join Us",
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
    "roster.search.placeholder": "SEARCH PLAYER",
    "roster.filter.all": "ALL ROLES",
    "roster.empty": "No players found.",

    "news.hero.title": "LATEST NEWS",
    "news.hero.subtitle": "STAY UPDATED",
    "news.noscript": "News require JavaScript. Please enable it in your browser settings.",
    "news.tg.title": "TELEGRAM",
    "news.tg.subtitle": "Latest posts from our Telegram channel",
    /*"news.tg.fallback": "Telegram posts are unavailable right now.",*/
    "news.tg.open": "Open channel",

    "contacts.hero.title": "CONTACTS",
    "contacts.hero.subtitle": "GET IN TOUCH WITH US",
    "contacts.section.send": "SEND US A MESSAGE",

    "join.hero.title": "JOIN TEAM EXPOO",
    "join.hero.subtitle": "PLAYER APPLICATION",
    "join.requirements.title": "WHAT WE EXPECT",
    "join.requirements.1": "16+ years old and stable online schedule",
    "join.requirements.2": "Discipline, communication and team mindset",
    "join.requirements.3": "Relevant CS2 experience and demo links",
    "join.requirements.4": "Ready for practices and official matches",
    "join.roles.title": "OPEN ROLES",
    "join.process": "Usually we review applications within 3-7 days.",
    "join.form.title": "APPLICATION FORM",
    "join.form.subtitle": "Fill all fields. The more specific your info is, the faster we can evaluate your application.",
    "join.form.name": "Name",
    "join.form.age": "Age",
    "join.form.nick": "In-game nickname",
    "join.form.role": "Main role",
    "join.form.country": "Country / Timezone",
    "join.form.faceit": "Faceit level / ELO",
    "join.form.telegram": "Telegram",
    "join.form.steam": "Steam profile URL",
    "join.form.exp": "Team experience",
    "join.form.links": "Demo/highlight links",
    "join.form.about": "Why do you want to join EXPOO?",
    "join.form.consent": "I agree to processing this application for team tryout contact.",
    "join.form.submit": "Send application",
    "join.draft.title": "Application draft",
    "join.draft.subtitle": "Direct sending is not configured yet. Copy this text and send it to our Telegram.",
    "join.draft.copy": "Copy text",
    "join.draft.open": "Open Telegram",
    "join.success.title": "Application sent",
    "join.success.subtitle": "Thank you! We received your application and will contact you in Telegram if you move to the next stage.",
    "join.success.reset": "Send another application",

    "profile.section.bio": "BIOGRAPHY",
    "profile.section.gear": "GAMING GEAR",
    "profile.section.settings": "IN-GAME SETTINGS",
    "profile.section.specs": "PC SPECS",

    "ui.close": "Close",
    "ui.calendar": "Calendar",
    "ui.addToGoogleCalendar": "Add to Google Calendar",
    "ui.stream": "Stream",
    "ui.open": "Open",
    "ui.download": "Download",

    "matches.hero.title": "MATCHES",
    "matches.hero.subtitle": "SCHEDULE & RESULTS",
    "matches.schedule.title": "SCHEDULE",
    "matches.schedule.subtitle": "Upcoming Team Expoo matches",
    "matches.results.title": "RESULTS",
    "matches.results.subtitle": "Latest results",
    "matches.empty.schedule": "No upcoming matches yet.",
    "matches.empty.results": "No results yet.",

    "highlights.hero.title": "HIGHLIGHTS",
    "highlights.hero.subtitle": "BEST MOMENTS OF TEAM EXPOO",
    "highlights.header.title": "Best moments",
    "highlights.header.subtitle": "Clutches, aces and the most important rounds. All best Team Expoo moments in one place.",
    "highlights.search.placeholder": "Search highlights",
    "highlights.platform.all": "All platforms",
    "highlights.empty": "No highlights found.",

    "media.hero.title": "MEDIA KIT",
    "media.hero.subtitle": "BRAND • SPONSORS • CONTACTS",
    "media.section.assets.title": "Brand assets",
    "media.section.assets.text": "Logos and assets for partners/media. (Basic set for now. We can expand into a full brandbook.)",
    "media.section.colors.title": "Brand colors",
    "media.section.colors.text": "Project palette (can be moved to JSON and updated automatically).",
    "media.section.sponsors.title": "For sponsors",
    "media.section.sponsors.text": "Quick overview of what we can do. This is a skeleton—later we can fill it with numbers and packages.",
    "media.section.contacts.title": "Contacts",
    "media.section.contacts.text": "For partnerships and media inquiries:",
    "media.cta.write": "Contact us",
  }
};

function t(key, fallback = '') {
  const lang = document.body?.dataset?.lang || document.documentElement.lang || 'ru';
  return (i18n?.[lang]?.[key]) || (i18n?.ru?.[key]) || fallback || key;
}

function getNavItems() {
  return [
    { href: 'index.html', key: 'nav.home', id: 'index' },
    { href: 'roster.html', key: 'nav.roster', id: 'roster' },
    { href: 'matches.html', key: 'nav.matches', id: 'matches' },
    { href: 'news.html', key: 'nav.news', id: 'news' },
    { href: 'highlights.html', key: 'nav.highlights', id: 'highlights' },
    { href: 'about.html', key: 'nav.about', id: 'about' },
    { href: 'media-kit.html', key: 'nav.media', id: 'media' },
    { href: 'join-us.html', key: 'nav.join', id: 'join' },
    { href: 'contacts.html', key: 'nav.contacts', id: 'contacts' },
  ];
}

function renderLayout() {
  const headerHost = document.getElementById('site-header');
  const footerHost = document.getElementById('site-footer');
  const page = document.body.dataset.page;

  const nav = getNavItems().map(item => {
    const active = page === item.id ? 'active' : '';
    return `<a href="${item.href}" class="${active}" data-i18n="${item.key}"></a>`;
  }).join('');

  if (headerHost) {
    headerHost.innerHTML = `
      <div class="top-progress" aria-hidden="true"><div class="top-progress-bar" id="top-progress-bar"></div></div>
      <header class="navbar">
        <a class="logo-container logo-link" href="index.html" aria-label="Go to homepage">
          <img src="images/expoologo.png" alt="Team Expoo" class="header-logo">
          <span class="logo-text">EXPOO</span>
        </a>

        <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav-links" id="site-nav" aria-label="Main navigation">
          ${nav}
        </nav>

        <button class="lang-switch" type="button" aria-label="Toggle language">RU</button>
      </header>
      <div class="nav-backdrop" data-nav-backdrop aria-hidden="true"></div>
    `;
  }

  if (footerHost) {
    footerHost.innerHTML = `
      <footer class="footer">
        <div class="cursor-glow" aria-hidden="true"></div>
        <div class="sponsors-strip">
          <span class="sponsor">PARTNER SLOT</span>
          <span class="sponsor">PARTNER SLOT</span>
          <span class="sponsor">PARTNER SLOT</span>
          <span class="sponsor">PARTNER SLOT</span>
        </div>

        <div class="footer-content">
          <div class="footer-brand">
            <img src="images/expoologo.png" alt="Expoo Logo" class="footer-logo">
            <p class="footer-slogan">Extremely Powerful Organization</p>
          </div>

          <div class="footer-links">
            <h4>EXPOO</h4>
            <a href="about.html">О команде</a>
            <a href="contacts.html">Контакты</a>
            <a href="matches.html">Матчи</a>
            <a href="media-kit.html">Медиа-кит</a>
            <a href="news.html">Новости</a>
            <a href="roster.html">Состав</a>
          </div>

          <div class="footer-socials">
            <h4>SOCIALS</h4>
            <div class="p-socials">
              <a href="https://t.me/ExpooTeam" class="social-icon-link" title="Telegram" aria-label="Team Expoo Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z"/></svg>
              </a>
              <a href="https://steamcommunity.com/groups/TeamExpoo" class="social-icon-link" title="Steam" aria-label="Team Expoo Steam group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M568 320C568 457 456.8 568 319.6 568C205.8 568 110 491.7 80.6 387.6L175.8 426.9C182.2 459 210.7 483.3 244.7 483.3C283.9 483.3 316.6 450.9 314.9 409.8L399.4 349.6C451.5 350.9 495.2 308.7 495.2 256.1C495.2 204.5 453.2 162.6 401.5 162.6C349.8 162.6 307.8 204.6 307.8 256.1L307.8 257.3L248.6 343C233.1 342.1 217.9 346.4 205.1 355.1L72 300.1C82.2 172.4 189.1 72 319.6 72C456.8 72 568 183 568 320zM227.7 448.3L197.2 435.7C202.8 447.3 212.5 456.5 224.4 461.5C251.3 472.7 282.2 459.9 293.4 433.1C298.8 420.1 298.9 405.8 293.5 392.8C288.1 379.8 278 369.6 265 364.2C252.1 358.8 238.3 359 226.1 363.6L257.6 376.6C277.4 384.8 286.8 407.5 278.5 427.3C270.2 447.2 247.5 456.5 227.7 448.3zM401.5 193.8C435.9 193.8 463.8 221.7 463.8 256.1C463.8 290.5 435.9 318.4 401.5 318.4C367.1 318.4 339.2 290.5 339.2 256.1C339.2 221.7 367.1 193.8 401.5 193.8zM401.6 302.8C427.4 302.8 448.4 281.8 448.4 256C448.4 230.2 427.4 209.2 401.6 209.2C375.8 209.2 354.8 230.2 354.8 256C354.8 281.8 375.8 302.8 401.6 302.8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 TEAM EXPOO. ALL RIGHTS RESERVED.</p>
          <div class="legal-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
        </div>
      </footer>
    `;
  }
}

async function loadJson(path, fallbackValue) {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) return fallbackValue;
    return await response.json();
  } catch {
    return fallbackValue;
  }
}

function normalizePlayersData(input) {
  if (!input) return playersData;
  if (Array.isArray(input)) {
    return input.reduce((acc, p) => {
      if (p?.id) acc[p.id] = p;
      return acc;
    }, {});
  }
  return input;
}

async function initDataLayer() {
  // NOTE: fetch() usually won't work on file:// for local JSON.
  // The fallback values are the current in-script datasets.
  const [news, highlights, matches, players, telegram] = await Promise.all([
    loadJson('data/news.json', newsData),
    loadJson('data/highlights.json', highlightsData),
    loadJson('data/matches.json', matchCenterData),
    loadJson('data/players.json', Object.values(playersData)),
    loadJson('data/telegram.json', telegramData)
  ]);

  newsData = Array.isArray(news) ? news : newsData;
  highlightsData = Array.isArray(highlights) ? highlights : highlightsData;
  matchCenterData = matches && typeof matches === 'object' ? matches : matchCenterData;
  playersData = normalizePlayersData(players);
  telegramData = telegram && typeof telegram === 'object' ? telegram : telegramData;
}

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

  // Update dynamic UI that is not managed by [data-i18n]
  const rosterSearch = document.getElementById('roster-search');
  if (rosterSearch) {
    rosterSearch.placeholder = t('roster.search.placeholder', 'Search player');
  }
  const rosterEmpty = document.getElementById('roster-empty');
  if (rosterEmpty) {
    rosterEmpty.textContent = t('roster.empty', 'No players found.');
  }
  const rosterRole = document.getElementById('roster-role');
  if (rosterRole) {
    const allOpt = rosterRole.querySelector('option[value="all"]');
    if (allOpt) {
      allOpt.textContent = t('roster.filter.all', 'All roles');
    }
  }

  const highlightsPlatform = document.getElementById('highlights-platform');
  if (highlightsPlatform) {
    const allOpt = highlightsPlatform.querySelector('option[value="all"]');
    if (allOpt) {
      allOpt.textContent = t('highlights.platform.all', 'All platforms');
    }
  }

  const highlightsSearch = document.getElementById('highlights-search');
  if (highlightsSearch) {
    highlightsSearch.placeholder = t('highlights.search.placeholder', 'Search highlights');
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

let newsData = [
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
  slug: 'bracket-ltl',
  tag: 'TOURNAMENT',
  title: 'TE сыграют свой первый матч против BMPM',
  date: '15.03.2026',
  image: 'https://media.discordapp.net/attachments/859329714748129342/1482676023253270559/IMG_20260315_144456_710.jpg?ex=69b7d126&is=69b67fa6&hm=1ea91924177358e887d06be55b115c9b21a0c47159f1b6cfb98e6ddd238c2254&=&format=webp',
  excerpt: 'TLT Представили сетку турнира. Первый матч против BMPM уже 20 марта.',
  content: '<p>LTL LOW CUP стартует 20 марта. TE сыграют свой первый матч против BMPM. Организаторы представили сетку турнира.</p>',
  }
];

// HIGHLIGHTS DATA
let highlightsData = [
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
let matchCenterData = {
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

let telegramData = {
  channel: 'ExpooTeam',
  posts: []
};

function getSafeText(value) {
  if (value === null || value === undefined) return '';
  return String(value);
}

function getPlaceholderImage() {
  return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22120%22 viewBox=%220 0 200 120%22%3E%3Crect width=%22200%22 height=%22120%22 fill=%22%23030b14%22/%3E%3Ctext x=%2210%22 y=%2268%22 fill=%22%2388b6ff%22 font-family=%22Segoe UI%22 font-size=%2214%22%3ENo image%3C/text%3E%3C/svg%3E';
}

function sanitizeHtml(html) {
  if (!html) return '';
  const allowedTags = new Set(['P', 'B', 'STRONG', 'I', 'EM', 'UL', 'OL', 'LI', 'BR']);
  const tmp = document.createElement('div');
  tmp.innerHTML = html;

  const walker = document.createTreeWalker(tmp, NodeFilter.SHOW_ELEMENT, null);
  const toRemove = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!allowedTags.has(node.tagName)) {
      toRemove.push(node);
    } else {
      // удаляем потенциально опасные атрибуты
      Array.from(node.attributes).forEach(attr => {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on') || name === 'style') {
          node.removeAttribute(attr.name);
        }
      });
    }
  }

  toRemove.forEach(node => {
    const parent = node.parentNode;
    while (node.firstChild) {
      parent.insertBefore(node.firstChild, node);
    }
    parent.removeChild(node);
  });

  return tmp.innerHTML;
}

function escapeHtml(value) {
  const s = String(value ?? '');
  return s.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#039;';
      default:
        return ch;
    }
  });
}

let lastActiveElement = null;

function updateModalScrollLock() {
  const modals = [
    document.getElementById('news-modal'),
    document.getElementById('highlight-modal'),
    document.getElementById('match-modal')
  ].filter(Boolean);

  const anyOpen = modals.some(m => !m.classList.contains('hidden'));
  document.body.classList.toggle('modal-open', anyOpen);
}

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => {
    const style = window.getComputedStyle(el);
    return style.visibility !== 'hidden' && style.display !== 'none';
  });
}

function trapFocus(modal, event) {
  if (!modal || event.key !== 'Tab') return;
  const focusable = getFocusableElements(modal);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey) {
    if (active === first || !modal.contains(active)) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function renderNews() {
  const featuredContainer = document.getElementById('news-featured');
  const gridContainer = document.getElementById('news-grid');
  const tgGrid = document.getElementById('tg-news-grid');
  const tgFallback = document.getElementById('tg-news-fallback');

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

  // Telegram embed block (optional)
  if (tgGrid) {
    renderTelegramNews(tgGrid, tgFallback);
  }
}

function renderTelegramNews(container, fallbackEl) {
  if (document.body.dataset.page !== 'news') return;
  if (!container) return;

  const channel = String(telegramData?.channel || '').trim();
  const posts = Array.isArray(telegramData?.posts) ? telegramData.posts : [];
  const channelLink = document.querySelector('[data-tg-channel-link]');
  if (channelLink) {
    channelLink.href = channel ? `https://t.me/${channel}` : 'https://t.me/';
  }

  if (!channel || posts.length === 0) {
    if (fallbackEl) fallbackEl.hidden = false;
    return;
  }

  // Clear and render widgets. Telegram script turns <script> into an iframe widget.
  container.innerHTML = '';

  const safePosts = posts
    .map(n => Number(n))
    .filter(n => Number.isFinite(n) && n > 0)
    .slice(0, 6);

  if (!safePosts.length) {
    if (fallbackEl) fallbackEl.hidden = false;
    return;
  }

  const renderCard = (postId) => {
    const card = document.createElement('article');
    card.className = 'tg-post';
    card.setAttribute('data-tg-post-id', String(postId));

    const frame = document.createElement('div');
    frame.className = 'tg-post-frame';

    // Placeholder while the widget transforms into iframe
    const sk = document.createElement('div');
    sk.className = 'tg-skeleton';
    sk.setAttribute('aria-hidden', 'true');
    frame.appendChild(sk);

    const footer = document.createElement('div');
    footer.className = 'tg-post-footer';
    const a = document.createElement('a');
    a.className = 'tg-open';
    a.href = `https://t.me/${channel}/${postId}`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = `${t('ui.open', 'Open')} →`;
    footer.appendChild(a);

    card.appendChild(frame);
    card.appendChild(footer);

    return { card, frame };
  };

  const injectWidget = (frame, postId) => {
    if (!frame || frame.dataset.tgInjected === '1') return;
    frame.dataset.tgInjected = '1';

    // Когда Telegram вставит iframe внутрь frame, убираем skeleton
    const skeleton = frame.querySelector('.tg-skeleton');
    if (skeleton && 'MutationObserver' in window) {
      const mo = new MutationObserver(() => {
        const iframe = frame.querySelector('iframe');
        if (iframe) {
          skeleton.remove();
          mo.disconnect();
        }
      });
      mo.observe(frame, { childList: true, subtree: true });
    }

    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://telegram.org/js/telegram-widget.js?22';
    s.setAttribute('data-telegram-post', `${channel}/${postId}`);
    s.setAttribute('data-width', '100%');
    s.setAttribute('data-userpic', 'false');
    // Dark theme to better match site UI
    s.setAttribute('data-dark', '1');

    frame.appendChild(s);
  };

  // Lazy-init widgets when visible (reduces layout shifts + speeds up initial load)
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          const postId = Number(card.getAttribute('data-tg-post-id'));
          const frame = card.querySelector('.tg-post-frame');
          if (frame && Number.isFinite(postId)) {
            injectWidget(frame, postId);
          }
          io.unobserve(card);
        });
      }, { rootMargin: '200px 0px', threshold: 0.01 })
    : null;

  safePosts.forEach((postId) => {
    const { card, frame } = renderCard(postId);
    container.appendChild(card);
    if (io) {
      io.observe(card);
    } else {
      injectWidget(frame, postId);
    }
  });

  if (fallbackEl) fallbackEl.hidden = true;
}

function renderMatchCenter() {
  if (document.body.dataset.page !== 'index') return;

  const nextMeta = document.getElementById('mc-next-meta');
  const nextVersus = document.getElementById('mc-next-versus');
  const nextTime = document.getElementById('mc-next-time');
  const nextMap = document.getElementById('mc-next-map');
  const resultsList = document.getElementById('mc-results-list');
  const heroTeams = document.getElementById('hero-next-teams');
  const heroTime = document.getElementById('hero-next-time');

  if (!nextMeta || !nextVersus || !nextTime || !nextMap || !resultsList) return;

  nextMeta.textContent = `${matchCenterData.nextMatch.event} • ${matchCenterData.nextMatch.format}`;
  nextTime.textContent = matchCenterData.nextMatch.timeText;
  nextMap.textContent = matchCenterData.nextMatch.mapText;

  if (heroTeams) {
    heroTeams.textContent = `TE vs ${matchCenterData.nextMatch.opponentTag || matchCenterData.nextMatch.opponentName || 'TBD'}`;
  }
  if (heroTime) {
    heroTime.textContent = matchCenterData.nextMatch.timeText || 'TBA';
  }

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

function formatDateTimeLabel(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return String(isoString);
  return d.toLocaleString(document.documentElement.lang || 'ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function toGoogleCalendarDate(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

function getGoogleCalendarLink(match) {
  if (!match?.start) return '#';
  const start = new Date(match.start);
  if (Number.isNaN(start.getTime())) return '#';
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const title = `${match.teamA?.tag || 'TE'} vs ${match.teamB?.tag || match.teamB?.name || 'TBD'} — ${match.event || 'Match'}`;
  const details = `${match.format || ''}\nMaps: ${(match.maps || []).join(', ') || 'TBD'}`;
  const dates = `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates,
    details
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function openMatchModal(match) {
  const modal = document.getElementById('match-modal');
  const body = document.getElementById('match-modal-body');
  if (!modal || !body) return;

  lastActiveElement = document.activeElement;
  const maps = (match.maps || []).map(m => `<span class="match-map">${m}</span>`).join('');
  const gcal = getGoogleCalendarLink(match);
  const stream = match?.links?.stream;

  body.innerHTML = `
    <h2>${match.teamA?.tag || 'TE'} vs ${match.teamB?.tag || match.teamB?.name || 'TBD'}</h2>
    <div class="news-modal-meta">
      <span class="news-tag">${match.event || ''}</span>
      <span class="news-date">${formatDateTimeLabel(match.start)}</span>
      <span class="news-date">${match.format || ''}</span>
    </div>
    <div class="match-maps">${maps}</div>
    <div class="match-actions">
      <a class="btn btn-primary" href="${gcal}" target="_blank" rel="noopener">${t('ui.addToGoogleCalendar')}</a>
      ${stream ? `<a class="btn btn-ghost" href="${stream}" target="_blank" rel="noopener">${t('ui.stream')}</a>` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
  updateModalScrollLock();
  modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const closeButton = modal.querySelector('.news-modal-close');
  if (closeButton) closeButton.focus();
}

function closeMatchModal() {
  const modal = document.getElementById('match-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  const body = document.getElementById('match-modal-body');
  if (body) body.innerHTML = '';
  updateModalScrollLock();
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

function renderMatchesPage() {
  if (document.body.dataset.page !== 'matches') return;

  const scheduleEl = document.getElementById('matches-schedule');
  const resultsEl = document.getElementById('matches-results');
  if (!scheduleEl || !resultsEl) return;

  const schedule = Array.isArray(matchCenterData.schedule) ? matchCenterData.schedule : [];
  const results = Array.isArray(matchCenterData.lastResults) ? matchCenterData.lastResults : [];

  scheduleEl.innerHTML = schedule.length ? schedule.map(m => `
    <article class="match-card match-upcoming" data-match-id="${m.id}">
      <div class="match-top">
        <span class="match-tag">${m.event}</span>
        <span class="match-time">${formatDateTimeLabel(m.start)}</span>
      </div>
      <div class="match-vs">
        <span class="match-team">${m.teamA?.tag || 'TE'}</span>
        <span class="match-vs-sep">VS</span>
        <span class="match-team">${m.teamB?.tag || 'TBD'}</span>
      </div>
      <div class="match-bottom">
        <span class="match-format">${m.format || ''}</span>
        <a class="match-link" href="${getGoogleCalendarLink(m)}" target="_blank" rel="noopener">${t('ui.calendar')} →</a>
      </div>
    </article>
  `).join('') : `<div class="matches-empty">${t('matches.empty.schedule')}</div>`;

  resultsEl.innerHTML = results.length ? results.map(r => `
    <article class="match-card match-result ${r.status}">
      <div class="match-top">
        <span class="match-tag">${r.event}</span>
        <span class="match-score">${r.score}</span>
      </div>
      <div class="match-vs">
        <span class="match-team">TE</span>
        <span class="match-vs-sep">VS</span>
        <span class="match-team">${r.opponent}</span>
      </div>
      <div class="match-bottom">
        <span class="match-status">${r.status === 'win' ? 'WIN' : 'LOSS'}</span>
      </div>
    </article>
  `).join('') : `<div class="matches-empty">${t('matches.empty.results')}</div>`;

  scheduleEl.querySelectorAll('[data-match-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.matchId;
      const match = schedule.find(m => m.id === id);
      if (match) openMatchModal(match);
    });
  });
}

function formatDateLabel(value) {
  if (!value) return '';
  const raw = String(value);
  // Support legacy dd.mm.yyyy format without parsing
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(raw)) return raw;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString(document.documentElement.lang || 'ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

function getFeaturedMarkup(item) {
  return `
    <article class="news-featured">
      <div class="news-img-wrap">
        <img data-news-img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      </div>
      <div class="news-content">
        <span class="news-tag">${item.tag}</span>
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <div class="news-footer">
          <span class="news-date">${formatDateLabel(item.date)}</span>
          <a href="#" class="read-more" data-news-action="open" data-news-slug="${item.slug}">ЧИТАТЬ ПОЛНОСТЬЮ →</a>
        </div>
      </div>
    </article>
  `;
}

function getCardMarkup(item) {
  return `
    <article class="news-card">
      <div class="news-card-img"><img data-news-img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" /></div>
      <div class="news-card-body">
        <span class="news-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="news-footer">
          <span class="news-date">${formatDateLabel(item.date)}</span>
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

  lastActiveElement = document.activeElement;
  const rawHtml = item.contentHtml || item.content || '';
  const safeHtml = sanitizeHtml(rawHtml);
  const imageUrl = getSafeText(item.image);
  const imageAlt = getSafeText(item.title);
  body.innerHTML = `
    <h2>${item.title}</h2>
    <div class="news-modal-meta">
      <span class="news-tag">${item.tag}</span>
      <span class="news-date">${formatDateLabel(item.date)}</span>
    </div>
    <div class="news-modal-img">
      <img data-news-modal-img src="${imageUrl}" alt="${imageAlt}" />
    </div>
    <div class="news-modal-text">${safeHtml}</div>
  `;

  const img = body.querySelector('[data-news-modal-img]');
  if (img) {
    img.addEventListener('error', () => {
      img.src = getPlaceholderImage();
    }, { once: true });
  }

  modal.classList.remove('hidden');
  updateModalScrollLock();
  modal.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const closeButton = modal.querySelector('.news-modal-close');
  if (closeButton) closeButton.focus();
}

function closeNewsModal() {
  const modal = document.getElementById('news-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  const body = document.getElementById('news-modal-body');
  if (body) body.innerHTML = '';
  updateModalScrollLock();
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

function initModalLogic() {
  const newsModal = document.getElementById('news-modal');
  const highlightModal = document.getElementById('highlight-modal');
  const matchModal = document.getElementById('match-modal');

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

  if (matchModal) {
    matchModal.addEventListener('click', event => {
      if (event.target.closest('[data-close]')) {
        closeMatchModal();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeNewsModal();
      closeHighlightModal();
      closeMatchModal();
    }
    if (event.key === 'Tab') {
      if (newsModal && !newsModal.classList.contains('hidden')) trapFocus(newsModal, event);
      if (highlightModal && !highlightModal.classList.contains('hidden')) trapFocus(highlightModal, event);
      if (matchModal && !matchModal.classList.contains('hidden')) trapFocus(matchModal, event);
    }
  });
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;

  const backdrop = document.querySelector('[data-nav-backdrop]');
  const setOpen = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (backdrop) backdrop.classList.toggle('show', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  // close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      setOpen(false);
    });
  });

  backdrop?.addEventListener('click', () => setOpen(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // If user rotates / resizes to desktop width, ensure menu closes
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 901px)').matches) setOpen(false);
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

function initHeroVideo() {
  if (document.body.dataset.page !== 'index') return;

  const video = document.querySelector('.hero-video');
  if (!video) return;

  // If the file is missing, hide the video element (keep existing hero background)
  video.addEventListener('error', () => {
    video.style.display = 'none';
  });

  // Respect reduced motion preference
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const apply = () => {
    if (reduceMotion?.matches) {
      try { video.pause(); } catch {}
      video.removeAttribute('autoplay');
    } else {
      // Try resume (may be blocked in some browsers, but muted should allow it)
      video.muted = true;
      video.play?.().catch(() => {});
    }
  };
  apply();
  reduceMotion?.addEventListener?.('change', apply);
}

function initScrollProgress() {
  const bar = document.getElementById('top-progress-bar');
  if (!bar) return;

  const update = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = (doc.scrollHeight || 0) - doc.clientHeight;
    const p = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
    bar.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`;
  };

  update();
  let raf = null;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = null;
      update();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
}

function initCursorGlow() {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const canHover = window.matchMedia?.('(hover: hover) and (pointer: fine)');
  if (reduceMotion?.matches) return;
  if (!canHover?.matches) return;

  document.body.classList.add('has-cursor-glow');

  const onMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mx', `${x}%`);
    document.body.style.setProperty('--my', `${y}%`);
  };

  window.addEventListener('mousemove', onMove, { passive: true });
}

function showToast(message) {
  if (!message) return;
  let toast = document.getElementById('expo-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'expo-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function normalizeTelegramHandle(input) {
  const raw = String(input || '').trim();
  if (!raw) return '';
  const noSpaces = raw.replace(/\s+/g, '');
  return noSpaces.startsWith('@') ? noSpaces : `@${noSpaces}`;
}

function initContacts() {
  if (document.body.dataset.page !== 'contacts') return;

  const form = document.getElementById('contactForm');
  const draft = document.getElementById('contact-draft');
  const draftText = document.getElementById('contact-draft-text');
  const copyBtn = document.getElementById('contact-copy');

  if (!form || !draft || !draftText || !copyBtn) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = (document.getElementById('name')?.value || '').trim();
    const tg = normalizeTelegramHandle(document.getElementById('email')?.value);
    const subject = (document.getElementById('subject')?.value || '').trim();
    const msg = (document.getElementById('message')?.value || '').trim();

    if (!name || !tg || !subject || !msg) {
      showToast('Заполни все поля, пожалуйста.');
      return;
    }

    const text =
`TEAM EXPOO — New message

Name: ${name}
Telegram: ${tg}
Subject: ${subject}

Message:
${msg}
`;

    draftText.value = text;
    draft.hidden = false;
    draft.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Готово: скопируй текст и отправь нам.');
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draftText.value || '');
      showToast('Скопировано в буфер обмена.');
    } catch {
      draftText.focus();
      draftText.select();
      document.execCommand?.('copy');
      showToast('Скопировано (через выделение).');
    }
  });
}

function validateJoinFormData(data) {
  const required = [
    'name', 'age', 'nickname', 'role', 'country_timezone',
    'faceit', 'telegram', 'steam_url', 'experience', 'links', 'about'
  ];
  return required.every((key) => String(data[key] || '').trim().length > 0);
}

function buildJoinDraftText(data) {
  return (
`TEAM EXPOO - Join Us Application

Name: ${data.name}
Age: ${data.age}
Nickname: ${data.nickname}
Role: ${data.role}
Country/Timezone: ${data.country_timezone}
Faceit: ${data.faceit}
Telegram: ${data.telegram}
Steam: ${data.steam_url}

Team experience:
${data.experience}

Demo/highlight links:
${data.links}

Why EXPOO:
${data.about}
`
  );
}

async function sendJoinApplication(endpoint, data) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.ok;
}

function initJoinUs() {
  if (document.body.dataset.page !== 'join') return;

  const form = document.getElementById('joinForm');
  const draft = document.getElementById('join-draft');
  const draftText = document.getElementById('join-draft-text');
  const copyBtn = document.getElementById('join-copy');
  const consent = document.getElementById('join-consent');
  const successBox = document.getElementById('join-success');
  const resetBtn = document.getElementById('join-reset');
  if (!form || !draft || !draftText || !copyBtn || !consent || !successBox || !resetBtn) return;

  const endpoint = String(form.dataset.endpoint || '').trim();
  if (endpoint) {
    draft.hidden = true;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fd = new FormData(form);
    const botTrap = String(fd.get('_gotcha') || '').trim();
    if (botTrap) return;
    if (!consent.checked) {
      showToast('Подтверди согласие перед отправкой.');
      return;
    }

    const payload = {
      name: String(fd.get('name') || '').trim(),
      age: String(fd.get('age') || '').trim(),
      nickname: String(fd.get('nickname') || '').trim(),
      role: String(fd.get('role') || '').trim(),
      country_timezone: String(fd.get('country_timezone') || '').trim(),
      faceit: String(fd.get('faceit') || '').trim(),
      telegram: normalizeTelegramHandle(fd.get('telegram')),
      steam_url: String(fd.get('steam_url') || '').trim(),
      experience: String(fd.get('experience') || '').trim(),
      links: String(fd.get('links') || '').trim(),
      about: String(fd.get('about') || '').trim()
    };

    if (!validateJoinFormData(payload)) {
      showToast('Заполни все поля формы.');
      return;
    }

    const draftMessage = buildJoinDraftText(payload);
    draftText.value = draftMessage;

    if (endpoint) {
      try {
        const ok = await sendJoinApplication(endpoint, payload);
        if (ok) {
          form.reset();
          draft.hidden = true;
          successBox.hidden = false;
          successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
          showToast('Заявка отправлена. Спасибо!');
          return;
        }
      } catch {
        // Fallback to draft mode below
      }
    }

    draft.hidden = false;
    successBox.hidden = true;
    draft.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Черновик готов: скопируй и отправь в Telegram.');
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draftText.value || '');
      showToast('Текст заявки скопирован.');
    } catch {
      draftText.focus();
      draftText.select();
      document.execCommand?.('copy');
      showToast('Скопировано через выделение.');
    }
  });

  resetBtn.addEventListener('click', () => {
    successBox.hidden = true;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
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

  const items = getFilteredHighlights();
  if (!items.length) {
    grid.innerHTML = `<div class="matches-empty">${t('highlights.empty', 'No highlights found.')}</div>`;
    return;
  }

  grid.innerHTML = items.map(item => {
    const thumb = getHighlightThumb(item);

    return `
      <article class="highlight-card" data-highlight-id="${item.id}">
        <div class="highlight-thumb">
          <img src="${thumb}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
        <div class="highlight-meta">
          <span class="highlight-game">${item.game}</span>
          <h3 class="highlight-title">${item.title}</h3>
          <div class="highlight-info">
            <span>${item.duration}</span>
            <span>${formatDateLabel(item.date)}</span>
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

function getFilteredHighlights() {
  const searchEl = document.getElementById('highlights-search');
  const platformEl = document.getElementById('highlights-platform');

  let items = highlightsData;

  if (platformEl && platformEl.value && platformEl.value !== 'all') {
    items = items.filter(i => i.platform === platformEl.value);
  }

  const q = (searchEl?.value || '').trim().toLowerCase();
  if (q) {
    items = items.filter(i => `${i.title} ${i.game}`.toLowerCase().includes(q));
  }

  return items;
}

function initHighlightsFilters() {
  if (document.body.dataset.page !== 'highlights') return;

  const searchEl = document.getElementById('highlights-search');
  const platformEl = document.getElementById('highlights-platform');
  if (!searchEl || !platformEl) return;

  // Keep UI language consistent when user toggles language.
  searchEl.placeholder = t('highlights.search.placeholder', 'Search highlights');

  const apply = () => renderHighlights();

  let debounceT = null;
  searchEl.addEventListener('input', () => {
    window.clearTimeout(debounceT);
    debounceT = window.setTimeout(apply, 120);
  });

  platformEl.addEventListener('change', apply);

  // Ensure correct initial state.
  apply();
}

  

function openHighlightModal(item) {
  const modal = document.getElementById('highlight-modal');
  const body = document.getElementById('highlight-modal-body');
  if (!modal || !body) return;

  lastActiveElement = document.activeElement;
  const ytId = item.platform === 'youtube' ? getYouTubeId(item.url) : null;
  const isFileProtocol = window.location.protocol === 'file:';

  // IMPORTANT: YouTube embed часто ломается на file:// (origin = "null"), даём подсказку
  if (isFileProtocol && ytId) {
    body.innerHTML = `
      <h2>${item.title}</h2>
      <div class="highlight-modal-meta">
        <span>${item.game}</span>
        <span>${formatDateLabel(item.date)}</span>
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
    updateModalScrollLock();
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
      <span>${formatDateLabel(item.date)}</span>
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
  updateModalScrollLock();
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
  updateModalScrollLock();
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

// =========================
// PLAYER PROFILE LOGIC
// =========================

let playersData = {
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

  wedding: {
    id: 'wedding',
    nick: 'WEDDING',
    realname: 'Валерий "wedding" Афанасьев',
    role: 'SUPPORT',
    age: 12,
    country: 'RUSSIA',
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

function renderRosterPlayerCard(player, index) {
  const num = String(index + 1).padStart(2, '0');
  const href = `player-profile.html?id=${encodeURIComponent(player.id)}`;

  const rating = player.rating ?? '1.18';
  const adr = player.adr ?? '84.5';
  const kast = player.kast ?? '74%';

  return `
    <article class="player-big-card" data-player-id="${escapeHtml(player.id)}">
      <div class="p-card-visual">
        <img src="${escapeHtml(player.photo)}" alt="${escapeHtml(player.nick)}" loading="lazy" decoding="async" />
        <div class="p-card-number">${num}</div>
      </div>
      <div class="p-card-info">
        <div class="p-header">
          <span class="p-role">${escapeHtml(player.role)}</span>
          <h2 class="p-nickname">${escapeHtml(player.nick)}</h2>
          <p class="p-realname">${escapeHtml(player.realname)}</p>
          <a href="${href}" class="player-profile-btn" aria-label="${escapeHtml(player.nick)} profile">PROFILE</a>
        </div>
        <div class="p-bio">
          <p>${escapeHtml(player.bio || '')}</p>
        </div>
        <div class="p-stats">
          <div class="stat-box"><span>RATING</span><strong>${escapeHtml(rating)}</strong></div>
          <div class="stat-box"><span>ADR</span><strong>${escapeHtml(adr)}</strong></div>
          <div class="stat-box"><span>KAST</span><strong>${escapeHtml(kast)}</strong></div>
        </div>
      </div>
    </article>
  `;
}

function initRosterPage() {
  if (document.body.dataset.page !== 'roster') return;

  const listEl = document.getElementById('roster-list');
  const searchEl = document.getElementById('roster-search');
  const roleEl = document.getElementById('roster-role');
  const emptyEl = document.getElementById('roster-empty');
  if (!listEl || !searchEl || !roleEl || !emptyEl) return;

  const players = Array.isArray(playersData) ? playersData : Object.values(playersData || {});
  const uniqueRoles = Array.from(new Set(players.map(p => p.role).filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b)));

  roleEl.innerHTML = `
    <option value="all">${escapeHtml(t('roster.filter.all', 'All roles'))}</option>
    ${uniqueRoles.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join('')}
  `;

  const normalize = (s) => String(s || '').toLowerCase();

  const render = () => {
    const q = normalize(searchEl.value);
    const role = roleEl.value;

    const filtered = players.filter(p => {
      const matchesRole = role === 'all' ? true : p.role === role;
      if (!matchesRole) return false;

      if (!q) return true;
      const hay = normalize(`${p.nick} ${p.realname} ${p.id}`);
      return hay.includes(q);
    });

    if (!filtered.length) {
      listEl.innerHTML = '';
      emptyEl.hidden = false;
      emptyEl.textContent = t('roster.empty', 'No players found.');
      return;
    }

    emptyEl.hidden = true;
    listEl.innerHTML = filtered.map(renderRosterPlayerCard).join('');
  };

  searchEl.addEventListener('input', render);
  roleEl.addEventListener('change', render);

  // initial
  searchEl.placeholder = t('roster.search.placeholder', 'Search player');
  render();
}

window.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  initLang();
  initMenu();
  initReveal();
  initModalLogic();
  initContacts();
  initJoinUs();
  initHeroVideo();
  initScrollProgress();
  initCursorGlow();
  // Data loading happens first; render after
  (async () => {
    await initDataLayer();
  renderMatchCenter();

  if (document.body.dataset.page === 'news') {
    renderNews();
  }

  if (document.body.dataset.page === 'highlights') {
    renderHighlights();
      initHighlightsFilters();
    }

    if (document.body.dataset.page === 'matches') {
      renderMatchesPage();
  }

  initPlayerProfile();
    initRosterPage();
  })();
});
