const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const comecarBt = document.querySelector('#start-pause')
const titulo = document.querySelector('.app__title')
const timer = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const botoes = document.querySelectorAll('.app__card-button')
const inputMusica = document.querySelector('#alternar-musica')
const comercarBt = document.querySelector('#start-pause')
const inicarOuPausar = document.querySelector('#start-pause span')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
const loopMusica = true; 
const audioMusicPause = new Audio('/sons/pause.mp3') 
const audioMusicStart = new Audio('/sons/play.wav') 
const audioTempoFinalizado = new Audio('/sons/beep.mp3') 

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescancoLongo = 900; 

let tempoDecorridoEmSegundos = 5; 
let intervalorId; 


inputMusica.addEventListener('change', () => {
  if(musica.paused){
    musica.play(); 
  }else {
    musica.pause(); 
  }
})

focoBt.addEventListener('click', () => {
  alterarContexto('foco')
  focoBt.classList.add('active')
})


curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto')
  curtoBt.classList.add('active')
})


longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo')
  longoBt.classList.add('active')
})

function alterarContexto(contexto) {
  botoes.forEach(function (contexto) { //enquanto nao for contexto, sera removido a class
    contexto.classList.remove('active')
  }); 

  html.setAttribute('data-contexto', contexto); 
  banner.setAttribute('src', `/images/${contexto}.png`)

  switch(contexto){
    case "foco": 
    titulo.innerHTML =  ` 
    Otimize sua produtividade,<br>
                <strong class="app__title-strong">Mergulhe no que importa</strong>
    `
    break
    case "descanso-curto": 
    titulo.innerHTML =  ` 
    Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
    `
    break
    case "descanso-longo": 
    titulo.innerHTML =  ` 
    Hora de voltar a superficie.<br>
    <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `
  default: 
      break
  }
}

const contagemRegressiva = () => {
  if(tempoDecorridoEmSegundos <= 0){
    //audioTempoFinalizado.play()
    alert('tempo esgotado')
    zerarTemporizador()
    return
  }

  tempoDecorridoEmSegundos -= 1;
  console.log('Temporizador: ' + tempoDecorridoEmSegundos)
  mostrarTempo()
}

comecarBt.addEventListener('click', iniciarOuPausarTemporizador)

function iniciarOuPausarTemporizador() {
  if(intervalorId){ //pause
    zerarTemporizador() 
    audioMusicPause.play()
    return
  }
  audioMusicStart.play()
  intervalorId = setInterval(contagemRegressiva, 1000) 
  inicarOuPausar.setAttribute('src', '/images/pause.png')
  inicarOuPausar.textContent = 'Pausar'
}

function zerarTemporizador(){
  clearInterval(intervalorId)
  inicarOuPausar.setAttribute('src', '/images/play_arrow.png')
  inicarOuPausar.textContent = 'Começar'
  intervalorId = null
}

function mostrarTempo(){
  const tempo = tempoDecorridoEmSegundos
  timer.innerHTML =  ` 
        ${tempo}
  `
}

mostrarTempo()
