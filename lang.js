const translations = {
  fr: {
    hero_title: "Altaryx",
    hero_subtitle: "L'avenir de la force et de l'abondance",
    buy_button: "Acheter ALTX sur SushiSwap",
    about_title: "À propos de Altaryx",
    about_text: "Altaryx est un token nouvelle génération sur Arbitrum combinant vitesse, faibles frais et potentiel DeFi.",
    advantages_title: "Avantages",
    adv_1: "Transactions ultra-rapides",
    adv_2: "Frais ultra-bas",
    adv_3: "Décentralisé et sécurisé",
    adv_4: "Mécanisme de burn puissant"
  },
  de: {
    hero_title: "Altaryx",
    hero_subtitle: "Die Zukunft von Stärke und Wohlstand",
    buy_button: "ALTX auf SushiSwap kaufen",
    about_title: "Über Altaryx",
    about_text: "Altaryx ist ein Next-Gen-Token auf Arbitrum mit hoher Geschwindigkeit, niedrigen Gebühren und DeFi-Potenzial.",
    advantages_title: "Vorteile",
    adv_1: "Blitzschnelle Transaktionen",
    adv_2: "Extrem niedrige Gebühren",
    adv_3: "Dezentral und sicher",
    adv_4: "Starke Burn-Mechanik"
  },
  es: {
    hero_title: "Altaryx",
    hero_subtitle: "El Futuro de la Fuerza y la Abundancia",
    buy_button: "Comprar ALTX en SushiSwap",
    about_title: "Sobre Altaryx",
    about_text: "Altaryx es un token de próxima generación en Arbitrum con gran velocidad, bajas tarifas y potente DeFi.",
    advantages_title: "Ventajas",
    adv_1: "Transacciones ultrarrápidas",
    adv_2: "Comisiones muy bajas",
    adv_3: "Descentralizado y seguro",
    adv_4: "Mecánica de quema fuerte"
  },
  ja: {
    hero_title: "Altaryx",
    hero_subtitle: "強さと豊かさの未来",
    buy_button: "SushiSwapでALTXを購入",
    about_title: "Altaryxについて",
    about_text: "AltaryxはArbitrum上の次世代トークンで、超高速、低手数料、強力なDeFiの可能性を備えています。",
    advantages_title: "利点",
    adv_1: "超高速取引",
    adv_2: "非常に低い手数料",
    adv_3: "分散化とセキュリティ",
    adv_4: "強力なバーン機構"
  },
  zh: {
    hero_title: "Altaryx",
    hero_subtitle: "力量与丰饶的未来",
    buy_button: "在SushiSwap购买ALTX",
    about_title: "关于Altaryx",
    about_text: "Altaryx是基于Arbitrum的新一代代币，结合了高速、低费用和强大的DeFi潜力。",
    advantages_title: "优势",
    adv_1: "闪电般的交易速度",
    adv_2: "超低费用",
    adv_3: "去中心化且安全",
    adv_4: "强大的燃烧机制"
  },
  ru: {
    hero_title: "Альтарекс",
    hero_subtitle: "Будущее силы и изобилия",
    buy_button: "Купить ALTX на SushiSwap",
    about_title: "О проекте Altaryx",
    about_text: "Altaryx — это токен нового поколения в сети Arbitrum, объединяющий высокую скорость, низкие комиссии и мощный потенциал DeFi.",
    advantages_title: "Преимущества",
    adv_1: "Молниеносные транзакции",
    adv_2: "Сверхнизкие комиссии",
    adv_3: "Децентрализация и безопасность",
    adv_4: "Мощная механика сжигания"
  }
};

const selector = document.getElementById("language-selector");

selector.addEventListener("change", (e) => {
  const lang = e.target.value;
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else {
      el.textContent = translations["en"]?.[key] || el.textContent;
    }
  });
});
