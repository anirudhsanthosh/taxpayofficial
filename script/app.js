function navigation() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    menu.classList.toggle("toggle");
  });
}

function init() {
  navigation();
}

window.onload = () => {
  init();
};
