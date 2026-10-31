
const container = document.querySelector("#grid-container");



function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");


        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });


        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        container.appendChild(square);
    }

    
}



createGrid(4);
