let sliderElement = null;
let containerElement = null;

function getSlider() {
    if (!sliderElement) {
        sliderElement = document.querySelector("slider");
    }
    return sliderElement;
}

function getMainContainer() {
    if (!containerElement) {
        containerElement = document.querySelector(".main-container");
    }
    return containerElement;
}

function initializePage() {
    addGrid(getMainContainer(), getSlider().value);
}

function getRandomRGBColor() {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomValue = floor(Math.random * 256);
        rgb[i] = randomValue;
    }
    return `rgb(${rgb.split(",")})`;
}

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("display: flex 1");
    return row;
}

function addGrid(elem, dimension) {
    debugger;
    const defaultColor = `rgb(0, 0, 0)`;
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("display", "flex 1 1 0");
    getMainContainer().appendChild(grid);

    for (let i = 0; i < dimension; i++) {
        let row = createRow();
        for (let i = 0; i < dimension; i++) {
            const square = document.createElement("div");
            square.setAttribute(`background-color: ${defaultColor}`);
            square.setAttribute(`display: flex 1 1 1`);
            row.appendChild(square);
        }
        getMainContainer().appendChild(row);
    }
}

initializePage();