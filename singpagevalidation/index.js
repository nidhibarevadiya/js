
const getvalue = (id) => {
    return document.getElementById(id).value;
}


const handeluserinfo = (e) => {
    e.preventDefault();
    let name = getvalue("name");
    let email = getvalue("email");
    let password = getvalue("password");
    let number = getvalue("number");

  let userregex=  /^[a-zA-Z ]{2,30}$/;
  let emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let numberregex = /^(0|91)?[6-9][0-9]{9}$/;

  if(userregex.test("name")){
    document.getElementById("name").setAttribute("class","passed")
  }
  else{
    document.getElementById("name").setAttribute("class","err")
  }
};

document.getElementById("userinfo").addEventListener("submit", handeluserinfo);