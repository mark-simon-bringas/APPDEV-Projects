// Set initial value for count
let count = 0;
// Select value and buttons
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        // Decrements counter by 5
        if (styles.contains('decrease-by-5')) {
            count -= 5;
        }
        // Decrements counter
        else if (styles.contains('decrease')) {
            count--;
        }
        // Increments counter
        else if (styles.contains('increase')) {
            count++;
        }
        // Increments counter by 5
        else if (styles.contains('increase-by-5')) {
            count += 5;
        }
        // Generates randomized number
        else if (styles.contains('randomize')) {
            count = getRandomNumber();
        }
        // Resets counter to 0
        else {
            count = 0;
        }
        // Changes font colors depending on the value of counter
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0) {
            value.style.color = "black";
        }        
        value.textContent = count; // Referenced from id "value" in HTML
        
    });
});

getRandomNumber = () => {
    // Generates random number
    let num =  Math.floor(Math.random() * 1000);
    /**
     * Generates number from 0 to 1 then checks if it is greater or lesser than 0 or 1.
     * If lesser, the value is -1, else, the value is 1.
     * The returned value is multiplied in the generated random number.
     */
    let sign = (Math.random()) < 0.5 ? -1 : 1;
    return num * sign;
}