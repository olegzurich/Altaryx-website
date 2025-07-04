document.getElementById("language-select").addEventListener("change", function () {
    const selectedLang = this.value;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[selectedLang] && translations[selectedLang][key]) {
            el.textContent = translations[selectedLang][key];
        }
    });
});
