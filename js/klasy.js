class Osoba{
    constructor(name,surname){
        this.baseName = name;
        this.baseSurname = surname;
    }
    przedstawOsobe(){
        console.log(`Mam na imię: ${this.baseName} ${this.baseSurname}`);
    }
};
let krystian = new Osoba('Krystian','Dziopa');
krystian.kolorOczu = 'niebieskie';
krystian.jakiJestKolorOczu = () => {
    return krystian.kolorOczu;
};
console.log(krystian.jakiJestKolorOczu());
krystian.przedstawOsobe();



