const bannerContainer = document.querySelector(".banner");
const bannerItems = document.querySelectorAll(".banner__item");
const bannerImages = document.querySelectorAll(".banner__item img");
const bannerDescriptions = document.querySelectorAll(".banner__description");
const bannerNumbers = document.querySelectorAll(".banner__numbers");
const currentNumbers = document.querySelectorAll(".banner__current-number");
const totalNumbers = document.querySelectorAll(".banner__total-number");
const arrowButtons = document.querySelectorAll(".banner__buttons span");
let index = 0;

currentNumbers[0].innerHTML = `${index + 1}`;
totalNumbers.forEach((total) => total.innerHTML = totalNumbers.length);

bannerItems.forEach((banner, index) => banner.style.left = `${index * 100}%`);

bannerImages.forEach((image, idx) => {
    const description = image.getAttribute("alt");
    bannerDescriptions[idx].innerText = description;
});

bannerDescriptions[0].classList.add("moving-text");
setTimeout(() => bannerDescriptions[0].classList.remove("moving-text"), 1200);

bannerNumbers[0].classList.add("moving-text");
setTimeout(() => bannerNumbers[0].classList.remove("moving-text"), 1200);

const checkCurrentNumber = () => {
    currentNumbers.forEach((number) => {
        number.innerHTML = `${index + 1}`;
    });
}

const checkIndex = () => {
    if(index < 0) index = bannerItems.length - 1;
    if(index > bannerItems.length - 1) index = 0;
}

const showImages = (idx) => {
    bannerItems.forEach((banner) => banner.style.transform = `translateX(-${idx * 100}%)`);

    bannerDescriptions[idx].classList.add("moving-text");
    setTimeout(() => bannerDescriptions[idx].classList.remove("moving-text"), 1200);

    bannerNumbers[idx].classList.add("moving-text");
    setTimeout(() => bannerNumbers[idx].classList.remove("moving-text"), 1200);
}

const changeImages = () => {
    index++;
    checkIndex();
    showImages(index);
    checkCurrentNumber();
}

let intervalImages = setInterval(changeImages, 4500);

arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clearInterval(intervalImages);

        if(button.classList.contains("banner__btn-right")) index++;
        if(button.classList.contains("banner__btn-left")) index--;

        checkIndex();
        showImages(index);
        checkCurrentNumber();

        intervalImages = setInterval(changeImages, 4500);
    });
});