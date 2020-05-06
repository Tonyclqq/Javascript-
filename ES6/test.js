class Animale {
    //构造函数内写属性
    constructor(type){
        this.type = type
    }
    //构造函数外写方法
    eat(){
        Animale.walk()
        console.log('i am eat food');
        
    }
    //Es6的静态方法实现
    static walk(){
        console.log(`I'm walking`);
        
    }
}
let dog = new Animale('dog')
dog.eat()   
//I'm walking
//i am eat food