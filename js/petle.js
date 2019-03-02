let uzytkownicy = [
    {
        imie: 'Krystian',
        nazwisko: 'Nowak'
    },
    {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    },
    {
        imie: 'Mariusz',
        nazwisko: 'Witkowski'
    }
];
// console.log(uzytkownicy[0].imie, uzytkownicy[1].imie, uzytkownicy[2].imie);


//Pętla for


// for (let i=0; i<uzytkownicy.length; i++ ){
// console.log(uzytkownicy[i].imie);
// };


//Pętla while

// let numer = 10;
// while (numer >= 0) {
//     console.log(numer);
//     numer--;
// }


// Pętla forEach

uzytkownicy.forEach((element, index) =>{
    if(element.imie === 'Krystian'){
        element.kolorOczu = 'niebieski'
    }else if(element.imie === 'Karol'){
        element.kolorOczu = 'zielony'
    }else if(element.imie === 'Mariusz'){
        element.kolorOczu = 'piwny'
    }
})
console.log(uzytkownicy);


// Pętla do .. while
let numer2 = 5;

do{
    console.log(numer2);
}while(numer2>3);

--numer2;