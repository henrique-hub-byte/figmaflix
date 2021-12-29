//json
const movie = {
    title: "Venom",
    url: "/img/image1.png",
};


//HTML todo
const figure = document.createElement("figcaption");
const img = document.createElement("img"); 
const title = document.createElement("figcaption");
const listBanner = document.querySelector(".list-banner");

figure.classList.add("wrapper-banner");

img.src = "img/image 1.png";
img.alt = "banner of the movie";
img.classList.add("main-banner");

title.textContent = "Nome do filme";
title.classList.add("main-caption");
/* 
    
*/
figure.insertAdjacentElement("beforeend", img);
figure.insertAdjacentElement("beforeend", title);
listBanner.insertAdjacentElement("beforeend", figure);


