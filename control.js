const logIn = document.querySelector(".login");
const register = document.querySelector(".register");
const loginHere = document.querySelector(".term2 a");

loginHere.addEventListener("click", () => {
  logIn.style.display = "block";
  register.style.display = "none";
});

const n_btn = document.querySelector(".navbar button");

n_btn.addEventListener("click", (e) => {
  e.preventDefault();
  logIn.style.display = "block";
  register.style.display = "none";
});

const l_register = document.querySelector(".content #r");
l_register.addEventListener("click", (e) => {
  e.preventDefault();
  register.style.display = "block";
  logIn.style.display = "none";
});
