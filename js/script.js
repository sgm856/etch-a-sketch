let sliderElement = null;
let containerElement = null;
let sliderContainer = null;

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

        updateGrid(slider.value);
    });
}

function initializePage() {
    createResponsiveGrid(getMainContainer(), getSlider().value);
}

function getRandomRGBColor() {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomValue = Math.floor(Math.random() * 256);
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

function createResponsiveGrid(container, dimension) {
    debugger;
    let MAX_DIMENSION = 100;
    if (dimension > MAX_DIMENSION) {
        dimension = MAX_DIMENSION;
    }
    const defaultColor = "rgb(200, 200, 200)";
    const grid = document.createElement("div");
    grid.classList.add("grid");

    container.appendChild(grid);

    for (let i = 0; i < dimension; i++) {
        let row = createRow(dimension);

        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.style.backgroundColor = defaultColor;
            square.style.display = "flex";
            square.style.flex = "1 1 auto";
            square.style.border = "1px solid black";
            square.style.opacity = "10%";
            square.addEventListener("mouseenter", (e) => {
                square.style.opacity = `${Math.min(parseFloat(square.style.opacity) + .1, 1)}`;
                square.style.backgroundColor = getRandomRGBColor();
            })

            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}



initializePage();
initializeControlArea();