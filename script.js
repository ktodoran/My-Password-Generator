// Assignment code here

// Initial Prompts For Password Criteria //
function promptUser() {
    var characterAmount  = window.prompt("How many Characters would you like? Choose between 8-128");
      if (characterAmount < 8 || characterAmount > 128 || characterAmount === null){
        window.alert("You need to select between 8 and 128 characters")
      return promptUser();
    }
    console.log(characterAmount)
    
    var upperCaseLetters = window.confirm("Do you want Uppercase Letters? Yes or No?");
    console.log(upperCaseLetters)
    
    var lowerCaseLetters = window.confirm("Do you want Lowercase Letters? Yes or No?");
    console.log(lowerCaseLetters)
    
    var numbers = window.confirm("Do you want Numbers? Yes or No?");
    console.log(numbers)
    
    var symbols = window.confirm("Do you want Symbols? Yes or No?");
    console.log(symbols)
    
    if (upperCaseLetters === false && lowerCaseLetters === false && numbers === false && symbols === false){
      window.alert("You must select at least one option: Uppercase, Lowercase, Numbers, Symbols")
    return promptUser();
    }
    
    return generatePassword(characterAmount, upperCaseLetters, lowerCaseLetters, numbers, symbols);
    }
    
    function generatePassword(characterAmount, upperCaseLetters, lowerCaseLetters, numbers, symbols) {
    var defaultUppercaseLetter =''
    var defaultLowercaseLetter =''
    var defaultnumbers = ''
    var defaultsymbols = ''
    if (upperCaseLetters) {
      defaultUppercaseLetter = getRandomUpper();
    }
    if (lowerCaseLetters) {
      defaultLowercaseLetter = getRandomLower();
    }
    if (numbers) {
      defaultnumbers = getRandomNumber();
    }
    if (symbols) {
      defaultsymbols = getRandomSymbol();
    }
    var fullPassword = defaultUppercaseLetter + defaultLowercaseLetter + defaultnumbers + defaultsymbols;
    
    var totalLength = characterAmount - fullPassword.length
    for (i = 0; i < totalLength; i++) {
    
    if (lowerCaseLetters){
    fullPassword += getRandomLower();
    }
    else if (upperCaseLetters) {
      fullPassword += getRandomUpper();
    }
    else if (numbers) {
      fullPassword += getRandomNumber();
    }
    else if (symbols) {
      fullPassword += getRandomSymbol();
    }
    }
    return fullPassword;
    }
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }
    
    function getRandomSymbol() {
      var SpecialCharacters = '!@#$%^&*()_{}[]<>/?.,'
      return SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)]
    }
    
    // Write password to the #password input
    function writePassword() {
      console.log(promptUser());
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);