# ES5中怎么声明一个类？
```js
//声明一个动物类
 function Animal(type){
    this.type = type
}
Animal.prototype.eat = function(){
    console.log('hello,world');
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')
console.log(dog);       //Animal { type: 'dog' }
console.log(monkey);    //Animal { type: 'monkey' }

dog.eat()               //hello,world
monkey.eat()            //hello,world
```

# ES6是如何声明一个类？
```js
class Animal {
    //构造函数内写属性
    constructor(type){
        this.type = type
    }
    //构造函数外写方法
    eat(){
        console.log('i am eat food');
        
    }
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')
console.log(dog);       //Animal { type: 'dog' }
console.log(monkey);    //Animal { type: 'monkey' }
dog.eat()               //i am eat food
monkey.eat()            //i am eat food

//ES中 typeof 判断类型
console.log(typeof(Animal));    //function
//Es6的Class类是ES5的语法糖，其实都一样
```