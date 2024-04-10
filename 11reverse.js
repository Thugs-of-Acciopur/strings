
// let str = "Ramesh" 

// console.log(str.split("").reverse().join(""))


// // reverse

// // console.log(str.reverse())

// // split [ 'R', 'a', 'm', 'e', 's', 'h' ] 

// let strArr = str.split("") // [ 'R', 'a', 'm', 'e', 's', 'h' ]
// strArr.reverse()

// console.log(strArr) // [ 'h', 's', 'e', 'm', 'a', 'R' ]

// // join() 
// let newStr = strArr.join("")

// console.log(newStr) // R,a,m,e,s,h



let n = 1234450000 

let s = String(n) // "1234450000"

let rev = s.split("").reverse().join("") // "0000544321"

console.log(+rev)