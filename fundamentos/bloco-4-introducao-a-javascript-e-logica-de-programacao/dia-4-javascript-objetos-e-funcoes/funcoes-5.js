function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;

    for (let index = 0; index<numeros.lenght; index +=1){
        let guardaNumero = numeros[index];
        for (let index2 = 0; index2<numeros.lenght; index2 +=1){
            if (guardaNumero = numeros [index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));