let openMenue = document.querySelector(".openIcon");
let closeMenue = document.querySelector(".closeIcon");
let mobileNavItems = document.querySelector(".mobileNavUl");
let overlay = document.querySelector(".overlay");

openMenue.addEventListener("click", function () {
    openMenue.classList.add("hidden");
    mobileNavItems.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

closeMenue.addEventListener("click", function () {
    openMenue.classList.remove("hidden");
    mobileNavItems.classList.add("hidden");
    overlay.classList.add("hidden");
})

let leftArrowPre = document.querySelector(".left-pre");
let rightArrowNext = document.querySelector(".right-next");
let photoSlides = document.querySelector(".photoSlides");

let roomDescriptionH1 = document.querySelector(".roomDescription h1")
let roomDescriptionP = document.querySelector(".roomDescription p");

backgroundImages = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg", "./images/desktop-image-hero-3.jpg"];
Headers = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
paragraphs = ["We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];

let currentIndex = 0;
rightArrowNext.addEventListener("click", function () {
    currentIndex += 1;

    // stops when reaching the last image
    if (currentIndex >= backgroundImages.length) {
        currentIndex = backgroundImages.length - 1;
    }

    //set the background according to the index
    photoSlides.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

    //set the header
    roomDescriptionH1.textContent = `${Headers[currentIndex]}`;

    //set the paragraph
    roomDescriptionP.textContent = `${paragraphs[currentIndex]}`;

});

leftArrowPre.addEventListener("click", function () {
    currentIndex -= 1;

    // stops when reaching the first image
    if (currentIndex < 0) {
        currentIndex = 0;
    }


    //set the background according to the index
    photoSlides.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

    //set the header
    roomDescriptionH1.textContent = `${Headers[currentIndex]}`;

    //set the paragraph
    roomDescriptionP.textContent = `${paragraphs[currentIndex]}`;

});
