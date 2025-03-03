class student{
    constructor(name, age, grid){
        this.name = name;
        this.age = age;
        this.grid = grid;
    }

    leave(){
        console.log("leave",this.name,this.age);
    }
}

class vipstudent extends student{
    constructor(name, age, grid, discount)
    {
        super(name, age, grid);
        this.discount = discount;
    }
}

let s1 = new student("nidhi", 18, 1);

let s2 = new vipstudent("yashvi", 21, 2, 0.1);