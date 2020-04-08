# Function类型

在ECMAScript中，Function(函数)类型实际上是对象。每个函数都是Function类型的实例，而且都与其他引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上也是一个指向函数对象的指针

## 1、创建函数的方式

- **1、函数声明**

  ```js
  function box(a,b){
      return a + b
  }
  alert(box(1,2))
  ```

- **2、函数表达式(匿名、具名)**
	
	```js
	var b = function(a,b){
	    return a + b
	}
	alert(b(1,2))
	var a = function box(a,b){
	    return a + b
	}
	alert(a(1,2))
	```
	
- **3、使用Function构造函数(不推荐用此种方式，会二次解析，影响性能)**
	
	```js
	var a = new Function('a','b','return a + b')
	```

## 2、作为值的函数

ECMAScript中的函数名本身就是**`变量`**,所以函数也可以作为==值==来使用。也就是说，不仅可以像==传递参数==一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回

- ```js
  //下面的例子很普通，不是作为值来传递的，而是作为函数的返回值来传递的
  function box(sum,num){
      retutn sum + num
  }
  function sum(num){
      return num + 10;
  }
  var result = box(sum(10),10) //20，10 sum(10)这里传递的是函数的返回值，和普通变量一样
  
  ```

- ```js
  function box (sum , num){
      return sum(num)
  }
  function sum(num){
      return num + 10;
  }
  var result = box(sum,10)//这里sum是一个函数，当作参数传递到另外一个函数里，而不是函数的返回值
  ```

## 3、函数的内部属性

在函数的内部，有两个特殊的对象：==arguments==，==[this](./函数内部属性this的详讲.md)==。

- **`arguments`**是一个类数组对象，包含着传入函数中的所有参数，主要用途是保存函数参数。但这个对象还有一个名叫**`callee`**的属性，该属性是一个指针，指向拥有这个argumrnts对象的函数

- **`this:`**this既不指向函数自身也不指向函数的词法作用域，抛开以前错误的假设和理解。this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。PS:

  - ```js
    //window是一个对象，在浏览器宿主环境中，window是JS里面最大的对象，是最外围的对象
    alert(typeof window) 
    //在浏览器控制台里，输出的是object
    //在Node的环境中，输出的是undefined
    alert(this)
    //浏览器环境：[object Window] this目前表示的是window，因为在window的范围下
    //Node环境：Node.js 中的全局对象是 global
    alert(typeof this) //
    var color = "red" //这里color就是全局对象，而这个变量又是window的属性
    alert(winow.color)
    ```

## 4、函数属性和方法

ECMAScript中的函数是对象，因此函数也有属性和方法。每个函数都包含两个属性，**`length`** 和**`prototype`**,其中，length属性表示函数希望接收的命名参数的个数

PS:对于**`prototype`**属性，它是保存所有实例方法的真正所在，也就是原型。

**`属性:`**

- [`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments)以数组形式获取传入函数的所有参数。此属性已被[`arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)替代。
- [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 获取函数的接收参数个数。

**`方法：`**

- [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入。
- [`bind()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
- [`call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。



