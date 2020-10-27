var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}
// ви можете зробити скільки завгодно слайдів
var slide1 = new Slide(
    "The mighty machines",
    "Bikes",
    "public/images/moto1.jpg",
    "https://art-lemon.com/themightymachines"
);
var slide2 = new Slide(
    "Tesla",
    "Tesla-bike",
    "public/images/moto2.jpg",
    "https://www.pinterest.com/pin/1970393565312041/?nic_v2=1a5pi7av0"
);

var slide3 = new Slide(
    "Moto",
    "Electro",
    "public/images/moto.jpg",
    "https://www.yankodesign.com/2020/05/29/a-tesla-e-bike-would-help-rapidly-electrify-the-two-wheeler-industry/"
);

// console.log(slideArray.length);
// for (let slide of slideArray) console.log(slide.title);


function buildSlider() {
    let myHTML;
    for (var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" +
            slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link +
            "' target = '_blank' >Read more" +
            "</a></div>" +
            "</div>";
    }
    // console.log(myHTML);
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }
    document.getElementById("slide" + nextSlideIndex).style.left =
        "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" +
        nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" +
        currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === (slideArray.length - 1)) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    document.getElementById("slide" + nextSlideIndex).style.left =
        "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" +
        nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" +
        currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
    currentSlideIndex = nextSlideIndex;
}