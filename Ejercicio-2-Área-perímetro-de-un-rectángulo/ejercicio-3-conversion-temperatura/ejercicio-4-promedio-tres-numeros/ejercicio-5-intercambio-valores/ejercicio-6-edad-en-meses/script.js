function calcularMeses() {
    let edad = parseFloat(prompt("Ingrese su edad en años:"));

    let meses = edad * 12;

    document.getElementById("resultado").innerHTML =
        "Edad en años: " + edad + "<br>" +
        "Edad en meses: " + meses;
}

calcularMeses();