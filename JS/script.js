//TODO   PREPARAZIONE
//Raccolta elementi dal DOM
const upBtn = document.getElementById('up');
const donwBtn = document.getElementById('donw');
const galeryElements = document.getElementById('galery');


//TODO   INSERIRE LE IMMAGINE
//Creare un array per le immagini
const pictures = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

//Girare le immagini con JS
for (let i = 0; i < pictures.lenth; i++){
 const picture = document.createElement('img');
 picture.src = pictures[i];
 picture.alt = `animation ${i + 1}`;
 galeryElements.appendChild(picture);
}



let currentActiveIndex = 0; 

//TODO   CREARE UN EVENTO PER CAMBIARE LE IMMAGINE

//TODO   CREARE UN LOOP QUANDO SE CAMBIA LA IMMAGINE