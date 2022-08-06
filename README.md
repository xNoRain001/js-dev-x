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
 * @param {(Array|Object)} target - 要遍历的目标
 * @param {Function} cb - 回调函数，会传递给它 key(index) 和 value，当回调函数的返
 *  回值为 false 时会结束循环。
 */
const o = { foo: 'foo', bar: 'bar', baz: 'baz' }

_.each(o, (key, value) => {
  // ...

  if (key === 'bar') {
    return false 
  }
})
```

### keys

```javascript
/**
 * 返回一个对象的所有可枚举 key 组成的数组
 * 
 * @param {Object} obj - 对象
 * @returns {Array} 返回一个对象的所有 key 组成的数组
 */
const o = {
  [Symbol('foo')]: 'foo',
  bar: 'bar',
  baz: 'baz'
}

_.keys(o) // output: ['bar', 'baz', Symbol(foo)]
```

### useless

```javascript
/**
 * 根据 value 去除对象或数组中的无用 key，会修改目标对象或数组。
 * 
 * @param {(Object|Array)} target - 目标对象或数组
 * @param {Array} options - 如果目标对象或数组的属性值和此数组中的任何一个元素相等，
 *  那么该属性会被去除。
 * @param {boolean} [isStrict=true] - 是否开启严格模式，默认开启。未开启时，如果对
 * 象属性值是对象或数组，那么对象或数组内和 options 中相等的属性或元素会被去除；如果
 * 数组属性值是对象或数组，那么对象或数组内和 options 中相等的属性或元素会被去除。
 * @returns {(Object|Array)} - 去除属性后的目标对象或数组
 */
const o = {
  foo: 'foo',
  bar: 'bar',
  baz: {
    foo: null,
    bar: undefined
  }
}

_.useless(o, [null, 'foo']) // output: { bar: 'bar', baz: { bar: undefined }}

const ary = [null, 'foo', { bar: undefined, baz: [null, 'foo'] }, [null]]

// output: [ { bar: undefined, baz: [] }, []]
_.useless(ary, [null, 'foo'], false) 
```

### random

```javascript
/**
 * 生成随机正整数或随机字母
 * 
 * @param {string} type - 类型，可选值有
 *  - 'number'
 *  - 'lowerCaseLetter'
 *  - 'upCaseLetter'
 *  - 'letter'
 * @param {(string|number)} rangeOrNumber - 生成随机数范围或字母数量，示例如下：
 *  - '[3, 5]' 表示随机生成 3、4、5 中的一个数
 *  - '(5, 8)' 表示随机生成 6、7 中的一个数
 *  - 3 表示生成三个字母
 * @returns {(string|number)} - 生成的随机整数或字母
 */
_.random('number', '[3, 5]') // output: 4
_.random('letter', 5) // output: 'PTzgp'
```

### getType

```javascript
/**
 * 返回给定值的数据类型
 * 
 * @param {*} v - 需要判断类型的值
 * @returns {string} 给定值的数据类型，结果都为全小写字母。
 */
_.getType({}) // output: 'object'
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

obj // output: { foo: { bar: 'baz' } }
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

obj // output: { foo: { bar: 'bar' } }
```

### throttle

```javascript
/**
 * 函数节流
 * 
 * @param {Function} fn - 需要进行节流处理的原函数
 * @param {number} wait - 节流的时间间隔
 * @param {Object} options - 用于设置开始边界和结束边界是否触发的配置项
 * @param {boolean} options.leading - 开始边界是否触发
 * @param {boolean} options.trailing - 结束边界是否触发
 * @returns {Function} - 生成的节流函数
 */
const throttled = _.throttle(fn)
```

### debounce

```javascript
/**
 * 函数防抖
 * 
 * @param {Function} fn - 需要进行防抖处理的原函数
 * @param {number} wait - 防抖的时间间隔
 * @param {boolean} immediate - 是否开始边界触发
 * @returns {Function} - 生成的防抖函数
 */
const debounced = _.debounce(fn)
```

### merge

```javascript
/**
 * 合并两个对象或两个数组，会改变目标对象或目标数组
 * 
 * @param {(Object|Array)} target - 目标对象或目标数组
 * @param {(Object|Array)} sources - 来源对象或来源数组
 * @returns {(Object|Array)} - 合并完成后被修改的的目标对象或目标数组
 */
const o1 = { foo: 'foo', bar: { baz: ['foo', 'bar'] } }
const o2 = { foo: 'foo', bar: { foo: 'foo', baz: 'bar' } }
_.merge(o1, o2) // output: { foo: 'foo', bar: { foo: 'foo', baz: 'bar' } }

const ary1 = ['foo', ['bar', 'baz']]
const ary2 = [{ foo: 'foo' }, ['bar', 'foo'], 'baz']
_.merge(ary1, ary2) // output: [{ foo: 'foo' }, ['bar', 'foo'], 'baz']
```

### has

```javascript
/**
 * 判断一个对象是否存在某个私有属性
 * 
 * @param {Object} target - 目标对象
 * @param {string} prop - 需要判断的公有属性
 * @returns {boolean} - 结果
 */
_.has({}, 'foo') // output: false
```

### hasPub

```javascript
/**
 * 判断一个对象是否存在某个公有属性
 * 
 * @param {Object} target - 目标对象
 * @param {string} prop - 需要判断的公有属性
 * @returns {boolean} - 结果
 */
_.hasPub({}, 'toString') // output: true
```

### uniq

```javascript
/**
 * 数组去重，不会影响原数组。
 * 
 * @param {Array} target - 需要去重的数组
 * @returns {Array} - 去重后的新数组
 */
const ary = [1, 2, 2]
_.uniq(ary) // output: [1, 2]
```
