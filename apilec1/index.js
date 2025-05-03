

const uiMaker = (data) => {
  let temp = "";
  for (let i = 0; i < data.length; i++) {
    temp += `<div class="box">
      <img
        src=${data[i].image}
        alt=""
        class="img"
      />
      <h3>${data[i].title}</h3>
      <p>${data[i].price}</p>
    
      <p  class=${data[i].rating.rate > 3 ? "green" : "red"} >${
      data[i].rating.rate
    }</p>
      <button>buy</button>
    </div>`;
  }

  document.getElementById("container").innerHTML = temp;
};
const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    uiMaker(res);
  } catch (error) {
    console.log(error.message);
  }
};

getData();


const uimaker=(data)=>{
  data.map((Item)=>{
    let div=document.createElement("div");
    div.innerHTML=Item.name;

  })

}





const uimakerr = (data) => {
  data.forEach((item) => {
    const element = document.createElement('div');
    element.textContent = item.name; // Example property access
    document.body.appendChild(element);
  });
};
