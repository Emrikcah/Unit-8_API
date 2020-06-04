const cards = document.querySelectorAll(".card");

function imageClick() {
  console.log('working');
}

cards.forEach((currentItem) => {
  currentItem.addEventListener("click", imageClick);
});
