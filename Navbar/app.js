const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    //console.log(links.classList);                     // Controls element links
    //console.log(links.classList.contains('links'));   // References specific element links
    /*
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    }
    else {
        links.classList.add('show-links');
    }
    */
   links.classList.toggle('show-links');                // Same function from linkes 8-13
});