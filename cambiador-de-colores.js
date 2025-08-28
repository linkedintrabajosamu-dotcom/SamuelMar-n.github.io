const cambiarColor = document.getElementById('boton-cambia-color');
const body = document.querySelector('body');

cambiarColor.addEventListener('click', () => {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    
    const colorFinal = `rgb(${rojo}, ${verde}, ${azul})`;

    body.style.backgroundColor = colorFinal;
    
})


