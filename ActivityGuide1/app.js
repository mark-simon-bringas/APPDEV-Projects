// This is the component of the first item
const btn1 = document.getElementById("btn1");
// For displaying information
btn1.addEventListener("click", () => {
    // Create and initialize variables
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let telephone = document.getElementById("telephone").value;
    let major = document.getElementById("major").value;    
    // Display message in a template string
    let x = `Hello ${name}, I see that you are from ${address}
    and you are pursuing ${major}
    and you can be contacted using ${telephone}.`;
    document.getElementById("output1").innerHTML = x
    
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let sales = document.getElementById("totalSales").value;
    let profit = sales * 0.23;
    let profitDisplay = `Annual Profit: \$${profit.toFixed(2)}`;
    document.getElementById("output2").innerHTML = profitDisplay; 
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    function calcDistance(speed, time) {
        let distance = speed * time;
        return distance;
    }

    let carDistance = 60; // mph
    let display1 = `The distance the car will travel in 5 hours is: ${calcDistance(carDistance, 5)} miles.`;
    let display2 = `The distance the car will travel in 8 hours is: ${calcDistance(carDistance, 8)} miles.`;
    let display3 = `The distance the car will travel in 12 hours is: ${calcDistance(carDistance, 12)} miles.`;
    document.getElementById("output3a").innerHTML = display1;
    document.getElementById("output3b").innerHTML = display2;
    document.getElementById("output3c").innerHTML = display3;
});

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    function milesPerGallon(mile, gallon) {
        let mpg = mile / gallon;
        return mpg;
    }
    let mileVal = document.getElementById("miles").value;
    let gallonVal = document.getElementById("gallons").value;
    let mpgVal = `MPG: ${milesPerGallon(mileVal, gallonVal).toFixed(2)} miles per gallon`;
    document.getElementById("output4").innerHTML = mpgVal;
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    function cToF(celsius) {
        let farenheit = (9 / 5) * celsius + 32;
        return farenheit;
    }
    let celsiusVal = document.getElementById("celsius").value;
    let farenheitVal = `Temperature in Farenheit: ${cToF(celsiusVal).toFixed(2)} F`;
    document.getElementById("output5").innerHTML = farenheitVal;
});

/**
const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    function cToF(celsius) {
        let farenheit = (9 / 5) * celsius + 32;
        return farenheit;
    }

});
*/

const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    function percentage(num, total) {
        let percent = (num / total) * 100;
        return percent;
    }
    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;
    let total = Number(male) + Number(female);
    let malePct = `Percentage of males: ${percentage(male, total).toFixed(2)}%`;
    let femalePct = `Percentage of females: ${percentage(female, total).toFixed(2)}%`;
    document.getElementById("output7a").innerHTML = malePct;
    document.getElementById("output7b").innerHTML = femalePct;
});