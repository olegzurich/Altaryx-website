
document.getElementById('languageSelect').addEventListener('change', e => {
  const l = e.target.value;
  const t = {
    en: {'about-title': 'About ALTARYX', 'about-text': 'ALTARYX is a technological digital asset for the new generation of DeFi users.<br>Benefits: Instant transactions, Low fees, Deflationary model (burn), Transparency, Decentralization, Control, Ecosystem flexibility, and Growth readiness.<br><br><strong>Base parameters:</strong><br>Network: Arbitrum One<br>Symbol: ALTX<br>Decimals: 16<br>Burn support: Yes<br>Max supply: 1,000,000,000 ALTX<br>Contract: <span class="contract">0x248E5dc032867EEaeaACaCe28...
    ru: {'about-title': 'О ALTARYX', 'about-text': 'ALTARYX — это технологичный цифровой актив для нового поколения пользователей DeFi.<br>Преимущества: мгновенные транзакции, низкие комиссии, модель сжигания, прозрачность, децентрализация, контроль, гибкость, рост.<br><br><strong>Параметры:</strong><br>Сеть: Arbitrum One<br>Символ: ALTX<br>Десятичные: 16<br>Сжигание: Да<br>Макс. предложение: 1,000,000,000 ALTX<br>Контракт: <span class="contract">0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A</span>'}
  };
  document.querySelectorAll('[data-lang]').forEach(el => {
    const k = el.getAttribute('data-lang');
    if (t[l] && t[l][k]) el.innerHTML = t[l][k];
  });
});
