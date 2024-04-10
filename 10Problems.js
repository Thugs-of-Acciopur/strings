
let str = "Ram is dancing"
str = str+ " "

let word = "" 
let newStr = ""

for(let t of str){ // " "
    if(t != " "){
         word = word +  t // "is"
    }
    else if(t==" " && word !=""){
        newStr = word +" "+ newStr
        word = ""
    }
}

console.log(newStr) // "Ramisdancing"