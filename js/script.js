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
        }, 1499);
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
            case "volga-wheel-img":
              alert("მე ვარ საჭე");
              break;
            case "volga-blog-img":
              alert("უუპს");
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
let videoData = [
  {
      id: 1,
      videoUrl: 'https://player.vimeo.com/video/77050912?h=0beffb1750',
      descrb:'Maka Samuschia: Die 25-jährige Journalistin arbeitet für das mengrelische Fernsehen „Odischi“.Während des russisch-georgischen Krieges 2008, als russische Truppen große Teile Westgeorgiens besetzten, erlebte sie Zugdidi als „Geisterstadt“. Mit ihrer Kollegin Tamar Lataria arbeitet sie an einer mehrteiligen Fernsehreihe über die EU-Mission in Georgien.'
  },
  {
      id: 2,
      videoUrl: 'https://player.vimeo.com/video/77049851?h=a22aeb104b',
      descrb:'Frida: Die Künstlerin baut ihr „Café Muschel“ jedes Jahr selbst in Kvariati auf. Der Strand liegt südlich von Batumi und ist bei junge Leuten aus der Kulturszene und Bohemiens aus Tiflis sehr beliebt – wie Fridas Spezialitäten, z.B. das Chwischtari (Maisbrot mit Käse).'
  },

  {
      id: 3,
      videoUrl: 'https://player.vimeo.com/video/77417883?h=2239825476',
      descrb:'Mamuka Khasaradze: Das Schloss Mukhrani ist ein Lieblingsprojekt des Bankers aus Tiflis. Er läßt es derzeit zu einem Hotel ausgebauen – mit kleinem Freilichttheater und Stallungen. Der Pferdeliebhaber reitet jedes Jahr auch in den Hochtälern des großen Kaukasus.'
  },
  {
      id: 4,
      videoUrl: 'https://player.vimeo.com/video/77051709?h=09aea399f7',
      descrb:'Mamuka Khasaradze: Der Banker begründete sein Imperium mit Wirtschaftsstudenten in den 90er Jahren, als Banken nur ein Startkapital von 500 Dollar vorweisen mussten. Die TBC-Bank ist heute die zweitgrößte Bank in Georgien und Mamuka engagiert sich in Umwelt- und Kulturprojekten.'
  },
  {
      id: 5,
      videoUrl: 'https://player.vimeo.com/video/77050909?h=f201c73c85',
      descrb:'Pavle Zereteli: Der 81-jährige erlebte die Anfänge des Stahl- und Eisenkombinats in Rustavi mit und hat Generationen von Stahlarbeiten ausgebildet. Nach dem Zusammenbruch der Sowjetunion setzte er sich beim damaligen Präsidenten Gamsachurdia für die Rettung des Werkes ein. Auch heute noch kommt er täglich ins Werk und berät die Geschäftsleitung.'
  },
];


let videoContent = document.getElementById('video-content');

function openCard(id){
  cardInfo(id);
}

function cardInfo(item){
  let descriptionPost = document.createElement('p');
  descriptionPost.classList.add('post-descr');
  descriptionPost.innerHTML = videoData[item].descrb; 
  
  let videoMovie = document.createElement('iframe');
  videoMovie.classList.add('video-post');
  videoMovie.setAttribute("src", videoData[item].videoUrl);

  videoContent.appendChild(videoMovie);
  videoContent.appendChild(descriptionPost);
}
pointers.forEach(img => {
  img.addEventListener('click', () => {
    videoContent.innerHTML = '';
      let imageValue = img.getAttribute('data-id' , img.value);
      openCard(imageValue);
  });
});

// scroll aniamtions 
window.onscroll = function () {
  scrollRotate();
  scrolZoom();
};

function scrollRotate() {
  let image = document.getElementById("volga-wheel-img");
  let offset = window.pageYOffset/2;
  image.style.transform = "rotate(" + offset + "deg)";
}

function scrolZoom() {
  let road = document.getElementById("volga-road-img");
  let scroll = scrollY;
  road.style.transform = 'scale(1.' + scroll + ')';
}
