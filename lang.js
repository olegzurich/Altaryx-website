const translations = {
  fr: {
    hero_title: "Altaryx",
    hero_subtitle: "L'avenir de la force et de l'abondance",
    buy_button: "Acheter ALTX sur SushiSwap",
    about_title: "À propos d'Altaryx",
    about_text: "Altaryx est un jeton de nouvelle génération sur Arbitrum combinant vitesse, faibles frais et potentiel DeFi.",
    advantages_title: "Avantages",
    adv1: "Transactions ultra-rapides",
    adv2: "Frais ultra-faibles",
    adv3: "Décentralisé et sécurisé",
    adv4: "Mécanismes de burn puissants"
  },
  de: {
    hero_title: "Altaryx",
    hero_subtitle: "Die Zukunft von Stärke und Fülle",
    buy_button: "ALTX auf SushiSwap kaufen",
    about_title: "Über Altaryx",
    about_text: "Altaryx ist ein Next-Gen-Token auf Arbitrum mit hoher Geschwindigkeit, niedrigen Gebühren und starkem DeFi-Potenzial.",
    advantages_title: "Vorteile",
    adv1: "Blitzschnelle Transaktionen",
    adv2: "Extrem niedrige Gebühren",
    adv3: "Dezentral und sicher",
    adv4: "Starke Burn-Mechanismen"
  },
  es: {
    hero_title: "Altaryx",
    hero_subtitle: "El futuro de la fuerza y la abundancia",
    buy_button: "Comprar ALTX en SushiSwap",
    about_title: "Sobre Altaryx",
    about_text: "Altaryx es un token de nueva generación en Arbitrum con velocidad, bajas comisiones y fuerte potencial DeFi.",
    advantages_title: "Ventajas",
    adv1: "Transacciones ultrarrápidas",
    adv2: "Comisiones muy bajas",
    adv3: "Descentralizado y seguro",
    adv4: "Mecanismo de quema potente"
  },
  ja: {
    hero_title: "アルタリクス",
    hero_subtitle: "力と豊かさの未来",
    buy_button: "SushiSwapでALTXを購入",
    about_title: "Altaryxについて",
    about_text: "Altaryxは、高速・低手数料・強力なDeFiを備えたArbitrumの次世代トークンです。",
    advantages_title: "利点",
    adv1: "超高速トランザクション",
    adv2: "非常に低い手数料",
    adv3: "分散型かつ安全",
    adv4: "強力なバーン機構"
  },
  zh: {
    hero_title: "阿尔塔雷克斯",
    hero_subtitle: "力量与丰饶的未来",
    buy_button: "在SushiSwap上购买ALTX",
    about_title: "关于Altaryx",
    about_text: "Altaryx是基于Arbitrum的下一代代币，结合极速、低费用和强大的DeFi潜力。",
    advantages_title: "优势",
    adv1: "极速交易",
    adv2: "超低费用",
    adv3: "去中心化且安全",
    adv4: "强大的销毁机制"
  },
  ru: {
    hero_title: "Альтарекс",
    hero_subtitle: "Будущее силы и изобилия",
    buy_button: "Купить ALTX на SushiSwap",
    about_title: "О Altaryx",
    about_text: "Altaryx — это токен нового поколения в сети Arbitrum с высокой скоростью, низкими комиссиями и мощным DeFi-потенциалом.",
    advantages_title: "Преимущества",
    adv1: "Молниеносные транзакции",
    adv2: "Сверхнизкие комиссии",
    adv3: "Децентрализованный и безопасный",
    adv4: "Эффективный механизм сжигания"
  }
};

document.getElementById("language-selector").addEventListener("change", function () {
  const selectedLang = this.value;
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[selectedLang] && translations[selectedLang][key]) {
      el.textContent = translations[selectedLang][key];
    }
  });
});
