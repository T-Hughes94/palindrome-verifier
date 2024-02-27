const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result")

checkBtn.addEventListener("click", ()=>{
    const inputValue = textInput.value ? textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
 
     // Check if the input is empty
     if (inputValue === '') {
         alert('Please input a value.');
         return;
     }
 
     // Check if the input is a palindrome
     const isPalindrome = checkPalindrome(inputValue);
 
     // Display the result in the resultDiv
     resultDiv.textContent = isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
 });