const quotes = [
    "\"Better to trip with the feet that with the tongue.\"",
    "\"We have two ears and one mouth, so we should listen more than we say.\"",
    "\"Well-being is realized by small steps, but is truly no small thing.\"",
    "\"A bad feeling is a commotion of the mind repugnant to reason, and against nature.\"",
    "\"If you lay violent hands on me, you'll have my body, but my mind will remain with Stilpo.\""
];
const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");

// Function for changing colors of HTML file
btn.addEventListener("click", () => {
    // Targeting document body
    console.log(document.body);
    // Gets random number from getRandomNumber() function
    const randomNum = getRandomNumber();
    // Referencing background color of document body
    document.body.style.backgroundColor = quotes[randomNum];
    // Change text for span tag
    quote.textContent = quotes[randomNum];

});

// Generates random number from colors
getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length);
}