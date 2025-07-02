
document.getElementById('language-select').addEventListener('change', function () {
    const lang = this.value;
    const desc = {
        en: "The future of decentralized power. Built on Arbitrum.",
        es: "El futuro del poder descentralizado. Construido en Arbitrum.",
        de: "Die Zukunft der dezentralen Macht. Entwickelt auf Arbitrum.",
        fr: "Le futur du pouvoir décentralisé. Construit sur Arbitrum.",
        zh: "去中心化力量的未来。构建于 Arbitrum。",
        ja: "分散型パワーの未来。Arbitrum 上に構築。"
    };
    document.getElementById('token-description').textContent = desc[lang] || desc['en'];
});
