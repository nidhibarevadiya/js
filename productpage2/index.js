
const getvalue = (id) =>
{
    return document.getElementById(id).value
}

let products =JSON.parse(localStorage.getItem("products"))||[];
let like=JSON.parse(localStorage.getItem("like"))||[];


const isExisits =(id)=>{
    for(let i=0; i < like.length;i++)
        {
        if (like[i].id == id) 
            {
            return true;
        }

      
    }  return false;
   
    };

// uimaker();
const uimaker = (products)=>{
 
    document.getElementById("productui").innerHTML=" ";
    products.map((productlist,i)=>{

        let div1 =document.createElement("h1");
        div1.innerHTML=productlist.title;

        let div2 =document.createElement("h3");
        div2.innerHTML=productlist.price;

        let div3 =document.createElement("h3");
        div3.innerHTML=productlist.catagery;

        let image=document.createElement("img");
        image.src=productlist.image1;
        
        let div4 =document.createElement("p");
        div4.append(image)

        let but=document.createElement("button");
        but.innerHTML="delete";

        let div5=document.createElement("div");
        div5.append(but)

        let likebutton =document.createElement("button");
        likebutton.innerHTML="like";

          
        but.addEventListener("click",()=>handeldelet(i))

        likebutton.addEventListener("click",()=>{
            if (isExisits(productlist.id)) {
                alert("alery Exists this Product");
              } else {
                like.push(productlist);
                localStorage.setItem("like", JSON.stringify(like));
                alert("Your Product is Added");
              }
        })
   

        let div6 =document.createElement("div");
        div6.append(div4,div1,div2,div3,div5,likebutton)

        document.getElementById("productui").append(div6)
    });
};

const handelsort =(orderby)=>{
    if(orderby=="lth")
    {
        let temp=products.sort((a,b)=>a.price-b.price);
        uimaker(temp);
    }else{
        let temp=products.sort((a,b)=>b.price-a.price);
uimaker(temp);
        }
    };
    document.getElementById("lth").addEventListener("click",()=>handelsort("lth"))
    document.getElementById("htl").addEventListener("click",()=>handelsort("htl"))



const handeldelet =(i)=>{
     products.splice(i,1)
            uimaker(products);
            localStorage.setItem("products",JSON.stringify(products));  
}

const fillterbycategary = (catagery) => {
    if(catagery =="all"){
        uimaker(products);  
        return;
    }
    let temp =products.filter((cate)=>cate.catagery==catagery);
    uimaker(temp);
}
document.getElementById("kid").addEventListener("click",()=>fillterbycategary("kid"));
document.getElementById("women").addEventListener("click",()=>fillterbycategary("women"));
document.getElementById("all").addEventListener("click",()=>fillterbycategary("all"));

const handelsubmit =(e)=>{
    e.preventDefault();
    let product = {
        title :getvalue("title"),
        price :getvalue("price"),
        image1 :getvalue("image"),
        catagery:getvalue("catagery"),
        id : Date.now(),
    };

    products.push(product);
    // console.log(products)
    uimaker(products);

    localStorage.setItem("products",JSON.stringify(products));


}

uimaker(products);

const searching =(value)=>{
let temp =products.filter((ele)=> ele.title.toLowerCase().includes(value.toLowerCase()));
uimaker(temp);
}

document.getElementById("search").addEventListener("input",()=>{
    let value=getvalue("search");
    searching(value);
});






document.getElementById("productpage").addEventListener("submit", handelsubmit)