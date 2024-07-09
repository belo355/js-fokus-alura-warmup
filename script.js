const html = document.querySelector('html'); 
const focoBt = document.querySelector('.app__card-button--foco'); 
const curtoBt = document.querySelector('.app__card-button--curto'); 
const longoBt = document.querySelector('.app__card-button--longo');
const comecarBt = document.querySelector('#start-pause'); 
const titulo = document.querySelector('.app__title'); 
const timer = document.querySelector('#timer'); 
const banner = document.querySelector('.app__image'); 

const botoes = document.querySelectorAll('.app__card-button'); 

const inputMusica = document.querySelector('#alternar-musica'); 
const musica = new Audio('/sons/luna-rise-part-one.mp3'); 
const loopMusica = true; 

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescancoLongo = 900; 

inputMusica.addEventListener('change', () => {
  if(musica.paused){
    musica.play(); 
  }else {
    musica.pause(); 
  }
})

focoBt.addEventListener('click', () => {
  alterarContexto('foco'); 
  focoBt.classList.add('active'); 
})


curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto'); 
  curtoBt.classList.add('active')
})


longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo'); 
  longoBt.classList.add('active')
})

function alterarContexto(contexto) {
  botoes.forEach(function (contexto) { //enquanto nao for contexto, sera removido a class
    contexto.classList.remove('active')
  }); 

  html.setAttribute('data-contexto', contexto); 
  banner.setAttribute('src', `/images/${contexto}.png`); 
  switch(contexto){
    case "foco": 
    titulo.innerHTML =  ` 
    Otimize sua produtividade,<br>
                <strong class="app__title-strong">Mergulhe no que importa</strong>
    `
    break; 
    case "descanso-curto": 
    titulo.innerHTML =  ` 
    Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
    `
    break;
    case "descanso-longo": 
    titulo.innerHTML =  ` 
    Hora de voltar a superficie.<br>
    <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `
  default: 
      break;
  }
}


  