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

// scroll aniamtions 
window.addEventListener("scroll", function() {
  let value = scrollY;
  if (value < 1750 && value > 100) {
    let image = document.getElementById("volga-wheel-img");
    image.style.transform = "rotate(-" + value/9 + "deg)";
    document.getElementById('volga-road-img').style.transform = "translateY(-"+ value*0.7+"px)";
    document.getElementById('volga-salon-container').style.transform = "translateY(-"+ value*0.24 + "px)";
    document.getElementById('volga-map-wrapper').style.top = `${value*0.4-150}px`;
  }
  // section-5-parallax:
  const section5Parallax = document.getElementById('section-5-parallax');
  var rate = value/5;
  if (value > 2900 && value < 3500 ){
    section5Parallax.style.top = "-16rem";
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
    videoUrl: 'https://player.vimeo.com/video/77417889?h=f15a81e41e',
    descrb:'Maka Samuchia: Journaliste de 25 ans, elle travaille pour la chaîne géorgienne « Odischi ». Pendant la guerre russo-géorgienne en 2008, quand les troupes russes occupèrent une grande partie de l’Ouest du pays, elle a vu Zougdidi devenir une ville fantôme. Avec sa collègue Tamar Lataria, elle prépare une série de documentaires sur la mission de l’UE en Géorgie.'
  },
  {
      id: 2,
      videoUrl: 'https://player.vimeo.com/video/77417881?h=5ba39e88ad',
      descrb:'Natia Bolkavadze, alias Frida:Chaque année, cette artiste remonte sa paillotte sur la plage de Kvariati,au sud de la ville de Batoumi. Un endroit très prisé par les bobos de Tbilissi. La spécialité de Frida est le « chwichtari » (pain de maïs au fromage).'
  },

  {
      id: 3,
      videoUrl: 'https://player.vimeo.com/video/77417883?h=2239825476',
      descrb:'Mamuka Khazaradze:Le château Mukhrani, l’un des projets favoris du banquier de Tbilissi, est actuellement transformé en hôtel de grand luxe – avec un petit théâtre en plein air et des écuries. Cet amateur de chevaux part chaque année faire des randonnées équestres dans les hautes vallées du Grand Caucase.'
  },
  {
      id: 4,
      videoUrl: ' https://player.vimeo.com/video/77417887?h=87befd7aac',
      descrb:'Mamuka Khazaradze:C’est en s’entourant d’étudiants en sciences économiques que ce banquier fonde dans les années 90 ce qui est devenu un véritable empire… A l’époque, pour créer une banque, il suffisait d’un capital de 500 dollars. TBC est aujourd’hui la deuxième banque du pays. Mamuka soutient des projets environnementaux et culturels.'
  },
  {
      id: 5,
      videoUrl: 'https://player.vimeo.com/video/77419018?h=79534b15b0',
      descrb:'Pavle Zereteli:Cet homme de 81 ans, qui a vécu les débuts du combinat d’acier et de fer à Roustavi, a formé des générations de sidérurgistes. Après l’effondrement de l’Union soviétique, il s’est engagé, avec le président Gamsakhourdia, pour la sauvegarde du site industriel. Aujourd’hui encore, il vient tous les jours dans l’usine pour conseiller la direction.'
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
  // console.log(nxtBtn);
  const preBtn = [...document.querySelectorAll(".previous")];

  productContainers.forEach((swiperContent, i) => {
    // console.log(swiperContent);
    // console.log(i);
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
    // console.log(scrollY);
  }
})
playbut.addEventListener("click", function() {
  document.getElementById("view").style.display = "flex";
  document.getElementById("view").classList.add("heightUp");
  playbut.classList.add("hidden")
})




// section 8
let textModalContent = document.getElementById('text-modal');
let videoModalContent = document.getElementById('video-modal');
let characterOverlay = document.querySelector('.character-overlay');
let closeBtn3 = document.getElementById("close3");
closeBtn3.addEventListener("click",()=>{
  headertextClick();
  characterOverlay.classList.add("hide");
})

let characterItem = document.querySelectorAll(".character-item");
characterItem.forEach((characterItem)=>{
  characterItem.addEventListener("click",()=>{
    headertextClick();
    characterOverlay.classList.toggle("hide");
  })
})

let textCharacterItem = document.getElementById('text-item');
let videoCharacterItem = document.getElementById('video-item');

textCharacterItem.addEventListener('click' , headertextClick);
videoCharacterItem.addEventListener('click', headerCharacterVideoClick)

function headertextClick() {
  textCharacterItem.classList.remove('inActive');
  videoCharacterItem.classList.add('inActive');
  textModalContent.classList.remove('hide');
  videoModalContent.classList.add('hide');
}

function headerCharacterVideoClick(){
  textCharacterItem.classList.add('inActive');
  videoCharacterItem.classList.remove('inActive');
  textModalContent.classList.add('hide');
  videoModalContent.classList.remove('hide');
}

let characterTextData = [
  {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/lHL8jpipT-A',
      textDescription: "Tea Tsulukiani (née en 1975) est nommée ministre de la Justice par Bidzina Ivanichvili au lendemain des législatives de 2012. Tsulukiani, personnalité politique préférée des Géorgiens, a longtemps vécu en France. Elle a effectué une partie de sa scolarité à Lyon, décroché un master à l’École nationale d’administration (ENA) de Strasbourg, travaillé dans l’entourage d’un préfet et été pendant dix ans juriste à la Cour européenne des droits de l’homme de Strasbourg. En 2010, elle retourne en Géorgie où elle rejoint Notre Géorgie - Démocrates libres, le parti fondé par Irakli Alassania, ancien représentant permanent de la Géorgie auprès de l'ONU, qui s’est brouillé avec le président Saakachvili au sujet de l’affrontement avec la Russie en 2008. Sa nomination au ministère de la Justice a été suivie d’une série d’arrestations de hauts dignitaires de l’administration précédente et d’une amnistie pour des milliers de prisonniers « politiques ». Parmi ses objectifs majeurs, elle cite la réforme de la justice et la séparation du parquet et de l’exécutif. Elle échoue toutefois à imposer son projet de loi qui devait renforcer les droits des travailleurs. A l’avenir, elle souhaite d’une part renforcer les droits des femmes et des minorités, d’autre part libéraliser les lois en matière d’usage des stupéfiants."
  },
  {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/xWj8Y4fiuoQ',
      textDescription: "Le Métropolite Calistrate (né en 1938) dirige depuis une trentaine d’années l’éparchie de Kutais-Gaenati et est considéré comme le plus haut dignitaire ecclésiastique de Géorgie occidentale. Chota Ilia Margalitachvili est né dans une région viticole de Kakhétie. Après son service militaire, il suit des études d’ingénieur à Voronej en Russie et à l’institut pédagogique de Telavi, se marie et a un fils avant d’entrer en 1982 comme novice au monastère de Béthanie. La même année, il devient moine et un an plus tard, il est nommé évêque. En 1985, à la demande du patriarche géorgien Elie II, il se rend à Tchernobyl peu de temps après la catastrophe nucléaire pour exprimer sa compassion aux populations touchées. En 1992, il est élevé au rang de métropolite. Jusqu’en 2010, Mgr. Calistrate est recteur de l’académie religieuse du monastère de Ghélati et de l’institut de théologie de Koutaïssi, où il crée des facultés d’histoire de l’art, de journalisme et de médecine. En trente ans, il a inauguré cinq éparchies en Géorgie occidentale et consacré plus de trois cents églises, chapelles et monastères. Il est porteur de la Croix Briliant et de l’Ordre d’or de Saint-Georges, deux des plus hautes distinctions de l’Eglise orthodoxe de Géorgie."
  },

  {
      id: 3,
      videoUrl: 'https://www.youtube.com/embed/n6aPQrCI9pU',
      textDescription: "Bidzina Ivanichvili (né en 1956) est l’homme le plus riche de Géorgie, avec une fortune estimée à plus de 6,5 milliards de dollars. Entré en politique en 2011, l’homme d’affaires se pose rapidement en adversaire du président en exercice, Saakachvili. Ivanichvili a fondé la banque Rossyiski Kredit au début des années 1990, et très vite, il devient un oligarque de second plan à Moscou. En raison des liens étroits avec la Russie qu’il a conservés jusqu’à aujourd’hui, ses opposants politiques l’accusent d’être un agent du Kremlin – ce qui n’empêche pas la coalition Rêve géorgien, fondée par Ivanichvili, de remporter les législatives de 2012 ; le milliardaire est nommé Premier ministre. Grâce à une réforme constitutionnelle, l’essentiel du pouvoir passe des mains du président sortant qui ne pouvait se représenter vers celles du Premier ministre. Ce dernier peut alors orienter la politique géorgienne. Le ministre milliardaire amorce un rapprochement avec la Russie et renforce les relations avec l’Eglise orthodoxe, considérée comme un maillon essentiel entre la Russie et la Géorgie. Parallèlement, il veut poursuivre la révolution néolibérale de la Géorgie et se rapprocher de l’Union européenne et de l’OTAN. Il est marié et père de trois enfants. Bera, son fils adoptif, est un rappeur connu."
  },
  {
      id: 4,
      videoUrl: 'https://www.youtube.com/embed/xa_DQX13Sgw',
      textDescription: "Dato Imnaischwili (né en 1954) est mécanicien automobile, spécialisé dans les réparations des véhicules russes, et vit à Tbilissi depuis plus de trente ans. Né en Russie à Sverdlovsk (Iekaterinbourg), il n’a que 12 ans quand ses parents reviennent s’installer en Géorgie. Dans les années 1970, après son service militaire dans l’armée soviétique à Novossibirsk (Russie), il suit une formation de mécanicien automobile. En 1980, il entre aux ateliers automobiles d’État n° 1 pour les véhicules de fonction et les taxis, dans le district d’Isani. Quand l’Union soviétique s’effondre en 1991, il perd son emploi et décide alors de se mettre à son compte. Depuis une grave explosion de gaz qui a coûté la vie à plusieurs de ses collègues en 2007, il loue un garage dans une zone d’activités voisine. Ivanichvili vit avec sa femme, sa fille et sa belle-sœur dans une arrière-cour de Tbilissi ; c’est aussi un grand-père heureux depuis six ans. "
  },
  {
      id: 5,
      videoUrl: 'https://www.youtube.com/embed/-GkQaaxfk8k',
      textDescription: "Lacha Bakradzé (né en 1965) est l’un des intellectuels les plus controversés de Géorgie. Le directeur du musée national de la littérature a fait des études de littérature et de langues à Tbilissi, d’allemand à Iéna, de sciences politiques à Potsdam et de théologie à Berne. Après des études doctorales à l’université Humboldt de Berlin, il a soutenu sa thèse à Tbilissi sur les relations germano-géorgiennes pendant la Première Guerre mondiale. Bakradzé a été collaborateur au ministère des Affaires étrangères de Géorgie, journaliste pour divers médias géorgiens et chargé du programme à l’institut Goethe. Il est l’auteur de la plupart des guides linguistiques en allemand sur la Géorgie, et depuis 1999, on a pu le voir jouer dans plusieurs films (il tient d’ailleurs le premier rôle dans Lost Killers du réalisateur Dito Tsintsadzé). Il prend la direction du département des archives cinématographiques et de la restauration des films au Centre national du cinéma en 2006. Il est professeur associé à l’université Ilia de Tbilissi depuis 2010. Il soutient régulièrement des projets artistiques, milite pour les droits de l’homme en Géorgie et prend régulièrement position dans les médias sur l’évolution de la société géorgienne."
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/jgD7BIFD0xY',
    textDescription: " Mikheil (« Mischa ») Saakachvili (né en 1967) entre en 2003 au Parlement géorgien, une rose à la main. Il chasse le président Édouard Chevardnadze qui s’était maintenu au pouvoir en truquant grossièrement les élections. Après la Révolution des roses, Saakachvili est élu à la présidence du pays et, pendant neuf ans, il met le cap sur le libéralisme économique. Sous son administration, la police et la fonction publique sont réformées, de grands axes routiers sont construits et une liaison ferroviaire mise en chantier en direction de l’Europe de l’Ouest. Ces projets de construction pharaoniques destinés à faire entrer la Géorgie – sur le plan visuel aussi – dans le XXIe siècle, suscitent une contestation au sein de la population, notamment celui du port de Batoumi sur la mer Noire, et celui de « Lasika », au milieu des marais sur la mer Noire mais censé devenir le Dubaï du Caucase. En 2008, la Géorgie et la Russie s’affrontent quelques jours durant pour obtenir la suprématie sur l’Ossétie du Sud (qui fait partie de la communauté historique géorgienne de Samachablo) ; certains concitoyens rendront Saakachvili responsable des velléités d’indépendance de cette province. Son deuxième mandat est entaché par les accusations de corruption et de torture portées contre des membres de son parti, ce qui contribue largement à la défaite du Mouvement National Uni (MNU) aux élections législatives de 2012. Saakachvili est marié à Sandra Roeloffs, d’origine néerlandaise, avec laquelle il a eu deux fils. "
},
];


function openCharacterCardText(id){
  characterCardInfo(id);
}

function characterCardInfo(item){
  let characterText = document.createElement('p');
  characterText.classList.add('post-descr');
  characterText.innerHTML = characterTextData[item].textDescription; 

  let characterVideo = document.createElement('iframe');
  characterVideo.classList.add('video-character');
  characterVideo.setAttribute("src", characterTextData[item].videoUrl);

  textModalContent.appendChild(characterText);
  videoModalContent.appendChild(characterVideo);
}
characterItem.forEach(item => {
  item.addEventListener('click', () => {
    textModalContent.innerHTML = '';
    videoModalContent.innerHTML = '';
      let imageValue = item.getAttribute('data-char' , item.value);
      openCharacterCardText(imageValue);
  });
});


document.addEventListener('mouseup', function(e) {
  if (!characterOverlay.contains(e.target)) {
    characterOverlay.classList.add('hide');
    headertextClick();
  }
});



document.addEventListener('mouseup', function(k) {
  if (!mapFoldTrunk.contains(k.target)) {
    mapFoldTrunk.classList.add('hide');
  }
});


document.addEventListener('mouseup',mapOutsideCklick);


function mapOutsideCklick(b) {
  if (!modal.contains(b.target) && !arrowIconOne.contains(b.target) && !arrowIconTwo.contains(b.target)) {
    modal.classList.add('hide');
    arrowIconOne.classList.add('hide');
    arrowIconTwo.classList.add('hide');
    headerVideoClick();
  }
  
}


let videoDataDe = [
  {
    videoUrl: 'https://player.vimeo.com/video/77050912?h=0beffb1750',
    descrb:'Maka Samuschia: Die 25-jährige Journalistin arbeitet für das mengrelische Fernsehen „Odischi“.Während des russisch-georgischen Krieges 2008, als russische Truppen große Teile Westgeorgiens besetzten, erlebte sie Zugdidi als „Geisterstadt“. Mit ihrer Kollegin Tamar Lataria arbeitet sie an einer mehrteiligen Fernsehreihe über die EU-Mission in Georgien.'
  },
  {
      videoUrl: 'https://player.vimeo.com/video/77049851?h=a22aeb104b',
      descrb:'Frida: Die Künstlerin baut ihr „Café Muschel“ jedes Jahr selbst in Kvariati auf. Der Strand liegt südlich von Batumi und ist bei junge Leuten aus der Kulturszene und Bohemiens aus Tiflis sehr beliebt – wie Fridas Spezialitäten, z.B. das Chwischtari (Maisbrot mit Käse).'
  },

  {
      videoUrl: 'https://player.vimeo.com/video/77417883?h=2239825476',
      descrb:'Mamuka Khasaradze: Das Schloss Mukhrani ist ein Lieblingsprojekt des Bankers aus Tiflis. Er läßt es derzeit zu einem Hotel ausgebauen – mit kleinem Freilichttheater und Stallungen. Der Pferdeliebhaber reitet jedes Jahr auch in den Hochtälern des großen Kaukasus.'
  },
  {
      videoUrl: 'https://player.vimeo.com/video/77051709?h=09aea399f7',
      descrb:'Mamuka Khasaradze: Der Banker begründete sein Imperium mit Wirtschaftsstudenten in den 90er Jahren, als Banken nur ein Startkapital von 500 Dollar vorweisen mussten. Die TBC-Bank ist heute die zweitgrößte Bank in Georgien und Mamuka engagiert sich in Umwelt- und Kulturprojekten.'
  },
  {
      videoUrl: 'https://player.vimeo.com/video/77050909?h=f201c73c85',
      descrb:'Pavle Zereteli: Der 81-jährige erlebte die Anfänge des Stahl- und Eisenkombinats in Rustavi mit und hat Generationen von Stahlarbeiten ausgebildet. Nach dem Zusammenbruch der Sowjetunion setzte er sich beim damaligen Präsidenten Gamsachurdia für die Rettung des Werkes ein. Auch heute noch kommt er täglich ins Werk und berät die Geschäftsleitung.'
  },
];


let pictureDataDe = [
  {
    id: 1,
    description: 'Die Hauptstadt der Region Mengrelien-Oberswanetien ist die georgische Stadt, die der de facto-Grenze mit der abtrünnigen Teilrepublik Abchasien am nächsten liegt. Über die Inguri-Brücke am Rande Sugdidis wird der eingeschränkte Grenzverkehr abgewickelt. Im Schloss Dadiani, dem früheren Sitz der Prinzessin von Mengrelien, sind heute die Todesmaske Napoleons und ein Grabtuch der Gottesmutter Maria zu sehen. Junge Menschen aus der Region nehmen oft an Workshops und friedensstiftenden Programmen teil, die von internationalen NGOs organisiert werden. Dank der sozialen Medien ist ein neues Kommunikationsnetzwerk enstanden, mit dessen Hilfe aktiv über die Zukunft der vom Konflikt geprägten Region diskutiert wird'
  },
  {
    id: 2,
    description: ' Die georgische Hafenstadt wurde in der Antike als griechische Kolonie mit dem Namen Batis gegründet. Die Skyline der Stadt ist immer wieder verändert worden und die Vororte mit ihren kleinen Holzhäusern und sowjetischen Wohnblocks reichen bis weit in die Hügelkette des Kleinen Kaukasus hinein. Die in den letzten Jahren neu entstandenen Bauten wie der Alphabet-Turm, die Technische Universität, die Public Service Hall und futuristische Hotel- und Restaurant-Komplexe haben die Atmosphäre allerdings komplett verändert. Viele Bewohner befürchten angesichts der gestiegenen Zahl an ausländischen Touristen und Investoren eine Überfremdung. In der Zukunft hoffen sie, wieder eine wichtigere Rolle im Leben ihrer Stadt zu spielen. '
  },

  {
    id: 3,
    description:  ' Das kleine Dorf und die gleichnamige Region in Ostgeorgien führen ihren historischen Namen Samuchranbatono auf einen Zweig der georgischen Königsfamilie, die Muchran-Batonis, zurück. Schloss Muchrani wurde 1873 von Prinz Iwane Bagrationi von Muchrani erbaut, der nicht nur General in der Armee des russischen Imperiums, sondern auch erfolgreicher Winzer war. Nachdem das Schloss während der Sowjetzeit zunehmend zerfiel, wurde es inzwischen renoviert und ist als „Chateau Mukhrani” Symbol eines der angesehensten Weingüter im Land. '  
  },

  {
    id: 4,
    description: ' Die Hauptstadt Georgiens trägt seit 1936 den georgischen Namen „Tbilissi” wegen ihrer heißen Schwefelquellen („tbili” = warm). Sie ist mit 1,5 Millionen Einwohnern die einzige Großstadt des Landes. Die Überreste der „ersten Europäer”, Seswa und Msia, die man bei archäologischen Ausgrabungen 2001 entdeckte, werden im Janaschia-Museum im Herzen der Stadt aufbewahrt. Nachdem in den letzten Jahren viele Neubauten das Stadtbild nicht nur positiv verändert haben, melden sich immer mehr Bürger zu Wort, um die Zerstörung alter Gebäude und traditionsreicher Plätze in ihrer Stadt zu verhindern. Vor allem Studenten und junge Wissenschaftler, die im Ausland studiert haben, spielen bei den Protesten eine entscheidende Rolle.  '
  },
  {
    id: 5,
    description:  ' Rustawi ist eine der ältesten Städte Georgiens, wurde aber im 13. Jahrhundert durch die Mongolen fast völlig zerstört und erst in der Sowjetzeit als Zentrum der Schwerindustrie wiederaufgebaut. Auf Befehl Stalins entstand hier in den 1940er-Jahren das größte Stahlwerk des Kaukasus – über 100 Industriebetriebe siedelten sich an. Vom Zusammenbruch der Sowjetunion hat sich die Stadt nie wirklich erholt. Industrieruinen und Trabantenstädte prägen heute das Stadtbild. Viele junge Bewohner suchen Anschluss an die westliche Lebensweise über Nichtregierungsorganisationen (NGOs) oder arbeiten im nur 25 km entfernten Tiflis. ' 
  }
]

let dataSliderDe = [
  {
    id: 0,
    text: 'Am 9. März kommt es zur blutigen Niederschlagung antisowjetischer Proteste in Tiflis, die als friedliche Demonstrationen für den verstorbenen Diktator Stalin begonnen hatten. Mehr als 100 zumeist junge Menschen werden von sowjetischen Einsatzkräften getötet. '
  },
  {
    id: 1,
    text: 'Nikita Chruschtschow, kommunistischer Partei- und Regierungschef der Sowjetunion besucht Tiflis zur Zeit der Tauwetterperiode zwischen Ost und West.'
  },
  {
    id: 2,
    text: 'Dynamo Tiflis wird Sowjetischer Fußballmeister. Es ist erst das zweite Mal (nach Dynamo Kiew 1960), dass eine nicht-russische Mannschaft den Titel holt.'
  },
  {
    id: 3,
    text: 'Am 21. August marschiert die sowjetische Armee in Prag ein und beendet gewaltsam den „Prager Frühling“. '
  },
  {
    id: 4,
    text: 'Wassil Mschawadnadse, 1. Sekretär des Zentralkommittees der Georgischen Kommunistischen Partei, tritt ab und Eduard Schewardnadse wird als Nachfolger gewählt.'
  },  
  {
    id: 5,
    text: 'Die erste georgische Menschenrechtsorganisation, die georgische Helsinki-Gruppe, wird von Merab Kostawa, Swiad Gamsachurdia und Wiktor Rzchiladse gegründet.'
  },
  {
    id: 6,
    text: ' Vom 8. bis 16. März findet in Tiflis das erste Rockfestival der Sowjetunion statt: „Der Rhythmus des Frühling“. Wenige Monate zuvor war die sowjetische Armee in Afghanistan einmarschiert.'
  },
  {
    id: 7,
    text: ' Patriarch Ilia II besucht das Katharinenkloster auf dem Sinai. In der Bibliothek werden wichtige georgische Schriften verwahrt. '
  },
  {
    id: 8,
    text:  ' In Tiflis kommt es zu Massenprotesten. Hauptforderung ist der Austritt Georgiens aus der Sowjetunion. Wenige Monate später kommt es zur blutigen Niederschlagung der Proteste durch sowjetische Truppen (9. April 1989).'
  } 
]

let radioDataDe = [
  {
    text: 'Niaz Diasamidze ist der Leadsänger der Gruppe 33a, einer georgischen Folk-Rock-Band, die 1994 in Tiflis gegründet wurde. Die Band verbindet vor allem Folk-Einflüsse aus Georgien und Frankreich mit Pop und Reggae-Elementen. Die Liedtexte sind meist georgisch oder französisch. Der Name 33a bezieht sich auf die Hausnummer in der Paliaschwili-Straße in Tiflis, in der Niaz Diasamidze lebt.' ,
  },
  {
    text: 'Gacha ist ein junger, aufstrebender Künstler aus Georgien, dem es gelingt, verschiedene Stilrichtungen der elektronischen Musik zu kombinieren und daraus einen ganz eigenen Sound zu kreieren. Dieses Debütalbum ist perfekt, um sich zu entspannen. Eine Soundlandschaft, die ganz zum Stil von Apollo Records passt, einem Ableger von R&S Records (Renaat Vandepapeliere). ',
  },
  {
    text: 'Soft Eject ist georgischer Folk Rock vom Feinsten. Die Band gründete sich 1989 und kombiniert georgische und europäische Folk-Einflüsse mit psychedelischen Klängen und Rockmusik. Die Texte sind meist englisch. Die Band besteht derzeit aus sechs Mitgliedern - Vaho Babunashvili (Bass, voc.), Nodar Manchkhashvili (Percussion), Giorgi Kobakhidze (Gitarre, voc.), Sandro Nikoladze (Flöte, Leier), Emzar Burduli (Waldhorn, voc.) und Anna Sikharulidze (Akkordeon, Keyboards).',
  },
  {
    text: 'Die 2009 vom jungen Dichter Zura Jishkariani gegründete Gruppe Kung Fu Junkie spielt Electronic Pop. Chring und Zura Jishkariani sind die Sänger der Gruppe, Linda Folio an der Gitarre, CutDaKill und Max Machiadze MC. Sie singen auf georgisch und englisch. Auf ihrer Facebookseite schreibt die Gruppe, dass sie vom chinesischen Kommunismus und William Burroughs beeinflusst worden sei.',
  },
  {
    text: 'Die georgisch-französische Punkband der 2000-er-Jahre wurde von Sänger und Gitarrist Fred Paian gegründet. Die Texte ihrer drei veröffentlichten Alben drehen sich meist um soziale und gesellschaftliche Probleme – zu einer Zeit, als es fast keine Elektrizität in Georgien gab, weshalb die Band sich auch den Namen Schuki Movida („Der Strom ist da”) gab',
  },
  {
    text: `Nika Machaidze ist ein georgischer Filmregisseur und Elektromusiker. Er produzierte den Soundtrack für das Stück „Der Park” von Botho Strauß und macht Musik für Modeschauen und Fernsehproduktionen. Er ist Mitglied der Goslab-Gruppe`,
  }
]

let characterTextDataDe = [
  {
      videoUrl: 'https://www.youtube.com/embed/lHL8jpipT-A',
      textDescription: "Tea Tsulukiani (geb. 1975) wurde nach den Parlamentswahlen 2012 von Bidsina zur Justizministerin berufen. Tsulukiani, die als beliebteste Politikerin im Land gilt, hat Großteil ihres Lebens in Frankreich verbracht. Sie absolvierte einen Teil ihrer Schulbildung Lyon, machte ihren Master an der École nationale d’administration (ENA), arbeitete im Stab eines französischen Präfekten und zehn Jahre als Anwältin am Europäischen Gerichtshof für Menschenrechte in Straßburg. Sie kehrte 2010 nach Georgien zurück und schloss sich der Freien Demokratischen Partei des ehemaligen UN-Botschafters Irakli Alasania an, der sich wegen des kurzen Krieges mit Russland 2008 mit Präsident Saakaschwili überworfen hatte. Nach ihrem Amtsantritt als Justizministerin kam es zu einer Welle von Verhaftungen ehemaliger Amtsträger der vorherigen Administration und einer Amnestie für Tausende „politischer“ Häftlinge. Als eines ihrer wichtigsten Ziele benennt sie die Reform der Justiz und die Trennung von Staatsanwaltschaft und Exekutive. Mit ihren Vorschlägen eines vor allem die Arbeiterrechte stärkenden Gesetzes konnte sie sich allerdings nicht durchsetzen. Zu ihren Zukunftsprojekten gehören die Stärkung von Frauen- und Minderheitenrechten sowie die Liberalisierung der Drogengesetze."
  },
  {
      videoUrl: 'https://www.youtube.com/embed/xWj8Y4fiuoQ',
      textDescription: "Metropolit Bischof Kalistrate (geb. 1938) steht seit rund 30 Jahren der Eparchie von Kutais-Gaenati vor und gilt als höchster kirchliche Würdenträger in Westgeorgien. Er wurde als Schota Ilia Margalitaschwili in der Weinregion Kachetien geboren und studierte nach dem Armeedienst zunächst Ingenieurwesen im russischen Woronesch und am Pädagogischen Institut von Telavi. Er heiratete und wurde Vater eines Sohnes, trat dann aber 1982 als Novize ins Kloster von Betania ein, wurde noch im selben Jahr Mönch und bereits ein Jahr später zum Bischof berufen. 1985 reiste er im Auftrag des georgischen Patriarchen Ilia II nur wenige Wochen nach dem Reaktorunglück nach Tschernobyl, um in der Todeszone Trost zu spenden. 1992 wurde er in den Rang eines Metropoliten erhoben. Bis 2010 war Bischof Kalistrate Rektor der religiösen Akademie des Klosters von Gelati und des theologischen Instituts in Kutaissi, in welchem er kunsthistorische, journalistische und medizinische Fakultäten einrichten ließ. In seiner Amtszeit wurden fünf neue Eparchien in Westgeorgien eröffnet und über 300 Kirchen, Kapellen und Klöster von ihm eingeweiht. Kalistrate ist Träger des Briliant-Kreuzes und des Goldenen Ordens des Heiligen Georg, zwei der höchsten Auszeichnungen der georgisch-orthodoxen Kirche."
  },

  {
      videoUrl: 'https://www.youtube.com/embed/n6aPQrCI9pU',
      textDescription: "Bidsina Iwanischwili (geb. 1956) ist mit einem geschätzten Vermögen von über 6,5 Milliarden US-Dollar der reichste Mann in Georgien. 2011 trat der Geschäftsmann in die Politik ein und wurde zum mächtigen Gegenspieler von Präsident Saakaschwili. Iwanischwili gründete Anfang der 90er-Jahre in Russland die „Rossiskij Kredit“-Bank und stieg in Moskau rasch zu einem Oligarchen der zweiten Reihe auf. Wegen seiner bis heute engen Kontakte zu Russland werfen ihm seine politischen Gegner vor, ein Agent des Kreml zu sein. Dennoch gewann das von ihm gegründete Parteienbündnis „Georgischer Traum“ die Parlamentswahlen 2012 und der Milliardär wurde Premierminister. Durch eine bereits vor dem Machtwechsel beschlossene Verfassungsreform erhielt er somit die Schlüsselposition für die Ausrichtung der georgischen Politik. Iwanischwili leitete eine Annäherung an Russland ein und pflegt enge Kontakte zur christlich-orthodoxen Kirche, die als wichtiges Bindeglied zwischen Russland und Georgien gilt. Gleichzeitig betonte Iwanischwili, den Westkurs fortsetzen und die Anbindung an EU und NATO vorantreiben zu wollen. Iwanischwili ist verheiratet und hat drei Kinder. Sein Adoptivsohn Bera ist ein populärer Rapper."
  },
  {
      videoUrl: 'https://www.youtube.com/embed/xa_DQX13Sgw',
      textDescription: "Dato Imnaischwili (geb. 1954) arbeitet seit mehr als 30 Jahren als Automechaniker in Tiflis und hat sich vor allem auf die Reparaturen russischer Fahrzeugmodelle spezialisiert. Er wurde im russischen Swerdlowsk (Jekaterinburg) geboren. Erst als er zwölf Jahre alt war, zogen seine Eltern zurück nach Georgien. Nach seinem Wehrdienst in der sowjetischen Armee in Nowosibirsk (Russland) absolvierte er in den 70er Jahren eine technische Ausbildung zum Kfz-Mechaniker. 1980 trat er in den Dienst bei den staatlichen Autowerkstätten Nummer 1 für Dienstfahrzeuge und Taxis im Bezirk Isani ein. Durch den Zusammenbruch der Sowjetunion verlor er seine feste Anstellung und arbeitet seitdem auf eigene Rechnung. Seit einer schweren Gasexplosion 2007, bei der mehrere seiner Kollegen ums Leben kamen, mietet er eine Reparatur-Garage in einem benachbarten Werkstattareal. Imnaischwili lebt mit Frau, Tochter und Schwägerin in einem Tiflisser Hinterhof und ist seit sechs Jahren stolzer Opa."
  },
  {
      videoUrl: 'https://www.youtube.com/embed/-GkQaaxfk8k',
      textDescription: "Lascha Bakradse (geb. 1965) ist einer der streitbarsten Intellektuellen Georgiens. Der Direktor des Nationalen Literaturmuseums studierte Literatur- und Sprachwissenschaft in Tiflis, Germanistik in Jena, Politik in Potsdam und Theologie in Bern. Nach einem Promotionsstudium an der Humboldt-Universität Berlin promovierte er in Tiflis mit einer Dissertation über die deutsch-georgischen Beziehungen während des Ersten Weltkriegs. Bakradse arbeitete für das Georgische Auswärtige Amt, als Journalist für verschiedene georgische Medien und als Programmreferent des Goethe-Instituts. Er schrieb den bis heute meist genutzten deutschen Sprachführer für Georgisch und ist seit 1999 in mehreren Filmen als Schauspieler aufgetreten, u.a. als Hauptdarsteller in „Lost Killers“ von Regisseur Dito Tsintsadse. 2006 übernahm er die Leitung der Abteilung für Filmarchivierung und Restauration im Georgischen Nationalen Filmzentrum und ist seit 2010 assoziierter Professor an der Ilia Universität in Tiflis. Bakradse unterstützt regelmäßig Kunstprojekte, engagiert sich für die Menschenrechte in Georgien und nimmt immer wieder in den Medien zur gesellschaftlichen Entwicklung seines Landes Stellung."
  },
  {
      videoUrl: 'https://www.youtube.com/embed/jgD7BIFD0xY',
      textDescription: "Michail („Mischa“) Saakaschwili (geb. 1967) stürmte 2003 mit einer Rose ins georgische Parlament und jagte den sich durch Wahlmanipulationen an der Macht haltenden Präsidenten Eduard Schewardnadze aus dem Amt. Nach dieser „Rosenrevolution“ wurde er selbst zum Präsidenten gewählt und hat in den knapp neun Jahren seiner Amtszeit Georgien auf einen radikalen Westkurs getrimmt. In seiner Ära wurden Polizei und Behörden reformiert, wichtige Straßen gebaut und mit dem Bau einer neuen Eisenbahnverbindung nach Europa begonnen. Bei den Georgiern sind vor allem seine ehrgeizigen Bauprojekte umstritten, mit denen er das Land auch visuell ins 21. Jahrhundert führen wollte – vor allem in der Hafenstadt Batumi. Ein weiteres ehrgeiziges Projekt war „Lasika“: In den georgischen Sümpfen am Schwarzen Meer sollte ein kaukasisches Dubai gebaut werden. 2008 kam es zu einem kurzen Krieg mit Russland um die abtrünnige Provinz Samotschablo („Süd-Ossetien“), für dessen Ausbruch Kritiker auch Saakaschwili verantwortlich machen. Seine zweite Amtszeit wurde von Korruptions- und Foltervorwürfen gegen Mitglieder seiner Regierungspartei überschattet, was maßgeblich zur Niederlage seiner „Nationalen Bewegung“ bei den Parlamentswahlen 2012 beigetragen hat. Saakaschwili ist mit der Niederländerin Sandra Roeloffs verheiratet und hat zwei Söhne."
  },
]

let titleArrayDe = [
  {title: 'Kalibrierung'},
  {title: 'nach Produktion'},
  {title: 'HD kopieren'},
  {title: 'FAD-Fertigung'},
  {title: 'Filmmusiken'},
  {title: 'Sowie'},
  {title: 'Regisseur und Produzent'},
  {title: 'Produktionsleiter Tiflis'},   
  {title: 'Manager oder Inspizient'},
  {title: 'Elektriker Assistent'},
  {title: 'Produktionsabteilung Tiflis'},
  {title: 'Kölner Produktionsteam'},
  {title: 'Kameramann'},
  {title: 'DSLR-Kamera'},
  {title: '2. Einheit'},
  {title: 'Seine'},
  {title: 'Mischung TV & Sound Design'},
  {title: 'Mischung 5.1. & Web'},
  {title: 'Montage'},
  {title: 'Programmeinheit'},
  {title: 'Programmeinheit Geopolitik (ARTE Straßburg)'},
  {title: 'Redaktionsassistentin Köln'},
  {title: 'WDR-Produktionsleiter'},
  {title: 'Film- und Medienstiftung NRW'},
  {title: '(Erstsendung am 22. Oktober 2013 auf ARTE)'},
  {title: 'Sprecher (ARTE)'},
  {title: 'textes supplémentaires'},
  {title: 'Web-Lautsprecher'},
  {title: 'Übersetzungen'},
  {title: 'Originaltexte'},
  {title: 'Casting und Anpassung'},
  {title: 'Webdesign und technische Umsetzung'},
  {title: 'Grafik, Animation & Posterdesign'},
  {title: 'Web Editor'},
  {title: 'Produziert und bearbeitet von Website'}
]

function videoDataLanguageChangeDe() {
  for (let i = 0; i < videoData.length; i++) {
    const element = videoData[i];
    element.descrb = videoDataDe[i].descrb;
    element.videoUrl = videoDataDe[i].videoUrl;
  }
}


function picturesDataLanguageChangeDe(){
  for (let i = 0; i < pictureData.length; i++) {
    const element = pictureData[i];
    element.description = pictureDataDe[i].description;
  }
}

function sliderDataLanguageChangeDe(){
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.text = dataSliderDe[i].text;
    let sliderText = document.getElementById('text');
    sliderText.textContent = dataSliderDe[0].text;
  }
}

function radioDataLanguageChangeDe(){
  for (let i = 0; i < radioData.length; i++) {
    const element = radioData[i];
    element.text = radioDataDe[i].text;
    let sliderText = document.getElementById('singer-info');
    sliderText.textContent = dataSliderDe[0].text;
  }
}

function characterDataLanguageChangeDe() {
  for (let i = 0; i < characterTextData.length; i++) {
    const element = characterTextData[i];
    element.textDescription = characterTextDataDe[i].textDescription;
    element.videoUrl = characterTextDataDe[i].videoUrl;
  }
}

function titleLanguageChange(){
  let titlesFr = document.querySelectorAll('.info-title');
  for (let i = 0; i < titlesFr.length; i++) {
    const element = titlesFr[i];
    element.textContent =  titleArrayDe[i].title;
  }
}

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}
  
if (window.location.hash) {
 if (window.location.hash == "#de") {
    videoDataLanguageChangeDe();
    picturesDataLanguageChangeDe();
    sliderDataLanguageChangeDe();
    radioDataLanguageChangeDe();
    characterDataLanguageChangeDe();
    titleLanguageChange();
  }
}






