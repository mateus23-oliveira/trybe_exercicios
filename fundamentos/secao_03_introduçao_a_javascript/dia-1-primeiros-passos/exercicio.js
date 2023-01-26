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
       console.log('positivo');
}  else if( comparacao < 0) {
    console.log('negativo');
} else {
    console.log('zero');
}

let anguloA = 90;
let anguloB = 60;
let anguloC = 30;

if(anguloA + anguloB + anguloC == 180) {
   console.log(true);
} else {
    console.log(false)
} 
const chessPiece = 'bispo';

switch (chessPiece) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

 let porcentagem = 63;  
if(porcentagem >= 90){
    console.log('A')
} else if(porcentagem >= 80) {
    console.log('B')
} else if(porcentagem >= 70) {
    console.log('C')
} else if(porcentagem >= 60) {
    console.log('D')
} else if(porcentagem >= 50) {
    console.log('E')
} else if(porcentagem < 50) {
    console.log('F')
} else if(porcentagem > 100 || porcentagem < 0) {
    console.log('erro nota imvalida')
}
  

