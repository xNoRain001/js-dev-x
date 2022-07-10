## 介绍

JavaScript 开发工具库。

## 下载

### npm

```
npm i javascript-dev-utils
```

### src

```html
<script src="../dist/javascript-dev-utils.js"></script>
```

## 使用

```javascript
// import _ from 'javascript-dev-utils'

_[method]()
```

## APIs

### each

```javascript
/**
 * 遍历（类）数组或对象
 * 
 * @param {(Array|Object)} obj - 要遍历的对象
 * @param {Function} cb - 回调，会传递给它 index(key) 和 value
 */
const ary = [1, 2, 3]

_.each(ary, (index, value) => {
  // ...
})
```

### random

```javascript
/**
 * 生成指定范围的随机整数或字母
 * 
 * @param {string} type - 类型，可选值有 'int' | 'letters'
 * @param {string} [range=undefined] - 范围，示例如下：
 *  '[3, 5]' 表示随机生成 3、4、5 中的一个数，
 *  '(5, 8)' 表示随机生成 6、7 中的一个数，
 *  'lower' 表示随机生成小写字母
 *  'upper' 表示随机生成大写字母
 *  undefined 表示随机生成字母
 * @param {number} number - 生成字母的数量，生成随机整数时传入该参数无意义。
 * @returns {(string|number)} - 生成的随机整数或字母
 */
_.random('int', [3, 5])
_.random('letters', 5)
```

### getType

```javascript
/**
 * 返回给定值的数据类型
 * 
 * @param {*} v - 需要判断类型的值
 * @returns {string} 给定值的数据类型，都为小写字母。
 */
_.getType({})
```

### shallowClone

```javascript
/**
 * 返回一个值的浅拷贝
 * 
 * @param {*} target - 需要浅拷贝的值
 * @returns {*} 浅拷贝后的值
 */
const obj = { foo: { bar: 'bar' } }
const clone = _.shallowClone(obj)
clone.foo.bar = 'baz'
console.log(obj ) // output: { foo: { bar: 'baz' } }
```

### deepClone

```javascript
/**
 * 返回一个值的深拷贝
 * 
 * @param {*} target - 需要深拷贝的值
 * @returns {*} 深拷贝后的值
 */
const obj = { foo: { bar: 'bar' } }
const clone = _.deepClone(obj)
clone.foo.bar = 'baz'
console.log(obj ) // output: { foo: { bar: 'bar' } }
```
