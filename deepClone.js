// 多层级深拷贝
function deepClone(obj) {
    let result;
    if(typeof obj === 'object') {
        result = Array.isArray(obj) ? [] : {};
        for (let i in obj)  {
            result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    } else {
        result = obj
    }
    return result
}

let num = 2
let string = 'abcdefg'
let arr = [1, 2, 3, 4]
let arrMix = [1, [2, 3], [4, [5, 6]], [7, 8]]
let obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        },
    },
    c: 5,
}

// let cloneNum = deepClone(num)
// // let cloneString = deepClone(string)
// // let cloneArr = deepClone(arr)
// // let cloneArrMix = deepClone(arrMix)
// // cloneArrMix[2][1][1] = 666
// // let cloneObj = deepClone(obj)
// // cloneObj.b.c = 222
// // console.log(num, cloneNum);
// // console.log(string, cloneString);
// // console.log(arr, cloneArr);
// // console.log(arrMix, cloneArrMix);
// // console.log(obj, cloneObj);

// Object.assign拷贝 只对第一层进行了拷贝
let originObj = {
    name: 'lixin',
    value: {
        key: 'item',
        value: 'javascript'
    }
}
let cloneOriginObj = Object.assign({}, originObj)
cloneOriginObj.name = 'duyunze'
cloneOriginObj.value.value = 'java'
// console.log(originObj, cloneOriginObj)

// Json.parse(JSON.stringify(obj))深拷贝的问题
// 1.如果obj里面有时间对象，转换之后的结果里面时间将只是字符串的形式;
// 2.如果obj里面有RegExp,Error对象，则序列化之后的结果将只得到空对象;
// 3.obj里面的函数和undefined在序列化的时候会被丢失;
// 4.只能序列化对象的可枚举的自有属性，如果对象是由构造函数生成的，则拷贝之后会丢弃对象的constructor;
// 5.存在循环引用的情况也无法进行深拷贝

//Object.assign()
let objA = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 4,
            f: 5,
        },
    },
    g: 6,
}

let objB = {
    a: 1,
    b: 2,
    c: 3,
}
let objResult = Object.assign(objA, objB)
console.log(objResult)
