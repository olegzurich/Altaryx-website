
const translations = {
  en: {
    description: "Altaryx is a high-speed, low-fee token on Arbitrum with decentralized governance and a built-in burn mechanism.",
  },
  ru: {
    description: "Altaryx — это токен с высокой скоростью транзакций и низкими комиссиями на сети Arbitrum, с децентрализованным управлением и механизмом сжигания.",
  },
  fr: {
    description: "Altaryx est un token rapide et peu coûteux sur Arbitrum avec une gouvernance décentralisée et un mécanisme de brûlage intégré.",
  },
  de: {
    description: "Altaryx ist ein schneller, gebührenarmer Token auf Arbitrum mit dezentraler Verwaltung und integriertem Burn-Mechanismus.",
  },
  es: {
    description: "Altaryx es un token rápido y de bajas tarifas en Arbitrum con gobernanza descentralizada y mecanismo de quema.",
  },
  zh: {
    description: "Altaryx 是一个在 Arbitrum 上的高速、低费用代币，具有去中心化治理和内置销毁机制。",
  },
  ja: {
    description: "Altaryx は Arbitrum 上の高速かつ低手数料のトークンで、分散型ガバナンスとバーン機構を備えています。",
  },
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key] || key;
  });
}

window.onload = () => {
  setLanguage("en");
};
