function calcularRectangulo() {
    let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

    let area = base * altura;
    let perimetro = 2 * (base + altura);

    document.getElementById("resultado").innerHTML =
        "Base: " + base + "<br>" +
        "Altura: " + altura + "<br>" +
        "Área: " + area + "<br>" +
        "Perímetro: " + perimetro;
}

calcularRectangulo();