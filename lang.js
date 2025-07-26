document.getElementById('languageSelect').addEventListener('change', e => {
  const l = e.target.value;
  const t = {
    en: {'about-title': 'About ALTARYX', 'about-text': 'ALTARYX is a technological digital asset for the new generation of DeFi users.\nBenefits: Instant transactions, Low fees, Deflationary model (burn), Transparency, Decentralization, Control, Ecosystem flexibility, and Growth readiness.\n\nBase parameters:\nNetwork: Arbitrum One\nSymbol: ALTX\nDecimals: 16\nBurn support: Yes\nMax supply: 1,000,000,000 ALTX\nContract: 0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A'},
    ru: {'about-title': 'О ALTARYX', 'about-text': 'ALTARYX — это технологичный цифровой актив для нового поколения пользователей DeFi.\nПреимущества: мгновенные транзакции, низкие комиссии, модель сжигания, прозрачность, децентрализация, контроль, гибкость, рост.\n\nПараметры:\nСеть: Arbitrum One\nСимвол: ALTX\nДесятичные: 16\nСжигание: Да\nМакс. предложение: 1,000,000,000 ALTX\nКонтракт: 0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A'}
  };
  document.querySelectorAll('[data-lang]').forEach(el => {
    const k = el.getAttribute('data-lang');
    if (t[l] && t[l][k]) el.innerHTML = t[l][k];
  });
});