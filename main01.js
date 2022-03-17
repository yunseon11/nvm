// 형식
class Book{
    constructor(type,title){
        this.type = type;
        thias.title = title;
    }
    list(){
        console.log(`${this.type}`);
    }
}
// const myBook = new Book('it','html');
// myBook.list();

class Graphic extends Book{
    constructor(type,title,level){
        super(type.title);
        this.level = level;
    }
    list(){
        super.list();
        document.write(
            `
            <p>${this.type} : ${this.title} : ${this.level}</p>
            `
        )
    }
}

console.log(Graphic);
const myGraphic = [
    new Graphic('photo','photoshop','1'),
    new Graphic('vetor','illustrator','3'),
    new Graphic('paint','painter','1'),
]
myGraphic[1].list();

for (i of myGraphic){
    i.list();
};