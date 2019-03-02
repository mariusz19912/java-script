let person = {
    name: 'Marcin',
    height: 187,
    print(){
        console.log(this.name);
        console.log(this.height);
    }
};
person.print();