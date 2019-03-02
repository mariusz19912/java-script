let typLiczba = 10+10;
// typLiczba = '10'+ 10 + 20;
typLiczba = `10 + 10 = ${10+10}`;

//Typ Boolean
typLiczba = 4 + 4 === 8;


// console.log(typLiczba);

// Array(tablice)

let tablica = ['Michał','Inna', 'Ola ma kota', 'Martyna', 'Arek'];
// tablica[1] = 'Ola ma czarnego kota';
// tablica[2] = {imie: 'Ola', ma: 'czarnego kota'};



// tablica.reverse();
tablica.unshift('Ooops'); // Dodajemy nowy element na początku tablicy
tablica.shift(); // Usuwa pierwszy element Tablicy
tablica.push('Doda'); // Dodaje ostatni element Tablicy
tablica.pop(); // Usuwa ostatni element tablicy

tablica.slice(1,4); // wycina elementy i nie modyfikuje tablicy
// tablica.splice(1,3);  // wycina i modyfikuje tablice
tablica.splice(2, 1, 'Daria');

let tablicaLiczba = [1, 76, 338, -1, 0];
tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2)=>{
    return liczba1 - liczba2;
});

// tablica.sort();

console.log(tablicaLiczba);

// let przykladowyObiekt = {
//     id: 3,
//     imie: 'Kacper'
// };
// console.log(przykladowyObiekt.id, przykladowyObiekt.imie);
