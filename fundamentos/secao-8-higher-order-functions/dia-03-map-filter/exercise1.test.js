const formatedBookNames = require("./exercise1.js");


describe("Testa a função formatedBookNames()", () => {
    expect(formatedBookNames()).toContain([
        'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
        'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
        'Fundação - Ficção Científica - Isaac Asimov',
        'Duna - Ficção Científica - Frank Herbert',
        'A Coisa - Terror - Stephen King',
        'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
      ]
)})


