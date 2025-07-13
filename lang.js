const translations = {
  en: {
    hero_title: "Altaryx",
    hero_subtitle: "The Future of Strength and Abundance",
    buy_button: "Buy ALTX on SushiSwap",
    about_title: "About Altaryx",
    about_text: "Altaryx is a next-generation token on Arbitrum combining blazing speed, low fees, and powerful DeFi potential.",
    advantages_title: "Advantages",
    adv1: "Lightning-fast transactions",
    adv2: "Ultra-low fees",
    adv3: "Decentralized and secure",
    adv4: "Strong burning mechanics"
  },
  ru: {
    hero_title: "Альтарекс",
    hero_subtitle: "Будущее силы и изобилия",
    buy_button: "Купить ALTX на SushiSwap",
    about_title: "Об Альтарекс",
    about_text: "Altaryx — это токен нового поколения в сети Arbitrum с молниеносной скоростью, низкими комиссиями и мощным потенциалом DeFi.",
    advantages_title: "Преимущества",
    adv1: "Молниеносные транзакции",
    adv2: "Сверхнизкие комиссии",
    adv3: "Децентрализация и безопасность",
    adv4: "Эффективное сжигание токенов"
  }
};

const selector = document.getElementById("language-selector");
const translatableElements = document.querySelectorAll("[data-translate]");

function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem("lang", lang);
  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  selector.value = lang;
}

selector.addEventListener("change", () => {
  setLanguage(selector.value);
});

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);