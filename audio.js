const audio = document.getElementById('miAudio');
const slider = document.getElementById('slider');
const currentTimeDisplay = document.getElementById('currentTime');

audio.volume = 0.4; // Ajusta el volumen al 50% del máximo

// Reproducir automáticamente el audio al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch(error => {
        console.log('Reproducción automática bloqueada por el navegador.');
        // Aquí podrías mostrar un botón para que el usuario active manualmente el audio
    });
});

// Actualiza el slider y el tiempo actual mientras se reproduce
audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    slider.value = value;

    // Calcula el tiempo actual en minutos y segundos
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Cambia la posición de reproducción cuando el usuario mueve el slider
slider.addEventListener('input', () => {
    const newTime = (slider.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}
