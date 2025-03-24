const getvalue = (id) => {
    return document.getElementById(id).value
}

let NEWS=JSON.parse(localStorage.getItem("newss")) || [];
const handelsubmit = (e) => {
    e.preventDefault();

    let news = {
        tital: getvalue("title"),
        Image: getvalue("image"),
        contect: getvalue("contect"),
        catagery: getvalue("catagery")

    }

        NEWS.push(news)
        // console.log(NEWS)
        // uimaker(NEWS);
        localStorage.setItem("newss",JSON.stringify(NEWS))


}




document.getElementById("newsform").addEventListener("submit", handelsubmit)