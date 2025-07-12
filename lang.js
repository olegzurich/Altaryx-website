const translations = {
  en: {
    hero_title: "Altaryx",
    hero_subtitle: "The Future of Strength and Abundance",
    about_title: "About Altaryx",
    about_text: "Altaryx is a next-generation token on Arbitrum combining blazing speed, low fees, and powerful DeFi potential.",
    advantages_title: "Advantages",
    adv1: "Lightning-fast transactions",
    adv2: "Ultra-low fees",
    adv3: "Decentralized and secure",
    adv4: "Strong burning mechanics"
  },
  ru: {
    hero_title: "Альтарикс",
    hero_subtitle: "Будущее силы и изобилия",
    about_title: "О проекте Altaryx",
    about_text: "Altaryx — это токен нового поколения на Arbitrum с молниеносной скоростью, низкими комиссиями и мощным DeFi-потенциалом.",
    advantages_title: "Преимущества",
    adv1: "Молниеносные транзакции",
    adv2: "Сверхнизкие комиссии",
    adv3: "Децентрализация и безопасность",
    adv4: "Механика сжигания токенов"
  }
};

const selector = document.getElementById("language-selector");
selector.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });
});
