const $iconMenu = document.getElementById("icon-menu");
const $iconClose = document.getElementById("icon-close");
const $menuMovile = document.getElementById("menu-movile");
const $botones = document.querySelectorAll(".btn-whatsapp");

const whatsappURL = "https://wa.me/5219971222954?text=Buenas%20tardes%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20streaming%20LikeTV";


$iconMenu.addEventListener("click", () => {
    $menuMovile.style.display = 'flex';
});

$iconClose.addEventListener("click", () => {
    $menuMovile.style.display = 'none';
});

$botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
      window.open(whatsappURL, "_blank"); // Abre en nueva pestaña
    });
});


