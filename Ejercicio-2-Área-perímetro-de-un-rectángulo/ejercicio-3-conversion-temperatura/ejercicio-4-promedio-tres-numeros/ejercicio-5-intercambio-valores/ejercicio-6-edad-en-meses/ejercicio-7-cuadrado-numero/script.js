function calcularCuadrado() {
    let numero = parseFloat(prompt("Ingrese un número:"));

    let cuadrado = numero * numero;

    document.getElementById("resultado").innerHTML =
        "Número ingresado: " + numero + "<br>" +
        "El cuadrado del número es: " + cuadrado;
}

calcularCuadrado();