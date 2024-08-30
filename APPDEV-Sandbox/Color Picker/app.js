const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Function for changing colors of HTML file
btn.addEventListener("click", () => {
    // Targeting document body
    console.log(document.body);
    // Gets random number from getRandomNumber() function
    const randomNum = getRandomNumber();
    // Referencing background color of document body
    document.body.style.backgroundColor = colors[randomNum];
    // Change text for span tag
    color.textContent = colors[randomNum];

});

// Generates random number from colors
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}