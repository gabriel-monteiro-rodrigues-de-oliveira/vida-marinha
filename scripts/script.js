let bielito = window.document.querySelector(`img#posicao_bielito`)
let instagram = window.document.querySelector(`a#instagram`)
let twitch = window.document.querySelector(`a#twitch`)
let tocar_audio_tartaruga = window.document.querySelector(`span#tocar_audio_tartaruga`)
let audio_tartaruga = window.document.querySelector(`audio#audio_tartaruga`)
let tocar_audio_golfinho = window.document.querySelector(`span#tocar_audio_golfinho`)
let audio_golfinho = window.document.querySelector(`audio#audio_golfinho`)
let tocar_audio_baleia = window.document.querySelector(`span#tocar_audio_baleia`)
let audio_baleia = window.document.querySelector(`audio#audio_baleia`)
let tocar_audio_tubarao = window.document.querySelector(`span#tocar_audio_tubarao`)
let audio_tubarao = window.document.querySelector(`audio#audio_tubarao`)

bielito.addEventListener(`click`, verBielito)
instagram.addEventListener(`click`, verInstagram)
twitch.addEventListener(`click`, verTwitch)
tocar_audio_tartaruga.addEventListener(`click`, tocarAudioTartaruga)
tocar_audio_golfinho.addEventListener(`click`, tocarAudioGolfinho)
tocar_audio_baleia.addEventListener(`click`, tocarAudioBaleia)
tocar_audio_tubarao.addEventListener(`click`, tocarAudioTubarao)

function verBielito() {
    window.alert('Informações:\nGabriel Monteiro Rodrigues de Oliveira ou Bielito é um homem programador e streamer de 19 anos. Encontra-se agora bacharelando Engenharia de Software.\n\nPrograma em Python e JavaScript, e algumas de suas especialidades seriam automações, análise de dados e desenvolvimento web.\n\nMuito fissurado em jogos, realiza a transmissão ao vivo dos mesmos.')
}

function verInstagram() {
    window.alert('Você será redirecionado à conta oficial do Instagram do Bielito.')
}

function verTwitch() {
    window.alert('Você será redirecionado ao canal oficial da Twitch do Bielito.')
}

function tocarAudioTartaruga() {
    audio_tartaruga.play()
}

function tocarAudioGolfinho() {
    audio_golfinho.play()
}

function tocarAudioBaleia() {
    audio_baleia.play()
}

function tocarAudioTubarao() {
    audio_tubarao.play()
}