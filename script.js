const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#0faeee"; // Change to the desired background color
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});