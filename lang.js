
document.getElementById('languageSelect').addEventListener('change', e => {
  const l = e.target.value;
  const t = {
    en: {'about-title': 'About ALTARYX', 'about-text': 'ALTARYX is a technological digital asset for the new generation of DeFi users...'},
    ru: {'about-title': 'О ALTARYX', 'about-text': 'ALTARYX — технологичный цифровой актив для нового поколения пользователей DeFi...'},
    fr: {'about-title': "À propos d'ALTARYX", 'about-text': "ALTARYX est un actif numérique technologique..."},
    de: {'about-title': "Über ALTARYX", 'about-text': "ALTARYX ist ein technologischer digitaler Vermögenswert..."},
    es: {'about-title': "Acerca de ALTARYX", 'about-text': "ALTARYX es un activo digital tecnológico..."},
    ja: {'about-title': "ALTARYXについて", 'about-text': "ALTARYXは新世代のDeFiユーザー向け..."},
    zh: {'about-title': "关于ALTARYX", 'about-text': "ALTARYX是为新一代DeFi用户创建的数字资产..."}
  };
  document.querySelectorAll('[data-lang]').forEach(el => {
    const k = el.getAttribute('data-lang');
    if (t[l] && t[l][k]) el.innerHTML = t[l][k];
  });
});
