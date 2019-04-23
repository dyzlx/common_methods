
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

let cloneNum = deepClone(num)
let cloneString = deepClone(string)
let cloneArr = deepClone(arr)
let cloneArrMix = deepClone(arrMix)
cloneArrMix[2][1][1] = 666
let cloneObj = deepClone(obj)
cloneObj.b.c = 222
console.log(num, cloneNum);
console.log(string, cloneString);
console.log(arr, cloneArr);
console.log(arrMix, cloneArrMix);
console.log(obj, cloneObj);
