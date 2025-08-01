(function () {
  const select = document.getElementById('languageSelect');
  const T = {
    en: {
      'about-title': 'About ALTARYX',
      'about-text': `ALTARYX is a technological digital asset for the new generation of DeFi users.<br>
      Benefits: Instant transactions, Low fees, Deflationary model (burn), Transparency, Decentralization,
      Control, Ecosystem flexibility, and Growth readiness.<br><br>
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
      'about-text': `ALTARYX — технологичный цифровой актив для нового поколения пользователей DeFi.<br>
      Преимущества: мгновенные транзакции, низкие комиссии, дефляционная модель (сжигание), прозрачность,
      децентрализация, контроль, гибкая экосистема и готовность к росту.<br><br>
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
    ja: {'about-title': "ALTARYXについて", 'about-text': "ALTARYXは新世代のDeFiユーザー向けの技術的デジタル資産です..."},
    zh: {'about-title': "关于ALTARYX", 'about-text': "ALTARYX是面向新一代DeFi用户的技术型数字资产..."}
  };

  function apply(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (T[lang] && T[lang][key]) el.innerHTML = T[lang][key];
    });
    window.scrollTo({ top: 0 });
  }

  document.addEventListener('DOMContentLoaded', () => apply(select.value || 'en'));
  select.addEventListener('change', e => apply(e.target.value));
})();