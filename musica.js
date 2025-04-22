let musicas= [
    {titulo:'Guitar Solo', artista: 'Chris Haugen', src: '/Projeto play musica/musicas/Tributary.mp3', img:'Projeto play musica/ imagens/ rosa.jpg'},
    {titulo:'Country', artista: 'Chris Haugen', src: '/Projeto play musica/musicas/Jaguar in the Mist - Chris Haugen.mp3', img: '/Projeto play musica/imagens/eletronica.jpg'},
    {titulo:'Country', artista: 'Lebo', src: '/Projeto play musica/musicas/The Garden and the Snowflake - Dan _Lebo_ Lebowitz, Tone Seeker.mp3', img:'/Projeto play musica/imagens/country.jpg'},
    
] 

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;

renderizarMusica(indexMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica)
});
//funcao de ativar o botão de anterior com funcão anonima que é feito assim  () => {}

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)});
//funcao de ativar o botão de proxima com funcão anonima que é feito assim  () => {}

    function renderizarMusica(index){
        musica.setAttribute('src', musicas[index].src);
        musica.addEventListener('loadeddata', () => {
            nomeMusica.textContent = musicas[index].titulo;
            nomeArtista.textContent = musicas[index].artista;
            img.src = musicas[index].img;
            duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        });
    }
  
//é chamado de index a posição dos objetos no array


document.querySelector('.botao-play').addEventListener('click', tocarMusica)
//funcao de play quando clicar no botao de play

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

document.querySelector('.botao-pause').addEventListener('click',pausarMusica); 
// fazer o botão de pause pausar a musica quando clicado

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

musica.addEventListener('timeupdate', atualizarBarra);
//fazer a barrinha andar conforme a musica

function atualizarBarra(){
   let barra = document.querySelector('progress');
   barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100)  + '%';

   let tempoDecorrido = document.querySelector('.inicio');
   tempoDecorrido.textContent = segundosParaMinutos (Math.floor (musica.currentTime));
}

//convertendo o tempo da musica para segundos

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

