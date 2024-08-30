const quotes = [
    "\"It takes a wise man to discover a wise man.\"",                                  /* 1 */
    "\"It is not that I am mad, it is only that my head is different from yours.\"",    /* 2 */
    "\"In a rich man's house, there is no place to spit but his face.\"",               /* 3 */
    "\"The foundation of every state is the education of its youth.\"",                 /* 4 */
    "\"No man is hurt by himself.\""                                                    /* 5 */
];
const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");

// Function for changing colors of HTML file
let index = 0;
btn.addEventListener("click", (e) => {
    // Targeting DOM Token Class List
    target = e.currentTarget.classList;
    console.log(target);
    // Displays quotes in order (per index)
    quote.textContent = quotes[index];
    if (target.contains("btn-hero")) {
        index++;
        // Index resets to 0 if it reached end of array.
        if (index == quotes.length) {
            index = 0;
        }
    }
});