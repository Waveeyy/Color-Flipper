const colors = ["green", "red", "blue", "skyblue", "orange"];

const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);

btn.addEventListener(`click`, function () {
  console.log(getRandomNumbers());
  const randomNumbers = getRandomNumbers();
  document.body.style.backgroundColor = colors[randomNumbers];
  color.textContent = colors[randomNumbers];
  color.style.color = colors[randomNumbers];
});

function getRandomNumbers() {
  return Math.floor(Math.random() * colors.length);
}
