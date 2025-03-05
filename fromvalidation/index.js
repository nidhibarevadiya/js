let arr = []

const errordetails = (id, msg) => {

    let error = document.createElement("p");
    error.innerHTML = msg;
    document.getElementById(id).append(error);
    // error.innerHTML = " "; 
};
const handledelet = (index) => {
    arr.splice(index, 1);
    uimaker();
};

function alldelet() {
    arr = [];
    uimaker();
}
const uimaker = () => {
    document.getElementById("tablebody").innerHTML = "";
    arr.map((student1, i) => {


        let td1 = document.createElement("td");
        td1.innerHTML = student1.name;

        let td2 = document.createElement("td");
        td2.innerHTML = student1.number;

        let td3 = document.createElement("td");
        td3.innerHTML = student1.email;

        let img = document.createElement("img");
        img.src = student1.image;

        let td4 = document.createElement("td");
        td4.append(img);

        let td5 = document.createElement("td");
        td5.innerHTML = student1.course;

        let td6 = document.createElement("td");
        td6.innerHTML = student1.fee;

        let but = document.createElement("button");
        but.innerHTML = "button"
        but.addEventListener("click", () => handledelet(i))
        let td7 = document.createElement("td");
        td7.append(but);

        let tr = document.createElement("tr");
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("tablebody").append(tr);


    });
};

const handlesubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let image = document.getElementById("img").value;
    let course = document.getElementById("course").value
    let fee = document.getElementById("fee").value;

    if (name.length < 2) {
        errordetails("name-box", "please enter a valid name")
        return;
    }

    if (number.length < 10 || number.length >10) {
        errordetails("number-box", "please enter a valid number")
        return;
    }

    if (email.length < 2) {
        errordetails("email-box", "please enter a valid email")
            return;
    }

    if (image.length == 0) {
        errordetails("img-box", "please enter a valid image")
        return;
    }

    if (course.length < 2) {
        errordetails("course-box", "please enter a valid course")
        return;
    }

    if (fee.length < 3) {
        errordetails("fee-box", "please enter a valid fee")
        return;
    }



    let student = {
        name: name,
        number: number,
        email: email,
        image: image,
        course: course,
        fee: fee
    };


    // console.log(student);
    arr.push(student);

    // console.log(arr);

    uimaker();

};



document.getElementById("student").addEventListener("submit", handlesubmit);