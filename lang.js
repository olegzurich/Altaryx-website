
const translations = {
    en: {
        hero_title: "Altaryx",
        hero_description: "Altaryx is a high-speed, low-fee token on Arbitrum with decentralized governance and a built-in burn mechanism.",
        buy_altx: "Buy ALTX on SushiSwap",
        contract_label: "Contract:",
        swap_instruction: "You can swap USDC to ALTX using the SushiSwap V2 pool below.",
        join_us: "Join us on"
    },
    ru: {
        hero_title: "Altaryx",
        hero_description: "Altaryx — это токен с высокой скоростью и низкими комиссиями в сети Arbitrum с децентрализованным управлением и встроенным механизмом сжигания.",
        buy_altx: "Купить ALTX на SushiSwap",
        contract_label: "Контракт:",
        swap_instruction: "Вы можете обменять USDC на ALTX через пул SushiSwap V2 ниже.",
        join_us: "Присоединяйтесь к нам в"
    },
    // Other languages can be added similarly...
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("hero_title").textContent = t.hero_title;
    document.getElementById("hero_description").textContent = t.hero_description;
    document.getElementById("buy_altx").textContent = t.buy_altx;
    document.getElementById("contract_label").textContent = t.contract_label;
    document.getElementById("swap_instruction").textContent = t.swap_instruction;
    document.getElementById("join_us").textContent = t.join_us;
}
