const html = document.querySelector('html'); 
const focoBt = document.querySelector('.app__card-button--foco'); 
const curtoBt = document.querySelector('.app__card-button--curto'); 
const longoBt = document.querySelector('.app__card-button--longo');
const comecarBt = document.querySelector('#start-pause'); 

const titulo = document.querySelector('.app__title'); 
const timer = document.querySelector('#timer'); 
const banner = document.querySelector('.app__image'); 

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescancoLongo = 900; 

focoBt.addEventListener('click', () => {
  alterarContexto('foco'); 
})


curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto'); 
})


longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo'); 
})

function alterarContexto(contexto){
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


  