let maiorPrimo = 0;


for (numero = 2; numero <=50; numero += 1) {
    let primo = true;
 for (divisor = 2; divisor < numero; divisor +=1) {
    if (numero % divisor === 0) {
        primo = false;
    }
 }
 if (primo) {
    maiorPrimo = numero;
 }
}

console.log(maiorPrimo);