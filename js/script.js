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

// scroll aniamtions 
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("volga-wheel-img");
  let offset = window.pageYOffset/11;
  image.style.transform = "rotate(-" + offset + "deg)";
}
window.addEventListener("scroll", function() {
  let value = scrollY;
  document.getElementById('volga-road-img').style.transform = "translateY(-"+ value*0.7+"px)";
  document.getElementById('volga-salon-container').style.transform = "translateY(-"+ value*0.24 + "px)";
  if (value < 1750) {
    document.getElementById('volga-map-wrapper').style.top = `${value*0.4-150}px`;
  }
  // section-5-parallax:
  const section5Parallax = document.getElementById('section-5-parallax');
  var scrolled = window.pageYOffset;
  var rate = scrolled*.1-650;
  if (scrolled > 2670 & scrolled < 3700){
  section5Parallax.style.transform = 'translateY('+rate+'px)';
  }
})


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
  arrowIconOne.classList.add('hide');
  arrowIconTwo.classList.add('hide');
  headerVideoClick();
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

let videoContent = document.getElementById('videos');

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


// section 3 picture content
let headerPictureItem = document.getElementById('pictures-click');
let pictureContent = document.getElementById('pictures');
let headerVideoItem =document.getElementById('videos-click');
let arrowIconOne = document.getElementById('previous');
let arrowIconTwo = document.getElementById('next');


headerPictureItem.addEventListener('click' , headerPictureClick);

function headerPictureClick() {
  headerPictureItem.classList.add('volga-map-modal-header-items-active');
  headerVideoItem.classList.remove('volga-map-modal-header-items-active');
  pictureContent.classList.remove('hide');
  videoContent.classList.add('hide');
  setUpSwiper();
  arrowIconOne.classList.remove('hide');
  arrowIconTwo.classList.remove('hide');
}


headerVideoItem.addEventListener('click', headerVideoClick );

function headerVideoClick() {
  headerPictureItem.classList.remove('volga-map-modal-header-items-active');
  headerVideoItem.classList.add('volga-map-modal-header-items-active');
  pictureContent.classList.add('hide');
  videoContent.classList.remove('hide');
  arrowIconOne.classList.add('hide');
  arrowIconTwo.classList.add('hide');
}

// section three pictures data and swiper
let pictureData = [
  {
      id: 1,
      imageUrl1: 'images/map/zugdidi/zugdidi01.jpg',
      imageUrl2: 'images/map/zugdidi/zugdidi02.jpg',
      imageUrl3: 'images/map/zugdidi/zugdidi03.jpg',
      imageUrl4: 'images/map/zugdidi/zugdidi04.jpg',
      imageUrl5: 'images/map/zugdidi/zugdidi05.jpg',
      imageUrl6: 'images/map/zugdidi/zugdidi06.jpg',
      description:"La capitale de la Mingrélie-et-Haute-Svanétie (Samegrelo-Zemo Svaneti) est la ville géorgienne qui marque de fait la ligne de séparation avec la république d’Abkhazie, dont le statut est disputé. Le passage de la frontière se fait sur le pont Inguri, tout proche de Zougdidi. Le château Dadiani, ancienne résidence de la princesse de Mingrélie, abrite les masques mortuaires de Napoléon et un suaire de la Sainte Vierge. Les jeunes de la région participent volontiers aux ateliers et aux programmes en faveur de la paix organisés par des ONG internationales. Grâce aux médias sociaux, un nouveau réseau de communication a vu le jour, qui leur permet de participer activement au débat sur l’avenir de leur région marquée par la guerre."
  },
  {
      id: 2,
      imageUrl1: 'images/map/batumi/batumi01.jpg',
      imageUrl2: 'images/map/batumi/batumi02.jpg',
      imageUrl3: 'images/map/batumi/batumi03.jpg',
      imageUrl4: 'images/map/batumi/batumi04.jpg',
      imageUrl5: 'images/map/batumi/batumi05.jpg',
      imageUrl6: 'images/map/batumi/batumi06.jpg',
      description: "Le port géorgien a été bâti dans l’Antiquité par les Grecs qui l’ont baptisé Batis. La silhouette de la ville n’a cessé de changer et les faubourgs, avec leurs petites rangées de maisons en bois et leurs barres d’immeubles soviétiques, s’avancent loin dans la chaîne montagneuse du Petit Caucase. Les bâtiments érigés ces dernières années, notamment la tour Alphabet, l’université technique, le Hall du service public, les complexes hôteliers et restaurants futuristes ont radicalement changé le visage de cette ville. Face à l’afflux de touristes et d’investisseurs étrangers, nombreux sont les habitants qui craignent de ne plus se sentir chez eux. Ils espèrent retrouver un jour une place importante dans la vie de leur ville."
  },

  {
    id: 3,
    imageUrl1: 'images/map/muxrani/mukhrani1.jpg',
    imageUrl2: 'images/map/muxrani/mukhrani2.jpg',
    imageUrl3: 'images/map/muxrani/mukhrani3.jpg',
    imageUrl4: 'images/map/muxrani/mukhrani4.jpg',
    imageUrl5: 'images/map/muxrani/mukhrani5.jpg',
    imageUrl6: 'images/map/muxrani/mukhrani6.jpg',
    description: "Le petit village et la région éponyme situés en Géorgie orientale tiennent leur nom historique – Samuchranbatono – d’une branche de la famille royale géorgienne, les Moukhran-Batonis. Le château de Moukhran a été construit en 1873 par le prince Ivane Bagration de Moukhran, général dans l’armée russe impériale – et viticulteur réputé. Le château, abandonné pendant la période soviétique, se dégradait de plus en plus ; il a été rénové depuis et les crus « Château Moukhran » comptent parmi les plus grands vignobles du pays."
},

{
    id: 4,
    imageUrl1: 'images/map/tbilisi/tbilisi01.jpg',
    imageUrl2: 'images/map/tbilisi/tbilisi02.jpg',
    imageUrl3: 'images/map/tbilisi/tbilisi03.jpg',
    imageUrl4: 'images/map/tbilisi/tbilisi04.jpg',
    imageUrl5: 'images/map/tbilisi/tbilisi05.jpg',
    imageUrl6: 'images/map/tbilisi/tbilisi06.jpg',
    description: "La capitale géorgienne porte depuis 1936 le nom de Tbilissi en raison de ses sources chaudes d’eau sulfureuse (« tbili » signifie « chaud » en géorgien). Avec 1,5 million d’habitants, c’est la seule grande ville du pays. Les restes des « premiers Européens », Seswa et Msia, mis au jour lors de fouilles archéologiques réalisées en 2000, sont conservés au musée Janachia, en plein centre-ville. Depuis quelques années, de nouvelles constructions pas toujours heureuses défigurent la ville. Aujourd’hui, de plus en plus d’habitants font entendre leur voix pour empêcher la destruction des vieilles bâtisses et des places traditionnelles de Tbilissi. Les étudiants et les jeunes scientifiques qui ont étudié à l’étranger jouent un rôle de premier plan dans cette protestation citoyenne."
},
{
    id: 5,
    imageUrl1: 'images/map/rustavi/rustavi_01.jpg',
    imageUrl2: 'images/map/rustavi/rustavi_02.jpg',
    imageUrl3: 'images/map/rustavi/rustavi_03.jpg',
    imageUrl4: 'images/map/rustavi/rustavi_04.jpg',
    imageUrl5: 'images/map/rustavi/rustavi_05.jpg',
    imageUrl6: 'images/map/rustavi/rustavi_06.jpg',
    description: "Roustavi est la plus ancienne ville de Géorgie ; presque entièrement détruite par les Mongols au XIIIe siècle, elle n’a été reconstruite qu’à l’ère soviétique, pour devenir le centre de l’industrie lourde. Sur ordre de Staline, le plus grand complexe sidérurgique du Caucase y a vu le jour dans les années 1940 – plus de 120 unités de production y étaient installées. La ville ne s’est jamais vraiment remise de l’effondrement de l’URSS. Roustavi n’est plus que friches industrielles et cités-dortoirs. Beaucoup de jeunes aspirant au mode de vie occidental se tournent vers les organisations non-gouvernementales ou vont travailler à Tbilissi, à seulement 25 km de Roustavi."
  }
];

function pictureCardInfo(item){
  let picturesDiv = document.createElement('div');
  picturesDiv.classList.add('swiper-content');
  picturesDiv.setAttribute('id', 'swiper-content');

  let pictureDescription = document.createElement('p');
  pictureDescription.classList.add('post-descr');
  pictureDescription.innerHTML = pictureData[item].description; 

  let pictureSlideOne = document.createElement('img');
  pictureSlideOne.classList.add('img');
  pictureSlideOne.setAttribute("src", pictureData[item].imageUrl1);

  let pictureSlideTwo = document.createElement('img');
  pictureSlideTwo.classList.add('img');
  pictureSlideTwo.setAttribute("src", pictureData[item].imageUrl2);

  let pictureSlideTree = document.createElement('img');
  pictureSlideTree.classList.add('img');
  pictureSlideTree.setAttribute("src", pictureData[item].imageUrl3);

  let pictureSlideFour = document.createElement('img');
  pictureSlideFour.classList.add('img');
  pictureSlideFour.setAttribute("src", pictureData[item].imageUrl4);

  let pictureSlideFive = document.createElement('img');
  pictureSlideFive.classList.add('img');
  pictureSlideFive.setAttribute("src", pictureData[item].imageUrl5);

  let pictureSlideSix = document.createElement('img');
  pictureSlideSix.classList.add('img');
  pictureSlideSix.setAttribute("src", pictureData[item].imageUrl6);

  picturesDiv.appendChild(pictureSlideOne);
  picturesDiv.appendChild(pictureSlideTwo);
  picturesDiv.appendChild(pictureSlideTree);
  picturesDiv.appendChild(pictureSlideFour);
  picturesDiv.appendChild(pictureSlideFive);
  picturesDiv.appendChild(pictureSlideSix);
  pictureContent.appendChild(picturesDiv);
  pictureContent.appendChild(pictureDescription);
}

pointers.forEach(img => {
  img.addEventListener('click', () => {
    pictureContent.innerHTML = '';
      let imageValue = img.getAttribute('data-id' , img.value);
      openPictureCard(imageValue);
  });
});

function openPictureCard(id){
  pictureCardInfo(id);
};

// set up swiepr function
function setUpSwiper() {
  const productContainers = [...document.querySelectorAll(".swiper-content")];
  const nxtBtn = [...document.querySelectorAll(".next")];
  console.log(nxtBtn);
  const preBtn = [...document.querySelectorAll(".previous")];

  productContainers.forEach((swiperContent, i) => {
    console.log(swiperContent);
    console.log(i);
    let containerDimensions = swiperContent.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nxtBtn[i].addEventListener("click", () => {
      swiperContent.scrollLeft += containerWidth/3;
    });

    preBtn[i].addEventListener("click", () => {
      swiperContent.scrollLeft -= containerWidth/3;
    });
  });
}




// Timeline - section 4
let data = [
  {
    id: 0,
    text: "Du 3 au 9 mars Tbilissi est secouée par une vague de manifestations en la mémoire du dictateur Staline, elles cristallisent le sentiment antisoviétique.Le mouvement est réprimé dans un bain de sang. Plus d’une centaine de jeunes sont tués par les forces spéciales soviétiques.",
    year: "1956"
  },
  {
    id: 1,
    text: "Visite à Tbilissi de Nikita Khrouchtchev, le premier secrétaire du Comité central du Parti communiste et chef du gouvernement de l’Union soviétique. Période de dégel dans les relations Est/Ouest.",
    year: "1960"
  },
  {
    id: 2,
    text: "Le Dynamo Tbilissi est champion de football d’Union soviétique. Après le Dynamo Kiev en 1960, c’est la deuxième équipe non russe à remporter le titre.",
    year: "1964"
  },
  {
    id: 3,
    text: "Le 21 août, les troupes soviétiques entrent dans Prague, mettant une fin brutale au « Printemps de Prague ».",
    year: "1968"
  },
  {
    id: 4,
    text: "Démission de Vassili Mzhavanadze, premier secrétaire du Comité central du Parti communiste géorgien. Edouard Chevardnadze est élu à sa succession.",
    year: "1972"
  },  
  {
    id: 5,
    text: "La première organisation géorgienne des droits de l’homme, le « Groupe Helsinki géorgien », est fondée par Merab Kostava, Zviad Gamsakhourdia et Viktor Rzchiladze.",
    year: "1976"
  },
  {
    id: 6,
    text: "Du 8 au 16 mars se déroule à Tbilissi le premier festival rock d’Union soviétique, « Le rythme du printemps ». Quelques mois plus tôt, l’Armée rouge envahissait l’Afghanistan.",
    year: "1980"
  },
  {
    id: 7,
    text: "1984 - Le patriarche de Géorgie, Elie II, visite le monastère Sainte –Catherine du Mont Sinaï. La bibliothèque du monastère conserve plus de 3500 volumes manuscrits, dont de nombreux en géorgien.",
    year: "1984"
  },
  {
    id: 8,
    text: "1988 – Manifestations de masse à Tbilissi avec pour principale revendication la sortie de la Géorgie de l’Union soviétique. Le 9 avril 1989, le mouvement est réprimé dans le sang par les troupes soviétiques.",
    year: "1988"
  } 
]

let texts = document.getElementById('timelineText').children
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let carDiv = document.getElementById('car');
let textDiv = document.getElementById('text');
let year = document.getElementById('year');
let text = document.getElementById('text');

let sliderIndex = 0;
const textAnimation = () => {
    text.classList.add('upanimation');
    setTimeout(() => {
        text.classList.remove('upanimation')}, 200);
}
const setSlider = () => {
  textDiv.innerText = '';
  year.innerText = '';
  carDiv.style.backgroundImage = `url("images/Timeline/min-volga${sliderIndex+1}.png")`;
  textDiv.append(data[sliderIndex].text); 
  year.append(data[sliderIndex].year);
  year.style.transitionDuration = "1.5s";
  carDiv.style.transitionDuration = "1.5s";
  textAnimation();
}

const arrowRightClick = () => {
  if(sliderIndex == data.length-1) {
    sliderIndex = -1;
  }
  sliderIndex= sliderIndex+1;
  carDiv.style.transform = `translateX(${sliderIndex*65}px)`;
  year.style.transform = `translateX(${sliderIndex*65}px)`;
  setSlider();
}

const arrowLeftClick = () => {
  if (sliderIndex == 0) {
    sliderIndex = data.length;
  }
  sliderIndex=sliderIndex-1;
  carDiv.style.transform = 'translateX(' + (585-(data.length-sliderIndex) * 65)+ 'px)';
  year.style.transform = `translateX(${sliderIndex*65}px)`;
  setSlider();
}

const createButts = () => {
    data.forEach((element) => {
    let butt = document.createElement("div");
    butt.classList.add("butt");
    butt.setAttribute("data-id", element.id);

    butt.onclick = () => {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id *1;
      setSlider();
      carDiv.style.transform = `translateX(${sliderIndex*65}px)`;
      year.style.transform = `translateX(${sliderIndex*65}px)`;
    }
    line.appendChild(butt);
  })
  return line;
}

const slider = () => {
  createButts();
    // arrow click event
  arrowRight.addEventListener('click', arrowRightClick);
  arrowLeft.addEventListener('click', arrowLeftClick);

  // keydown event
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        arrowLeftClick();
    } else if (event.keyCode == 39) {
        arrowRightClick();
    }
  })
}
slider();


/////////////////////// section 5 - radio 

let radioData = [
  {
    id: 0,
    name: '33a',
    text: 'Niaz Diasamidze est le chanteur et leader de 33a, un groupe de folk rock géorgien fondé en 1994 à Tbilissi. 33a livre un métissage du folk français et géorgien avec des éléments pop et reggae, sur des textes principalement en géorgien parfois en français. Le nom du groupe fait référence au numéro de l’immeuble de la rue Paliachvili à Tbilissi où habite Niaz Diasamidze.',
    song1: '33a - Galaktioni',
    song2: '33a - Me Vzivar Navshi',
    song3: '33a - Saperavi Ampelography',
    audio1: 'music/1/first_music',
    audio2: 'music/1/second_music',
    audio3: 'music/1/third_music'
  },
  {
    id: 1,
    name: 'Gacha',
    text: 'Gacha est un jeune artiste géorgien plein d’avenir qui crée son propre son en s’appropriant différents styles électro. Voici un premier album parfait pour se détendre. Ce paysage sonore a toute sa place chez Apollo Records, filiale du label belge R&S Records (Renaat Vandepapeliere).',
    song1: 'Gacha - Burning',
    song2: 'Gacha - Love You Down',
    song3: 'Gacha - Open Chords',
    audio1: 'music/2/first_music',
    audio2: 'music/2/second_music',
    audio3: 'music/2/third_music'
  },
  {
    id: 2,
    name: 'Soft Eject',
    text: 'Soft Eject, c’est une perle du folk rock made in Caucase. Fondé en 1989, le groupe géorgien mêle influences folk européennes et géorgiennes avec des sonorités psychédéliques et rock. La plupart des paroles sont en anglais. Actuellement, le groupe se compose de six membres - Vaho Babunashvili (basse, voc.), Nodar Manchkhashvili (percussions), Giorgi Kobakhidze (guitare, voc.), Sandro Nikoladze (flûte, lyre), Emzar Burduli (cor d’harmonie, voc.) et Anna Sikharulidze (accordéon, clavier).',
    song1: 'Soft Eject - A Dozing Day',
    song2: `Soft Eject - I'm On My Way`,
    song3: 'Soft Eject - Please Just Carry On',
    audio1: 'music/3/first_music',
    audio2: 'music/3/second_music',
    audio3: 'music/3/third_music'
  },
  {
    id: 3,
    name: 'Kung Fu Junkie',
    text: 'Fondé en 2009 par le jeune poète Zura Jishkariani, le groupe Kung Fu Junkie joue de la pop électro. Il est composé de Chring et Zura Jishkariani au chant, Linda Folio à la guitare, et de MC CutDaKill et Max Machiadze. Les textes de Kung Fu Junkie sont en géorgien et en anglais. Sur sa page Facebook, le groupe explique qu’il s’inspire du communisme chinois et du poète William Burroughs.',
    song1: 'Kung Fu Junkie - ANY',
    song2: 'Kung Fu Junkie - BioRobot(acoustic)',
    song3: 'Kung Fu Junkie - Flowerz In My Brain',
    audio1: 'music/4/first_music',
    audio2: 'music/4/second_music',
    audio3: 'music/4/third_music'
  },
  {
    id: 4,
    name: 'Shuki Movida',
    text: 'Shuqi movida (ou Chouki movida) est un groupe de punk franco-géorgien fondé en 2000 par le chanteur et guitariste français Frédéric Payen. Dans ses trois albums, la plupart des titres évoquent les problèmes sociaux et la société géorgienne à une époque où les coupures de courant étaient encore quotidiennes. D’où le nom du groupe, qui signifie « L’électricité est revenue ».',
    song1: 'Shuqi Movida - Chouki Movida',
    song2: 'Shuqi Movida - Jigoulis Kaci',
    song3: 'Shuqi Movida - Minibusis Zaza',
    audio1: 'music/5/first_music',
    audio2: 'music/5/second_music',
    audio3: 'music/5/third_music'
  },
  {
    id: 5,
    name: 'Nikakoi',
    text: `Le Géorgien Nika Machaidze est réalisateur de films et musicien électro. Membre du collectif « Goslab », il a produit la bande originale de la pièce « Le parc » de l'auteur dramatique allemand Botho Strauss. Il met aussi en musique des défilés de mode et des productions télévisées.`,
    song1: 'Erast - Argentina',
    song2: 'Erast - Cyberpunk',
    song3: 'Nikakoi - Dzzenn',
    audio1: 'music/6/first_music',
    audio2: 'music/6/second_music',
    audio3: 'music/6/third_music'
  }
]

const radioPrevious = document.getElementById('prev-radio');
const radioNext = document.getElementById('next-radio');
const singerImage = document.getElementById('singer-image');
const singerName = document.getElementById('singer-name');
const singerInfo = document.getElementById('singer-info');
const firstMusic = document.getElementById('first-music');
const secondMusic = document.getElementById('second-music');
const thirdMusic = document.getElementById('third-music');
const playerSinger = document.getElementById('player-singer');
const playerMusic = document.getElementById('player-music');
const audioPlayerOgg = document.getElementById('audio-player-ogg');
const audioPlayerMp3 = document.getElementById('audio-player-mp3');
const audio = document.getElementById("audio"); 
const overlayRadio = document.getElementById('overlay-radio');
const radioMusic1 = document.getElementById('first-music');
const radioMusic2 = document.getElementById('second-music');
const radioMusic3 = document.getElementById('third-music');

let radioSliderIndex = 0;

function setRadioSwiper(){
  singerImage.style.backgroundImage = `url("images/Radio/singer_big/${radioSliderIndex+1}.jpg")`;
  singerName.innerHTML = '';
  singerInfo.innerHTML = '';
  firstMusic.innerHTML = '';
  secondMusic.innerHTML = '';
  thirdMusic.innerHTML = '';
  playerSinger.innerHTML = '';
  playerMusic.innerHTML = '';

  singerName.append(radioData[radioSliderIndex].name);  
  singerInfo.append(radioData[radioSliderIndex].text);  
  firstMusic.append(radioData[radioSliderIndex].song1);  
  secondMusic.append(radioData[radioSliderIndex].song2);  
  thirdMusic.append(radioData[radioSliderIndex].song3);  
  playerSinger.append(radioData[radioSliderIndex].name);  

  getRightMusic()
}
setRadioSwiper()

function getRightMusic(){
  radioMusic1.addEventListener('click', function(){
    firstMusic.style.backgroundColor = '#CDD7DB';
    firstMusic.style.color = '#819CA5'
    playerMusic.innerHTML = '';
    playerMusic.append(radioData[radioSliderIndex].song1.split(' - ')[1]);
    audioPlayerMp3.src = `${radioData[radioSliderIndex].audio1}.mp3`;
    audioPlayerOgg.src = `${radioData[radioSliderIndex].audio1}.ogg`;
    audio.load();
  });
  radioMusic2.addEventListener('click', function(){
    secondMusic.style.backgroundColor = '#CDD7DB';
    secondMusic.style.color = '#819CA5'
    playerMusic.innerHTML = '';
    playerMusic.append(radioData[radioSliderIndex].song2.split(' - ')[1]);
    audioPlayerMp3.src = `${radioData[radioSliderIndex].audio2}.mp3`;
    audioPlayerOgg.src = `${radioData[radioSliderIndex].audio2}.ogg`;
    audio.load();
  });
  radioMusic3.addEventListener('click', function(){
    thirdMusic.style.backgroundColor = '#CDD7DB';
    thirdMusic.style.color = '#819CA5'
    playerMusic.innerHTML = '';
    playerMusic.append(radioData[radioSliderIndex].song3.split(' - ')[1]);
    audioPlayerMp3.src = `${radioData[radioSliderIndex].audio3}.mp3`;
    audioPlayerOgg.src = `${radioData[radioSliderIndex].audio3}.ogg`;
    audio.load();
  });

}
getRightMusic()

function radioArrowRightClick(){
  if(radioSliderIndex == radioData.length-1){
    radioSliderIndex = -1;
  }
  radioSliderIndex++;
  setRadioSwiper();
}

function radioArrowLeftClick(){
  if(radioSliderIndex == 0){
    radioSliderIndex = radioData.length;
  }
  radioSliderIndex--;
  setRadioSwiper();
}

function radioSwiperAction(){
  radioNext.addEventListener('click', radioArrowRightClick);
  radioPrevious.addEventListener('click', radioArrowLeftClick);
}

radioSwiperAction();

// overlay
function onMusicClick(){
  overlayRadio.classList.add('show-overlay')
}

function onMusicClickAction(){
  radioMusic1.addEventListener('click', onMusicClick);
  radioMusic2.addEventListener('click', onMusicClick);
  radioMusic3.addEventListener('click', onMusicClick);

}
onMusicClickAction()
// close overlay on clicking outside overlay
document.addEventListener('mouseup', function(e) {
  if (!overlayRadio.contains(e.target)) {
      overlayRadio.classList.remove('show-overlay')
      pauseAudio()
      firstMusic.style.backgroundColor = '';
      secondMusic.style.backgroundColor = '';
      thirdMusic.style.backgroundColor = '';
      firstMusic.style.color = ''
      secondMusic.style.color = ''
      thirdMusic.style.color = ''
  }
});

function pauseAudio() { 
  audio.pause(); 
  audio.currentTime = 0;
} 
/////////////////////// end of section 5 - radio 


// section 6
let volgaTunkItem = document.querySelectorAll(".tunkItem");
let mapFoldTrunk = document.getElementById("mapFold-bagage");
let volgaInfoItem = document.querySelectorAll(".light-item");

volgaTunkItem.forEach((trunkItem)=>{
  trunkItem.addEventListener("click",()=>{
    mapFoldTrunk.classList.toggle("hide");
  })
})

let closeBtn2 = document.getElementById("close2");
closeBtn2.addEventListener("click",()=>{
  mapFoldTrunk.classList.add("hide");
})

let lighItem = document.getElementById('volga-light-img');
let saxItem = document.getElementById('volga-sax-img');
let clapItem = document.getElementById('volga-clap-img');
let cameraItem = document.getElementById('volga-camera-img');
let soundrecItem = document.getElementById('volga-soundrec-img');
let reelItem = document.getElementById('volga-reel-img');
let tvItem = document.getElementById('volga-tv-img');
let mregaphoneItem = document.getElementById('volga-megaphone-img');
let keyboardItem = document.getElementById('volga-keyboard-img');

let light = document.getElementById('light');
let sax = document.getElementById('sax');
let clap = document.getElementById('clap');
let camera = document.getElementById('camera');
let soundrec = document.getElementById('soundrec');
let reel = document.getElementById('reel');
let tv = document.getElementById('tv');
let megaphone = document.getElementById('megaphone');
let keyboard = document.getElementById('keyboard');

lighItem.addEventListener('click',function(){
  light.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})

saxItem.addEventListener('click',function(){
  sax.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})

clapItem.addEventListener('click', function(){
  clap.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');

})

cameraItem.addEventListener('click', function(){
  camera.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  soundrec.classList.add('hide');
})

soundrecItem.addEventListener('click', function(){
  soundrec.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
})

reelItem.addEventListener('click', function(){
  reel.classList.remove('hide');
  
  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  tv.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})

tvItem.addEventListener('click', function(){
  tv.classList.remove('hide');

  keyboard.classList.add('hide');
  megaphone.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})

mregaphoneItem.addEventListener('click', function(){
  megaphone.classList.remove('hide');

  keyboard.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})

keyboardItem.addEventListener('click', function(){
  keyboard.classList.remove('hide');

  megaphone.classList.add('hide');
  tv.classList.add('hide');
  reel.classList.add('hide');
  light.classList.add('hide');
  sax.classList.add('hide');
  clap.classList.add('hide');
  camera.classList.add('hide');
  soundrec.classList.add('hide');
})


// section7
let playbut = document.getElementById('playbut')
window.addEventListener("scroll", () => {
  if (scrollY > 5500 && scrollY < 5710) {
    playbut.style.bottom = `${this.scrollY*0.7-3650}px`;
    console.log(scrollY)
  }
})
playbut.addEventListener("click", function() {
  document.getElementById("view").style.display = "flex";
  document.getElementById("view").classList.add("heightUp");
  playbut.classList.add("hidden")
})


// section 6 
// outside click close function section 6
let section3 =document.getElementById('section3');
let language = document.getElementById('language-block');
let section6 =document.getElementById('section6');
window.onclick = function(event) {
  if (event.target.parentElement.children[1]==language) {
    mapFoldTrunk.classList.add("hide");
  }else if(event.target.parentElement==section6){
    mapFoldTrunk.classList.add("hide");
  }
}


