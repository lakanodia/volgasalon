let loader = document.getElementById("loader");
// this function dissapears loader element
window.addEventListener("load", function () {
  loader.classList.add("hidden");
});
// this function dissapears menu bar
let menuBar = document.getElementById('hide-menu-div');
let navBar = document.getElementById('navigation-block');
menuBar.addEventListener('click', toggleMenuFunction);
// menu show hide toggle function
function toggleMenuFunction() {
    if (navBar.style.display === "none") {
        navBar.style.display = "block";
        navBar.classList.add('nav-show');
        navBar.classList.remove('nav-hide');
        menuBar.innerHTML ='Hide Menu';
    }else{
        navBar.classList.add('nav-hide');
        navBar.classList.remove('nav-show');
        setTimeout(() => {
            navBar.style.display = "none";
        }, 3000);
        menuBar.innerHTML ='Show Menu';
    }
}
