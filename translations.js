
const translations = {
    en: {
        title: "About ALTARYX",
        content: "ALTARYX is more than just a token. It is a technological digital asset created for the new generation of DeFi users. Advantages of Altaryx (ALTX): Instant transactions, Low fees, Deflationary model (burn mechanism), Transparency and decentralization, Maximum control, Flexible ecosystem, Readiness for growth. Base parameters: Network: Arbitrum One, Symbol: ALTX, Decimals: 16, Burn support, Maximum supply: 1,000,000,000 ALTX. Contract: 0x248E5dc032867EEaeaACaCe284Ce988c144F3c5A."
    },
    de: {
        title: "Über ALTARYX",
        content: "ALTARYX ist mehr als nur ein Token. Es ist ein technologischer digitaler Vermögenswert, der für die neue Generation von DeFi-Nutzern entwickelt wurde..."
    },
    es: {
        title: "Acerca de ALTARYX",
        content: "ALTARYX no es solo un token. Es un activo digital tecnológico creado para la nueva generación de usuarios de DeFi..."
    },
    fr: {
        title: "À propos d'ALTARYX",
        content: "ALTARYX n'est pas seulement un token. C'est un actif numérique technologique créé pour la nouvelle génération d'utilisateurs de DeFi..."
    },
    ja: {
        title: "ALTARYXについて",
        content: "ALTARYXは単なるトークンではありません。DeFiの新しい世代のユーザー向けに作られた技術的なデジタル資産です..."
    },
    zh: {
        title: "关于ALTARYX",
        content: "ALTARYX不仅仅是一个代币。它是为DeFi新世代用户创建的技术性数字资产..."
    },
    ru: {
        title: "О ALTARYX",
        content: "ALTARYX — это не просто токен. Это технологичный цифровой актив, созданный для нового поколения пользователей DeFi..."
    }
};

function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.getElementById("content").innerHTML = `<h2>${translations[lang].title}</h2><p>${translations[lang].content}</p>`;
}

window.onload = changeLanguage;
