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
        containerElement.style.flex = "1 1 0";
        containerElement.style.height = "100%";
        containerElement.style.width = "100%";
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
    row.style.display = "flex";
    row.style.flex = "1";
    return row;
}

function addGrid(elem, dimension) {
    debugger;
    const defaultColor = "rgb(0, 0, 0)";
    const grid = document.createElement("div");
    grid.style.display = "flex";
    grid.style.flex = "1 1 0";
    grid.style.flexDirection = "column";
    grid.style.alignContent = "space-evenly";
    grid.style.width = "100%";
    grid.style.height = "100%";

    elem.style.display = "flex";
    elem.style.flex = "1 1 auto";
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.appendChild(grid);

    for (let i = 0; i < dimension; i++) {
        let row = createRow();
        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.style.backgroundColor = defaultColor;
            square.style.display = "flex";
            square.style.width = "16px";
            square.style.flex = "1 1 0";
            square.style.margin = "1px";
            square.style.border = "1px solid black";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

initializePage();