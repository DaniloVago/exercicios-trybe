let word = 'danilo'; 
let inverse = '';

for (let index = 0; index < word.length; index += 1) {
    inverse += word[word.length-1-index]
}

console.log (inverse)
