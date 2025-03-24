
let like = JSON.parse(localStorage.getItem("like")) || [];

// console.log(Products);

const Uimaker = (like) => { 
  document.getElementById("like").innerHTML = " ";
  like.map((ele, i) => {
    let title = document.createElement("p");
    title.innerHTML = ele.title

    let price = document.createElement("p");
    price.innerHTML = ele.price
    
    let img = document.createElement("img");
    img.src = ele.image1;
    // deleted btn
    let btn = document.createElement("button");
    btn.innerHTML = `Deleted Product `;
    btn.addEventListener("click", () => {
      like.splice(i, 1);
      localStorage.setItem("like", JSON.stringify(like));
      Uimaker(like)
    });
    let div = document.createElement("div");
    div.append(img, title, price, btn);
    document.getElementById("like").append(div);
  });
};

Uimaker(like);
