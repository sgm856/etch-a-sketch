const sliderElement = document.querySelector(".slider");;
const mainContainer = document.querySelector(".main-container");;
let currentGrid = null;

function initializeControlArea() {
    slider = document.querySelector("#grid-slider");
    label = document.querySelector("#dimension-label");

    label.textContent = `Dimensions: ${slider.value} x ${slider.value}`;

    slider.addEventListener("input", () => {
        label.textContent = `Dimensions: ${slider.value} x ${slider.value}`;

        createResponsiveGrid(slider.value);
    });
}

function initializePage() {
    createResponsiveGrid(sliderElement.value);
}

function createRow(dimension) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.maxHeight = `${(1 / dimension) * 100}%`;
    return row;
}

function createResponsiveGrid(dimension) {
    const MAX_DIMENSION = 100;
    if (dimension > MAX_DIMENSION) {
        dimension = MAX_DIMENSION;
    }
    const grid = document.createElement("div");
    grid.classList.add("grid");

    for (let i = 0; i < dimension; i++) {
        const row = createRow(dimension);

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.opacity = ".1";
            square.addEventListener("mouseenter", (e) => {
                square.style.opacity = `${parseFloat(square.style.opacity) + .1}`;
                square.style.backgroundColor = `rgb(${Math.random() * 256 | 0},${Math.random() * 256 | 0},${Math.random() * 256 | 0})`;
            })

            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    if (currentGrid) {
        mainContainer.replaceChild(grid, currentGrid);
        currentGrid = grid;

    } else {
        mainContainer.appendChild(grid);
        currentGrid = grid;
    }
}

initializePage();
initializeControlArea();