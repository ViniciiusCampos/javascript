/* 
condicionais tenarias são if que fazemos em Uma Linha Só
*/

let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Voce é membro' : 'Voce não é membro');
console.log("Frete: " + shipping);

let age = 10;

let isAdult = (age >= 18 ? 'Yes' : false);

console.log(isAdult);