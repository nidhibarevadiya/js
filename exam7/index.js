let id = -1;
let allProducts = [];

const deletdata = async (id) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE"
  });
  getData();
};

const getData = async () => {
  try {
    let req = await fetch("http://localhost:3000/products");
    let res = await req.json();
    allProducts = res;
    displayProducts(res);
  } catch (error) {
    console.log(error.message);
  }
};

getData();

const setvalue = (id, value) => {
  document.getElementById(id).value = value;
};

const addtoform = (product) => {
  setvalue('title', product.title);
  setvalue('price', product.price);
  setvalue('img', product.img);
  id = product.id;
};

const displayProducts = (products) => {
  let container = document.getElementById("productList");
  container.innerHTML = "";
  products.forEach(product => {
    let title = document.createElement('h3');
    title.innerText = product.title;

    let price = document.createElement('h5');
    price.innerText = `$${product.price}`;

    let img = document.createElement('img');
    img.src = product.img;
    img.style.width = "150px";
    img.style.height = "150px";

    let dltbtn = document.createElement("button");
    dltbtn.innerHTML = "Delete";
    dltbtn.addEventListener("click", () => {
      deletdata(product.id);
    });

    let div = document.createElement('div');
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.display = "inline-block";
    div.style.width = "180px";
    div.append(img, title, price, dltbtn);

    container.append(div);
  });
};

const searchProducts = () => {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let filtered = allProducts.filter(product => product.title.toLowerCase().includes(query));
  displayProducts(filtered);
};

const handleSort = (orderby) => {
  let sortedProducts = [...allProducts]; // Copy bana rahe hai allProducts ka

  if (orderby === "lth") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (orderby === "htl") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("searchInput").addEventListener("input", searchProducts);
