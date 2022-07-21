let loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


// this function dissapears loader element
function displayNone() {
    loader.style.display = 'none';
  }
  
  
// this function dissapears menu bar
let menuBar = document.getElementById('hide-menu-div');
let navBar = document.getElementById('navigation-block');
menuBar.addEventListener('click', function () {
    toggleFunction();
})

function toggleFunction() {
    if (navBar.style.display === "none") {
        navBar.style.display = "block";
        menuBar.innerHTML = "Hide Menu";
    } else {
        navBar.style.display = "none";
        menuBar.innerHTML = "Show Menu";
    }
}
