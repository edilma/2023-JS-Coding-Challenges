function changeString(str = ""){
   return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase()+".";
   
}

const word = "hello, my NAME is Edilma";
console.log(changeString(word));
