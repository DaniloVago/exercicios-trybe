let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log ('Os livros favoritos de '+ leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chamam ' + leitor['livrosFavoritos'][0]['titulo'] +' e ' + leitor['livrosFavoritos'][1]['titulo'])
  console.log (leitor['nome']+ ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');