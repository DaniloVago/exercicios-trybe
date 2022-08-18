let nome = rainha;


switch (nome) {
    case 'rainha': 
        console.log ('Rainha - todas as direções')
        break;
    case 'rei':
        console.log ('Rei - todas as direções, uma casa')
        break;
    case 'bispo':
        console.log ('Bispo - diagonal')
        break;
    case 'torre':
        console.log ('Torre = horizontal e vertical')
        break;
    case 'cavalo':
        console.log ('Cavalo = em L')
        break;
    case 'peao':
        console.log ('Peao - apenas uma casa para frente')
        break;
    default:
        console.log ('Erro, peça invalida')
        break;
}
