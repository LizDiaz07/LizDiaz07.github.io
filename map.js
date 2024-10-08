function doubleArrayValues(arr) {
    let doubled = arr.map(num => num * 2);
    document.getElementById("exercicio2-resultado").innerText = "Resultado: " + doubled.join(", ");
}