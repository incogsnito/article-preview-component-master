const share = document.querySelector(".share");
const bottomSection = document.querySelector(".bottom");
const user = document.querySelector(".user");
const avatar = document.querySelector(".avatar");

function hide() {
  avatar.classList.add("invisible");
  user.classList.add("invisible");
}

reveal = (() => {
  avatar.classList.remove("invisible");
  user.classList.remove("invisible");
});

share.addEventListener("mouseover", () => {
  hide();
});

share.addEventListener("mouseleave", () => {
  reveal();
});
