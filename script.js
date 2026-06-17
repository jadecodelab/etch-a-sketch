const container = document.querySelector("#container");
const button = document.querySelector("#resize-btn");
button.addEventListener("click", () => {
  let size = Number(prompt("Enter grid size (1 - 100): "));

  while (size > 100 || size < 1 || isNaN(size)) {
    size = Number(prompt("Enter grid size (1 - 100): "));
  }

  container.innerHTML = "";
  createGrid(size);
});

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${640 / size}px`;
    square.style.height = `${640 / size}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(16);
