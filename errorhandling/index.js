const divide = (a, b) => {
    if (b == 0 || a == 0) {

        throw new Error("error:can not divide");

    }
    return a / b
}

console.log("before")

try{
    console.log(divide(10,0))
}
catch(err){
    console.log(err.message)
//     let i=0
//     while(i<10){                 this for finally ko stop karne ke liye

//     }
}
finally{
    console.log("proccess finised")
}

console.log("after")