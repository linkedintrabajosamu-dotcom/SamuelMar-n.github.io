const botonesNumero = document.querySelectorAll('.calculadora__boton--numero');
const botonesOperadores = document.querySelectorAll('.calculadora__boton--operador');
const pantalla = document.querySelector('.calculadora__pantalla');
const botonIgual = document.querySelector('.calculadora__boton--igual');

let num1 = '';
let num2 = '';
let operador = '';

botonesNumero.forEach(boton => {
    boton.addEventListener('click', ()=> {
    const valorBoton = boton.dataset.valor;
    console.log(valorBoton);
    pantalla.textContent += valorBoton;
    })
})

botonesOperadores.forEach(operadorBoton => {
    operadorBoton.addEventListener('click', ()=> {
        const valorOperador = operadorBoton.dataset.valor;
        console.log(valorOperador);
        if(valorOperador === 'borrar') {
            pantalla.textContent = "";
        }
        else if(valorOperador === 'decimal') {
            if(!pantalla.textContent.includes('.')) {
                pantalla.textContent += '.';
            }
        }
        else if(valorOperador === '+') {
        num1 = pantalla.textContent;
        operador = '+';
        pantalla.textContent = '';
        }
        else if(valorOperador === '-') {
            num1 = pantalla.textContent;
            operador = '-';
            pantalla.textContent = '';
        }
        else if(valorOperador === '*') {
            num1 = pantalla.textContent;
            operador = '*';
            pantalla.textContent = '';
        }
        else if(valorOperador === '/') {
            num1 = pantalla.textContent;
            operador = '/';
            pantalla.textContent = '';
        }
        
    })
})

botonIgual.addEventListener('click', () => {
            num2 = pantalla.textContent;
            let resultado = 0;
            
            if(operador === '+') {
                resultado = Number(num1) + Number(num2);
            }
            else if(operador === '-') {
                resultado = Number(num1) - Number(num2);
            }
            else if(operador === '*') {
                 resultado = Number(num1) * Number(num2);
            }
            else if(operador === '/') {
                resultado = Number(num1) / Number(num2);
            }
            pantalla.textContent = resultado; 
num1 = '';
num2 = '';
operador = '';
        })