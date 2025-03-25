
let NEWS=JSON.parse(localStorage.getItem("newss")) || [];
const uimaker=(NEWS)=>{

    document.getElementById("newsuishow").innerHTML="";
    NEWS.map((newspro,i)=>{

        let tital=document.createElement("p");
        tital.innerHTML=newspro.tital;

        let image1=document.createElement("img");
        image1.src=newspro.Image;

        let contect=document.createElement("p");
        contect.innerHTML=newspro.contect ;

        let  catagery=document.createElement("p");
        catagery.innerHTML=newspro. catagery;

        let but=document.createElement("button");
        but.innerHTML="delete";

        but.addEventListener("click",()=>handeldelet(i))

        let div =document.createElement("div")
        div.append(tital,image1,contect,catagery,but)

        document.getElementById("newsuishow").append(div)

    })

}
const handeldelet =(i)=>{
    NEWS.splice(i,1)
           uimaker(NEWS);
           localStorage.setItem("newss",JSON.stringify(NEWS))
         
}
uimaker(NEWS);

const getvalue = (id) => {
    return document.getElementById(id).value
}


const searching =(value)=>{
    let temp =NEWS.filter((ele)=> ele.tital.toLowerCase().includes(value.toLowerCase()));
    uimaker(temp);
    }

document.getElementById("search").addEventListener("input",()=>{
    let value=getvalue("search");
    searching(value);
});


const fillterbycategary = (catagery) => {
    if(catagery =="all"){
        uimaker(NEWS);  
        return;
    }
    let temp =NEWS.filter((cate)=>cate.catagery==catagery);
    uimaker(temp);
}
document.getElementById("helth").addEventListener("click",()=>fillterbycategary("helth"));
document.getElementById("tecnology").addEventListener("click",()=>fillterbycategary("tecnology"));
document.getElementById("ententment").addEventListener("click",()=>fillterbycategary("ententment"));
document.getElementById("all").addEventListener("click",()=>fillterbycategary("all"));
