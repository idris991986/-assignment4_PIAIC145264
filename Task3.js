var password = prompt("Please enter your password");
var firstChar = password.charAt(0);
if (/[0-9]/.test(password) == /[a-z]/.test(password) && /[0-9]/.test(firstChar) === false && password.length >= 8){
    document.write("Its a valid password");
}else{
    document.write("Please enter a valid password. For Character codes of a-z, A-Z & 0-9");
}