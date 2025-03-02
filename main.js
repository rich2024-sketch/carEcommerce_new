let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove("active"); /* aynı ayna hem arama hem menu açılmaması için */
}

// menu

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove("active"); /* aynı ayna hem arama hem menu açılmaması için */

}

// menude herhangi bir butona tıklayınca yok olsun - aramaya basında sayfayı aşağıya kaydırınca yok olsun
window.onscroll = () => {
    menu.classList.remove("active");
    search.classList.remove("active");
}


// Header

let header = document.querySelector("header");

window.addEventListener("scroll" , () => {
    header.classList.toggle("shadow", window.scrollY > 0)
}); /* header yok olma var olma */