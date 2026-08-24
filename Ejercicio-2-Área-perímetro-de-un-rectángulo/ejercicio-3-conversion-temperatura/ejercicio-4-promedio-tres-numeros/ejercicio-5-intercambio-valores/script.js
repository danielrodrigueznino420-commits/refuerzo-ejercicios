function intercambiarValores() {
    let a = parseFloat(prompt("Ingrese el valor de a:"));
    let b = parseFloat(prompt("Ingrese el valor de b:"));

    let auxiliar = a;
    a = b;
    b = auxiliar;

    document.getElementById("resultado").innerHTML =
        "Después del intercambio:<br>" +
        "Valor de a: " + a + "<br>" +
        "Valor de b: " + b;
}

intercambiarValores();