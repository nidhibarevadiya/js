
let id=-1;

const createProduct = async (product) => {
    let req = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    let res = await req.json();
    console.log(res);
    uimaker(res);
}


const deletdata = async(id) =>{
    await fetch (`http://localhost:3000/products/${id}`,{
        method:"DELETE"
    })
}


const update = async (data) => {
    await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
   
  
}






const getData = async () => {
    try {
        let req = await fetch("http://localhost:3000/products");
        let res = await req.json();


        res.forEach(product => {
            uimaker(product);
        });
    } catch (error) {
        console.log(error.message);
    }
};


getData();


const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value
    }

   if(id==-1){
    createProduct(product)
   }
   else{
    update(product)
   }
}
 
const setvalue =(id,value)=>{
    document.getElementById(id).value=value;
}

const addtoform =(data) =>{
setvalue("title",data.title)
setvalue("price",data.price)
setvalue("img",data.img)
id=data.id
if(id=data.id){

setvalue("type","update")}

}

const uimaker = (product) => {
    let title = document.createElement('h3');
    title.innerText = product.title;

    let price = document.createElement('h5');
    price.innerText = product.price;

    let img = document.createElement('img');
    img.src = product.img;
    img.style.width = "150px";
    img.style.height = "150px";

    let dltbtn =document.createElement("button");
    dltbtn.innerHTML="delete"

    dltbtn.addEventListener("click", ()=>{
        deletdata(product.id)
    })

     let updatebtn =document.createElement("button");
     updatebtn.innerHTML="update";

     updatebtn.addEventListener("click",()=>addtoform(product))

    let div = document.createElement('div');
    div.append(img, title, price,dltbtn,updatebtn);

    document.getElementById("productList").append(div);
}

document.getElementById("productdata").addEventListener("submit", handleSubmit);

