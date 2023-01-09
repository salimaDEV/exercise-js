//Math operation
// let a = 10
// let b = 5
// let year = 2022
//+
//-
//*
// /
//% - mode
//**
//
//
// console.log(a + b )
// console.log(a - b )
// console.log(a * b )
// console.log( a /b )
// console.log( a % b)
// console.log( a ** b)
// let  result = year/13
// console.log(year/13)
// console.log(Math.floor(result))
// console.log(Math.ceil(result))
// console.log(Math.round(result))
// console.log(Math.trunc(result))
// console.log(Math.sqrt(9))
// console.log(Math.pow(10,3))

//Math.floor()
//Math.ceil()
//Math.round()
//Math.trunc()
//Math.sqrt()
//Math.pow()
//Math.random() - 0 - 1
// console.log(Math.random())
// let number = Math.random()
// console.log(Math.floor(number *(100-50))+50)
// //Math.abc
// console.log(Math.abs(-18))
// console.log(Math.abs(18))
//let x = Math.floor(Math.random()*(50 - 1)+1)
//let y = Math.floor(Math.random()*(100 - 50)+50)
//console.log("start of the diapasone:",x ,"end of the diapasone:",y)
//let middle = Math.floor((x+y)/2)
//console.log("middle of the diapasone:",middle)








//2. На входе два одномерных массива. В каждом массиве всегда по два
// элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
// Output: [3,7]

let a = [2,4], b= [1,3]
console.log(a.map(function (el,idx){
return el[1] * el[1]
}))


//1. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let a = 10; let b = "10";
//  console.log(a == b)

let no = 'jzvzszrzpz'

