let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 0; index < numbers.length; index += 1) {
   console.log(numbers[index])
}
 soma = 0;
for(index = 0; index < numbers.length; index += 1) {
   soma += numbers[index];
}
    console.log(soma)
 
let mediaAritmetica = 0;
 for(index = 0; index < numbers.length; index += 1) {
   mediaAritmetica += numbers[index];
 }
   mediaAritmetica = mediaAritmetica / numbers.length; 
   console.log(mediaAritmetica)
   if(mediaAritmetica > 20) {
    console.log('valor maior que 20.')
   } else {
    console.log('valor menor ou igual a 20')
   }
 let maiorNumero = [0]
for(index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
   console.log(maiorNumero);

   impar = 0;
   for(index = 0; index < numbers.length; index += 1)
       impar += numbers[index] % 2 !== 0;
   if(impar > 0) {
    console.log(impar);
   } else {
    console.log('nenhum valor impar');
   }