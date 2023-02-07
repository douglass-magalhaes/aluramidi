function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
           //o js ja considera nulo ou nao, quando o elemento existe.
    if (elemento /*!= null*/ && elemento.localName === 'audio'){
        elemento.play();
    } else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*
let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador++;
    // console.log(contador);
}
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // console.log(contador);

    tecla.onkeydown = function (evento){
        if (evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }    

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}