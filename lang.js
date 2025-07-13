const translations = {
  en: {
    hero_title: "Altaryx",
    hero_subtitle: "The Future of Strength and Abundance",
    buy_link: "Buy ALTX on SushiSwap",
    about_title: "About Altaryx",
    about_text: "Altaryx is a next-generation token on Arbitrum combining blazing speed, low fees, and powerful DeFi potential.",
    advantages_title: "Advantages",
    adv_1: "Lightning-fast transactions",
    adv_2: "Ultra-low fees",
    adv_3: "Decentralized and secure",
    adv_4: "Strong burning mechanics"
  },
  fr: {
    hero_title: "Altaryx",
    hero_subtitle: "L'avenir de la force et de l'abondance",
    buy_link: "Acheter ALTX sur SushiSwap",
    about_title: "À propos d'Altaryx",
    about_text: "Altaryx est un token de nouvelle génération sur Arbitrum combinant vitesse fulgurante, frais faibles et potentiel DeFi puissant.",
    advantages_title: "Avantages",
    adv_1: "Transactions ultra-rapides",
    adv_2: "Frais ultra-bas",
    adv_3: "Décentralisé et sécurisé",
    adv_4: "Mécanisme de combustion puissant"
  },
  de: {
    hero_title: "Altaryx",
    hero_subtitle: "Die Zukunft von Stärke und Überfluss",
    buy_link: "ALTX auf SushiSwap kaufen",
    about_title: "Über Altaryx",
    about_text: "Altaryx ist ein Next-Gen-Token auf Arbitrum mit blitzschnellen Transaktionen, niedrigen Gebühren und starkem DeFi-Potenzial.",
    advantages_title: "Vorteile",
    adv_1: "Blitzschnelle Transaktionen",
    adv_2: "Extrem niedrige Gebühren",
    adv_3: "Dezentralisiert und sicher",
    adv_4: "Starkes Verbrennungsmechanismus"
  },
  es: {
    hero_title: "Altaryx",
    hero_subtitle: "El futuro de la fuerza y la abundancia",
    buy_link: "Comprar ALTX en SushiSwap",
    about_title: "Sobre Altaryx",
    about_text: "Altaryx es un token de nueva generación en Arbitrum con velocidad extrema, tarifas bajas y gran potencial DeFi.",
    advantages_title: "Ventajas",
    adv_1: "Transacciones ultra rápidas",
    adv_2: "Tarifas muy bajas",
    adv_3: "Descentralizado y seguro",
    adv_4: "Fuerte mecanismo de quema"
  },
  ja: {
    hero_title: "Altaryx",
    hero_subtitle: "力と豊かさの未来",
    buy_link: "SushiSwapでALTXを購入",
    about_title: "Altaryxについて",
    about_text: "Altaryxは、Arbitrum上の次世代トークンで、超高速、低手数料、強力なDeFi機能を備えています。",
    advantages_title: "利点",
    adv_1: "超高速トランザクション",
    adv_2: "超低手数料",
    adv_3: "分散型で安全",
    adv_4: "強力なバーンメカニズム"
  },
  zh: {
    hero_title: "Altaryx",
    hero_subtitle: "力量与丰饶的未来",
    buy_link: "在SushiSwap购买ALTX",
    about_title: "关于Altaryx",
    about_text: "Altaryx是Arbitrum上的新一代代币，具有极快速度、低手续费和强大的DeFi潜力。",
    advantages_title: "优势",
    adv_1: "极速交易",
    adv_2: "超低费用",
    adv_3: "去中心化且安全",
    adv_4: "强大的销毁机制"
  },
  ru: {
    hero_title: "Альтарекс",
    hero_subtitle: "Будущее силы и изобилия",
    buy_link: "Купить ALTX на SushiSwap",
    about_title: "О Altaryx",
    about_text: "Altaryx — это токен нового поколения в сети Arbitrum с высокой скоростью, низкими комиссиями и мощным DeFi потенциалом.",
    advantages_title: "Преимущества",
    adv_1: "Молниеносные транзакции",
    adv_2: "Минимальные комиссии",
    adv_3: "Децентрализованный и безопасный",
    adv_4: "Мощный механизм сжигания"
  }
};

document.getElementById("language-selector").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
