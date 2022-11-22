// survol sur le button de recherche mobile
const searchPhon = document.getElementById("search");
console.log(searchPhon);
searchPhon.addEventListener("mouseover", function () {
    let inputSearch = document.getElementById("input-search");
    let bntSearch = document.getElementById("bnt-search");
    let imgSearchWhite = document.getElementById("search-white");
    let imgSearchBlack = document.getElementById("search");
    bntSearch.classList.toggle("bg-bnt-black");
    imgSearchBlack.classList.toggle("search-black-none");
    imgSearchWhite.classList.toggle("search-white");
    inputSearch.classList.toggle("myStyle");
});
