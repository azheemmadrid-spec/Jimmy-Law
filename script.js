const buttons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-en][data-id]");

function setLanguage(lang){
  translatable.forEach(el => {
    const value = el.getAttribute(`data-${lang}`);
    if(value !== null) el.innerHTML = value;
  });
  buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang === "id" ? "id" : "en";
  localStorage.setItem("jimmyLang", lang);
}

buttons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

setLanguage(localStorage.getItem("jimmyLang") || "en");
