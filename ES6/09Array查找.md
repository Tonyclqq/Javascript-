# Es5中如何查找一个元素呢？
## 1.filter ：缺陷-->必须查找完才完事，不是查找到就结束
    - 关注的是满足条件的所有值
```js
// filter符合条件的
let arr = [1,2,3,4,5]
let find = arr.filter(item =>{
    return item === 3
})
console.log(find);// [3]
```
## 2.find  -->ES6
    - 关注的是满足条件的第一个值，关注的是有或者没有
```js
let arr = [1,2,3,4,5]
let find = arr.find(item =>{
    return item === 3
})
console.log(find);// 3,返回的是值，没有的话返回的是undefined


let find = arr.find(item =>{
    return item %2=== 0
})
console.log(find); //2
```

## 3.findIndex  -->ES6
    - 返回的是索引，和find是一对