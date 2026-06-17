const container = document.querySelector("#container");

for (let i = 0; i < 250; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "black";
  });

  container.appendChild(square);
}
