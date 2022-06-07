function caesarCipher(str,value) {
  let finalCipher = '';
  for (let i = 0; i < str.length; i++) {
    let newLetter = str[i].charCodeAt()+ value;
    while(newLetter > 122){
      newLetter = (newLetter - 122) + 96;
    }
    finalCipher += String.fromCharCode(newLetter);
  }
  console.log(finalCipher)
  return finalCipher;
}


 // Upper Case is 65 to 90. Lower Case is 97 to 122.
module.exports = caesarCipher;