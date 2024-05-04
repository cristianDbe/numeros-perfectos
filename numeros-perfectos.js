document.getElementById('calculateButton').addEventListener('click', function () {
    var startNumber = parseInt(document.getElementById('startNumber').value);
    var endNumber = parseInt(document.getElementById('endNumber').value);

    var result = findPerfectNumbers(startNumber, endNumber);

    document.getElementById('result').innerHTML = result;
});

function findPerfectNumbers(start, end) {
    var perfectNumbers = [];
    for (var num = start; num <= end; num++) {
        if (isPerfect(num)) {
            perfectNumbers.push(num);
        }
    }
    return perfectNumbers.length > 0 ? 'Números perfectos: ' + perfectNumbers.join(', ') : 'No se encontraron números perfectos en el rango especificado.';
}

function isPerfect(num) {
    var sum = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num && num !== 1;
}
