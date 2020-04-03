# 时间和日期

## 1、Date类型

### 创建一个日期对象

创建一个新`Date`对象的唯一方法是通过[`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符若将它作为常规函数调用（即不加 [`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符），则将会返回一个字符串，而非 `Date` 对象 

`let now = new Date();`

如何把时间字符串化？

`now.toLocaleString()`

如果没有提供参数，那么新创建的Date对象表示实例化时刻的日期和时间。

#### Unix时间戳

一个 Unix 时间戳（[Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16)），它是一个整数值，表示自1970年1月1日00:00:00 UTC（the Unix epoch）以来的毫秒数，忽略了闰秒。请注意大多数 Unix 时间戳功能仅精确到最接近的秒。

## 2、通用的方法

- [`toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString),
  - 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， `locales` 和 `options` 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。
- [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)
  - `**toString()**` 方法返回一个字符串，表示该[`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Date)对象。
- valueOf()
  - `**valueOf()**` 方法返回一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Date) 对象的原始值。

## 3、格式化方法

- [`getDate()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
  - 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）。
- [`getDay()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
  - **`getDay()`** 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天，`Sunday - Saturday : 0 - 6`
- [`getFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
  - **`getFullYear()`** 方法根据本地时间返回指定日期的年份。
- [`getHours()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
  - **`getHours()`** 方法根据本地时间，返回一个指定的日期对象的小时。
- [`getMonth()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
  - 根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。
- [`getSeconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
  - **`getSeconds()`** 方法根据本地时间，返回一个指定的日期对象的秒数。
- [`getTime()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
  - `**getTime()**` 方法返回一个时间的格林威治时间数值。
- [`getMinutes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
  - **`getMinutes()`** 方法根据本地时间，返回一个指定的日期对象的分钟数。

