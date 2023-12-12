// document elements
const gridContainer = document.querySelector("#container-grid");

// create a grid
function createGrid(gridSize) {
  const boxSize = `${100 / gridSize}%`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    newDiv.style.width = boxSize;
    newDiv.style.height = boxSize;
    newDiv.style.boxSizing = "border-box";
    gridContainer.appendChild(newDiv);
  }
}

// listen for mouse hovers, make use of bubling
gridContainer.addEventListener("mouseover", (e) => {
  if (e.buttons === 1 && e.target.classList.contains("new-div")) {
    e.target.style.backgroundColor = "white";
  }
});

// debug:
console.log(createGrid(100));

