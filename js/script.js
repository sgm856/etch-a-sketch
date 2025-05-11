let sliderElement = null;
let containerElement = null;

function getSlider() {
    if (!sliderElement) {
        sliderElement = document.querySelector(".slider");
    }
    return sliderElement;
}

function getMainContainer() {
    if (!containerElement) {
        containerElement = document.querySelector(".main-container");
        containerElement.style.display = "flex";
        containerElement.style.flex = "0 0 auto";
        containerElement.style.minHeight = "60vh";
        containerElement.style.maxHeight = "60vh";
        containerElement.style.justifyContent = "center";
    }
    return containerElement;
}

function initializePage() {
    fillGrid(getMainContainer(), getSlider().value);
}

function getRandomRGBColor() {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomValue = floor(Math.random * 256);
        rgb[i] = randomValue;
    }
    return `rgb(${rgb.split(",")})`;
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

function styleGrid(grid) {
    grid.classList.add("grid");
    grid.style.display = "flex";
    grid.style.flex = "1 1 0";
    grid.style.justifyContent = "center";
    grid.style.flexDirection = "column";
    grid.style.maxWidth = "65vh";
    grid.style.maxHeight = "65vh";
    grid.style.border = "1px solid black";
}

function fillGrid(container, dimension) {
    debugger;
    const defaultColor = "rgb(230, 230, 230)";
    const grid = document.createElement("div");
    styleGrid(grid);

    dimension = 8;

    container.appendChild(grid);

    for (let i = 0; i < dimension; i++) {
        let row = createRow(dimension);

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.style.backgroundColor = defaultColor;
            square.style.display = "flex";
            square.style.width = `${1 / dimension}%`;
            square.style.flex = "1 1 auto";
            square.style.border = "1px solid black";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

initializePage();