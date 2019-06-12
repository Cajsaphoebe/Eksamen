window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log('readMore:');
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");

}
