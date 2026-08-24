function convertirTemperatura() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").innerHTML =
        "Temperatura en Celsius: " + celsius + " °C<br>" +
        "Temperatura en Fahrenheit: " + fahrenheit + " °F";
}

convertirTemperatura();