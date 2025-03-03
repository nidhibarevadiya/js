let count=0;
let value=document.getElementById("count1").innerHTML;
// console.log(value);




setTimeout(()=>{
let counter=setInterval(()=>{
    count++;
   
    document.getElementById("count1").innerHTML=count;
    if(count==value){
       count=0;
    }
}, 100);

}, 3000);
;

// second counter
let count11=0
let value1=document.getElementById("count2").innerHTML;
console.log(value1);
setTimeout(()=>{
let counter1=setInterval(()=>{
    count11++;
   
    document.getElementById("count2").innerHTML=count11;
    if(count11==value1){
       count11=0;
    }
}, 10);

}, 3000);

// third counter

let count12=0
let value12=document.getElementById("count3").innerHTML;
console.log(value12);
setTimeout(()=>{
let counter2=setInterval(()=>{
    count12++;
   
    document.getElementById("count3").innerHTML=count12;
    if(count12==value12){
       count12=0;
    }
}, 30);

}, 3000);