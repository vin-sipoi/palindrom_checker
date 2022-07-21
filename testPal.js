const checkPalindrome = (string) =>{
    // length of the string 
    const len = string.length;

    // Loop through half of the string 

    for(let i = 0; i < len/2; i++){
    // check if the first and the last string are same 
    if (string[i] !== string[len - 1 - i]){
        
        return'it is not a palindrome'
    }
    }
   
    return 'it is a palindrome'
}

const string = 'aba'

const value = checkPalindrome(string)

console.log(value)