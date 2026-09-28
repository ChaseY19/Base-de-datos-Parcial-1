const listaImágenes = [
  "img/c2.png",
  "img/c3.png",
  "img/c4.png",
  "img/c5.png"
];

const imagenElemento = document.getElementById("carita");
let indiceActual = 0; 

imagenElemento.addEventListener("pointerover", () => {
  
  imagenElemento.src = listaImágenes[indiceActual];

  indiceActual = (indiceActual + 1) % listaImágenes.length;
});

const listaImágenes2 = [
  "img/c7.png",
  "img/c8.png",
  "img/c9.png",
  "img/c10.png"
];

const imagenElemento2 = document.getElementById("carita2");
let indiceActual2 = 0; 

imagenElemento2.addEventListener("pointerover", () => {
  
  imagenElemento2.src = listaImágenes2[indiceActual2];

  indiceActual2 = (indiceActual2 + 1) % listaImágenes2.length;
});

const listaImágenes3 = [
  "img/c11.png",
  "img/c12.png",
  "img/c13.png",
  "img/c14.png",
  "img/c15.png"
];

const imagenElemento3 = document.getElementById("carita3");
let indiceActual3 = 0; 

imagenElemento3.addEventListener("pointerover", () => {
  
  imagenElemento3.src = listaImágenes3[indiceActual3];

  indiceActual3 = (indiceActual3 + 1) % listaImágenes3.length;
});

const audio = document.getElementById("song");
audio.volume = 0.2;

audio.play().catch(error => {
    console.log("La reproducción automática fue bloqueada:", error);
  });
