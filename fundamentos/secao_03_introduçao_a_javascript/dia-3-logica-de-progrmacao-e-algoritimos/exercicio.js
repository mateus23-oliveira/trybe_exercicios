//fatorial de 10:
fatorial = 1;

for(let index = 10; index > 0; index -= 1) {
   fatorial *= index;
}
console.log(fatorial);

//lendo de tras pra frente: 
let word = 'tryber';
let reverso = '';                                             
for(index = 0; index < word.length; index += 1) {
    reverso += word[word.length - 1 - index];
}
 console.log(reverso);
   //ou
    reverso = word.split('').reverse().join('');
    console.log(reverso);

       // imprimindo maior palavra.

       let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0]
let palavraMenor = array[0]
for (let ind = 0; ind < array.length; ind += 1) {
    if (array[ind].length > maiorPalavra.length) {
        maiorPalavra = array[ind];
    }
}

for (let ind = 0; ind < array.length; ind += 1) {
    if (array[ind].length < palavraMenor.length) {
        palavraMenor = array[ind];
    }
}
console.log(maiorPalavra);
console.log(palavraMenor);