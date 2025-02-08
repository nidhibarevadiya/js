function containsVowel(str) {
    let vowels = "aeiou";
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        return true;
      }
    }
  
    return false;
  }
  console.log(containsVowel("sky"));