let sliderElement = null;
let containerElement = null;
let controlsContainer = null;

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

function styleMainContainer(mainContainer) {
    mainContainer.style.display = "flex";
    mainContainer.style.flex = "0 0 auto";
    mainContainer.style.minHeight = "60vh";
    mainContainer.style.maxHeight = "60vh";
    mainContainer.style.justifyContent = "center";
}

function styleControlArea() {
    if (!controlsContainer) {
        controlsContainer = document.querySelector(".controls-container");
        controlsContainer.style.display = "flex";
        controlsContainer.style.flex = "0 0 auto";
        controlsContainer.style.justifyContent = "center";
        controlsContainer.style.alignContent = "center";
        slider = document.querySelector(".slider");
        slider.style.margin = "32px";
    }
}

function initializePage() {
    let mainContainer = getMainContainer();
    styleMainContainer(mainContainer);
    createGrid(mainContainer, getSlider().value);
}

function getRandomRGBColor() {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomValue = floor(Math.random() * 256);
        rgb[i] = randomValue;
    }
    return `rgb(${rgb.join(",")})`;
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

function createGrid(container, dimension) {
    debugger;
    const defaultColor = "rgb(230, 230, 230)";
    const grid = document.createElement("div");
    styleGrid(grid);

    container.appendChild(grid);

    for (let i = 0; i < dimension; i++) {
        let row = createRow(dimension);

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.style.backgroundColor = defaultColor;
            square.style.display = "flex";
            square.style.flex = "1 1 auto";
            square.style.border = "1px solid black";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

initializePage();
styleControlArea();