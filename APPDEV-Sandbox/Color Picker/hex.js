const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Function for changing colors of HTML file
btn.addEventListener("click", () => {
    // Targeting document body
    console.log(document.body);
    // Gets random value from hex values array
    let hexColor = '#';
    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // Controls and changes text of span class
    color.textContent = hexColor;
    // Changes background color to hexColor value
    document.body.style.backgroundColor = hexColor;
});

// Generates random number from colors
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}