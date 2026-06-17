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
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(square);
  }
}

createGrid(16);
