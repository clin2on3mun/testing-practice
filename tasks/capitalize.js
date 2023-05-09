const capitalize = (str) => {
    let result;
   for(let i =0 ; i< str.length; i++){
    if(str[0] !== ''){
        result = str[0].toUpperCase()
    }

        result += str.slice(1)
    
   }
   return result
}

module.exports = capitalize