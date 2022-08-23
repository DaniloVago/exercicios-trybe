function verificaPalindrome(palavra){

    for (let index=0; index < palavra.length; index+=1){
        if (palavra[index] != palavra[palavra.length-1-index] ){
            return false;
        } else {
            return true;
        }
    }
}

console.log (verificaPalindrome('arara'));
console.log (verificaPalindrome('desenvolvimento'));
