let search = document.querySelector(".search-box");
let searchInput = document.querySelector(".search-box input");
let menu = document.querySelector(".navbar");

// Search icon behavior
document.querySelector("#search-icon").onclick = () => {
    // If search box is already visible AND input has a value, submit the form
    if (search.classList.contains("active") && searchInput.value.trim() !== "") {
        search.submit(); // Submit the search form
    } else {
        search.classList.toggle("active");
        menu.classList.remove("active"); // Don't show both at the same time
        searchInput.focus(); // Focus the input
    }
};

// Menu icon behavior
document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove("active"); // Don't show both at the same time
};

// When the page scrolls, hide both menu and search
window.onscroll = () => {
    menu.classList.remove("active");
    search.classList.remove("active");
};

// Header shadow on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
