

function checkstring(str) {

let n=str.length;  

for (let i = 0; i < n; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        return true;
}

return false;
}

console.log(checkstring("appel"));