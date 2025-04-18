


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

    createProduct(product);
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

    let div = document.createElement('div');
    div.append(img, title, price,dltbtn);

    document.getElementById("productList").append(div);
}

document.getElementById("productdata").addEventListener("submit", handleSubmit);

