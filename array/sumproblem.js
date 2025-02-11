function findSum()
{
    let a = document.getElementById("entervalue").value
    let arr = [ 1, 2, 3, 4,  6 ]; 
    let n = arr.length; 
    let even=0
    let odd=0

    for(let i=0; i<n ;i++){
        if(i%2 == 0){
            even+=arr[i]
        }
        else{
            odd+=arr[i]
        }

    }
    if(even>odd){
        document.getElementById("sum").innerHTML = " even"
    }
    else{
        document.getElementById("sum").innerHTML = " odd "
    }
}