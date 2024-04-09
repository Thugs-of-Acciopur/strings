// let str = "124"

// let ans = Number(str) 
// let ans = +str 



// console.log(ans, typeof(ans)) // 124 number

// let n = 56 + ""
// let ans = n.toString() 
// let ans1 = String(n)

// console.log(ans, ans1) // "56" string


// let s = "756" / 1
// console.log(s, typeof(s)) // 756 number

let str = "ram7 is danc5ing o4n the po56ol"
let sum = 0
for(let t of str){
    // console.log(t)
    if(+t == t && t != " "){
        sum = sum + +t
    }
}
console.log(sum)


// console.log(" " >=0 && " " <=9)

// console.log(+" ")