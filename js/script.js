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
        containerElement = document.querySelector("main-container");
    }
    return containerElement;
}

function initialize() {
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

function addGrid(elem, dimension) {
    const defaultColor = rgb(0, 0, 0);
    if (!grid) {
        const grid = document.createElement("div");
        grid.classList("grid");
        grid.setAttribute("display: flex 1 1 0");
        getMainContainer.appendChild(grid);
    }
    const square = document.createElement("div");
    square.setAttribute(`background-color: ${defaultColor}`);
    for (let i = 0; i < dimension; i++) {
        for (let i = 0; i < dimension; i++) {

        }
    }
}