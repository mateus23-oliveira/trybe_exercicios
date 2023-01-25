let num01 = 12;
let num02 = 6;
soma = num01 + num02;
  console.log(soma);
subtracao = num01 - num02;
  console.log(subtracao)
multiplicacao = num01 * num02;
  console.log(multiplicacao)
divisao = num01 / num02;
   console.log(divisao) 
modulo = num01 % num02;
   console.log(modulo)    

if(num01 > num02) {
  console.log('o maior nuemro e ' + num01)
} else {
    console.log('o numero maior e '  + num02)
}

let num03 = 20;

if(num01 > num02 && num01 > num03) {
    console.log('o maior nuemro e ' + num01);
  } else if(num02 > num01 && num02 > num03) {
      console.log('o numero maior e '  + num02);
  } else {
    console.log('o maior numero e ' + num03);
  }
  
 
let comparacao = 0;
  if(comparacao > 0) {
       console.log('positivo')
}  else if( comparacao < 0) {
    console.log('negativo')
} else {
    console.log('zero')
}