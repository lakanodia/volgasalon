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
  if (value > 2700 && value < 3500 ){
    section5Parallax.style.top = "-18rem";
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
    videoUrl: "https://player.vimeo.com/video/80313882?h=ec3bb451ce",
    descrb:
      "Maka Samushia: The 25-year-old journalist works for the Mingrelian television station 'Odishi'. During the Russian-Georgian war in 2008, when Russian troops occupied large parts of western Georgia, she experienced Zugdidi as a 'ghost town'. With her colleague Tamar Lataria she is working on a television series about the European Union monitoring mission in Georgia.",
  },
  {
    id: 2,
    videoUrl: "https://player.vimeo.com/video/80312234?h=ab1029f8f0",
    descrb:
      "Frida: The artist sets up her temporary 'Shell Café' every summer in the resort town of Kvariati, a couple of kilometers south of Batumi. The beach town is very popular among young people and the artistic community – and Frida’s place is famous for its Chvishtari (corn bread with cheese).",
  },

  {
    id: 3,
    videoUrl: "https://player.vimeo.com/video/80312237?h=5ea0b03c5b",
    descrb:
      "Metropolitan Bishop Kalistrate: The clergyman has had a tremendous career. He left his wife and son for a monastic life before later becoming the bishop of western Georgia’s main eparchy. He drives around Kutaisi in a black Volga 24.",
  },

  {
    id: 4,
    videoUrl: "https://player.vimeo.com/video/80312235?h=fc72ca80cd",
    descrb:
      "Giorgi Gotsiridze: As the son of a well-known Georgian glacier researcher, Goza went on his first mountain trip at the age of 6 months. The geographer lives for the mountains and has become a specialist in the development of ski areas and new mountain resorts in remote regions of Georgia.",
  },

  {
    id: 5,
    videoUrl: "https://player.vimeo.com/video/80312238?h=293cdf8e9b",
    descrb:
      "Mamuka Khazaradze: Mukhrani’s ‘Château’ is a favorite project of the banker from Tbilisi. It is currently being restored to become a small hotel with an open-air theater and stables. Mamuka loves horses and rides along the high routes in the Greater Caucasus mountains every year.",
  },
  {
    id: 6,
    videoUrl: "https://player.vimeo.com/video/80313880?h=473233a510",
    descrb:
      "Mamuka Khasaradze: The banker founded his empire with business students in the 1990s when only a capital of $500 was needed to start a bank. ‘His’ TBC Bank is now the second largest bank in Georgia and Mamuka is involved in several environmental and cultural projects.",
  },
  {
    id: 7,
    videoUrl: "https://player.vimeo.com/video/80312242?h=3d577944b4",
    descrb:
      "Pavle Tsereteli: The 81-year-old steel specialist experienced the beginnings of the steel and iron industry in Rustavi after World War II, and has trained generations of steel workers ever since. After the collapse of the Soviet Union, he played a decisive role in the talks with Georgia’s then-President, Zviad Gamsakhurdia, to keep the factory running and to save many jobs. He still comes to work every day and now advises the company’s management.",
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
    imageUrl1: "images/map/zugdidi/zugdidi01.jpg",
    imageUrl2: "images/map/zugdidi/zugdidi02.jpg",
    imageUrl3: "images/map/zugdidi/zugdidi03.jpg",
    imageUrl4: "images/map/zugdidi/zugdidi04.jpg",
    imageUrl5: "images/map/zugdidi/zugdidi05.jpg",
    imageUrl6: "images/map/zugdidi/zugdidi06.jpg",
    description:
      "  The capital of the Mingrelia-Upper Svaneti region is the city in Georgia closest to the de facto border with the breakaway republic of Abkhazia. A restricted border traffic takes place right on the city’s northern edge, on the Enguri bridge. Napoleon’s death mask and a robe of the Virgin Mary can be seen today in the Dadiani palace, the former seat of the Princess of Mingrelia. Young people from the region often take part in workshops and peace-building programmes organized by international NGOs. A new communications network has been set up thanks to social media. ",
  },
  {
    id: 2,
    imageUrl1: "images/map/batumi/batumi01.jpg",
    imageUrl2: "images/map/batumi/batumi02.jpg",
    imageUrl3: "images/map/batumi/batumi03.jpg",
    imageUrl4: "images/map/batumi/batumi04.jpg",
    imageUrl5: "images/map/batumi/batumi05.jpg",
    imageUrl6: "images/map/batumi/batumi06.jpg",
    description:
      " The Georgian port city was founded in antiquity as a Greek colony named Bathys. The skyline of the city has been changed over and over again. The suburbs with their little wooden houses and Soviet apartment blocks reach far into the hills of the Lesser Caucasus. Over the past few years, however, new buildings such as the Alphabet tower, the Technical University, the Public Service Hall and futuristic hotel and restaurant complexes have changed the atmosphere completely. The growing number of tourists and modern buildings have alienated citizens and made them nostalgic. For the future, many of them hope to play a more important role in their city’s development. ",
  },

  {
    id: 3,
    imageUrl1: "images/map/kutaisi/qutaisi01.jpg",
    imageUrl2: "images/map/kutaisi/qutaisi02.jpg",
    imageUrl3: "images/map/kutaisi/qutaisi03.jpg",
    imageUrl4: "images/map/kutaisi/qutaisi04.jpg",
    imageUrl5: "images/map/kutaisi/qutaisi05.jpg",
    imageUrl6: "images/map/kutaisi/qutaisi06.jpg",
    description:
      " For centuries Kutaisi has been the cultural and political center of western Georgia. King Aeëtes (from the Argonaut’s myth) and the most powerful king in Georgian history, David the Builder, had their palaces in the city’s surroundings, where the Georgian Parliament now stands. While politicians argue over whether the Parliament should stay in Kutaisi or return to the capital, Tbilisi, the citizens of Kutaisi have adopted new aspects of modern city life, such as “guerrilla gardening”. ",
  },

  {
    id: 4,
    imageUrl1: "images/map/gudauri/gudauri01.jpg",
    imageUrl2: "images/map/gudauri/gudauri02.jpg",
    imageUrl3: "images/map/gudauri/gudauri03.jpg",
    imageUrl4: "images/map/gudauri/gudauri04.jpg",
    imageUrl5: "images/map/gudauri/gudauri05.jpg",
    imageUrl6: "images/map/gudauri/gudauri06.jpg",
    description:
      "The rapidly growing ski resort of Gudauri lies on the southern slopes of the Greater Caucasus mountain range. It’s only a couple of kilometers up the Georgian Military Highway from the Cross Pass – the only motorable road over the Caucasus. Winter sports enthusiasts rave about the snow in Gudauri, the ‘best powder in the Caucasus’. Peaks well over 4,000 meters high can be reached by helicopter. Many of the legendary deep-snow descents, however, are now no longer available for heli-skiers, as they are within the boundaries of the Samachablo region of Georgia, now occupied by Russia. A modern cable-car was built by a French company in 2012 and a new ski-lift has been planned to connect the Terek valley in the North with the Gudauri ski circus. ",
  },

  {
    id: 5,
    imageUrl1: "images/map/muxrani/mukhrani1.jpg",
    imageUrl2: "images/map/muxrani/mukhrani2.jpg",
    imageUrl3: "images/map/muxrani/mukhrani3.jpg",
    imageUrl4: "images/map/muxrani/mukhrani4.jpg",
    imageUrl5: "images/map/muxrani/mukhrani5.jpg",
    imageUrl6: "images/map/muxrani/mukhrani6.jpg",
    description:
      " The little village and its surroundings were historically known as ‘Samukhranbatono’ after a branch of the Georgian royal family, the Mukhran-Batoni. Mukhrani’s ‘Château’ was built in 1873 by Prince Ivane Bagrationi of Mukhrani, who was not only a general in the Russian imperial army but also a successful wine-maker. The château slowly fell into disrepair during the Soviet era, but has since been renovated and is now known as ‘Château Mukhrani’. Its logo now adorns the label of one of the country’s most prestigious wineries. ",
  },

  {
    id: 6,
    imageUrl1: "images/map/tbilisi/tbilisi01.jpg",
    imageUrl2: "images/map/tbilisi/tbilisi02.jpg",
    imageUrl3: "images/map/tbilisi/tbilisi03.jpg",
    imageUrl4: "images/map/tbilisi/tbilisi04.jpg",
    imageUrl5: "images/map/tbilisi/tbilisi05.jpg",
    imageUrl6: "images/map/tbilisi/tbilisi06.jpg",
    description:
      " Georgia’s capital, Tbilisi, which was renamed in 1936, was named after its hot sulfur springs ('tbili' in Georgian = warm); 1.5 million people call the country’s only major city ‘home’. The remains of the ‘first Europeans’, Zezva and Mzia, whose remains were discovered during archaeological excavations in 2001, are kept in the Janashia Museum in the heart of the city. In recent years, many new buildings have changed the city’s appearance. More and more citizens are beginning to speak up to prevent the destruction of old buildings and traditional places in their city. Students and young scientists who have studied abroad play a particularly crucial role in this process. ",
  },
  {
    id: 7,
    imageUrl1: "images/map/rustavi/rustavi_01.jpg",
    imageUrl2: "images/map/rustavi/rustavi_02.jpg",
    imageUrl3: "images/map/rustavi/rustavi_03.jpg",
    imageUrl4: "images/map/rustavi/rustavi_04.jpg",
    imageUrl5: "images/map/rustavi/rustavi_05.jpg",
    imageUrl6: "images/map/rustavi/rustavi_06.jpg",
    description:
      " Rustavi is historically one of the oldest cities in Georgia, but in the 13th century it was almost completely destroyed by the Mongols. It was rebuilt from scratch in the Soviet era as a center of heavy industry. Following Stalin's orders in the 1940s, the largest steel plant in the Caucasus was erected and over 100 factories were built here. The city, today a mix of industrial ruins and satellite towns, never really recovered from the collapse of the Soviet Union. Many young residents seek to join the Western way of life through non-governmental organizations (NGOs) or work in Tbilisi, which is only 25 kilometers away. ",
  },
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
    text: "A large, pro-Stalin demonstration is held in Tbilisi to commemorate the 3rd anniversary of his death; over 100 young protesters are killed by government troops on the 9th of March. The first ‘Volga’ model, designed by Lev Yeremeev, replaces the venerated GAZ ‘Pobeda’.",
    year: "1956",
  },
  {
    id: 1,
    text: "Nikita Khrushchev, First Secretary of the Communist Party of the Soviet Union, visits Tbilisi. The second ‘Volga’ model, the ‘Volga 22’, becomes a status symbol in the Soviet Union.",
    year: "1960",
  },
  {
    id: 2,
    text: "Tbilisi’s ‘Dinamo’ football team wins the Soviet Union championship—the second non-Russian team to win after the Ukraine in 1960. Estate versions of Volga cars are used as taxi cabs, police interceptors and ambulances. ",
    year: "1964",
  },
  {
    id: 3,
    text: " On the 21st of August, the Soviet Army invades Prague. The development of the ‘Volga 24’ is completed, but only 31 units are built in 1968, primarily for road tests, followed by a further 215 units in 1969. In total, 639,478 Volgas were built between 1956 and 1970.",
    year: "1968",
  },
  {
    id: 4,
    text: "Vasil Mzhavanadze, the first Secretary of the Central Committee of Georgia, retires, and Eduard Shevardnadze is elected. The ‘Volga 24-02’, a 4-door station wagon, is introduced. This model was only sold with a special permit reserved for families with many children or athletes needing to transport sports equipment. An exception was made for the famous clown and actor Yuri Nikulin, as he often transported heavy circus equipment.",
    year: "1972",
  },
  {
    id: 5,
    text: "The first Georgian organization for human rights, the Georgian Helsinki Group, is established by Merab Kostava, Zviad Gamsakhurdia and Viktor Rtskhiladze. The ‘Volga 24’ was completely redesigned in 1976-78; safety was improved, and the new interior was available in red, brown, yellow, lime green, dark green, dark blue or black.",
    year: "1976",
  },
  {
    id: 6,
    text: "The Soviet Union’s first rock festival, ‘Rhythms of the Spring’, is held in Tbilisi from the 8th to the 16th of March. The war in Afghanistan continues.A special fleet of white-and-yellow Volga sedans and station wagons are built for the Moscow 1980 Summer Olympics. The new Volgas accompanied the Olympic Torch. The colour scheme was chosen by the local Moscow organizers.",
    year: "1980",
  },
  {
    id: 7,
    text: "Patriarch Ilia II visits Saint Catherine's Monastery on Mount Sinai, whose library contains many important Georgian manuscripts. The Soviet of Ministers authorized the long-delayed assembly of the ‘Volga 31’ in 1981, but the new model was not presented at a Soviet car show until 1984 and the first cars only left the factory in 1985.",
    year: "1984",
  },
  {
    id: 8,
    text: "Mass student demonstrations are held in Tbilisi; their main demand is Georgia’s independence from the Soviet Union. Despite the Volga’s status in the Soviet Union and the quality of its assembly, by the mid-1980s it was already an out-of-date automobile compared to its Western equivalents.",
    year: "1988",
  },
];

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
    name: "33a",
    text: "Niaz Diasamidze is the leading singer of the group 33a, a Georgian folk-rock band founded in 1994 in Tbilisi. The band combines folk influences mainly from Georgia and France with pop and reggae elements. The lyrics are mostly Georgian or French. The name is a reference to Diasamidze's home address in Tbilisi, 33a Paliashvili Street.",
    song1: "33a - Galaktioni",
    song2: "33a - Me Vzivar Navshi",
    song3: "33a - Saperavi Ampelography",
    audio1: "music/1/first_music",
    audio2: "music/1/second_music",
    audio3: "music/1/third_music",
  },
  {
    id: 1,
    name: "Gacha",
    text: "Gacha is a young aspiring artist from Georgia who is able to combine different styles of electronic music into new unique sound creations. His debut album is perfect for relaxing. ",
    song1: "Gacha - Burning",
    song2: "Gacha - Love You Down",
    song3: "Gacha - Open Chords",
    audio1: "music/2/first_music",
    audio2: "music/2/second_music",
    audio3: "music/2/third_music",
  },
  {
    id: 2,
    name: "Soft Eject",
    text: "Soft Eject is Georgian Folk Rock at its best. The band was formed in 1989 and combines Georgian and European folk influences with psychedelic sounds and rock music. The lyrics are mostly in English. The band currently consists of six members - Vakho Babunashvili (bass, voc.), Nodar Manchkhashvili (percussion), Giorgi Kobakhidze (guitar, voc.), Sandro Nikoladze (flute, lyre), Emzar Burduli (French horn, voc.) And Anna Sikharulidze (accordion, keyboards).",
    song1: "Soft Eject - A Dozing Day",
    song2: `Soft Eject - I'm On My Way`,
    song3: "Soft Eject - Please Just Carry On",
    audio1: "music/3/first_music",
    audio2: "music/3/second_music",
    audio3: "music/3/third_music",
  },
  {
    id: 3,
    name: "Kung Fu Junkie",
    text: "Founded by the young poet Zura Jishkariani in 2009, Kung Fu Junkie plays electronic pop. Chring and Zura Jishkariani are the singers of the group, Vinda Folio plays guitar, and Max CutDaKill Machiadze - MC. They sing in Georgian and English. On their Facebook page they claim to have been influenced by Chinese communism and William Burroughs.",
    song1: "Kung Fu Junkie - ANY",
    song2: "Kung Fu Junkie - BioRobot(acoustic)",
    song3: "Kung Fu Junkie - Flowerz In My Brain",
    audio1: "music/4/first_music",
    audio2: "music/4/second_music",
    audio3: "music/4/third_music",
  },
  {
    id: 4,
    name: "Shuki Movida",
    text: "The Georgian-French punk band was founded by singer and guitarist Fred Paian in the 2000-ies. The lyrics of their three albums mainly deal with social problems. The name means 'The power is back on' and is a reference to dark days in Georgia in the 1990s and early part of the 2000s when the electricity supply was unreliable across the country.",
    song1: "Shuqi Movida - Chouki Movida",
    song2: "Shuqi Movida - Jigoulis Kaci",
    song3: "Shuqi Movida - Minibusis Zaza",
    audio1: "music/5/first_music",
    audio2: "music/5/second_music",
    audio3: "music/5/third_music",
  },
  {
    id: 5,
    name: "Nikakoi",
    text: "Nika Machaidze is a Georgian film director and electronic musician. He produced the soundtrack for the play 'The Park' by Botho Strauß and makes music for fashion shows and television productions. He is a member of the Goslab Group.",
    song1: "Erast - Argentina",
    song2: "Erast - Cyberpunk",
    song3: "Nikakoi - Dzzenn",
    audio1: "music/6/first_music",
    audio2: "music/6/second_music",
    audio3: "music/6/third_music",
  },
];

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
    name: "TEA TSULUKIANI",
    position: "Minister of Justice",
    videoUrl: "https://player.vimeo.com/video/80864539?h=1aff42df80",
    textDescription:
      "Tea Tsulukiani (born 1975) became Minister of Justice of Georgia in the cabinet of Bidzina Ivanishvili after the parliamentary elections in October 2012. Tsulukiani, who is considered one of the people’s favourite politicians, has spent much of her life in France. She graduated from the Collège-lycée Ampère in Lyon, with an undergraduate degree. She obtained a Master's of Public Administration from the École Nationale d'Administration in Strasbourg, France. Tsulukiani worked for the Cabinet of the Prefect of the Department of Sarthe, France, and later was employed by the European Court of Human Rights as a lawyer. In 2010 she returned to Georgia and joined the opposition party Our Georgia – Free Democrats party headed Irakli Alasania, Georgia's former U.N. envoy (who had resigned from his post because of disputes with President Saakashvili about the 2008 war with Russia). The beginning of her tenure was marked by arrests of several officials from the previous government and by a mass amnesty for \"political prisoners\".She claims that her main goal is reforming the judicial system and retraining law-enforcement staff and prosecutors. She says she also prioritizes strengthening the rights of women and minorities, as well as the liberalization of drug laws.",
  },
  {
    id: 2,
    name: "ARCHBISHOP KALISTRATE",
    position: "Metropolitan of Kutaisi",
    videoUrl: "https://player.vimeo.com/video/80776667?h=1891fa8752",
    textDescription:
      "Archbishop Kalistrate (born 1938) has been in charge of the diocese of Kutaisi and Gaenati for 30 years and bears the highest ecclesiastical rank in western Georgia. He was born with the name Shota Margalitashvili in the wine-producing region of Kakheti. After completing military service in the Soviet army he studied engineering in Voronezh, Russia and graduated from Telavi Pedagogical Institute in Georgia. He married and became a father, but then decided to live in the Betania monastery, where he became a monk after seven years and was ordained as a bishop a year later. In 1985 he travelled to Chernobyl shortly after the nuclear accident as special envoy of the Georgian patriarch, Ilia II. Bishop Kalistrate was ordained as Metoropolitan and until 2010 he was the rector of the Gelati academy and the Kutaisi Institute of Theology, where he founded faculties of art history, journalism and medicine. During his stint in West Georgia, five dioceses were founded and more than 300 churches, chapels and monasteries built or restored. Metropolitan Bishop Kalistrate is holder of the Diamond Cross and St. George's Golden Medal, the two highest awards of Georgian Orthodox Church.",
  },

  {
    id: 3,
    name: "BIDZINA IVANISHVILI ",
    position: "Prime minister",
    videoUrl: "https://player.vimeo.com/video/80776665?h=a3435f39ba",
    textDescription:
      "Bidzina Ivanishvili (born 1956) is the richest living Georgian, with a fortune estimated by Forbes at more than 6.5 billion dollars. In 2011 he entered politics and became the most powerful leader of the opposition with the goal to hinder the continuation in power of President Mikheil Saakashvili. In the beginning of the 1990’s Ivanishvili established the Rossiyskiy Kredit bank in Moscow and soon established himself as an oligarch, although he kept a very low profile. Because of his ties with Russia, his political opponents accused him of being a stooge of the Kremlin. Nevertheless, his newly established Georgian Dream coalition won the parliamentary elections in 2012 and the billionaire became prime minister. Although he retired from his post one year after taking office, he still is regarded as a major force in Georgian politics. Ivanishvili has often spoken about the importance of improving relations with Russia and has close ties with the powerful Georgian Orthodox Church. At the same time, he claims that his party will retain the Western oriented foreign policy trajectory of former President Saakashvili's government and seeks to accelerate the process of integration with NATO and the European Union. Ivanishvili is married and has three sons, one of whom is a popular rapper.",
  },
  {
    id: 4,
    name: "DATO IMNAISHVILI",
    position: "Auto mechanic",
    videoUrl: "https://player.vimeo.com/video/80776666?h=cd3c2c27f6",
    textDescription:
      "Dato Imnaischwili (born 1954) spent the first years of his childhood in Sverdlovsk, Russia. His family moved back to Georgia only in 1966. He graduated from 91th secondary school in Tbilisi and then returned to Russia to serve in the Soviet Army in Novosibirsk (1973-75). After returning to Georgia, Dato earned a mechanics degree at a technical college and has worked as a car mechanic since 1980. Currently he is self-employed and rents a garage in Tbilisi’s Isani district. He married Marina Khvtisiashvili in 1976; they have a daughter and 6-year-old granddaughter Tamar Mariam. Dato loves good Georgian food and makes his own wine.",
  },
  {
    id: 5,
    name: "LASHA BAKRADZE",
    position: "Historian and journalist",
    videoUrl: "https://player.vimeo.com/video/80801467?h=d7445cfddc",
    textDescription:
      'Lasha Bakradze (born 1965) is an active Georgian intellectual. Now director of the National Museum of Literature, he studied linguistics and literature in Tbilisi, German studies in Jena, political science in Potsdam and theology in Bern. After post-graduate studies at Humboldt University in Berlin, he did his PhD in Tbilisi, with his thesis about Georgian-German relations during World War I. Bakradze has worked in the Georgian Foreign Ministry, as a journalist for Georgian media outlets and as programme coordinator at the Goethe Institute in Tbilisi. Since 1999 he has also acted in several films, including in the lead role in Dito Tsintsadze’s film "Lost Killers". In 2006 he took on the position of director of the department for film archive and film restoration at the Georgian National Film Centre. Since 2010 he has been a guest professor at Ilia State University. Bakradze regularly supports cultural projects, is concerned with the issue of human rights and the development of civil society in Georgia and regularly appears in local media.',
  },
  {
    id: 6,
    name: "MIKHEIL SAAKASHVILI",
    position: "President",
    videoUrl: "https://player.vimeo.com/video/76378020?h=ce038ac14c",
    textDescription:
      'Mikhael (Misha) Saakashvili (born 1967) burst into the Georgian parliament with a rose in his hand and forced then-President Eduard Shevardnadze to resign because of election fraud in 2003. A few months after this "Rose Revolution", Saakashvili won the presidency with more than 90% of the vote. He put the country on a firmly pro-Western course, angering Russia in the process. During his nearly 10-year reign the police and government bodies underwent important changes. Big infrastructure projects like highways and new railway stations were undertaken to set up new links with Europe. The port city of Batumi became Saakashvili\'s main playground for futuristic architecture as part of a visual remodelling concept for the country. One of "Misha’s" most ambitious projects was the construction of a new port city to be called Lazika, which was to become a "Caucasian Dubai" on the shores of the Black Sea. In 2008 Russia invaded Georgian territory as Georgian troops launched a large-scale bombardment of the town of Tskhinvali, in the breakaway region of South Ossetia following several days of clashes. Saakashvili was widely criticized at home and abroad for handling of events before and during the 5-day war and many accused him of starting the conflict. His second term in office was tainted by accusations of high level corruption and a major prison torture scandal, which had an important impact on the parliamentary elections in 2012, where his United National Movement party lost to the Georgian Dream coalition. He served his last year in office in awkward "cohabitation" with a government hostile to him and saw some of his close political allies put in prison. Since Saakashvili is married to Sandra Roelofs, who is from the Netherlands, and has two sons.',
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
    videoUrl: "https://player.vimeo.com/video/77050912?h=0beffb1750",
    descrb:
      "Maka Samuschia: Die 25-jährige Journalistin arbeitet für das mengrelische Fernsehen „Odischi“.Während des russisch-georgischen Krieges 2008, als russische Truppen große Teile Westgeorgiens besetzten, erlebte sie Zugdidi als „Geisterstadt“. Mit ihrer Kollegin Tamar Lataria arbeitet sie an einer mehrteiligen Fernsehreihe über die EU-Mission in Georgien.",
  },
  {
    videoUrl: "https://player.vimeo.com/video/77049851?h=a22aeb104b",
    descrb:
      "Frida: Die Künstlerin baut ihr „Café Muschel“ jedes Jahr selbst in Kvariati auf. Der Strand liegt südlich von Batumi und ist bei junge Leuten aus der Kulturszene und Bohemiens aus Tiflis sehr beliebt – wie Fridas Spezialitäten, z.B. das Chwischtari (Maisbrot mit Käse).",
  },

  {
    videoUrl: "https://player.vimeo.com/video/77938614?h=314aeaf597",
    descrb:
      "Metropolit Kalistrate: Der Geistliche hat eine enorme Karriere hingelegt. Er verließ seine Frau und seinen Sohn für ein klösterliches Leben, bevor er später Bischof der Haupteparchie in Westgeorgien wurde. Er fährt in einem schwarzen Wolga 24 durch Kutaissi.",
  },

  {
    videoUrl: "https://player.vimeo.com/video/77935326?h=32ecc3d333",
    descrb:
      "Giorgi Gotsiridze: Als Sohn eines bekannten georgischen Gletscherforschers unternahm Goza im Alter von 6 Monaten seine erste Bergtour. Der Geograph lebt für die Berge und hat sich zu einem Spezialisten für die Entwicklung von Skigebieten und neuen Bergresorts in abgelegenen Regionen Georgiens entwickelt.",
  },

  {
    videoUrl: "https://player.vimeo.com/video/77417883?h=2239825476",
    descrb:
      "Mamuka Khasaradze: Das Schloss Mukhrani ist ein Lieblingsprojekt des Bankers aus Tiflis. Er läßt es derzeit zu einem Hotel ausgebauen – mit kleinem Freilichttheater und Stallungen. Der Pferdeliebhaber reitet jedes Jahr auch in den Hochtälern des großen Kaukasus.",
  },
  {
    videoUrl: "https://player.vimeo.com/video/77051709?h=09aea399f7",
    descrb:
      "Mamuka Khasaradze: Der Banker begründete sein Imperium mit Wirtschaftsstudenten in den 90er Jahren, als Banken nur ein Startkapital von 500 Dollar vorweisen mussten. Die TBC-Bank ist heute die zweitgrößte Bank in Georgien und Mamuka engagiert sich in Umwelt- und Kulturprojekten.",
  },
  {
    videoUrl: "https://player.vimeo.com/video/77050909?h=f201c73c85",
    descrb:
      "Pavle Zereteli: Der 81-jährige erlebte die Anfänge des Stahl- und Eisenkombinats in Rustavi mit und hat Generationen von Stahlarbeiten ausgebildet. Nach dem Zusammenbruch der Sowjetunion setzte er sich beim damaligen Präsidenten Gamsachurdia für die Rettung des Werkes ein. Auch heute noch kommt er täglich ins Werk und berät die Geschäftsleitung.",
  },
];


let pictureDataDe = [
  {
    id: 1,
    description:
      "Die Hauptstadt der Region Mengrelien-Oberswanetien ist die georgische Stadt, die der de facto-Grenze mit der abtrünnigen Teilrepublik Abchasien am nächsten liegt. Über die Inguri-Brücke am Rande Sugdidis wird der eingeschränkte Grenzverkehr abgewickelt. Im Schloss Dadiani, dem früheren Sitz der Prinzessin von Mengrelien, sind heute die Todesmaske Napoleons und ein Grabtuch der Gottesmutter Maria zu sehen. Junge Menschen aus der Region nehmen oft an Workshops und friedensstiftenden Programmen teil, die von internationalen NGOs organisiert werden. Dank der sozialen Medien ist ein neues Kommunikationsnetzwerk enstanden, mit dessen Hilfe aktiv über die Zukunft der vom Konflikt geprägten Region diskutiert wird",
  },
  {
    id: 2,
    description:
      " Die georgische Hafenstadt wurde in der Antike als griechische Kolonie mit dem Namen Batis gegründet. Die Skyline der Stadt ist immer wieder verändert worden und die Vororte mit ihren kleinen Holzhäusern und sowjetischen Wohnblocks reichen bis weit in die Hügelkette des Kleinen Kaukasus hinein. Die in den letzten Jahren neu entstandenen Bauten wie der Alphabet-Turm, die Technische Universität, die Public Service Hall und futuristische Hotel- und Restaurant-Komplexe haben die Atmosphäre allerdings komplett verändert. Viele Bewohner befürchten angesichts der gestiegenen Zahl an ausländischen Touristen und Investoren eine Überfremdung. In der Zukunft hoffen sie, wieder eine wichtigere Rolle im Leben ihrer Stadt zu spielen. ",
  },

  {
    id: 2,
    description:
      " Über Jahrhunderte war Kutaissi das kulturelle und politische Zentrum Westgeorgiens. König Aietes (bekannt aus dem Argonauten-Mythos) und der mächtigste georgische König, David der Erbauer, hatten ihre Paläste im Umland der Stadt, die seit 2012 georgischer Parlamentssitz ist. Während die Politiker darüber streiten, ob sie in die Hauptstadt Tiflis zurückziehen sollen, führen die Bürger Kutaissis Hauptstadtpraktiken wie Guerilla Gardening ein. Vor allem die junge Bevölkerung der Stadt fordert bessere Bildungsmöglichkeiten, mehr Arbeitsplätze – und ein Kino. ",
  },

  {
    id: 2,
    description:
      "Unterhalb des Kreuzpasses an der georgischen Heerstraße liegt der rasch wachsende Skiort Gudauri an den Südhängen der Großen-Kaukasus-Kette. Wintersportler finden hier den besten Pulverschnee im Kaukasus. Mit dem Hubschrauber sind Gipfel von weit über 4000 Meter zu erreichen. Viele der legendären Tiefschnee-Abfahrten sind aber inzwischen für die Heli-Skifahrer nicht mehr zugänglich, da sie in der von Russland besetzten Teilregion Samatschablo („Süd-Ossetien”) liegen. Nachdem 2012 eine moderne Gondelbahn eröffnet wurde, plant man nun eine Skischaukel, die zur Nordseite führen soll, um in Zukunft mehr Gäste aus Russland nach Gudauri zu locken.",
  },

  {
    id: 3,
    description:
      " Das kleine Dorf und die gleichnamige Region in Ostgeorgien führen ihren historischen Namen Samuchranbatono auf einen Zweig der georgischen Königsfamilie, die Muchran-Batonis, zurück. Schloss Muchrani wurde 1873 von Prinz Iwane Bagrationi von Muchrani erbaut, der nicht nur General in der Armee des russischen Imperiums, sondern auch erfolgreicher Winzer war. Nachdem das Schloss während der Sowjetzeit zunehmend zerfiel, wurde es inzwischen renoviert und ist als „Chateau Mukhrani” Symbol eines der angesehensten Weingüter im Land. ",
  },

  {
    id: 4,
    description:
      " Die Hauptstadt Georgiens trägt seit 1936 den georgischen Namen „Tbilissi” wegen ihrer heißen Schwefelquellen („tbili” = warm). Sie ist mit 1,5 Millionen Einwohnern die einzige Großstadt des Landes. Die Überreste der „ersten Europäer”, Seswa und Msia, die man bei archäologischen Ausgrabungen 2001 entdeckte, werden im Janaschia-Museum im Herzen der Stadt aufbewahrt. Nachdem in den letzten Jahren viele Neubauten das Stadtbild nicht nur positiv verändert haben, melden sich immer mehr Bürger zu Wort, um die Zerstörung alter Gebäude und traditionsreicher Plätze in ihrer Stadt zu verhindern. Vor allem Studenten und junge Wissenschaftler, die im Ausland studiert haben, spielen bei den Protesten eine entscheidende Rolle.  ",
  },
  {
    id: 5,
    description:
      " Rustawi ist eine der ältesten Städte Georgiens, wurde aber im 13. Jahrhundert durch die Mongolen fast völlig zerstört und erst in der Sowjetzeit als Zentrum der Schwerindustrie wiederaufgebaut. Auf Befehl Stalins entstand hier in den 1940er-Jahren das größte Stahlwerk des Kaukasus – über 100 Industriebetriebe siedelten sich an. Vom Zusammenbruch der Sowjetunion hat sich die Stadt nie wirklich erholt. Industrieruinen und Trabantenstädte prägen heute das Stadtbild. Viele junge Bewohner suchen Anschluss an die westliche Lebensweise über Nichtregierungsorganisationen (NGOs) oder arbeiten im nur 25 km entfernten Tiflis. ",
  },
];

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
    name: "TEA TSULUKIANI",
    position: "Justizministerin",
    videoUrl: "https://player.vimeo.com/video/77064514?h=c369456978",
    textDescription:
      "Tea Tsulukiani (geb. 1975) wurde nach den Parlamentswahlen 2012 von Bidsina zur Justizministerin berufen. Tsulukiani, die als beliebteste Politikerin im Land gilt, hat Großteil ihres Lebens in Frankreich verbracht. Sie absolvierte einen Teil ihrer Schulbildung Lyon, machte ihren Master an der École nationale d’administration (ENA), arbeitete im Stab eines französischen Präfekten und zehn Jahre als Anwältin am Europäischen Gerichtshof für Menschenrechte in Straßburg. Sie kehrte 2010 nach Georgien zurück und schloss sich der Freien Demokratischen Partei des ehemaligen UN-Botschafters Irakli Alasania an, der sich wegen des kurzen Krieges mit Russland 2008 mit Präsident Saakaschwili überworfen hatte. Nach ihrem Amtsantritt als Justizministerin kam es zu einer Welle von Verhaftungen ehemaliger Amtsträger der vorherigen Administration und einer Amnestie für Tausende „politischer“ Häftlinge. Als eines ihrer wichtigsten Ziele benennt sie die Reform der Justiz und die Trennung von Staatsanwaltschaft und Exekutive. Mit ihren Vorschlägen eines vor allem die Arbeiterrechte stärkenden Gesetzes konnte sie sich allerdings nicht durchsetzen. Zu ihren Zukunftsprojekten gehören die Stärkung von Frauen- und Minderheitenrechten sowie die Liberalisierung der Drogengesetze.",
  },
  {
    name: "BISCHOF KALISTRATE",
    position: "Metropolit von Kutaissi",
    videoUrl: "https://player.vimeo.com/video/77052260?h=91ec25cbf0",
    textDescription:
      "Metropolit Bischof Kalistrate (geb. 1938) steht seit rund 30 Jahren der Eparchie von Kutais-Gaenati vor und gilt als höchster kirchliche Würdenträger in Westgeorgien. Er wurde als Schota Ilia Margalitaschwili in der Weinregion Kachetien geboren und studierte nach dem Armeedienst zunächst Ingenieurwesen im russischen Woronesch und am Pädagogischen Institut von Telavi. Er heiratete und wurde Vater eines Sohnes, trat dann aber 1982 als Novize ins Kloster von Betania ein, wurde noch im selben Jahr Mönch und bereits ein Jahr später zum Bischof berufen. 1985 reiste er im Auftrag des georgischen Patriarchen Ilia II nur wenige Wochen nach dem Reaktorunglück nach Tschernobyl, um in der Todeszone Trost zu spenden. 1992 wurde er in den Rang eines Metropoliten erhoben. Bis 2010 war Bischof Kalistrate Rektor der religiösen Akademie des Klosters von Gelati und des theologischen Instituts in Kutaissi, in welchem er kunsthistorische, journalistische und medizinische Fakultäten einrichten ließ. In seiner Amtszeit wurden fünf neue Eparchien in Westgeorgien eröffnet und über 300 Kirchen, Kapellen und Klöster von ihm eingeweiht. Kalistrate ist Träger des Briliant-Kreuzes und des Goldenen Ordens des Heiligen Georg, zwei der höchsten Auszeichnungen der georgisch-orthodoxen Kirche.",
  },
  {
    name: "BIDSINA IWANISCHWILI",
    position: "Premierminister",
    videoUrl: "https://player.vimeo.com/video/77052257?h=947a86c591",
    textDescription:
      "Bidsina Iwanischwili (geb. 1956) ist mit einem geschätzten Vermögen von über 6,5 Milliarden US-Dollar der reichste Mann in Georgien. 2011 trat der Geschäftsmann in die Politik ein und wurde zum mächtigen Gegenspieler von Präsident Saakaschwili. Iwanischwili gründete Anfang der 90er-Jahre in Russland die „Rossiskij Kredit“-Bank und stieg in Moskau rasch zu einem Oligarchen der zweiten Reihe auf. Wegen seiner bis heute engen Kontakte zu Russland werfen ihm seine politischen Gegner vor, ein Agent des Kreml zu sein. Dennoch gewann das von ihm gegründete Parteienbündnis „Georgischer Traum“ die Parlamentswahlen 2012 und der Milliardär wurde Premierminister. Durch eine bereits vor dem Machtwechsel beschlossene Verfassungsreform erhielt er somit die Schlüsselposition für die Ausrichtung der georgischen Politik. Iwanischwili leitete eine Annäherung an Russland ein und pflegt enge Kontakte zur christlich-orthodoxen Kirche, die als wichtiges Bindeglied zwischen Russland und Georgien gilt. Gleichzeitig betonte Iwanischwili, den Westkurs fortsetzen und die Anbindung an EU und NATO vorantreiben zu wollen. Iwanischwili ist verheiratet und hat drei Kinder. Sein Adoptivsohn Bera ist ein populärer Rapper.",
  },
  {
    name: "DATO IMNAISCHWILI",
    position: "Automechaniker",
    videoUrl: "https://player.vimeo.com/video/77052259?h=5dc7c90812",
    textDescription:
      "Dato Imnaischwili (geb. 1954) arbeitet seit mehr als 30 Jahren als Automechaniker in Tiflis und hat sich vor allem auf die Reparaturen russischer Fahrzeugmodelle spezialisiert. Er wurde im russischen Swerdlowsk (Jekaterinburg) geboren. Erst als er zwölf Jahre alt war, zogen seine Eltern zurück nach Georgien. Nach seinem Wehrdienst in der sowjetischen Armee in Nowosibirsk (Russland) absolvierte er in den 70er Jahren eine technische Ausbildung zum Kfz-Mechaniker. 1980 trat er in den Dienst bei den staatlichen Autowerkstätten Nummer 1 für Dienstfahrzeuge und Taxis im Bezirk Isani ein. Durch den Zusammenbruch der Sowjetunion verlor er seine feste Anstellung und arbeitet seitdem auf eigene Rechnung. Seit einer schweren Gasexplosion 2007, bei der mehrere seiner Kollegen ums Leben kamen, mietet er eine Reparatur-Garage in einem benachbarten Werkstattareal. Imnaischwili lebt mit Frau, Tochter und Schwägerin in einem Tiflisser Hinterhof und ist seit sechs Jahren stolzer Opa.",
  },
  {
    name: "LASCHA BAKRADSE",
    position: "Historiker und Publizist",
    videoUrl: "https://player.vimeo.com/video/76368969?h=7809424e10",
    textDescription:
      "Lascha Bakradse (geb. 1965) ist einer der streitbarsten Intellektuellen Georgiens. Der Direktor des Nationalen Literaturmuseums studierte Literatur- und Sprachwissenschaft in Tiflis, Germanistik in Jena, Politik in Potsdam und Theologie in Bern. Nach einem Promotionsstudium an der Humboldt-Universität Berlin promovierte er in Tiflis mit einer Dissertation über die deutsch-georgischen Beziehungen während des Ersten Weltkriegs. Bakradse arbeitete für das Georgische Auswärtige Amt, als Journalist für verschiedene georgische Medien und als Programmreferent des Goethe-Instituts. Er schrieb den bis heute meist genutzten deutschen Sprachführer für Georgisch und ist seit 1999 in mehreren Filmen als Schauspieler aufgetreten, u.a. als Hauptdarsteller in „Lost Killers“ von Regisseur Dito Tsintsadse. 2006 übernahm er die Leitung der Abteilung für Filmarchivierung und Restauration im Georgischen Nationalen Filmzentrum und ist seit 2010 assoziierter Professor an der Ilia Universität in Tiflis. Bakradse unterstützt regelmäßig Kunstprojekte, engagiert sich für die Menschenrechte in Georgien und nimmt immer wieder in den Medien zur gesellschaftlichen Entwicklung seines Landes Stellung.",
  },
  {
    name: "MICHAIL SAAKASCHWILI",
    position: "Präsident",
    videoUrl: "https://player.vimeo.com/video/77052262?h=17bd0bf685",
    textDescription:
      "Michail („Mischa“) Saakaschwili (geb. 1967) stürmte 2003 mit einer Rose ins georgische Parlament und jagte den sich durch Wahlmanipulationen an der Macht haltenden Präsidenten Eduard Schewardnadze aus dem Amt. Nach dieser „Rosenrevolution“ wurde er selbst zum Präsidenten gewählt und hat in den knapp neun Jahren seiner Amtszeit Georgien auf einen radikalen Westkurs getrimmt. In seiner Ära wurden Polizei und Behörden reformiert, wichtige Straßen gebaut und mit dem Bau einer neuen Eisenbahnverbindung nach Europa begonnen. Bei den Georgiern sind vor allem seine ehrgeizigen Bauprojekte umstritten, mit denen er das Land auch visuell ins 21. Jahrhundert führen wollte – vor allem in der Hafenstadt Batumi. Ein weiteres ehrgeiziges Projekt war „Lasika“: In den georgischen Sümpfen am Schwarzen Meer sollte ein kaukasisches Dubai gebaut werden. 2008 kam es zu einem kurzen Krieg mit Russland um die abtrünnige Provinz Samotschablo („Süd-Ossetien“), für dessen Ausbruch Kritiker auch Saakaschwili verantwortlich machen. Seine zweite Amtszeit wurde von Korruptions- und Foltervorwürfen gegen Mitglieder seiner Regierungspartei überschattet, was maßgeblich zur Niederlage seiner „Nationalen Bewegung“ bei den Parlamentswahlen 2012 beigetragen hat. Saakaschwili ist mit der Niederländerin Sandra Roeloffs verheiratet und hat zwei Söhne.",
  },
];

let characterTextDataFr = [
  {
    id: 1,
    name: "TEA TSULUKIANI",
    position: "Ministre de la Justice",
    videoUrl: "https://player.vimeo.com/video/76369289?h=17f476a553",
    textDescription:
      "Tea Tsulukiani (née en 1975) est nommée ministre de la Justice par Bidzina Ivanichvili au lendemain des législatives de 2012. Tsulukiani, personnalité politique préférée des Géorgiens, a longtemps vécu en France. Elle a effectué une partie de sa scolarité à Lyon, décroché un master à l’École nationale d’administration (ENA) de Strasbourg, travaillé dans l’entourage d’un préfet et été pendant dix ans juriste à la Cour européenne des droits de l’homme de Strasbourg. En 2010, elle retourne en Géorgie où elle rejoint Notre Géorgie - Démocrates libres, le parti fondé par Irakli Alassania, ancien représentant permanent de la Géorgie auprès de l'ONU, qui s’est brouillé avec le président Saakachvili au sujet de l’affrontement avec la Russie en 2008. Sa nomination au ministère de la Justice a été suivie d’une série d’arrestations de hauts dignitaires de l’administration précédente et d’une amnistie pour des milliers de prisonniers « politiques ». Parmi ses objectifs majeurs, elle cite la réforme de la justice et la séparation du parquet et de l’exécutif. Elle échoue toutefois à imposer son projet de loi qui devait renforcer les droits des travailleurs. A l’avenir, elle souhaite d’une part renforcer les droits des femmes et des minorités, d’autre part libéraliser les lois en matière d’usage des stupéfiants.",
  },
  {
    id: 2,
    name: "MGR CALISTRATE",
    position: "Métropolite de Koutaïssi",
    videoUrl: "https://player.vimeo.com/video/77423395?h=27987d0251",
    textDescription:
      "Le Métropolite Calistrate (né en 1938) dirige depuis une trentaine d’années l’éparchie de Kutais-Gaenati et est considéré comme le plus haut dignitaire ecclésiastique de Géorgie occidentale. Chota Ilia Margalitachvili est né dans une région viticole de Kakhétie. Après son service militaire, il suit des études d’ingénieur à Voronej en Russie et à l’institut pédagogique de Telavi, se marie et a un fils avant d’entrer en 1982 comme novice au monastère de Béthanie. La même année, il devient moine et un an plus tard, il est nommé évêque. En 1985, à la demande du patriarche géorgien Elie II, il se rend à Tchernobyl peu de temps après la catastrophe nucléaire pour exprimer sa compassion aux populations touchées. En 1992, il est élevé au rang de métropolite. Jusqu’en 2010, Mgr. Calistrate est recteur de l’académie religieuse du monastère de Ghélati et de l’institut de théologie de Koutaïssi, où il crée des facultés d’histoire de l’art, de journalisme et de médecine. En trente ans, il a inauguré cinq éparchies en Géorgie occidentale et consacré plus de trois cents églises, chapelles et monastères. Il est porteur de la Croix Briliant et de l’Ordre d’or de Saint-Georges, deux des plus hautes distinctions de l’Eglise orthodoxe de Géorgie.",
  },

  {
    id: 3,
    name: "BIDZINA IVANICHVILI",
    position: "Premier ministre",
    videoUrl: "https://player.vimeo.com/video/77422825?h=4dcdb64c8a",
    textDescription:
      "Bidzina Ivanichvili (né en 1956) est l’homme le plus riche de Géorgie, avec une fortune estimée à plus de 6,5 milliards de dollars. Entré en politique en 2011, l’homme d’affaires se pose rapidement en adversaire du président en exercice, Saakachvili. Ivanichvili a fondé la banque Rossyiski Kredit au début des années 1990, et très vite, il devient un oligarque de second plan à Moscou. En raison des liens étroits avec la Russie qu’il a conservés jusqu’à aujourd’hui, ses opposants politiques l’accusent d’être un agent du Kremlin – ce qui n’empêche pas la coalition Rêve géorgien, fondée par Ivanichvili, de remporter les législatives de 2012 ; le milliardaire est nommé Premier ministre. Grâce à une réforme constitutionnelle, l’essentiel du pouvoir passe des mains du président sortant qui ne pouvait se représenter vers celles du Premier ministre. Ce dernier peut alors orienter la politique géorgienne. Le ministre milliardaire amorce un rapprochement avec la Russie et renforce les relations avec l’Eglise orthodoxe, considérée comme un maillon essentiel entre la Russie et la Géorgie. Parallèlement, il veut poursuivre la révolution néolibérale de la Géorgie et se rapprocher de l’Union européenne et de l’OTAN. Il est marié et père de trois enfants. Bera, son fils adoptif, est un rappeur connu.",
  },
  {
    id: 4,
    name: "DATO IMNAICHVILI",
    position: "Mécanicien auto",
    videoUrl: "???",
    textDescription:
      "Dato Imnaischwili (né en 1954) est mécanicien automobile, spécialisé dans les réparations des véhicules russes, et vit à Tbilissi depuis plus de trente ans. Né en Russie à Sverdlovsk (Iekaterinbourg), il n’a que 12 ans quand ses parents reviennent s’installer en Géorgie. Dans les années 1970, après son service militaire dans l’armée soviétique à Novossibirsk (Russie), il suit une formation de mécanicien automobile. En 1980, il entre aux ateliers automobiles d’État n° 1 pour les véhicules de fonction et les taxis, dans le district d’Isani. Quand l’Union soviétique s’effondre en 1991, il perd son emploi et décide alors de se mettre à son compte. Depuis une grave explosion de gaz qui a coûté la vie à plusieurs de ses collègues en 2007, il loue un garage dans une zone d’activités voisine. Ivanichvili vit avec sa femme, sa fille et sa belle-sœur dans une arrière-cour de Tbilissi ; c’est aussi un grand-père heureux depuis six ans. ",
  },
  {
    id: 5,
    name: "LACHA BAKRADZÉ",
    position: "Historien et journaliste",
    videoUrl: "https://player.vimeo.com/video/77423604?h=459d5670dc",
    textDescription:
      "Lacha Bakradzé (né en 1965) est l’un des intellectuels les plus controversés de Géorgie. Le directeur du musée national de la littérature a fait des études de littérature et de langues à Tbilissi, d’allemand à Iéna, de sciences politiques à Potsdam et de théologie à Berne. Après des études doctorales à l’université Humboldt de Berlin, il a soutenu sa thèse à Tbilissi sur les relations germano-géorgiennes pendant la Première Guerre mondiale. Bakradzé a été collaborateur au ministère des Affaires étrangères de Géorgie, journaliste pour divers médias géorgiens et chargé du programme à l’institut Goethe. Il est l’auteur de la plupart des guides linguistiques en allemand sur la Géorgie, et depuis 1999, on a pu le voir jouer dans plusieurs films (il tient d’ailleurs le premier rôle dans Lost Killers du réalisateur Dito Tsintsadzé). Il prend la direction du département des archives cinématographiques et de la restauration des films au Centre national du cinéma en 2006. Il est professeur associé à l’université Ilia de Tbilissi depuis 2010. Il soutient régulièrement des projets artistiques, milite pour les droits de l’homme en Géorgie et prend régulièrement position dans les médias sur l’évolution de la société géorgienne.",
  },
  {
    id: 5,
    name: "MIKHEIL SAAKACHVILI",
    position: "Président",
    videoUrl: "https://player.vimeo.com/video/77422822?h=b06808cf16",
    textDescription:
      " Mikheil (« Mischa ») Saakachvili (né en 1967) entre en 2003 au Parlement géorgien, une rose à la main. Il chasse le président Édouard Chevardnadze qui s’était maintenu au pouvoir en truquant grossièrement les élections. Après la Révolution des roses, Saakachvili est élu à la présidence du pays et, pendant neuf ans, il met le cap sur le libéralisme économique. Sous son administration, la police et la fonction publique sont réformées, de grands axes routiers sont construits et une liaison ferroviaire mise en chantier en direction de l’Europe de l’Ouest. Ces projets de construction pharaoniques destinés à faire entrer la Géorgie – sur le plan visuel aussi – dans le XXIe siècle, suscitent une contestation au sein de la population, notamment celui du port de Batoumi sur la mer Noire, et celui de « Lasika », au milieu des marais sur la mer Noire mais censé devenir le Dubaï du Caucase. En 2008, la Géorgie et la Russie s’affrontent quelques jours durant pour obtenir la suprématie sur l’Ossétie du Sud (qui fait partie de la communauté historique géorgienne de Samachablo) ; certains concitoyens rendront Saakachvili responsable des velléités d’indépendance de cette province. Son deuxième mandat est entaché par les accusations de corruption et de torture portées contre des membres de son parti, ce qui contribue largement à la défaite du Mouvement National Uni (MNU) aux élections législatives de 2012. Saakachvili est marié à Sandra Roeloffs, d’origine néerlandaise, avec laquelle il a eu deux fils. ",
  },
];

let characterTextDataGe = [
  {
    name: "თეა წულუკიანი",
    position: "იუსტიციის მინისტრი",
    videoUrl: "https://player.vimeo.com/video/80864540?h=f44335cc86",
    textDescription:
      "თეა წულუკიანი (დაბ.1975) 2012 წლის საპარლამენტო არჩევნების შემდეგ ბიძინა ივანიშვილის მიერ იუსტიციის მინისტრად დაინიშნა. წულუკიანს, რომელიც მოსახლეობაში პოპულარობით სარგებლობს, ცხოვრების დიდი ნაწილი საფრანგეთში აქვს გატარებული. მან საშუალო განათლება დაასრულა ლიონში, არის საფრანგეთის ნაციონალური ადმინისტრაციული სკოლის (École Nationale d’Administration (ENA)) მაგისტრი, მუშაობდა ფრანგი პრეფექტის შტაბში შემდეგ კი, ათი წლის განმავლობაში სტრასბურგში, ევროპულ სასამართლოში, ადამიანის უფლებათა დაცვის საკითხებზე, ადვოკატის რანგში. წულუკიანი საქართველოში 2010 წელს დაბრუნდა და გაერთიანებული ერების ორგანიზაციაში საქართველოს ყოფილი ელჩის, ირაკლი ალასანიას პოლიტიკურ პარტიას შეუერთდა. ალასანია პრეზიდენტმა სააკაშვილმა რუსეთთან 2008 წელს მომხდარი ომის შემდეგ გამოიწვია ელჩობიდან. წულუკიანის იუსტიციის მინისტრად დანიშვნის შემდეგ მალევე დაიწყო ყოფილი თანამდებობის პირების დაკავება, ასევე, ამნისტიცია შეეხო ათასობით პოლიტპატიმარს. თავის უპირველეს მიზნად წულუკიანი იუსტიციის სისტემის რეფორმირებასთან ერთად, სააღმსრულებლო ბიუროსა და პროკურატურის მოხელეთა გადამზადებას ასახელებს. მის სამომავლო პროექტებად მოიაზრება: ქალებისა და უმცირესობების უფლებების გაძლიერება, ნარკოტიკულ ნივთირებებთან დაკავშირებული კანონის ლიბერალიზება.",
  },
  {
    name: "მიტროპოლიტი კალისტრატე",
    position: "ქუთაისის მიტროპოლიტი",
    videoUrl: "https://player.vimeo.com/video/80802089?h=14433af2af",
    textDescription:
      "მიტროპოლიტი კალისტრატე (დაბ. 1938 წ.) 30 წელია ქუთაის-გაენათის ეპარქიას უძღვება და დასავლეთ საქართველოში უმაღლესი საეკლესიო წოდების მატარებელია. მიტროპოლიტი კალისტრატე, ერში შოთა მარგალიტაშვილი ღვინის რეგიონში, კახეთში დაიბადა. საბჭოთა ჯარში სამხედრო სამსახურის დასრულების შემდეგ სწავლობდა ინჟინერიას ვორონეჟში შემდეგ კი თელავის პედაგოგიური ინსტიტუტის სტუდენტი გახდა. 1982 წელს ბეთანიის მონასტერში მორჩილად აღიკვეცამდე შოთა მარგალიტაშვილი დაქორწინებული იყო და ჰყავდა სამი ვაჟი. მორჩილობის შვიდი წლის შემდეგ აღიკვეცა ბერად, კიდევ ერთი წლის შემდეგ ხელი დაასხეს ეპისკოპოსად. 1985 წელს საქართველოს პატრიარქის ილია მეორის დავალებით გაემგზავრა ჩერნობილში, უბედური შემთხვევის შემდეგ მოსახლეობის ნუგეშისცემისათვის. 1992 წელს აყვანილ იქნა მიტროპოლიტის რანგში. 2010 წლამდე ეპისკოპოსი კალისტრატე იყო გელათის მონასტრის სასულიერო აკადემიის და ქუთაისის თეოლოგიის ინსტიტუტის რექტორი, სადაც მან ხელოვნების ისტორიის, ჟურნალისტიკის და მედიცინის ფაკულტეტების არსებობა დაუშვა. მისი მოღვაწეობის დროს დასავლეთ საქართველოში ხუთი ეპარქია დაარსდა და სამასზე მეტი ეკლესია, სამლოცველო და მონასტერი განახლდა. მეუფე კალისტრატე ქართული მართმადიდებლური ეკლესიის ორი უმაღლესი ჯილდოს, ბრილიანტის ჯვრისა და წმ. გიორგის ოქროს ორდენის მატარებელია.",
  },
  {
    name: "ბიძინა ივანიშვილი",
    position: "ყოფილი პრემიერ მინისტრი(2012 - 2013)",
    videoUrl: "https://player.vimeo.com/video/80802086?h=a703ce3224",
    textDescription:
      "ბიძინა ივანიშვილი (დაბ. 1956 წ.) თავისი 6,5 მილიონიანი შემოსავლით, ყველაზე მდიდარი ქართველია. 2011 წელს ბიზნესიდან პოლიტიკაში წავიდა და პრეზიდენტ სააკაშვილის ძლიერი მოწინააღმდეგე გახდა. ივანიშვილმა 90-იანი წლების დასაწყისში რუსეთში ბანკი „რუსული კრედიტი“ დააარსა და მალევე მეორე რანგის ოლიგარქი გახდა. რუსეთთან მჭიდრო კონტაქტის გამო, პოლიტიკური ოპონენტები კრემლის აგენტად მოიხსენიებენ. ამის მიუხედავად, მის მიერ დაარსებულმა კოალიციამ „ქართული ოცნება“ 2012 წლის საპარლამენტო არჩევნებში გაიმარჯვა და მილიარდერი პრემიერმინისტრი გახდა. ამჟამად აქტიურად მიმდინარე გადანაცვლებების მიუხედავად, ის მაინც ინარჩუნებს მნიშვნელოვან პოზიციას ქართულ პოლიტიკაში. ივანიშვილი მხარს უჭერს რუსეთთან დაახლოების საკითხს და უფრთხილდება მართმადიდებლურ ეკლესიასთან ახლო კონტაქტებს, ვინაიდან თვლის, რომ ეკლესია უმნიშვნელოვანესი მაკავშირებელია რუსეთსა და საქართველოს შორის. ამავდროულად, ივანიშვილი მუდმივად ხაზს უსვამს, რომ საქართველოს დასავლური კურსი გაგრძელდება, გამოთქვამს ევრო კავშირსა და ნატოსთან გაერთიანების დაჩქარების სურვილს. ივანიშვილი დაქორწინებულია და ჰყავს სამი შვილი. მისი ვაჟი ბერა, პოპულარული რეპერია.",
  },
  {
    name: "დათო იმნაიშვილი",
    position: "ავტომანქანის მექანიკოსი",
    videoUrl: "https://player.vimeo.com/video/80802087?h=aceea459d9",
    textDescription:
      "დათო იმნაიშვილი დაიბადა 1954 წლის 7 ივნისს, ქალაქ სვერლოვსკში, რუსეთში. ოჯახი საქართველოში ბრუნდება 1966 წელს. 1971 წელს დაამთავრა ქ. თბილისის 91-ე საშუალო სკოლა. 1973-75 წლებში მსახურობდა საბჭოთა არმიაში, ნოვოსიბირსკში. 1979 წელს დაქორწინდა მარინე ხვთისიაშვილზე, ჰყავს ქალიშვილი თამარი და შვილიშვილი მარიამი.ხელობა შეისწავლა პროფესიულ სასწავლებელში. 1980 წლიდან მუშაობს ავტომექანიკოსად. არის კარგი ქართული ღვინის დამფასებელი და ყოველ წელს აყენებს საკუთარ ღვინოს.",
  },
  {
    name: "ლაშა ბაქრაძე",
    position: "ისტორიკოსი და ჟურნალისტი",
    videoUrl: "https://player.vimeo.com/video/80802090?h=a93dd94c6c",
    textDescription:
      "ლაშა ბაქრაძე (დაბ. 1965 ) არის ერთ-ერთი აქტიური ქართველი ინტელექტუალია. ლიტერატურის მუზეუმის დირექტორი სწავლობდა ლიტერატურასა და ენათმეცნიერებას (თბილისი), გერმიანისტიკას (იენა), პოლიტოლოგიას (პოტსდამი) და თეოლოგიას (ბერნი). ბერლინის ჰუმბოლდტის უნივერსიტეტში ხარისხის მოპოვების შემდეგ თბილისში დაიცვა დისერტაცია პირველი მსოფლიო ომის პერიოდში საქართველოსა და გერმანიის ურთიერთობის შესახებ. ბაქრაძე მუშაობდა საქართველოს საგარეო ურთიერთობების სამმართველოში, წერდა ქართული ჟურნალებისათვის. 1999 წლიდან რამდენიმე ფილმში ითამაშა, შეასრულა მთავარი როლი რეჟისორ დიტო ცინცაძის „დაკარგულ მკვლელებში“ (Lost Killers). 2006 წლიდან უძღვებოდა ქართული ეროვნული კინოცენტრის არქივის და რესტავრაციის განყოფილებას. 2010 წლიდან ილიას სახელმწიფო უნივერსიტეტის ასოცირებული პროფესორია. ბაქრაძე მუდმივად უჭერს მხარს კულტურულ პროექტებს, დაინტერესებულია საქართველოში ადამიანის უფლებების დაცვით და სამოქალაქო საზოგადების განვითარებით, თავის პოზიციას ხშირად აფიქსირებს მედიში.",
  },
  {
    name: "მიხეილ სააკაშვილი ",
    position: "ყოფილი პრეზიდენტი (2004 - 2013)",
    videoUrl: "https://player.vimeo.com/video/80802092?h=0db82bb53e",
    textDescription:
      "მიხეილ(მიშა) სააკაშვილი (დაბ. 1967) 2003 წელს ვარდით ხელში შეიჭრა საქართველოს პარლამენტში და არჩევნების გამყალბებელი პრეზიდენტი, ედუარდ შევარდნაძე თანამდებობიდან გადააყენა. ვარდების რევოლუციის შემდეგ სააკაშვილი თავად იქნა არჩეული პრეზიდენტად. მისი ცხრა წლიანი მმართველობის პერიოდში ქვეყნის საგარეო კურსი რადიკალურად დასავლური იყო, რეფორმირდა პოლიცია და ხელისუფლების ორგანოები, მიმდინარეობდა გზების მშენებლობა. ქართველების ყველაზე მეტად ძვირადღირებული სამშენებლო პროექტების გამო საყვედურობდნენ. მისი ინიციატივით დაიწყო საპორტო ქალაქ ბათუმის რეკონსტუქცია. კიდევ ერთი პატივმოყვარე პროექტი იყო „ლაზიკა“: საქართველოში შავ ზღვასთან უნდა გაშენებულიყო კავკასიის დუბაი. 2008 წელს რუსეთთან სამაჩაბლოს გამო საქართველოს ხუთდღიანი ომის წარმოება მოუწია, რომლის წამოწყების პასუხისმგებლობაც კრიტიკოსებმა სააკაშვილს დააკისრეს. მისი მეორე საპრეზიდენტო ვადა დაიჩრდილა მისი პარტიის წევრების ელიტური კორუფციასა და პატომრების წამებაში დადანაშაულების გამო, რამაც განაპირობა 2012 წლის პარლამენტში „ნაციონალური მოძრაობის“ უმცირესობად წარმოდგენა. სააკაშვილი დაქორწინებულია სანდრა რულოვსზე, ჰყავს ორი ვაჟი.",
  },
];

let arrayTextxsFr = [
  { title: "étalonnage" },
  { title: "Dany Schelby" },
  { title: "postproduction" },
  { title: "GIZMO Postproduktion Köln" },
  { title: "Maximilian Dederichs" },
  { title: "Jan Wilm Schmülling<" },
  { title: "Copier HD" },
  { title: "fabrication DCP" },
  { title: "Farbkult – Erhard Giesen" },
  { title: "Filmmusiken" },
  { title: "33a - Niaz Diasamidze" },
  { title: "„C’est la vie“" },
  { title: "„Zamtari“ (Bolo Gaseirneba)" },
  { title: "Mgzavrebi – Gigi Dedalamazishvili" },
  { title: "„Tango“" },
  { title: "Guram Bzvaneli" },
  { title: "„Borjomis Xeoba“" },
  { title: "Bera Ivanishvili" },
  { title: "„Sizmari“" },
  { title: "sowie" },
  { title: "saxophone et consultation musicale" },
  { title: "Reso Kiknadze<" },
  { title: "réalisateur & producteur" },
  { title: "Stefan Tolz" },
  { title: "chargé de production Tbilissi" },
  { title: "Giorgi Khutsishvili" },
  { title: "Mzia Kurtsadze" },
  { title: "régisseur ou chef de plateau"},
  { title: "Zurab Khutsishvili"},
  { title: "assistant électricien"},
  { title: "Lado Reizbish"},
  { title: "service production Tbilissi"},
  { title: "Jana Sardlishvili - Studio 99"},
  { title: "equipe de production Cologne"},
  { title: "Katharina Jakobs"},
  { title: "Tatjana Urban"},
  { title: "Mareike Schreiber"},
  { title: "consultation des droits"},
  { title: "Heiko Wiese"},
  { title: "Direction du film"},
  { title: "Andrea Rupp"},
  { title: "Direction Cologne"},
  { title: "Thomas Müller"},
  { title: "extraits du film"},
  { title: "Georgisches Nationalarchiv"},
  { title: "„Als die Mandelbäume blühten“"},
  { title: "Lana Gogoberidze (GSSR 1972"},
  { title: "extraits cités"},
  { title: "Rustavi 2, TV9, MaestroTV"},
  { title: "Merci pour"},
  { title: "Karlen Aiwazian"},
  { title: "George Alasania"},
  { title: "Tengo Ebralidze"},
  { title: "Nona Kandiashvili"},
  { title: "Tamuna Kirvalidze"},
  { title: "Mariam Skhiladze"},
  { title: "Irakli Solomanashvili"},
  { title: "sowie an die ARD Studios"},
  { title: "Brüssel, Genf und Moskau"},
  { title: "directeur photo"},
  { title: "Thomas Riedelsheimer"},
  {title: "Marcus Winterbauer"},
  {title: "caméra DSLR"},
  {title: "Stefan Tolz"},
  {title: "2nd Unit"},
  {title: "Niko Tarielashvili"},
  {title: "Michael Chauvistré"},
  {title: "Giorgi Beridze"},
  {title: "Levan Pataraia"},
  {title: "son"},
  {title: "Niko Tarielashvili"},
  {title: "Thomas Schwarz"},
  {title: "Ivane Gvaradze"},
  {title: "Falk Spörri"},
  {title: "mixage TV & son"},
  {title: "Marilyn Janssen"},
  {title: "mixage 5.1 & web"},
  {title: "Paata Godiashvili"},
  {title: "assemblage"},
  {title: "Stefan Tolz"},
  {title: "Lena Rem"},
  {title: "Marc Schubert"},
  {title: "équipe d‘assemblage Tbilissi"},
  {title: "Vano Arsenishvili"},
  {title: "Sandro Japaridze"},
  {title: "Unité de programme"},
  {title: "Sabine Rollberg (WDR/ARTE)"},
  {title: "Jutta Krug (WDR)<"},
  {title: "Unité de programme géopolitique (ARTE Strasbourg)"},
  {title: "Claudia Bucher"},
  {title: "Philippe Muller"},
  {title: "assistant de rédaction Cologne"},
  {title: "Meike Mandel"},
  {title: "Nina Albrecht"},
  {title: "Monica Seidl<"},
  {title: "Lina Bali"},
  {title: "chargé de production WDR"},
  {title: "Jorge Bogalho"},
  {title: "Entwicklungsförderung durch die"},
  {title: "Film- und Medienstiftung NRW"},
  {title: "(Erstsendung am 22. Oktober 2013 auf ARTE)"},
  {title: "locuteur (ARTE)"},
  {title: "Sigrid Burkholder"},
  {title: "Hüseyin Michael Cirpici"},
  {title: "Peter Harting"},
  {title: "Gregor Höppner"},
  {title: "Tom Jacobs"},
  {title: "Matthias Ponnier"},
  {title: "textes supplémentaires"},
  {title: "Holger Beckmann"},
  {title: "Mathias Erb"},
  {title: "Sabine Rollberg"},
  {title: "locuteur web"},
  {title: "Heike Kühl"},
  {title: "Jana Kühl"},
  {title: "Eduard Schreiber"},
  {title: "Falk Spörri"},
  {title: "traductions"},
  {title: "Khatia Elbakidze-Machavariani"},
  {title: "Mzia Kurtsadze"},
  {title: "Natia Mikeladze-Bachsoliani"},
  {title: "textes originau"},
  {title: "casting et adaption"},
  {title: "Ingrid Terhorst"},
  {title: "Web design et la mise en œuvre technique"},
  {title: "Sandro Asatiani (Sandro’s Books)"},
  {title: "Alexi Amniashvili"},
  {title: "Shota Ioramashvili"},
  {title: "Tamar Kapanadze"},
  {title: "Salome Mosiava"},
  {title: "Laka Nodia"},
  {title: "Ketevan Tchabukiani"},
  {title: "Luka Katchkatchishvili"},
  {title: "Graphisme, animation et conception & de l'affiche"},
  {title: "Irakli Gharibashvili (Studio QuBitz)"},
  {title: "Web Editor"},
  {title: "Tamar Kalkhitashvili"},
  {title: "Réalisé et édité par site"},
  {title: "Stefan Tolz"},
]
let arrayTextxsGe= [
  { title: "étalonnage" },
  { title: "Dany Schelby" },
  {title: "Postproduction" },
  { title: "GIZMO Postproduktion Köln" },
  { title: "Maximilian Dederichs" },
  { title: "Jan Wilm Schmülling<" },
  { title: "Copier HD" },
  { title: "fabrication DCP" },
  { title: "Farbkult – Erhard Giesen" },
  { title: "მუსიკა" },
  { title: "33a - ნიაზ დიასამიძე" },
  { title: "„C’est la vie“" },
  { title: "„Zamtari“ (ბოლო გასეირნება)" },
  { title: "მგზავრები - გიგი დედალამაზიშვილი" },
  { title: "„ტანგო“" },
  { title: "გურამ ბზვანელი" },
  { title: "„ბორჯომის ქსეობა“" },
  { title: "ბერა ​​ივანიშვილი" },
  { title: "„Sizmari“" },
  { title: "Also" },
  { title: "ორიგინალური შესრულება, მუსიკალური კონსულტანტი" },
  { title: "რესო კიკნაძე" },
  { title: "რეჟისორი და პროდიუსერი" },
  { title: "შტეფან ტოლცი" },
  { title: "რეჟსორის თანაშემწე" },
  { title: "გიორგი ხუციშვილი" },
  { title: "მზია ქურცაძე" },
  { title: "régisseur ou chef de plateau"},
  { title: "ზურაბ ხუციშვილი"},
  { title: "ასისტენტი ელექტრო"},
  { title: "ლადო რეიზბიში"},
  { title: "სერვის პროდუსერი, თბილისი"},
  { title: "ჟანა სარდლიშვილი - სტუდია 99"},
  { title: "წარმოების გუნდი, კიოლნი"},
  {title: "კატერინ იაკობი"},
  { title: "ტატიანა ურბანი"},
  { title: "მარიეკე შრაიბერი"},
  { title: "იურიდიული კონსულტანტი"},
  { title: "ჰეიკო ვისე"},
  { title: "ბუღალტერი"},
  { title: "ანდრეა რაპი"},
  { title: "კომპანიის მენეჯერი, კიოლნი"},
  { title: "თომას მიულერი"},
  { title: "ფილმის ნაწყვეტები (16 მმ)"},
  { title: "საქართველოს ნაციონალური არქივი"},
  { title: "„როცა აყვავდა ნუში“"},
  { title: "ლანა ღოღობერიძე, 1972."},
  { title: "სატელევიზიო არქივი"},
  { title: "რუსთავი 2, TV9, MaestroTV"},
  { title: "სპეციალური მადლობა:"},
  {title: "კარლენ აივაზიანი"},
  { title: "გიორგი ალასანია"},
  { title: "თენგო ებრალიძე"},
  { title: "ნონა ყანდიაშვილი"},
  { title: "თამუნა კირვალიძე"},
  { title: "მარიამ სხილაძე"},
  { title: "ირაკლი სოლომანაშვილი"},
  { title: "და არდ სტუდიოს"},
  { title: "ბრუსელში, ჟენევასა და მოსკოვში."},
  {title: "გამოსახულების დიზაინი, კამერა"},
  {title: "თომას რიდელშაიმერი"},
  {title: "მარკუს ვინტერბაუერი"},
  {title: "კამერა DSLR"},
  {title: "შტეფან ტოლცი"},
  {title: "2nd Unit"},
  {title: "ნიკო ტარიელაშვილი"},
  {title: "Michael Chauvistré"},
  {title: "გიორგი ბერიძე"},
  {title: "ლევან პატარაია"},
  {title: "ხმა"},
  {title: "ნიკო ტარიელაშვილი"},
  {title: "თომას შვარცი"},
  {title: "ივანე გვარაძე"},
  {title: "ფალკ სპოირერი"},
  {title: "ხმის დიზაინი"},
  {title: "მერლინ იანსენი"},
  {title: "mixage 5.1 & web"},
  {title: "პაატა გოდიაშვილი"},
  {title: "Assemblage"},
  {title: "შტეფან ტოლცი"},
  {title: "ლენა რემი"},
  {title: "მარკ შუბერტი"},
  {title: "équipe d‘assemblage Tbilissi"},
  {title: "ვანო არსენიშვილი"},
  {title: "სანდრო ჯაფარიძე"},
  {title: "რედაქტირება"},
  {title: "საბინე როლბერგი(WDR / ARTE)"},
  {title: "იურა კრუგი (WDR)"},
  {title: "სარედაქციო პოლტიკა (ARTE სტრასბურგი)"},
  {title: "კლაუდია ბუჩერი"},
  {title: "ფილიპ მიულერი"},
  {title: "რედაქტორის ასისტენტი, კიოლნი"},
  {title: "მეიკე მანდელი"},
  {title: "ნინა ალბრეხტი"},
  {title: "მონიკა საიდლი"},
  {title: "ლინა ბალი"},
  {title: "პროდუქციის მენეჯერი, WDR"},
  {title: "Jorge Bogalho"},
  {title: "პრომოუტინგი"},
  {title: "Film and Media NRW"},
  {title: "(პირველი სატელევიზიო ეთერი, 22 ოქტომბერი 2013, ARTE)"},
  {title: "ხმა (ARTE)"},
  {title: "სიგრიდ ბურხოლდერი"},
  {title: "Hüseyin Michael Cirpici"},
  {title: "პიტერ ჰარტინგი"},
  {title: "Gregor Hoppner"},
  {title: "ტომ ჯეიკობსი"},
  {title: "მატიას პონიე"},
  {title: "დამატებითი ტექსტები (WDR)"},
  {title: "Holger Beckmann"},
  {title: "Mathias Erb"},
  {title: "Sabine Rollberg"},
  {title: "Web Speaker"},
  {title: "Heike Kühl"},
  {title: "Jana Kühl"},
  {title: "ედუარდ შრაიბერი"},
  {title: "Falk Spörri"},
  {title: "თარგმანი"},
  {title: "ხატია გოგიაშვილი"},
  {title: "მზია ქურცაძე"},
  {title: "ნათია მიქელაძე-ბაჩოლიანი"},
  {title: "Original"},
  {title: "Casting and machining"},
  {title: "Ingrid Terhorst"},
  {title: "ვებ დიზაინი და ტექნიკური განხორციელება"},
  {title: "სანდრო ასათიანი (სანდროს წიგნები)"},
  {title: "ალექსი ამნიაშვილი"},
  {title: "შოთა იორამაშვილი"},
  {title: "თამარ კაპანაძე"},
  {title: "სალომე მოსიავა"},
  {title: "ლაკა ნოდია"},
  {title: "ქეთევან ჭაბუკიანი"},
  {title: "ლუკა კაჭკაჭიშვილი"},
  {title: "გრაფიკა, ანიმაცია და ვებ დიზაინი"},
  {title: "ირაკლი ღარიბაშვილი (სტუდია QuBitz)"},
  {title: "ვებ რედაქტორი"},
  {title: "თამარ კალხიტაშვილი"},
  {title: "რეჟისურა და რედაქტირება"},
  {title: "შტეფან ტოლცი"},
]
let arrayTextxsDe = [
  { title: "étalonnage" },
  { title: "Dany Schelby" },
  { title: "Postproduktion" },
  { title: "GIZMO Postproduktion Köln" },
  { title: "Maximilian Dederichs" },
  { title: "Jan Wilm Schmülling<" },
  { title: "Kopierer HD" },
  { title: "Fertigung DCP" },
  { title: "Farbkult – Erhard Giesen" },
  { title: "Filmmusiken" },
  { title: "33a - Niaz Diasamidze" },
  {title: "C’est la vie"},
  { title: "Zamtari“ (Bolo Gaseirneba)"},
  { title: "Mgzavrebi – Gigi Dedalamazishvili" },
  { title: "Tango"},
  { title: "Guram Bzvaneli" },
  { title: "„Borjomis Xeoba“" },
  { title: "Bera Iwanischwili" },
  { title: "„Sizmari“" },
  { title: "Sowie" },
  { title: "Saxophon und musikalische Beratung" },
  { title: "Reso Kiknadze<" },
  { title: "Réalisateur & Produkteur" },
  { title: "Stefan Tolz" },
  { title: "chargé de production Tiflis" },
  { title: "Giorgi Khutsishvili" },
  { title: "Mzia Kurtsadze" },
  {title: "Régisseur oder Chef de Plateau"},
  { title: "Zurab Khutsishvili"},
  { title: "Elektrikerassistent"},
  {title: "Lado Reizbisch"},
  { title: "Dienstleistungsproduktion Tiflis"},
  { title: "Jana Sardlishvili - Studio 99"},
  { title: "equipe de production Köln"},
  {title: "Katharina Jakobs"},
  {title: "Tatjana Urban"},
  {title: "Mareike Schreiber"},
  { title: "consultation des droits"},
  {title: "Heiko Wiese"},
  { title: "Direction du Film"},
  {title: "Andrea Rupp"},
  { title: "Richtung Köln"},
  {title: "Thomas Müller"},
  { title: "extraits du film"},
  { title: "Georgisches Nationalarchiv"},
  { title: "„Als die Mandelbäume blühten“"},
  {title: "Lana Gogoberidze (GSSR 1972"},
  { title: "Extraits Cités"},
  { title: "Rustavi 2, TV9, MaestroTV"},
  { title: "Merci pour"},
  {title: "Karlen Aiwazian"},
  { title: "George Alasania"},
  {title: "Tengo Ebralidze"},
  { title: "Nona Kandiashvili"},
  {title: "Tamuna Kirvalidze"},
  {title: "Mariam Skhiladze"},
  {title: "Irakli Solomanashvili"},
  { title: "sowie an die ARD Studios"},
  { title: "Brüssel, Genf und Moskau"},
  { title: "Regiefoto"},
  {title: "Thomas Riedelsheimer"},
  {title: "Marcus Winterbauer"},
  {title: "Kamera DSLR"},
  {title: "Stefan Tolz"},
  {title: "2. Einheit"},
  {title: "Niko Tarielashvili"},
  {title: "Michael Chauvistré"},
  {title: "Giorgi Beridze"},
  {title: "Levan Pataraia"},
  {title: "Sohn"},
  {title: "Niko Tarielashvili"},
  {title: "Thomas Schwarz"},
  {title: "Ivane Gvaradze"},
  {title: "Falk Spörri"},
  {title: "Mischung aus TV und Sohn"},
  {title: "Marilyn Janssen"},
  {title: "Mischung 5.1 und Web"},
  {title: "Paata Godiashvili"},
  {title: "Montage"},
  {title: "Stefan Tolz"},
  {title: "Lena Rem"},
  {title: "Marc Schubert"},
  {title: "équipe d‘assemblage Tiflis"},
  {title: "Vano Arsenishvili"},
  {title: "Sandro Japaridze"},
  {title: "Einheit des Programms"},
  {title: "Sabine Rollberg (WDR/ARTE)"},
  {title: "Jutta Krug (WDR)<"},
  {title: "Unité de program géopolitique (ARTE Straßburg)"},
  {title: "Claudia Bucher"},
  {title: "Philippe Müller"},
  {title: "assistant de rédaction Köln"},
  {title: "Meike Mandel"},
  {title: "Nina Albrecht"},
  {title: "Monica Seidl<"},
  {title: "Lina Bali"},
  {title: "chargé de production WDR"},
  {title: "Jorge Bogalho"},
  {title: "Entwicklungsförderung durch die"},
  {title: "Film- und Medienstiftung NRW"},
  {title: "(Erstsendung am 22. Oktober 2013 auf ARTE)"},
  {title: "Locuteur (ARTE)"},
  {title: "Sigrid Burkholder"},
  {title: "Hüseyin Michael Cirpici"},
  {title: "Peter Harting"},
  {title: "Gregor Höppner"},
  {title: "Tom Jacobs"},
  {title: "Matthias Ponnier"},
  {title: "Ergänzungstexte"},
  {title: "Holger Beckmann"},
  {title: "Mathias Erb"},
  {title: "Sabine Rollberg"},
  {title: "Locuteur-Web"},
  {title: "Heike Kühl"},
  {title: "Jana Kühl"},
  {title: "Eduard Schreiber"},
  {title: "Falk Spörri"},
  {title: "Traditionen"},
  {title: "Khatia Elbakidze-Machavariani"},
  {title: "Mzia Kurtsadze"},
  {title: "Natia Mikeladze-Bachsoliani"},
  {title: "Originaltexte"},
  {title: "Casting und Adaption"},
  {title: "Ingrid Terhorst"},
  {title: "Webdesign et la mise en œuvre technique"},
  {title: "Sandro Asatiani (Sandros Bücher)"},
  {title: "Alexi Amniashvili"},
  {title: "Shota Ioramashvili"},
  {title: "Tamar Kapanadse"},
  {title: "Salome Mosiava"},
  {title: "Laka Nodia"},
  {title: "Ketewan Tschabukiani"},
  {title: "Luka Katchkatchishvili"},
  {title: "Graphisme, animation et conception & de l'affiche"},
  {title: "Irakli Gharibashvili (Studio QuBitz)"},
  {title: "Web-Editor"},
  {title: "Tamar Kalkhitashvili"},
  {title: "Réalisé et édité par site"},
  {title: "Stefan Tolz"},
]
let videoDataFr = [
  {
    id: 1,
    videoUrl: "https://player.vimeo.com/video/77417889?h=f15a81e41e",
    descrb:
      "Maka Samuchia: Journaliste de 25 ans, elle travaille pour la chaîne géorgienne « Odischi ». Pendant la guerre russo-géorgienne en 2008, quand les troupes russes occupèrent une grande partie de l’Ouest du pays, elle a vu Zougdidi devenir une ville fantôme. Avec sa collègue Tamar Lataria, elle prépare une série de documentaires sur la mission de l’UE en Géorgie.",
  },
  {
    id: 2,
    videoUrl: "https://player.vimeo.com/video/77417881?h=5ba39e88ad",
    descrb:
      "Natia Bolkavadze, alias Frida:Chaque année, cette artiste remonte sa paillotte sur la plage de Kvariati,au sud de la ville de Batoumi. Un endroit très prisé par les bobos de Tbilissi. La spécialité de Frida est le « chwichtari » (pain de maïs au fromage).",
  },

  {
    id: 2,
    videoUrl: "https://player.vimeo.com/video/78247268?h=1d7f911c64",
    descrb:
      "Évêque métropolite Kalistrate : L'ecclésiastique a eu une carrière formidable. Il a quitté sa femme et son fils pour une vie monastique avant de devenir plus tard l'évêque de la principale éparchie de l'ouest de la Géorgie. Il fait le tour de Kutaisi dans une Volga 24 noire.",
  },

  {
    id: 2,
    videoUrl: "https://player.vimeo.com/video/78247267?h=d9f0f83104",
    descrb:
      "Giorgi Gotsiridze : En tant que fils d'un célèbre chercheur géorgien sur les glaciers, Goza a fait son premier voyage en montagne à l'âge de 6 mois. Le géographe vit pour la montagne et s'est spécialisé dans le développement de domaines skiables et de nouvelles stations de montagne dans les régions reculées de Géorgie.",
  },

  {
    id: 3,
    videoUrl: "https://player.vimeo.com/video/77417883?h=2239825476",
    descrb:
      "Mamuka Khazaradze:Le château Mukhrani, l’un des projets favoris du banquier de Tbilissi, est actuellement transformé en hôtel de grand luxe – avec un petit théâtre en plein air et des écuries. Cet amateur de chevaux part chaque année faire des randonnées équestres dans les hautes vallées du Grand Caucase.",
  },
  {
    id: 4,
    videoUrl: " https://player.vimeo.com/video/77417887?h=87befd7aac",
    descrb:
      "Mamuka Khazaradze:C’est en s’entourant d’étudiants en sciences économiques que ce banquier fonde dans les années 90 ce qui est devenu un véritable empire… A l’époque, pour créer une banque, il suffisait d’un capital de 500 dollars. TBC est aujourd’hui la deuxième banque du pays. Mamuka soutient des projets environnementaux et culturels.",
  },
  {
    id: 5,
    videoUrl: "https://player.vimeo.com/video/77419018?h=79534b15b0",
    descrb:
      "Pavle Zereteli:Cet homme de 81 ans, qui a vécu les débuts du combinat d’acier et de fer à Roustavi, a formé des générations de sidérurgistes. Après l’effondrement de l’Union soviétique, il s’est engagé, avec le président Gamsakhourdia, pour la sauvegarde du site industriel. Aujourd’hui encore, il vient tous les jours dans l’usine pour conseiller la direction.",
  },
];

let videoDataGe = [
  {
    videoUrl: "https://player.vimeo.com/video/80313882?h=ec3bb451ce",
    descrb:
      "მაკა სამუშია: 25 წლის ჟურნალისტი, მეგრულ ტელევიზია „ოდიშში“ მუშაობს. მისი თქმით, 2008 წლის რუსეთ-საქართველოს დროს, როდესაც რუსულმა არმიამ ქართული ტერიტორიის მნიშვნელოვანი ნაწილების ოკუპაცია მოახდინა, ზუგდიდი „ლანდების ქალაქს“ ჰგავდა.",
  },
  {
    videoUrl: "https://player.vimeo.com/video/80312234?h=ab1029f8f0",
    descrb:
      "ფრიდა: არტისტი, რომელიც ყოველ წელს კვარიათში „კაფე-ნიჟარას“ აშენებს. პლაჟი ბათუმის სამხრეთით მდებარეობს და ძალიან პოპულარულია ახალგაზრდებს შორის.",
  },

  {
    videoUrl: "https://player.vimeo.com/video/80312237?h=5ea0b03c5b",
    descrb:
      "მიტროპოლიტი კალისტრატე: თავბრუდამხვევი კარიერის მქონე საეკლესიო პირი, რომელმაც ოჯახი სამონასტრო ცხოვრებისათვის მიატოვა, მოგვიანებით დასავლეთ საქართველოს მთავარი ეპარქიის ეპისკოპოსი გახდა. იგი ქუთაისში შავი ვოლგა 24-ით დადის.",
  },

  {
    videoUrl: "https://player.vimeo.com/video/80312235?h=fc72ca80cd",
    descrb:
      "გიორგი გოცირიძე: ცნობილი ქართველი მყინვარების მკვლევარის ვაჟი პირველად ალპინისტურ ექსპედიციაში 6 თვისა აღმოჩნდა. გეოგრაფი მთებში ცხოვრობს, სადაც სათხილამურო გარემოს და საქართველოს შორეულ რეგიონებში ახალი ზამთრის კურორტების განვითარების სპეციალისტად იქცა.",
  },

  {
    videoUrl: "https://player.vimeo.com/video/80312238?h=293cdf8e9b",
    descrb:
      " მამუკა ხაზარაძე: შატო მუხრანი თბილისელი ბანკირის საყვარელი პროექტია. შატოში ახლა რესტაავრაციის პროცესი მიმდინარეობს, მალე აქ პატარა სასტუმრო გაკეთდება, ღია თეატრითა და თავლით. მამუკას ცხენები უყვარს და ყოველ წელს მიდის ცხენებით ლაშქრობაში კავკასიონისაკენ. ",
  },
  {
    videoUrl: "https://player.vimeo.com/video/80313880?h=473233a510",
    descrb:
      "მამუკა ხაზარაძე: ბანკირი, რომელმაც თავისი იმპერია 90-იან წლებში დააარსა, როდესაც საბანკო საქმიანობის დაწყება 500 დოლარიანი საწყისი კაპიტალით იყო შესაძლებელი. „მისი“ ბანკი საქართველოს სიდიდით მეორე ბანკია, ბანკირი ჩართულია კულტურულ და გარემოსდაცვით პროექტებში.",
  },
  {
    videoUrl: "https://player.vimeo.com/video/80312242?h=3d577944b4",
    descrb:
      "პავლე წერეთელი: 81 წლის ფოლადის სპეციალისტი მეორე მსოფლიო ომის შემდეგ რუსთავში ფოლადისა და რკინის წარმოების დაწყებიდან მუშაობდა და მეფოლადეების თაობები აღზარდა. საბჭოთა კავშირის დაშლის შემდეგ ქარხნის შენარჩუნების მიზნით ქვეყნის მაშინდელ პრეზიდენტ ზვიდ გამსახურდიასთან აქტიურ მოლაპარაკებებში იღებდა მონაწილეობას და ბევრი სამუშაო ადგილის შენარჩუნება მოახერხა.",
  },
];

let pictureDataFr = [
  {
    description:
      "La capitale de la Mingrélie-et-Haute-Svanétie (Samegrelo-Zemo Svaneti) est la ville géorgienne qui marque de fait la ligne de séparation avec la république d’Abkhazie, dont le statut est disputé. Le passage de la frontière se fait sur le pont Inguri, tout proche de Zougdidi. Le château Dadiani, ancienne résidence de la princesse de Mingrélie, abrite les masques mortuaires de Napoléon et un suaire de la Sainte Vierge. Les jeunes de la région participent volontiers aux ateliers et aux programmes en faveur de la paix organisés par des ONG internationales. Grâce aux médias sociaux, un nouveau réseau de communication a vu le jour, qui leur permet de participer activement au débat sur l’avenir de leur région marquée par la guerre.",
  },
  {
    description:
      "Le port géorgien a été bâti dans l’Antiquité par les Grecs qui l’ont baptisé Batis. La silhouette de la ville n’a cessé de changer et les faubourgs, avec leurs petites rangées de maisons en bois et leurs barres d’immeubles soviétiques, s’avancent loin dans la chaîne montagneuse du Petit Caucase. Les bâtiments érigés ces dernières années, notamment la tour Alphabet, l’université technique, le Hall du service public, les complexes hôteliers et restaurants futuristes ont radicalement changé le visage de cette ville. Face à l’afflux de touristes et d’investisseurs étrangers, nombreux sont les habitants qui craignent de ne plus se sentir chez eux. Ils espèrent retrouver un jour une place importante dans la vie de leur ville.",
  },
    
  {
    description: 'Pendant des siècles, Koutaïssi a été le centre culturel et politique de la Géorgie occidentale. Le roi Aiétès (popularisé par le mythe des Argonautes) et le puissant roi David IV de Géorgie, surnommé le Bâtisseur, avaient fait ériger leur palais dans les environs de Koutaïssi, devenu le siège du Parlement géorgien en 2012. Tandis que les politiques se chamaillent pour savoir si le gouvernement doit retourner à Tbilissi, la capitale, les habitants de Koutaïssi s’adonnent à des loisirs typiquement urbains comme le Guerilla Gardening. La jeunesse citadine exige quant à elle de meilleures possibilités d’éducation et de formation, plus d’emplois et… un cinéma.'
  },

  {
    description: "Sur le versant sud de la chaîne montagneuse du Grand Caucase, la station de sports d'hiver de Gudauri se développe rapidement le long de la route militaire géorgienne, en dessous du col de la Croix. Les amateurs de glisse savent qu’ils y trouveront la meilleure poudreuse du Caucase. En hélicoptère, les sommets de plus de 4000 m sont rapidement accessibles. Or, de nombreuses pistes ne sont plus accessibles pour les skieurs héliportés aujourd’hui, car ils se trouvent en Ossétie du Sud (« Samatchablo »), occupée par les Russes. Depuis 2012 et l’inauguration d’une télécabine moderne, un projet prévoit la construction d’un téléphérique qui assurera la liaison avec la face nord. Le but : attirer davantage de touristes russes."
  },
  
  {
    description:
      "Le petit village et la région éponyme situés en Géorgie orientale tiennent leur nom historique – Samuchranbatono – d’une branche de la famille royale géorgienne, les Moukhran-Batonis. Le château de Moukhran a été construit en 1873 par le prince Ivane Bagration de Moukhran, général dans l’armée russe impériale – et viticulteur réputé. Le château, abandonné pendant la période soviétique, se dégradait de plus en plus ; il a été rénové depuis et les crus « Château Moukhran » comptent parmi les plus grands vignobles du pays.",
  },
  {
    description:
      "La capitale géorgienne porte depuis 1936 le nom de Tbilissi en raison de ses sources chaudes d’eau sulfureuse (« tbili » signifie « chaud » en géorgien). Avec 1,5 million d’habitants, c’est la seule grande ville du pays. Les restes des « premiers Européens », Seswa et Msia, mis au jour lors de fouilles archéologiques réalisées en 2000, sont conservés au musée Janachia, en plein centre-ville. Depuis quelques années, de nouvelles constructions pas toujours heureuses défigurent la ville. Aujourd’hui, de plus en plus d’habitants font entendre leur voix pour empêcher la destruction des vieilles bâtisses et des places traditionnelles de Tbilissi. Les étudiants et les jeunes scientifiques qui ont étudié à l’étranger jouent un rôle de premier plan dans cette protestation citoyenne.",
  },
  {
    description:
      "Roustavi est la plus ancienne ville de Géorgie ; presque entièrement détruite par les Mongols au XIIIe siècle, elle n’a été reconstruite qu’à l’ère soviétique, pour devenir le centre de l’industrie lourde. Sur ordre de Staline, le plus grand complexe sidérurgique du Caucase y a vu le jour dans les années 1940 – plus de 120 unités de production y étaient installées. La ville ne s’est jamais vraiment remise de l’effondrement de l’URSS. Roustavi n’est plus que friches industrielles et cités-dortoirs. Beaucoup de jeunes aspirant au mode de vie occidental se tournent vers les organisations non-gouvernementales ou vont travailler à Tbilissi, à seulement 25 km de Roustavi.",
  },
];

let pictureDataGe = [
  {
    description:
      " სამეგრელოსა და ზემო-სვანეთის რეგიონის დედაქალაქი თვითგამოცხადებული რესპუბლიკის, აფხაზეთის, დეფაქტო საზღვართან მდებარეობს. შეზღუდული სასაზღვრო მოძრაობა ზუგდიდთან ახლოს, ენგურის ხიდის გავლით ხდება. სამეგრელოს თავადების, დადიანების სასახლეში შესაძლებელია ნაპოლეონის ნიღბისა და ღვთიშობლის კვართის ხილვა. რეგიონის ახალგაზრდობა აქტიურად მონაწილეობს საერთაშორისო არასამთავრობო ორგანიზაციების მიერ ორგანიზებულ ტრენინგებში. ",
  },
  {
    description:
      " ქართული საპორტო ქალაქი ანტიკურ ხანაში ძველმა ბერძნებმა დაარსეს და ბათუსი უწოდეს. ქალაქის ჰორიზონტი მრავალჯერ შეიცვალა. მიუხედავად ამისა, ბოლო წლების მშენებლობებმა ანბანის კოშკმა, ტექნიკური უნივერსიტეტის შენობამ, იუსტიციის სახლმა და სხვა ფუტურისტულმა ნაგებობებმა საბჭოთა კორპუსების ატმოსფერო სრულიად შეცვალა. უცხოელი ტურისტებისა და ახალი შენობების მზარდმა რაოდენობამ ბათუმელების ნაწილი ნოსტალგიური გახადა და გააუცხოვა საკუთარ ქალაქთან. მომავალში, მათ იმედი აქვთ თავად შეიტანონ წვლილი საკუთარი ქალაქის განვითარებაში. ",
  },

  {
    description: ' საუკუნეების განმავლობაში ქუთაისი დასავლეთ საქართველოს კულტურულ და პოლიტიკურ ცენტრს წარმოადგენდა. ქუთაისი, სადაც ახლა საქართველოს პარლამენტი მდებარეობს, არგონავტების მითიდან ცნობილი მეფე აიეტისა და საქართველოს ყველაზე ძლევამოსილი მეფის, დავით აღმაშენებლის სატახტო ქალაქი იყო. სანამ პოლიტიკოსები დავობენ პარლამენტის ადგილმდებარეობის შესახებ, ქუთაისის მოქალაქეები ცდილობენ ურბანული ცხოვრების თანამედროვე ასპექტები საკუთარ ქალაქშიც დანერგონ.'
  },

  {
    description: 'სწრაფად მზარდი სათხილამურო კურორტი კავკასიონის სამხრეთ ფერდობზე მდებარეობს. გუდაური ჯვრის უღელტეხილიდან რამოდენიმე კილომეტრის დაშორების, საქართველოს სამხედრო გზაზე მდებარეობს. ზამთრის სპორტის მოყვარულთათვის გუდაურში საუკეთესო ფხვიერი თოვლია. 4000 მეტრზე მაღალ მწვერვალებზე შვეულმფრენის საშუალებით მოხვდებით. ზოგიერთი სათხილამურო ტრასა არ მოქმედებს, რადგანაც რუსეთის მიერ ოკუპირებულ სამაჩაბლოს რეგიონს ესაზღვრება. 2012 წელს ფრანგულმა კომპანიამ გუდაურში საბაგირო გზა ააგო, დაგეგმილია ჩრდილოეთით მდებარე თერგის ხეობის გუდაურთან სათხილამურო გზით დაკავშირება.'
  },

  {
    description:
      " ეს პატარა სოფელი და მისი შემოგარენი, ისტორიულად, ბაგრატიონთა სამეფო გვარის მუხრანელთა შტოს სამფლობელო იყო და სამუხრანბატონოს სახელითაა ცნობილი. მუხრანის სასახლე 1873 წელს რუსეთის იმპერიის გენერალმა და წარმატებულმა მმეღვინემ, ივანე მუხრანბატონმა ააგო. საბჭოთა ხანამ სასახლე სავალალო მდგომარეობაში ჩააგდო, თუმცა, მას შემდეგ განახლდა და ახლა შატო მუხრანის სახელით მოიხსენიებენ. შატო მუხრანის ლოგოთი გამოდის ქვეყნიე ერთ-ერთი პრესტიჟული ღვინო. ",
  },
  {
    description:
      " საქართველოს დედაქალაქ თბილისს სახელი გოგირდის აბანოების ცხელი წყლის გამო დაერქვა. საქართველოს ყველაზე დიდ ქალაქს 1.5 მილიონი მცხოვრები ჰყავს. ქალაქის გულში, ჯანაშიას მუზეუმში შეგიძლიათ ნახოთ პირველი ევროპელების, ზეზვასა და მზიას ნაშთები, რომელიც 2001 წლის გათხრებისას იქნა აღმოჩენილი. ბოლო წლების განმავლობაში აგებულმა ახალმა შენობებმა ქალაქის იერსახე შეცვალა. უფროდაუფრო მეტი მოქალაქე იმაღლებს ხმას ძველი შენობებისა და სხვა ძეგლების განადგურების წინააღმდეგ. სტუდენტები და საზღვარგარეთ მომუშავე ახალგაზრდა მეცნიერები მნიშვნელოვან როლს თამაშობენ ამ პროცესში. ",
  },
  {
    description:
      " რუსთავის საქართველოს ერთ-ერთი უძველესი ისტორიული ქალაქი იყო XIII საუკუნემდე, სანამ მონღოლებმა არ გაანადგურეს. 1940-იან წლებში სტალინის ბრძანებით რუსთავში 100-მდე ფოლადის ქარხანა აშენდა და ქალაქი მძიმე ინდუსტრიის ცენტრად იქცა. დღესაც ქალაქში თვალშისაცემია საბჭოთა წარსული. ბევრი რუსთაველი ახალგაზრდა სწავლობს ან მუშაობს 25 კილომეტრით დაშორებლ დედაქალაქ თბილისში და აქტიურადაა ჩართული ქალაქში მომუშავე ახალგაზრდული არასამთავრობო ორგანიზაციების მუშაობაში. ",
  },
];

let dataSliderFr = [
  {
    text: "Du 3 au 9 mars Tbilissi est secouée par une vague de manifestations en la mémoire du dictateur Staline, elles cristallisent le sentiment antisoviétique.Le mouvement est réprimé dans un bain de sang. Plus d’une centaine de jeunes sont tués par les forces spéciales soviétiques.",
  },
  {
    text: "Visite à Tbilissi de Nikita Khrouchtchev, le premier secrétaire du Comité central du Parti communiste et chef du gouvernement de l’Union soviétique. Période de dégel dans les relations Est/Ouest.",
  },
  {
    text: "Le Dynamo Tbilissi est champion de football d’Union soviétique. Après le Dynamo Kiev en 1960, c’est la deuxième équipe non russe à remporter le titre.",
  },
  {
    text: "Le 21 août, les troupes soviétiques entrent dans Prague, mettant une fin brutale au « Printemps de Prague ».",
  },
  {
    text: "Démission de Vassili Mzhavanadze, premier secrétaire du Comité central du Parti communiste géorgien. Edouard Chevardnadze est élu à sa succession.",
  },
  {
    text: "La première organisation géorgienne des droits de l’homme, le « Groupe Helsinki géorgien », est fondée par Merab Kostava, Zviad Gamsakhourdia et Viktor Rzchiladze.",
  },
  {
    text: "Du 8 au 16 mars se déroule à Tbilissi le premier festival rock d’Union soviétique, « Le rythme du printemps ». Quelques mois plus tôt, l’Armée rouge envahissait l’Afghanistan.",
  },
  {
    text: "1984 - Le patriarche de Géorgie, Elie II, visite le monastère Sainte –Catherine du Mont Sinaï. La bibliothèque du monastère conserve plus de 3500 volumes manuscrits, dont de nombreux en géorgien.",
  },
  {
    text: "1988 – Manifestations de masse à Tbilissi avec pour principale revendication la sortie de la Géorgie de l’Union soviétique. Le 9 avril 1989, le mouvement est réprimé dans le sang par les troupes soviétiques.",
  },
];

let dataSliderGe = [
  {
    text: "9 მარტს საბჭოთა ჯარებმა სტალინის სახელის დასაცავად გამართული ახალგაზრდული საპროტესტო აქცია დაარბიეს და ასზე მეტი ახალგაზრდა მოკლეს. ამავე წელს ლევ იერემეევის მიერ შექმნილმა ავტომანქანა ვოლგის პირველმა მოდელმა ჩაანაცვლა იქამდე პოპულარული პობედა.",
  },
  {
    text: "კომუნისტური პარტიის პირველი მდივანი, ნიკიტა ხრუშოვი ჩამოდის თბილისში. ვოლგის მეორე მოდელი, ვოლგა 22 ხდება საბჭოეთში მაღალი სტატუსის სიმბოლო.",
  },
  {
    text: "თბილისის დინამო ხდება საბჭოთა კავშირის ჩემპიონი ფეხბურთში, მეორე არარუსული ჩემპიონი გუნდი უკრაინის ჩემპიონობის შემდეგ (1960). ვოლგის დიდსაბარგულიანი ვერსიების ტაქსის, საგზაო პოლიციისა და სასწრაფო დახრმარების მანქანებად გამოყენება დაიწყეს.",
  },
  {
    text: " 21 აგვისტოს საბჭოთა არმია პრაღაში შეიჭრა. ვოლგს ახალი მოდელის, 24-ის შემუშავება ამ დროისათვის უკვე დასრულებული იყო, მაგრამ 1968 წელს მხოლოდ 31 ცალი გამოუშვეს, კიდევ 215 1969 წელს. საბოლოოდ, 1956-დან 1970 წლამდე სულ 639,478 ვოლგა აწარმოეს.",
  },
  {
    text: "საქართველოს ცენტრალური კომიტეტის პირველი მდივანი, ვასილ მჟავანაძე გადადგა და მისი ადგილი ედუარდ შევარდნაძემ დაიკავა. ამავე წელს გამოუშვეს დიდსაბარგულიანი ვოლგა 24-02. დიდსაბარგულიანი ავტომანქანის შეძენა მხოლოდ სპეციალური ნებართვის ქონის შემთხვევაშ შეიძლებოდა. ასეთი ნებართვა კი მხოლოდ მრავალშვილიან ოჯახებსა და იმ სპორტსმენებს ეძლეოდათ, რომელთაც სპორტული აღჭურვილობის გადატანა უწევდათ",
  },
  {
    text: "მერაბ კოსტავა, ზვიად გამსახურდია და ვიქტორ რცხილაძე ქმნიან პირველ ქართულ უფლებადაცვით ორგანიზაციას, „ჰელსინკის ჯგუფს“. ვოლგა 24 სავსებით განაახლეს 1976-78 წლებში, გაუმჯობესდა მგზავრობის უსსაფრთხოება, ახლა უკვე შესაძლებელი იყო წითელი, ყვითელი, ღია და მუქი მწვანე, ლურჯი ან შავი ვოლგის შეძენა.",
  },
  {
    text: "8-15 მარტს თბილისში ჩატარდა პირველი საბჭოთა როკ ფესტივალი, „შემოდგომის რიტმები“, მაშინ, როდესაც ავღანეთში ომი მიმდინარეობდა. მოსკოვის 1980 წლის ზაფხულის ოლიმპიადისათვის მოსკოველი დიზაინერების მიერ ვოლგის სპეციალური მოდელები შეიქმნა, რომელიც ოლიმპიურ ცეცხლს მიაცილებდა.",
  },
  {
    text: "საქართველოს პატრიარქი ილია II ეწვია სინას მთას, სადაც მნიშვნელოვანი ქართული ხელნაწერები ინახებოდა. საბჭოთა მინისტრებმა ბოლოსდაბოლოს, 1981 წელს დაამტკიცეს ვოლგის ახალი მოდელი, „31“ თუმცა, მისი პრეზენტაცია 1984 წლის მოსკოვის ავტო გამოფენამდე არ მომხდარა, ქარხანა კი პირველმა ავტომობილებმა 1965 წელს დატოვეს.",
  },
  {
    text: "თბილისში, საქარველოს საბჭოთა კავშირისაგან გამოყოფის მოთხოვნით მასობრივი სტუდენტური აქციები იმართება. მიუხედავად საბჭოეთში ვოლგის განსაკუთრებული სტატუსისა, 1980-იანი წლების შუა ხანებში ვოლგა უკვე საკმაოდ მოძველებული მანქანა იყო, თავის დასავლურ კონკურენტებთან შედარებით.",
  },
];

let radioDataGe = [
  {
    text: "ჯგუფი 33ა ქართული ფოლკ-როკ ჯგუფია, რომელიც თბილისში 1994 წელს დაარსდა, ჯგუფის სოლისტია ნიაზ დიასამიძე. 33ა-ს მუსიკა პოპისა და რეგეის ელემენტებით, ძირითადად ქართული და ფრანგული ფოლკლორის გავლენას განიცდის. ტექსტები ქართული და ფრანგულენოვანია. ნიაზ დიასამიძე, ფალიაშვილის ქუჩა 33ა-ში ცხოვრობს, აქედანაა ჯგუფის სახელიც.",
  },
  {
    text: "ახალგაზრდა მიზანდასახული არტისტია, რომელსაც სხვადასხვა სტილის ელექტრონული მუსიკის ახალ, უნიკალურ საუნდად გადაქცევა შეუძლია. მისი სადებიუტო ალბომი საუკეთესოა რელაქსაციისათვის.",
  },
  {
    text: "ქართული ფოლკ-როკის საუკეთესო წარმომადგენელია. ჯგუფი 1989 წელს ჩამოყალიბდა. ტექსტები უმეტესად ინგლისურენოვანია. ამჟამად ჯგუფი ექვსი წევრისაგან შედგებ - ვახო ბაბუნაშვილი (ბასი, ვოკალი), ნოდარ მანჩხაშვილი (პერკუსია), გიორგი კობახიძე (გიტარა, ვოკალი), სანდრო ნიკოლაძე (ფლეიტა, ლირა), ემზარ ბურდული (საყვირი, ვოკალი) და ანა სიხარულიძე (აკორდეონი).",
  },
  {
    text: "ჯგუფი 2009 წელს ახალგაზრდა პოეტმა, ზურა ჯიშკარიანმა შექმნა. ჩრინგი და ზურა ჯიშკარიანი ჯგუფის სოლისტები არიან, ვინდა ფოლიო - გიტარა, მაქს მაჩაიძე - MC. ტექსტები ქართულ და ინგლისურ ენებზეა. ჯგუფი საკუთარ Facebook გვერდზე წერს, რომ ჩინური კომუნიზმისა და უილიამ ბეროუზის გავლენას განიცდის.",
  },
  {
    text: "ქართულ-ფრანგული პანკ ჯგუფი მომღერალმა და გიტარისტმა ფრედ პალანმა 2000-იანებში დააარსა. ჯგუფის სამივე ალბომის თემატიკა სოციალურ პრობლემებს ეხება, სახელი კი 90-იანი წლების გამოძახილია, როდესაც ქვეყანაში ელექტრო ენერგია იშვიათად მიეწოდებოდათ.",
  },
  {
    text: "ნიკა მაჩაიძე ქართველი რეჟისორი და ელექტრონული მუსიკის ავტორია. მას ეკუთვნის საუნდტრეკი ბოთო შტრაუსის სპექტაკლისათვის - „პარკი“, ქმნის მუსიკას მოდის ჩვენებებისა და სატელევიზიო პროდუქტებისათვის. ნიკა მაჩაიძე არის Goslab Group-ის წევრი.",
  },
];

let radioDataFr = [
  {
    text: "Niaz Diasamidze est le chanteur et leader de 33a, un groupe de folk rock géorgien fondé en 1994 à Tbilissi. 33a livre un métissage du folk français et géorgien avec des éléments pop et reggae, sur des textes principalement en géorgien parfois en français. Le nom du groupe fait référence au numéro de l’immeuble de la rue Paliachvili à Tbilissi où habite Niaz Diasamidze.",
  },
  {
    text: "Gacha est un jeune artiste géorgien plein d’avenir qui crée son propre son en s’appropriant différents styles électro. Voici un premier album parfait pour se détendre. Ce paysage sonore a toute sa place chez Apollo Records, filiale du label belge R&S Records (Renaat Vandepapeliere).",
  },
  {
    text: "Soft Eject, c’est une perle du folk rock made in Caucase. Fondé en 1989, le groupe géorgien mêle influences folk européennes et géorgiennes avec des sonorités psychédéliques et rock. La plupart des paroles sont en anglais. Actuellement, le groupe se compose de six membres - Vaho Babunashvili (basse, voc.), Nodar Manchkhashvili (percussions), Giorgi Kobakhidze (guitare, voc.), Sandro Nikoladze (flûte, lyre), Emzar Burduli (cor d’harmonie, voc.) et Anna Sikharulidze (accordéon, clavier).",
  },
  {
    text: "Fondé en 2009 par le jeune poète Zura Jishkariani, le groupe Kung Fu Junkie joue de la pop électro. Il est composé de Chring et Zura Jishkariani au chant, Linda Folio à la guitare, et de MC CutDaKill et Max Machiadze. Les textes de Kung Fu Junkie sont en géorgien et en anglais. Sur sa page Facebook, le groupe explique qu’il s’inspire du communisme chinois et du poète William Burroughs.",
  },
  {
    text: "Shuqi movida (ou Chouki movida) est un groupe de punk franco-géorgien fondé en 2000 par le chanteur et guitariste français Frédéric Payen. Dans ses trois albums, la plupart des titres évoquent les problèmes sociaux et la société géorgienne à une époque où les coupures de courant étaient encore quotidiennes. D’où le nom du groupe, qui signifie « L’électricité est revenue ».",
  },
  {
    text: `Le Géorgien Nika Machaidze est réalisateur de films et musicien électro. Membre du collectif « Goslab », il a produit la bande originale de la pièce « Le parc » de l'auteur dramatique allemand Botho Strauss. Il met aussi en musique des défilés de mode et des productions télévisées.`,
  },
];

function videoDataLanguageChangeDe() {
  for (let i = 0; i < videoData.length; i++) {
    const element = videoData[i];
    element.descrb = videoDataDe[i].descrb;
    element.videoUrl = videoDataDe[i].videoUrl;
  }
}

function videoDataLanguageChangeFr() {
  for (let i = 0; i < videoData.length; i++) {
    const element = videoData[i];
    element.descrb = videoDataFr[i].descrb;
    element.videoUrl = videoDataFr[i].videoUrl;
  }
}

function videoDataLanguageChangeGe() {
  for (let i = 0; i < videoData.length; i++) {
    const element = videoData[i];
    element.descrb = videoDataGe[i].descrb;
    element.videoUrl = videoDataGe[i].videoUrl;
  }
}

function picturesDataLanguageChangeDe() {
  for (let i = 0; i < pictureData.length; i++) {
    const element = pictureData[i];
    element.description = pictureDataDe[i].description;
  }
}

function picturesDataLanguageChangeFr() {
  for (let i = 0; i < pictureData.length; i++) {
    const element = pictureData[i];
    element.description = pictureDataFr[i].description;
  }
}

function picturesDataLanguageChangeGe() {
  for (let i = 0; i < pictureData.length; i++) {
    const element = pictureData[i];
    element.description = pictureDataGe[i].description;
  }
}

function sliderDataLanguageChangeDe() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.text = dataSliderDe[i].text;
    let sliderText = document.getElementById("text");
    sliderText.textContent = dataSliderDe[0].text;
  }
}

function sliderDataLanguageChangeFr() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.text = dataSliderFr[i].text;
    let sliderText = document.getElementById("text");
    sliderText.textContent = dataSliderFr[0].text;
  }
}

function sliderDataLanguageChangeGe() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element.text = dataSliderGe[i].text;
    let sliderText = document.getElementById("text");
    sliderText.textContent = dataSliderGe[0].text;
  }
}

function radioDataLanguageChangeDe() {
  for (let i = 0; i < radioData.length; i++) {
    const element = radioData[i];
    element.text = radioDataDe[i].text;
    let sliderText = document.getElementById("singer-info");
    sliderText.textContent = radioDataDe[0].text;
  }
}

function radioDataLanguageChangeFr() {
  for (let i = 0; i < radioData.length; i++) {
    const element = radioData[i];
    element.text = radioDataFr[i].text;
    let sliderText = document.getElementById("singer-info");
    sliderText.textContent = radioDataFr[0].text;
  }
}

function radioDataLanguageChangeGe() {
  for (let i = 0; i < radioData.length; i++) {
    const element = radioData[i];
    element.text = radioDataGe[i].text;
    let sliderText = document.getElementById("singer-info");
    sliderText.textContent = radioDataGe[0].text;
  }
}

function characterDataLanguageChangeFr() {
  for (let i = 0; i < characterTextData.length; i++) {
    const element = characterTextData[i];
    element.textDescription = characterTextDataFr[i].textDescription;
    element.videoUrl = characterTextDataFr[i].videoUrl;
  }
  let characterTitle = document.querySelectorAll(".character-title");
  for (let i = 0; i < characterTitle.length; i++) {
    const element = characterTitle[i];
    element.textContent = characterTextDataFr[i].name;
  }

  let characterPosition = document.querySelectorAll(".character-p");
  for (let i = 0; i < characterPosition.length; i++) {
    const element = characterPosition[i];
    element.textContent = characterTextDataFr[i].position;
  }
}

function characterDataLanguageChangeGe() {
  for (let i = 0; i < characterTextData.length; i++) {
    const element = characterTextData[i];
    element.textDescription = characterTextDataGe[i].textDescription;
    element.videoUrl = characterTextDataGe[i].videoUrl;
  }
  let characterTitle = document.querySelectorAll(".character-title");
  for (let i = 0; i < characterTitle.length; i++) {
    const element = characterTitle[i];
    element.textContent = characterTextDataGe[i].name;
  }

  let characterPosition = document.querySelectorAll(".character-p");
  for (let i = 0; i < characterPosition.length; i++) {
    const element = characterPosition[i];
    element.textContent = characterTextDataGe[i].position;
  }
}

function characterDataLanguageChangeDe() {
  for (let i = 0; i < characterTextData.length; i++) {
    const element = characterTextData[i];
    element.textDescription = characterTextDataDe[i].textDescription;
    element.videoUrl = characterTextDataDe[i].videoUrl;
  }
  let characterTitle = document.querySelectorAll(".character-title");
  for (let i = 0; i < characterTitle.length; i++) {
    const element = characterTitle[i];
    element.textContent = characterTextDataDe[i].name;
  }

  let characterPosition = document.querySelectorAll(".character-p");
  for (let i = 0; i < characterPosition.length; i++) {
    const element = characterPosition[i];
    element.textContent = characterTextDataDe[i].position;
  }
}

function characterTitleLanguageChangeEn() {
  let characterTitle = document.querySelectorAll(".character-title");
  for (let i = 0; i < characterTitle.length; i++) {
    const element = characterTitle[i];
    element.textContent = characterTextData[i].name;
  }

  let characterPosition = document.querySelectorAll(".character-p");
  for (let i = 0; i < characterPosition.length; i++) {
    const element = characterPosition[i];
    element.textContent = characterTextData[i].position;
  }
}

function titleLanguageChangeDe() {
  let texts = document.querySelectorAll(".loop");
  for (let i = 0; i < texts.length; i++) {
    const element = texts[i];
    console.log(arrayTextxsDe.length, texts.length);
    element.textContent = arrayTextxsDe[i].title;
  }
}


function titleLanguageChangeFr() {
  let texts = document.querySelectorAll(".loop");
  for (let i = 0; i < texts.length; i++) {
    const element = texts[i];
    element.textContent = arrayTextxsFr[i].title;
  }
}

function titleLanguageChangeGe() {
  let texts = document.querySelectorAll(".loop");
  for (let i = 0; i < texts.length; i++) {
    const element = texts[i];
    element.textContent = arrayTextxsGe[i].title;
  }
}

function tralerLanguageChangeDe() {
  let tralerVideo = document.getElementById('trailer-video');
  tralerVideo.setAttribute('src', 'https://player.vimeo.com/video/77861141?h=34d80e974a');
}

function tralerLanguageChangeFr() {
  let tralerVideo = document.getElementById('trailer-video');
  tralerVideo.setAttribute('src', 'https://player.vimeo.com/video/77861142?h=ce1341b459');
}

function traletLanguageChangeEn() {
  let tralerVideo = document.getElementById('trailer-video');
  tralerVideo.setAttribute('src', 'https://player.vimeo.com/video/80936905?h=2455455aa4');
}

function tralerLanguageChangeGe() {
  let tralerVideo = document.getElementById('trailer-video');
  tralerVideo.setAttribute('src', 'https://player.vimeo.com/video/80881883?h=09cea62159');
}


let fr = document.getElementById('FR');
let de = document.getElementById('DE');
let ge = document.getElementById('GE');
let en = document.getElementById('EN');

fr.addEventListener('click', function(){
    videoDataLanguageChangeFr();
    picturesDataLanguageChangeFr();
    sliderDataLanguageChangeFr();
    radioDataLanguageChangeFr();
    characterDataLanguageChangeFr();
    tralerLanguageChangeFr();
    titleLanguageChangeFr();
    ge.classList.remove('active');
    // en.classList.add('active');
      if (en.style.display ==="none") {
      en.style.display = "block";
      fr.style.display = "none";
      
      en.addEventListener('click', function(){
        location.reload();
        en.style.display = "none";
        fr.style.display = "block";
        fr.classList.add('active');
      })
    }
});

de.addEventListener('click', function(){
    videoDataLanguageChangeDe();
    picturesDataLanguageChangeDe();
    sliderDataLanguageChangeDe();
    radioDataLanguageChangeDe();
    characterDataLanguageChangeDe();
    titleLanguageChangeDe();
    tralerLanguageChangeDe();
    de.classList.add('active');
    ge.classList.remove('active');
    en.classList.remove('active');
})
ge.addEventListener('click', function(){
    videoDataLanguageChangeGe();
    picturesDataLanguageChangeGe();
    sliderDataLanguageChangeGe();
    radioDataLanguageChangeGe();
    characterDataLanguageChangeGe();
    tralerLanguageChangeGe();
    titleLanguageChangeGe();
    de.classList.remove('active');
    ge.classList.add('active');
    en.classList.remove('active');
})




// function changeLanguage(lang) {
//   location.hash = lang;
//   location.reload();
// }

// if (window.location.hash) {
//   if (window.location.hash == "#en") {
//     characterTitleLanguageChangeEn();
//     let sliderText = document.getElementById("text");
//     sliderText.textContent = data[0].text;
//     traletLanguageChangeEn();
//   }

//   if (window.location.hash == "#de") {
//     videoDataLanguageChangeDe();
//     picturesDataLanguageChangeDe();
//     sliderDataLanguageChangeDe();
//     radioDataLanguageChangeDe();
//     characterDataLanguageChangeDe();
//     titleLanguageChange();
//     tralerLanguageChangeDe();
//   }

//   if (window.location.hash == "#ge") {
//     videoDataLanguageChangeGe();
//     picturesDataLanguageChangeGe();
//     sliderDataLanguageChangeGe();
//     radioDataLanguageChangeGe();
//     characterDataLanguageChangeGe();
//     tralerLanguageChangeGe()
//   }
//   if (window.location.hash == "#fr") {
//     videoDataLanguageChangeFr();
//     picturesDataLanguageChangeFr();
//     sliderDataLanguageChangeFr();
//     radioDataLanguageChangeFr();
//     characterDataLanguageChangeFr();
//     tralerLanguageChangeFr();
//   }
// }
