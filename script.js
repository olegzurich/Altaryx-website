
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-select");
  const savedLang = localStorage.getItem("selectedLang") || "en";
  selector.value = savedLang;
  setLanguage(savedLang);

  selector.addEventListener("change", () => {
    const selectedLang = selector.value;
    localStorage.setItem("selectedLang", selectedLang);
    setLanguage(selectedLang);
  });
});
