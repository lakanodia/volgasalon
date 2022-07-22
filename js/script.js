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



document.querySelectorAll('#img').forEach(img => {
    img.addEventListener('click', () => {
        let imageValue = img.getAttribute('class' , img.value);
        switch (imageValue) {
            case "volga-clock-img":
              alert("რომელი საათია? რომელი საათია...");
              break;
            case "volga-map-img":
              alert("მე რუკა ვარ");
              break;
            case "volga-sticker-img":
              alert("ვიღაც უცხო ხალხი");
              break;
            case "volga-mirror-img":
              alert("mirror mirror on the wall");
              break;
            case "volga-radio-img":
              alert("მე ვარ რადიო");
              break;
          }
    });
});