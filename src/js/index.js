const carouselButtons = document.querySelectorAll(".button");
carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");
    button.classList.add("selected");
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
    const imagelist = document.querySelectorAll(".image");
    imagelist[index].classList.add("active");
  });
});
