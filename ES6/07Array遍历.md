# 1.for循环
```js
const arr = [1,2,3,4,5]
for(let i=0,i<arr.length;i++){
    console.log(arr[i])
}
```
# 2.forEach
```js
const arr = [1,2,3,4,5]
arr.forEach((item)=>{
    console.log(item)   //1,2,3,4,5
}
})
```
# 3.every
```js
const arr = [1,2,3,4,5]
arr.every(item=>{
    console.log(item) // 1,
})
// 可受控制的
const arr = [1,2,3,4,5]
arr.every(item=>{
    if(item ===2){  
    }else{
        console.log(item);//1,3,4,5
    }
    return true
})
```
# 4. for in //变量对象的，遍历数组会有毛病
```js
const arr = [1,2,3,4,5]
for (const index in arr) {
    console.log(index,arr[index]);
}
// index 为属性
/*
0 1
1 2
2 3
3 4
4 5
*/
```
# Es6 5.for of  --->可以遍历数组，对象，自定义的数据结构
```js
const arr = [1,2,3,4,5]
for (const item of arr) {
    console.log(item);
}
```
```js
const Price = {
    A:[1.5,2.3,4.5],
    B:[3,4,5],
    C:[0.5,0.8,1.2]
}
// 如果用for in
for (const key in object) {
    console.log(key,object[key]);
    /* 此种遍历，只能是遍历key，value
    A [ 1.5, 2.3, 4.5 ]
    B [ 3, 4, 5 ]
    C [ 0.5, 0.8, 1.2 ]
    */
}
//如果用 for of

```