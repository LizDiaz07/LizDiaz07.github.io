
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
               
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function sortArray() {
    
    let input = document.getElementById("arrayInput").value;

    
    let array = input.split(",").map(Number);

    
    let sortedArray = bubbleSort(array);

    
    document.getElementById("resultado").innerText = "Sorted Array: " + sortedArray.join(", ");
}
