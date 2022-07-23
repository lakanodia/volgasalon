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



let item = document.getElementById('volga-salon-container').childNodes
item.forEach(img => {
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

// pointer modal click
let pointers = document.querySelectorAll(".pointer");
let modal = document.getElementById("modal");
pointers.forEach((pointer)=>{
  pointer.addEventListener("click",(item)=>{
    modal.classList.toggle("hide");
  })
})


// modal close button
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click",()=>{
  modal.classList.add("hide");
})


// in modal pages
