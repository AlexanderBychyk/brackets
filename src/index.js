module.exports = function check(str, bracketsConfig) {

  let vault = [];
  let isCorrect = true;
  if (str.length % 2 != 0) {
    isCorrect = false;
  } else {
    for (let i = 0; i < str.length; i++) {
      bracketsConfig.forEach(element => {
        if (str[i] == element[0] & str[i] == element[1]) {
          if (vault[vault.length-1] != str[i]) {
            vault.push(str[i]);
          } else vault.pop();
        } else {
          if (element[0] == str[i]) {
            vault.push(str[i]);
          } 
          else if (element[1] == str[i]) {
            if (vault[vault.length-1] == element[0]) vault.pop();
          
          }
        }
      });
    }
    isCorrect = vault.length == 0 ? true : false;
  }
  
  return isCorrect;
}
