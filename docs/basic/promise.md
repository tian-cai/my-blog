`Promise` 是异步编程的一种解决方案，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。
有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
### 特点
- 对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`resolved`（已完成，又称 `Fulfilled`）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
`Promise`对象的状态改变，只有两种可能：从`pending`变为`resolved`和从`pending`变为`rejected`。
- 一旦新建它就会立即执行。
### 构造函数
`Promise`对象是一个构造函数，用来生成`Promise`实例。
构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`，它们是两个函数。<br>
`resolve`函数的作用是将`Promise`对象的状态从`pending`变为`resolved`，并将异步操作的结果，作为参数传递出去。<br>
`reject`函数的作用是将``Promise`对象的状态从`pending`变为`rejected`，并将异步操作报出的错误，作为参数传递出去。
```js
let promise = new Promise(function(resolve, reject) {
    console.log("Promise start")
    resolve(42)
    reject(new Error('error test'))
    console.log("Promise end")
})
  
promise.then(function(value) {
    console.log(value)
})
promise.catch(function(error) {
    console.error(error)
})

console.log("Hi!")
// Promise start
// Promise end
// Hi!
// 42
```
### 实例方法
- `then()`<br>
then方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）是`rejected`状态的回调函数。
返回的是一个新的`Promise`实例，因此可以采用链式写法。
- `catch()`<br>
`catch`方法是`.then(null, rejection)`的别名，用于指定发生错误时的回调函数。
`catch`方法返回的还是一个 `Promise` 对象，因此可以采用链式写法。<br>
`Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个
`catch`捕获。<br>
一般来说，不要在then方法里面定义 rejected 状态的回调函数（即then的第二个参数），总是使用catch方法。
- `finally()`<br>
用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。`finally`方法的回调函数不接受任何参数。
  ```js
    let promise = new Promise(function (resolve, reject) {
        reject(42)
    }).then(function (value) {
        console.log("resolved" + value)
    }).catch(function (error) {
        console.log("rejected" + error)
    }).finally(function () {
        console.log("finally")
    })
   //rejected42  finally
  ```
### 静态方法
- `Promise.all()` <br>
用于将多个 `Promise` 实例，包装成一个新的 Promise 实例。
该方法参数必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。<br>
只有每个`Promise`实例的状态变为`resolved`，返回的新的 `Promise` 实例状态才会变成`resolved`。<br>
相反，只要有一个`Promise`实例的状态变为`rejected`， 则整个`Promise.all`调用会立即终止，并返回一个`rejected`的新的`Promise`对象。
```js
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
  })
  .then(result => result)
  .catch(e => e);

const p2 = new Promise((resolve, reject) => {
    reject('报错了');
  })
  .then(result => result)

Promise.all([p1, p2])
  .then(result => console.log('success' + result))
  .catch(e => console.log('error' + e));
//error报错了
```
> 注意点：如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

- `Promise.race()`<br>
同样是将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。
方法的参数与`Promise.all`方法一样。
只要有一个实例的状态发生变化，该函数就会返回，并使用这个`promise`对象的值进行`resolve`或者`reject`。
```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello'), 2000)
  })
  .then(result => result)
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('world'), 4000)
  })
  .then(result => result)

Promise.race([p1, p2])
  .then(result => console.log('success' + result))
  .catch(e => console.log('error' + e));
// successhello


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('hello'), 2000)
  })
  .then(result => result)
  .catch(e => e)
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('world'), 4000)
  })
  .then(result => result)

Promise.race([p1, p2])
  .then(result => console.log('success' + result))
  .catch(e => console.log('error' + e)
// successhello
//p1首先状态变为rejected，然后调用自己的catch方法，返回一个新的Promise 实例(状态为resolved)，
//所以Promise.race()返回的Promise 实例状态为resolved，调用then方法，所以输出仍然是successhello。
```
> 注意点：如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.race()`的`catch`方法。

- `Promise.resolve()`<br>
  - 返回一个新的 `Promise` 实例，该实例的状态由参数决定。
  - 如果参数是 `Promise` 实例，那么`Promise.resolve`将不做任何修改、原封不动地返回这个实例。
  - 如果参数是一个`thenable`对象，那么`Promise.resolve`会将这个对象转为 `Promise` 对象，然后就立即执行`thenable`对象的`then`方法。
  - 如果参数是其他或者不带参数，那么返回一个新的 `Promise` 实例，该实例的状态为`resolved`。
```js
Promise.resolve('foo')     
// 等价于 new Promise(resolve => resolve('foo'))
const p2 = new Promise((resolve, reject) => {
    reject('world')
  })
  .then(result => result)
let p3 = Promise.resolve(p2)
console.log(p3 === p2)   //  true   原封不动地返回p2

let thenable = {
  then: function (resolve, reject) {
    reject(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log('then' + value); 
});
p1.catch(function (error) {
  console.log('catch' + error);   
  // catch42  Promise.resolve将thenable转为Promise对象，
  //然后执行thenable的then方法，Promise对象的状态变为rejected，所以执行p1.catch方法。
});
```

- `Promise.reject()`<br>
返回一个新的 `Promise` 实例，该实例的状态为`rejected`。
```js
const p = Promise.reject('出错了');  
// 等同于  const p = new Promise((resolve, reject) => reject('出错了'))
```

### 模拟实现
- 模拟`Promise.all()`
```js
Promise.all = function (promises) {
    let arr = [];
    let i = 0;
    function processData(index, data, resolve) {
        arr[index] = data;
        i++;
        if (i == promises.length) {
            resolve(arr);
        };
    };
    return new Promise((resolve, reject) => {
        if(promises.length === 0) {
            resolve([])
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
                processData(i, data, resolve);
            }, reject);
        };
    });
}
```
- 模拟`Promise.race()`
```js
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
                resolve(data)
            }).catch((error)=> {
                reject(error)
            });
        };
    });
}
```