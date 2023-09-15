function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES');
    const time = now.toLocaleTimeString('es-ES', { hour12: false });

    const datetimeElement = document.getElementById('datetime');
    datetimeElement.innerText = `${date} ${time}`;

    setTimeout(updateClock, 1000); // Actualiza cada segundo
}

updateClock(); // Inicia el reloj al cargar la página

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-message').style.display = 'block';
});

