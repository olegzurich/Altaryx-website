const translations = {
  ru: {
    "about-title": "О ALTARYX",
    "about-text": "ALTARYX — это не просто токен. Это технологичный цифровой актив, созданный для нового поколения пользователей DeFi.\nПреимущества Altaryx (ALTX): мгновенные транзакции, низкие комиссии, дефляционная модель (механизм сжигания),\nпрозрачность и децентрализация, максимальный контроль, гибкая экосистема, готовность к росту.\n\nБазовые параметры:\nСеть: Arbitrum One\nСимвол: ALTX\nДесятичные: 16\nПоддержка сжигания: Да\nМакс. предложение: 1,000,000,000 ALTX\nКонтракт: 0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A"
  },
  en: {
    "about-title": "About ALTARYX",
    "about-text": "ALTARYX is more than just a token. It is a technological digital asset created for the new generation of DeFi users.\nAdvantages of Altaryx (ALTX): Instant transactions, Low fees, Deflationary model (burn mechanism),\nTransparency and decentralization, Maximum control, Flexible ecosystem, Readiness for growth.\n\nBase parameters:\nNetwork: Arbitrum One\nSymbol: ALTX\nDecimals: 16\nBurn support: Yes\nMax supply: 1,000,000,000 ALTX\nContract: 0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A"
  }
};

document.getElementById('languageSelect').addEventListener('change', (event) => {
  const lang = event.target.value;
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
});