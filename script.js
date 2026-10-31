
const container = document.querySelector("#grid-container");


const resizeButton = document.querySelector("#resize-btn");




function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.dataset.interactions = 0;


        // square.addEventListener("mouseenter", () => {
        //     square.style.backgroundColor = "black";
        // });


        // square.addEventListener("mouseenter", () => {

        //     const red = Math.floor(Math.random() * 256);
        //     const green = Math.floor(Math.random() * 256);
        //     const blue = Math.floor(Math.random() * 256);

        //     square.style.backgroundColor =
        //         `rgb(${red}, ${green}, ${blue})`;


        //     let interactions = Number(square.dataset.interactions);

        //     interactions = Math.min(interactions + 1, 10);

        //     square.dataset.interactions = interactions;

        //     const brightness = 1 - interactions * 0.1;

           
        //     square.style.backgroundColor = `rgb(
        //         ${Math.floor(red * brightness)},
        //         ${Math.floor(green * brightness)},
        //         ${Math.floor(blue * brightness)}
        //     )`;

        // });



        // square.addEventListener("mouseenter", () => {

        //     // Generate random RGB values
        //     const red = Math.floor(Math.random() * 256);
        //     const green = Math.floor(Math.random() * 256);
        //     const blue = Math.floor(Math.random() * 256);

        //     // Increase interaction count
        //     let interactions = Number(square.dataset.interactions);

        //     interactions = Math.min(interactions + 1, 10);

        //     square.dataset.interactions = interactions;

        //     // Darken by 10% per interaction
        //     const brightness = 1 - interactions * 0.1;

        //     // Apply the random color and darkness
        //     square.style.backgroundColor = `rgb(
        //         ${Math.floor(red * brightness)},
        //         ${Math.floor(green * brightness)},
        //         ${Math.floor(blue * brightness)}
        //     )`;

        // });


        function drawSquare() {

          
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            
            let interactions = Number(square.dataset.interactions);

            interactions = Math.min(interactions + 1, 10);

            square.dataset.interactions = interactions;

            
            const brightness = 1 - interactions * 0.1;

            
            square.style.backgroundColor = `rgb(
                ${Math.floor(red * brightness)},
                ${Math.floor(green * brightness)},
                ${Math.floor(blue * brightness)}
            )`;
        }


        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        
        square.addEventListener("mouseenter", drawSquare);

        
        square.addEventListener("touchstart", drawSquare);

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

