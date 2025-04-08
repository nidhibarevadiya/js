

const uiMaker = (data) => {
    let temp = "";
    for (let i = 0; i < data.data.length; i++) {
      temp += `<div class="box">
        <h1>
          ${data.data[i].id}
         
    
</h1>     
<h1>
          ${data.data[i].type}
         
    
</h1>     
      </div>`;
    }
  
    document.getElementById("container").innerHTML = temp;
  };
  const getData = async () => {
    try {
      let req = await fetch("https://dogapi.dog/api/v2/breeds");
      let res = await req.json();
      uiMaker(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  getData();
    