export default function menu() {
    const iconeMenu = document.querySelector("#icon-menu");
    const linksMenu = document.querySelector("#menu-links");

    iconeMenu.addEventListener("click", () => {
        linksMenu.classList.toggle("active");
        iconeMenu.classList.toggle("close");
    });
}