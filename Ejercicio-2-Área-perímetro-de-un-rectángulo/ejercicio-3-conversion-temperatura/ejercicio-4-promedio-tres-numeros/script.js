function calcularPromedio() {
    let n1 = parseFloat(prompt("Ingrese el primer número:"));
    let n2 = parseFloat(prompt("Ingrese el segundo número:"));
    let n3 = parseFloat(prompt("Ingrese el tercer número:"));

    let promedio = (n1 + n2 + n3) / 3;

    document.getElementById("resultado").innerHTML =
        "Número 1: " + n1 + "<br>" +
        "Número 2: " + n2 + "<br>" +
        "Número 3: " + n3 + "<br>" +
        "El promedio es: " + promedio;
}

calcularPromedio();