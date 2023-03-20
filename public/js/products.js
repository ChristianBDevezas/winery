const galleryFilter = document.querySelector(".products__categories__links");
const galleryLinks = document.querySelectorAll(".products__categories__link a");
const galleryImages = document.querySelectorAll(".products__item");

galleryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        galleryFilter.querySelector(".active").classList.remove("active");
        link.classList.add("active");

        const filter = link.getAttribute("data-filter");

        galleryImages.forEach((image) => {
            if(filter === "all"  || image.classList.contains(filter)) {
                image.style.display = "block";
            }
            else {
                image.style.display = "none";
            }
        });
    });    
});