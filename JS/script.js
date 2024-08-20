//TODO   PREPARAZIONE
//Raccolta elementi dal DOM
const upBtn = document.getElementById('up');
const donwBtn = document.getElementById('donw');
const galeryElements = document.getElementById('galery');


//TODO   INSERIRE LE IMMAGINE
//Creare un array per le immagini
const pictures = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];

//Girare le immagini con JS
for (let i = 0; i < pictures.length; i++){
 const picture = document.createElement('img');
 picture.src = pictures[i];
 picture.alt = `animation ${i}`;
 galeryElements.appendChild(picture);
}

//TODO   ELLABORAZIONE
//Aggiungere la class active, per vedere la immagine
let activeClassIndex = 0;
pictures[activeClassIndex].classList.add('active');

//Creare un evento : button UP
upBtn.addEventListener('click', function(){
    //! togliere la class 'active' della immagine presente
    pictures[activeClassIndex].classList.remove('active');

    //! incremento l'indice
    activeClassIndex ++;

    //! mettere la class 'active' nella immagine successiva
    pictures[activeClassIndex + 1].classList.add('active');
});

//Creare un evento : button DONW
donwBtn.addEventListener('click', function(){
    
})

//TODO   CREARE UN LOOP QUANDO SE CAMBIA LA IMMAGINE