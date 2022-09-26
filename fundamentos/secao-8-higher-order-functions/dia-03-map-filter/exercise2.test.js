const nameAndAge = require("./exercise1.js");


describe("Testa a função nameAndAge()", () => {
    expect(nameAndAge()).toContain([
        {
          age: 31,
          author: 'Isaac Asimov',
        },
        {
          age: 38,
          author: 'H. P. Lovecraft',
        },
        {
          age: 39,
          author: 'Stephen King',
        },
        {
          age: 43,
          author: 'George R. R. Martin',
        },
        {
          age: 45,
          author: 'Frank Herbert',
        },
        {
          age: 62,
          author: 'J. R. R. Tolkien',
        },
      ]
)})
