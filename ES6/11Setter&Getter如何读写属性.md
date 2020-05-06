```js
class Animal {
    //构造函数内写属性
    constructor(type){
        this.type = type
    }
    // ES6中，属性可以放在构造函数外,但必须加get,set
    get age(){
        return 4
    }
    set age(val){
        this.realAge = val
    }
    //构造函数外写方法
    eat(){
        console.log('i am eat food');
        
    }
}

let dog = new Animal('dog')
console.log(dog.age);   //4
dog.age = 5
console.log(dog.age);   //4,因为设置的为get，只读，不能修改
```