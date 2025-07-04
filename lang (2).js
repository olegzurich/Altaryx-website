const translations = {
  en: {
    title: "Altaryx (ALTX)",
    description: "The future of decentralized power. Built on Arbitrum.",
    benefits_title: "Why choose ALTX?",
    benefit1: "⚡ Lightning-fast transactions on Arbitrum",
    benefit2: "💸 Extremely low fees",
    benefit3: "🔥 Burn mechanism creates scarcity",
    benefit4: "🔐 Fully decentralized",
    benefit5: "🧠 Strong identity and trust",
    roadmap: "Roadmap",
    how_to_buy: "How to Buy ALTX",
    community: "Community",
    faq: "FAQ",
    partners: "Partners"
  },
  fr: {
    title: "Altaryx (ALTX)",
    description: "L'avenir du pouvoir décentralisé. Construit sur Arbitrum.",
    benefits_title: "Pourquoi choisir ALTX?",
    benefit1: "⚡ Transactions ultra-rapides sur Arbitrum",
    benefit2: "💸 Frais très bas",
    benefit3: "🔥 Mécanisme de brûlage créant la rareté",
    benefit4: "🔐 Complètement décentralisé",
    benefit5: "🧠 Identité forte et confiance",
    roadmap: "Feuille de route",
    how_to_buy: "Comment acheter ALTX",
    community: "Communauté",
    faq: "FAQ",
    partners: "Partenaires"
  },
  de: {
    title: "Altaryx (ALTX)",
    description: "Die Zukunft der dezentralen Macht. Auf Arbitrum aufgebaut.",
    benefits_title: "Warum ALTX wählen?",
    benefit1: "⚡ Blitzschnelle Transaktionen mit Arbitrum",
    benefit2: "💸 Sehr niedrige Gebühren",
    benefit3: "🔥 Burn-Mechanismus schafft Knappheit",
    benefit4: "🔐 Vollständig dezentralisiert",
    benefit5: "🧠 Starke Identität und Vertrauen",
    roadmap: "Fahrplan",
    how_to_buy: "So kaufen Sie ALTX",
    community: "Community",
    faq: "FAQ",
    partners: "Partner"
  },
  es: {
    title: "Altaryx (ALTX)",
    description: "El futuro del poder descentralizado. Construido sobre Arbitrum.",
    benefits_title: "¿Por qué elegir ALTX?",
    benefit1: "⚡ Transacciones ultrarrápidas en Arbitrum",
    benefit2: "💸 Tarifas muy bajas",
    benefit3: "🔥 Mecanismo de quema para escasez",
    benefit4: "🔐 Totalmente descentralizado",
    benefit5: "🧠 Identidad fuerte y confianza",
    roadmap: "Hoja de ruta",
    how_to_buy: "Cómo comprar ALTX",
    community: "Comunidad",
    faq: "Preguntas frecuentes",
    partners: "Socios"
  },
  zh: {
    title: "Altaryx (ALTX)",
    description: "去中心化力量的未来，构建于 Arbitrum。",
    benefits_title: "为什么选择 ALTX？",
    benefit1: "⚡ Arbitrum 上的极速交易",
    benefit2: "💸 极低的交易费用",
    benefit3: "🔥 燃烧机制制造稀缺性",
    benefit4: "🔐 完全去中心化",
    benefit5: "🧠 强大身份识别与信任",
    roadmap: "路线图",
    how_to_buy: "如何购买 ALTX",
    community: "社区",
    faq: "常见问题",
    partners: "合作伙伴"
  },
  ja: {
    title: "Altaryx (ALTX)",
    description: "分散型パワーの未来。Arbitrum 上に構築。",
    benefits_title: "なぜ ALTX を選ぶのか？",
    benefit1: "⚡ Arbitrum 上の超高速トランザクション",
    benefit2: "💸 非常に低い手数料",
    benefit3: "🔥 焼却メカニズムによる希少性",
    benefit4: "🔐 完全に分散化",
    benefit5: "🧠 強いブランドと信頼性",
    roadmap: "ロードマップ",
    how_to_buy: "ALTX の購入方法",
    community: "コミュニティ",
    faq: "よくある質問",
    partners: "パートナー"
  },
  ru: {
    title: "Altaryx (ALTX)",
    description: "Будущее децентрализованной силы. Построен на Arbitrum.",
    benefits_title: "Почему выбирают ALTX?",
    benefit1: "⚡ Молниеносные транзакции на Arbitrum",
    benefit2: "💸 Очень низкие комиссии",
    benefit3: "🔥 Механизм сжигания создаёт дефицит",
    benefit4: "🔐 Полностью децентрализован",
    benefit5: "🧠 Сильная айдентика и доверие",
    roadmap: "Дорожная карта",
    how_to_buy: "Как купить ALTX",
    community: "Сообщество",
    faq: "Вопросы и ответы",
    partners: "Партнёры"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
