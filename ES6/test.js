class Student {
    //构造函数内写属性
    constructor(){

    }
    //原型方法
    eat(){
        Student.walk()
        console.log('I\'m eadting');
    }
    //静态方法
    static walk(){ 
        console.log('I\'m working');
    }
}