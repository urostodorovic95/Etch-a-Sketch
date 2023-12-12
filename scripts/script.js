// document elements
const gridContainer = document.querySelector("#container-grid");

// create a grid
function createGrid(gridSize) {
    // for gridSize integer create a grid with:
    // horizontal - vertical same size
    for (let i=0; i < gridSize*gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("new-div");
        gridContainer.appendChild(newDiv);
    }
}

// debug:
console.log(createGrid(4))