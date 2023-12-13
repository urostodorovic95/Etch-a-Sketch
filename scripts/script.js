// document elements
const gridContainer = document.querySelector("#container-grid");

// create a grid
function createGrid(gridSize) {
  const boxSize = `${100 / gridSize}%`;

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    newDiv.style.width = boxSize;
    newDiv.style.height = boxSize;
    newDiv.style.boxSizing = "border-box";
    gridContainer.appendChild(newDiv);
  }
}

// listen for mouse hovers, make use of bubbling
gridContainer.addEventListener("mouseover", (e) => {
  if (e.buttons === 1 && e.target.classList.contains("new-div")) {
    e.target.style.backgroundColor = "white";
  }
});

function throttle(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function initializeGrid() {
  createGrid(50);
  let gridSize = document.getElementById("chosenGridSize");
  gridSize.addEventListener(
    "input",
    throttle(() => {
      let size = Number(gridSize.value);
      console.log(size);
      createGrid(size);
    }, 200) // Adjust the delay as needed
  );
}

initializeGrid();


// reset button config

const resetButton = document.querySelector(".button-reset");
resetButton.addEventListener(
  "click", () => {
    createGrid(50);
    // reset the Canvas tiles slider
    let sliderTiles = document.querySelector("#chosenGridSize");
    sliderTiles.value = 50;
  }
)
