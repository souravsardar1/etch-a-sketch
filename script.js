
const container = document.querySelector("#grid-container");


const resizeButton = document.querySelector("#resize-btn");




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



// createGrid(4);



resizeButton.addEventListener("click", () => {
    const userInput = prompt(
        "Enter squares per side (maximum 100):"
    );

    if (userInput === null) {
        return;
    }

    const size = Number(userInput);

    if (
        !Number.isInteger(size) ||
        size < 1 ||
        size > 100
    ) {
        alert("Enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
});

