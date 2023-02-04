let a = document.querySelectorAll(".off-sub");
let d = document.querySelectorAll(".off_uldropdown");

let off = document.getElementById("offcanves");
let offOverlay = document.getElementById("offcanves_overlaay");

let offOpen = document.getElementById("offcanves_open");
let offClose = document.getElementById("offcanves_close");

offOpen.addEventListener("click", () => off.style.display = "block");
offClose.addEventListener("click", () => off.style.display = "block");

offOverlay.addEventListener("click", () => off.style.display = "none");
offClose.addEventListener("click", () => off.style.display = "none");




for (let i = 0; i < a.length; i++) {

    a[i].addEventListener('click', () => d[i].classList.toggle("hidean"));


}
