const share = document.querySelector(".share");
const bottomSection = document.querySelector(".bottom");
const user = document.querySelector(".user");
const avatar = document.querySelector(".avatar");
const hoverContainer = document.querySelector(".hover-container");

function hide() {
  bottomSection.classList.add("invisible");
  hoverContainer.classList.remove("invisible");
}

reveal = () => {
  bottomSection.classList.remove("invisible");
  hoverContainer.classList.add("invisible");
};

share.addEventListener("mouseenter", () => {
  hide();
});

hoverContainer.addEventListener("mouseleave", () => {
  reveal();
});
