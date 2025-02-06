function sum(){
    let a=document.getElementById("valueofa").value
    let b=document.getElementById("valueofb").value
document.getElementById("result").innerHTML=`sum of a : ${a} and value of b:${b} = ${Number(a)+Number(b)}`;
}

function sub(){
    let a=document.getElementById("valueofa").value
    let b=document.getElementById("valueofb").value
document.getElementById("result").innerHTML=`sub of a : ${a} and value of b:${b} = ${Number(a)-Number(b)}`;
}

function div(){
    let a=document.getElementById("valueofa").value
    let b=document.getElementById("valueofb").value
document.getElementById("result").innerHTML=`div of a : ${a} and value of b:${b} = ${Number(a)/Number(b)}`;
}

function mul(){
    let a=document.getElementById("valueofa").value
    let b=document.getElementById("valueofb").value
document.getElementById("result").innerHTML=`mul of a : ${a} and value of b:${b} = ${Number(a)*Number(b)}`;
}
