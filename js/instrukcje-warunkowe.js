let wynik = 10 + 10 === 20 ? 'prawda' : 'fałsz'; // Instrukcja warunkowa "ternery"
let kolor = 'czerwony'
// if(2 + 2 === 4){
//     console.log('Prawda');
// }else if (kolor==='fioletowy') {
//     console.log(kolor);
// }else if (kolor==='czarny') {
//     console.log(kolor);
// }else{
//     console.log('nie ma takiego koloru');
// }

// console.log(wynik);
switch (kolor) {
    case 'niebieski':
    console.log(kolor);
    break;
    case 'czarny':
    console.log(kolor);
    break;
    case 'czerwony':
    console.log(kolor);
    break;
    default:
    console.log('Nie ma takiego koloru')
        break;
}