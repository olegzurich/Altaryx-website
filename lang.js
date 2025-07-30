
document.getElementById('languageSelect').addEventListener('change', function (e) {
  const lang = e.target.value;
  const translations = {
    en: {
      'about-title': 'About ALTARYX',
      'about-text': `ALTARYX is a technological digital asset for the new generation of DeFi users.<br>
      Benefits: Instant transactions, Low fees, Deflationary model (burn), Transparency, Decentralization, Control, Ecosystem flexibility, and Growth readiness.<br><br>
      <strong>Base parameters:</strong><br>
      Network: Arbitrum One<br>
      Symbol: ALTX<br>
      Decimals: 16<br>
      Burn support: Yes<br>
      Max supply: 1,000,000,000 ALTX<br>
      Contract: <span class="contract">0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A</span>`
    },
    ru: {
      'about-title': 'О ALTARYX',
      'about-text': `ALTARYX — это технологичный цифровой актив для нового поколения пользователей DeFi.<br>
      Преимущества: мгновенные транзакции, низкие комиссии, дефляционная модель (сжигание), прозрачность, децентрализация, контроль, гибкость экосистемы и готовность к росту.<br><br>
      <strong>Базовые параметры:</strong><br>
      Сеть: Arbitrum One<br>
      Символ: ALTX<br>
      Десятичных знаков: 16<br>
      Поддержка сжигания: Да<br>
      Максимальная эмиссия: 1,000,000,000 ALTX<br>
      Контракт: <span class="contract">0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A</span>`
    },
    fr: {'about-title': "À propos d'ALTARYX", 'about-text': "ALTARYX est un actif numérique technologique..."},
    de: {'about-title': "Über ALTARYX", 'about-text': "ALTARYX ist ein technologischer digitaler Vermögenswert..."},
    es: {'about-title': "Acerca de ALTARYX", 'about-text': "ALTARYX es un activo digital tecnológico..."},
    ja: {'about-title': "ALTARYXについて", 'about-text': "ALTARYXは新世代のDeFiユーザー向け..."},
    zh: {'about-title': "关于ALTARYX", 'about-text': "ALTARYX是为新一代DeFi用户创建的数字资产..."}
  };

  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
});
