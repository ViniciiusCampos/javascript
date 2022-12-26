/*
Switch é uma condicional que eu tenha multiplos resultados
*/

let profession = "futebol"

switch(profession) {
    case 'fiscal': 
       console.log('Sua camisa sera Verde')
       break;
    case 'bombeiro':
        console.log('Sua camisa sera Vermelha')
        break;
    case 'policial':
        console.log('Sua camisa sera Azul')
       break;

       default: 
       console.log('Sua camisa sera Preta')

       break;
}