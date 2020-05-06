# ES5中将伪数组转换成数组该怎么办？ES6如何做呢？
# 集合调用不了数组的API，伪数组
# ES5中，伪书组转换数组
- 伪数组是一个含有length属性的json对象，它是按照索引的方式存储数据，它并不具有数组的一些方法.
- 利用 Array.prototype.slice.call()
- 利用 Array.from()
```js
let args = Array.from(arguments)
let img = array.from(document.querySelectorAll("img"))//已经将伪数组转换为数组，可以用数组的方法了
```
```js
arrayLike:伪数组
mapFn:遍历函数
thisArg:接受一个this对象
Array.from(arrayLike,mapFn,thisArg)
// 第一个参数是伪数组，length属性的json对象
let array = Array.from({length:5},()=>1)
console.log(array);
```
# 知识点:伪书组概念
        伪书组到数组的转换
        Array.form()具有map，遍历的功能

# Es5创建新数组
```js
//1
let arr = Array(5)
//2
let arr = ['','']
```
# Es6创建新数组
```js
// Array.of()：转换一组值为真正数组，返回新数组
let arr = Array.of(1,2,3,4,5)
console.log(arr)
```
```js
// fill()：根据指定值填充整个数组，返回原数组
let array = Array(5).fill(1)
console.log(array); //[ 1, 1, 1, 1, 1 ]
/*-------------------------------------*/
let arr = [1,2,3,4,5]
console.log(aarr.fill(8,2,4))//[ 1, 2, 8, 8, 5 ] fill(value,start,end)
```