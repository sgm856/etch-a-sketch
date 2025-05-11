let sliderElement = null;
let containerElement = null;
let sliderContainer = null;
let currentGrid = null;

function getSlider() {
    if (!sliderElement) {
        sliderElement = document.querySelector(".slider");
    }
    return sliderElement;
}

function getMainContainer() {
    if (!containerElement) {
        containerElement = document.querySelector(".main-container");
    }
    return containerElement;
}

function initializeControlArea() {
    slider = document.querySelector("#grid-slider");
    label = document.querySelector("#dimension-label");

    label.textContent = `Dimensions: ${slider.value} x ${slider.value}`;

    slider.addEventListener("input", () => {
        label.textContent = `Dimensions: ${slider.value} x ${slider.value}`;

        createResponsiveGrid(getMainContainer(), slider.value);
    });
}

function initializePage() {
    createResponsiveGrid(getMainContainer(), getSlider().value);
}

function createRow(dimension) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex";
    row.style.flex = "1";
    row.style.minWidth = "100%";
    row.style.maxHeight = `${(1 / dimension) * 100}%`;
    return row;
}

function createResponsiveGrid(container, dimension) {
    let MAX_DIMENSION = 100;
    if (dimension > MAX_DIMENSION) {
        dimension = MAX_DIMENSION;
    }
    const grid = document.createElement("div");
    grid.classList.add("grid");

    for (let i = 0; i < dimension; i++) {
        let row = createRow(dimension);

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
        container.insertBefore(grid, currentGrid);
        container.removeChild(currentGrid);
        currentGrid = grid;

    } else {
        container.appendChild(grid);
        currentGrid = grid;
    }
}

initializePage();
initializeControlArea();