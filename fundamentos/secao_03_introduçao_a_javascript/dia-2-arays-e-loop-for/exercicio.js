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
 
   