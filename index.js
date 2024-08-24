let isAiming = false;
document.addEventListener('DOMContentLoaded', () => {
    const reloadSound = document.getElementById('reload-sound');
    const shootSound = new Audio('./sounds/disparo.wav'); // Carga el sonido de disparo
    shootSound.preload = 'auto'; // Preload para mejorar la carga del sonido
    const crosshair = document.getElementById('crosshair');

    // Función para mostrar u ocultar la mira
    function toggleAiming(isAiming) {
        if (isAiming) {
            crosshair.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Evita el desplazamiento
        } else {
            crosshair.style.display = 'none';
            document.body.style.overflow = 'auto'; // Permite el desplazamiento
        }
    }

    // Abrir y cerrar la mira con la tecla 'E'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'e') {
            isAiming = !isAiming;
            toggleAiming(isAiming);
        }
        if (event.key === 'r') {
            reloadSound.play(); // Reproduce el sonido de recarga
        }
    });

    // Manejar el disparo
    document.addEventListener('mousedown', (event) => {
        if (event.button === 0 && isAiming) { // Click izquierdo
            createFragment(event.clientX, event.clientY);
            shootSound.currentTime = 0; // Reinicia el tiempo de reproducción
            shootSound.play(); // Reproduce el sonido de disparo
        }
    });

    

    // Ajustar la posición de la mira con el movimiento del mouse
    document.addEventListener('mousemove', (event) => {
        if (isAiming) {
            crosshair.style.left = `${event.clientX}px`;
            crosshair.style.top = `${event.clientY}px`;
        }
    });
});
