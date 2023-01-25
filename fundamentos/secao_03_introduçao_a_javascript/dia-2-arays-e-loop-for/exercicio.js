let intervalo = 0; 
for (i = 0; i <= 150; i++)
intervalo += intervalo[i] % 3 == 0;
console.log(intervalo);