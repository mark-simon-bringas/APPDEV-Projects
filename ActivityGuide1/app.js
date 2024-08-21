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