
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


// let contador = 0;

// while(contador < listaDeTeclas.length){
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;
//     console.log(idAudio);

//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     }
//     contador += 1;

//     console.log(contador);
// }


for(i =0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

}
