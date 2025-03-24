
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

// const handelsubmit = (e) => {
//     e.preventDefault();

//     let news = {
//         tital: getvalue("title"),
//         Image: getvalue("image"),
//         contect: getvalue("contect"),
//         catagery: getvalue("catagery")

//     }

//         NEWS.push(news)
//         // console.log(NEWS)
//         uimaker(NEWS);
//         localStorage.setItem("newss",JSON.stringify(NEWS))


// }
// document.getElementById("newsform").addEventListener("submit", handelsubmit)