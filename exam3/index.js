let arr=[];


const handledelet = (index)=> {
    arr.splice(index,1);
    uiemp();
    };
function alldelet(){
    arr=[];                           
    uiemp();
}
const uiemp =()=>{
    document.getElementById("tablebody").innerHTML="";
    arr.map((employee1,i)=>{
        let td1=document.createElement("td");
        td1.innerHTML=employee1.name;

        let td2=document.createElement("td");
        td2.innerHTML=employee1.number;

        let td3=document.createElement("td");
        td3.innerHTML=employee1.email;

        let td4=document.createElement("td");
        td4.innerHTML=employee1.jobroll;

        let td5=document.createElement("td");
        td5.innerHTML=employee1.expersions;

       
        let td6 = document.createElement("td");
        td6.innerHTML = employee1.expersionsLevels;

        let td7=document.createElement("td");
        td7.innerHTML=employee1.salary;

        let img = document.createElement("img");
        img.src = employee1.image;
        let td8 = document.createElement("td");
        td8.append(img);
    

        let but=document.createElement("button");
        but.innerHTML="Delete";
        but.addEventListener("click", ()=>handledelet(i))
           let td9=document.createElement("td");
           td9.append(but);

         
           let tr=document.createElement("tr");
           tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
           document.getElementById("tablebody").append(tr);
   

});
}



const submite =(e)=>{


e.preventDefault();
let name =document.getElementById("name").value;
let number= document.getElementById("number").value;
let email= document.getElementById("email").value;
let jobroll= document.getElementById("jobroll").value;
let expersions= document.getElementById("expersions").value;
if (expersions< 3) {
  expersionsLevels = " Junior";
} else if (expersions >= 3 && expersions < 5) {
  expersionsLevels = "Medium";
} else {
  expersionsLevels = "Senior";
}

let salary= document.getElementById("salary").value;
let image = document.getElementById("image").value;



let emp1={
    name:name,
    number:number,
    email:email,
    jobroll:jobroll,
    expersions:expersions,
    expersionsLevels: expersionsLevels,
    salary:salary,
    image: image,
};


arr.push(emp1);
// console.log(arr);
uiemp();
};


document.getElementById("emp").addEventListener("submit", submite);