//es6 类
class Animal{
    //构造函数写属性
    constructor(type){
        this.type = type
    }
    //构造函数外写方法
    eat(){
        console.log('I\'m eating');
    }
}
let dog = new Animal('dog')
dog.eat()  //I'm eating
//es5 类
// function Animal(type){
//     this.type = type;
// }
// Animal.prototype.eat = function(){
//     console.log('I\'m eating');
// }
// let dog = new Animal('dog')
// dog.eat()  //I'm eating