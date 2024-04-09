// let str = "Abhi"
// // str = "tam"
// str[0] = "t"
// console.log(str) // tam

let str = "papa"

// console.log(str.replace("p", "k"))
// let s2 = str.replaceAll("p", "k")
// console.log(s2) // kaka
// console.log(str) // papa

let s3 = "" // kaka
for(let t of str){ // p a p a
    if(t == "p"){
      s3 = s3 + "k"
    }
    else if(t != "p"){
        s3 = s3 + t 
    }
}

console.log(s3)

