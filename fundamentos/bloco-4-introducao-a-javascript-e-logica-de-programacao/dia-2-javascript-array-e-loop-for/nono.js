
let resultado = [];
let divisao = 0;

for (let index=1; index <= 25; index += 1) {
    resultado.push (index)
}

for (let index=0; index < resultado.length; index += 1) {
    divisao = resultado[index]/2;
    console.log (divisao);
}
