function calcularArea() {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

    let area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML =
        "La base es: " + base + "<br>" +
        "La altura es: " + altura + "<br>" +
        "El área del triángulo es: " + area;
}

calcularArea();