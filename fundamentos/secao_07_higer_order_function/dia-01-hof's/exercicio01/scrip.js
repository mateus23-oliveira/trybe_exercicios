const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  emailListInData.forEach((emailListInData) => console.log(`o email ${emailListInData} esta na lista de dados`));
  // Adicione seu código aqui
  const numbers = [19, 21, 30, 3, 45, 22, 15]; 
  const div = numbers.find((numdiv) => numdiv % 3 === 0 && numdiv % 5 === 0 );
  console.log(div);
// Adicione seu código aqui
const people = [
  { name: 'Mateus', age: 16 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const  verify = people.some((arry) => arry > 16 );
console.log(verify)
  //Adicione seu código aqui

//console.log(verifyAges(people, 18));
//console.log(verifyAges(people, 14));