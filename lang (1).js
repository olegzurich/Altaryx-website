
const translations = {
  ru: {
    title: "Altaryx (ALTX) — Сила Децентрализации",
    description: "Быстро, безопасно и доступно. Altaryx приносит элитную децентрализацию в Arbitrum.",
    benefits_title: "Почему выбирают ALTX?",
    benefit1: "⚡ Молниеносные транзакции на базе Arbitrum",
    benefit2: "💸 Минимальные комиссии, доступные каждому",
    benefit3: "🔥 Механизм сжигания обеспечивает дефицит",
    benefit4: "🔐 Полная децентрализация, без центра",
    benefit5: "🧠 Сильная айдентика: элитность, будущее, доверие",
    roadmap: "Дорожная карта",
    how_to_buy: "Как купить ALTX",
    community: "Сообщество",
    faq: "Частые вопросы",
    partners: "Партнёры"
  },
  fr: {
    title: "Altaryx (ALTX) — La Puissance Décentralisée",
    description: "Rapide, sécurisé et abordable. Altaryx apporte une performance décentralisée d'élite à Arbitrum.",
    benefits_title: "Pourquoi choisir ALTX ?",
    benefit1: "⚡ Transactions ultra-rapides grâce à Arbitrum",
    benefit2: "💸 Frais minimes pour tous",
    benefit3: "🔥 Mécanisme de burn pour une rareté garantie",
    benefit4: "🔐 Complètement décentralisé",
    benefit5: "🧠 Identité forte : élite, futuriste et fiable",
    roadmap: "Feuille de route",
    how_to_buy: "Comment acheter ALTX",
    community: "Communauté",
    faq: "FAQ",
    partners: "Partenaires"
  },
  de: {
    title: "Altaryx (ALTX) — Die Kraft der Dezentralisierung",
    description: "Schnell, sicher und kostengünstig. Altaryx bringt Eliteniveau in das Arbitrum-Netzwerk.",
    benefits_title: "Warum ALTX wählen?",
    benefit1: "⚡ Superschnelle Transaktionen über Arbitrum",
    benefit2: "💸 Niedrigste Gebühren für alle",
    benefit3: "🔥 Burn-Mechanismus garantiert Knappheit",
    benefit4: "🔐 Vollständig dezentral",
    benefit5: "🧠 Starke Identität: elitär, futuristisch, vertrauenswürdig",
    roadmap: "Fahrplan",
    how_to_buy: "Wie kauft man ALTX",
    community: "Community",
    faq: "Häufige Fragen",
    partners: "Partner"
  },
  es: {
    title: "Altaryx (ALTX) — El Poder de la Descentralización",
    description: "Rápido, seguro y económico. Altaryx ofrece rendimiento descentralizado de nivel élite en Arbitrum.",
    benefits_title: "¿Por qué elegir ALTX?",
    benefit1: "⚡ Transacciones ultra rápidas impulsadas por Arbitrum",
    benefit2: "💸 Tarifas mínimas accesibles para todos",
    benefit3: "🔥 Mecanismo de quema que garantiza escasez",
    benefit4: "🔐 Totalmente descentralizado",
    benefit5: "🧠 Identidad sólida: élite, futurista y confiable",
    roadmap: "Hoja de ruta",
    how_to_buy: "Cómo comprar ALTX",
    community: "Comunidad",
    faq: "Preguntas frecuentes",
    partners: "Socios"
  },
  ja: {
    title: "Altaryx (ALTX) — 分散型の力",
    description: "高速、安全、そして手頃な価格。AltaryxはArbitrumにエリート級の性能を提供します。",
    benefits_title: "ALTXを選ぶ理由",
    benefit1: "⚡ Arbitrumによる超高速トランザクション",
    benefit2: "💸 誰でも使える低ガス料金",
    benefit3: "🔥 希少性を保証するバーンメカニズム",
    benefit4: "🔐 完全に分散型",
    benefit5: "🧠 エリートで未来的な信頼性のあるアイデンティティ",
    roadmap: "ロードマップ",
    how_to_buy: "ALTXの購入方法",
    community: "コミュニティ",
    faq: "よくある質問",
    partners: "パートナー"
  },
  zh: {
    title: "Altaryx (ALTX) — 去中心化的力量",
    description: "快速、安全、低成本。Altaryx 为 Arbitrum 带来精英级别的去中心化体验。",
    benefits_title: "为什么选择 ALTX？",
    benefit1: "⚡ 基于 Arbitrum 的极速交易",
    benefit2: "💸 超低费用，人人可用",
    benefit3: "🔥 销毁机制确保稀缺性",
    benefit4: "🔐 完全去中心化",
    benefit5: "🧠 强大身份：精英、未来感、值得信赖",
    roadmap: "路线图",
    how_to_buy: "如何购买 ALTX",
    community: "社区",
    faq: "常见问题",
    partners: "合作伙伴"
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
