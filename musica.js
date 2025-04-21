let musica = document.querySelector('audio')

document.querySelector('.botao-play').addEventListener('click', tocarMusica)
//funcao de play quando clicar no botao de play

function tocarMusica() {
     musica.play();
     document.querySelector('.botao-pause').style.display = 'block';
     document.querySelector('botao-play').style.display = 'none';
     
}

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)
//funcao de pausar quando clicar no botao de pause 

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('botao-play').style.display = 'block';
}

musica.addEventListener('timeUpdate', atualizarBarra);
//fazer a barrinha andar conforme a musica

function atualizarBarra(){
   let barra = document.querySelector('progress');
   barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100)  + '%';

   let tempoDecorrido = document.querySelector('.inicio');
   tempoDecorrido.textContent = segundosParaMinutos (Math.floor (musica.currentTime));
}

//convertendo o tempo da musica para segundos

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor (segundos/60)
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = '0' + campoSegundos
  }
  return campoMinutos + ':' + campoSegundos;
}

let duracaoMusica = document.query('.fim')
duracaoMusica.textContent=segundosParaMinutos (Math.floor (musica.duration));
