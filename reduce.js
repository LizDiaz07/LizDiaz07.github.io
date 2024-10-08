function sumAndProduct(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let product = arr.reduce((acc, num) => acc * num, 1);
    document.getElementById("exercise3-result").innerText = `Sum: ${sum}, Product: ${product}`;
}