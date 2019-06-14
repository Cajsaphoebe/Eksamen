window.addEventListener("load", sidenVisesMedWeb);

function sidenVisesMedWeb() {
    console.log("siden vises med web");
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log('readMore:');
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");

}
