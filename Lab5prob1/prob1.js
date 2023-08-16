do {
    var input = parseFloat(prompt("Please Enter a positive integer: "));
    if (Number.isInteger(input) && input >= 0) {
        if (input%1 == 0) {
            break
        }
    }
} while (true);

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert(i); 
    }
}

function isPrime(n) {
    if (n < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ( n % i === 0) return false;
    }
    return true;
}
function showPrime(input) {
    const primes = [];

    for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

const show_prime = showPrime(input);

alert("For n = " + input + " prime numbers are " + show_prime)
