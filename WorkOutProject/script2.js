const video = document.getElementById('meu-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
    video.play();
    playButton.style.display = 'none'; // Esconde o botão após iniciar a reprodução
});