const userSentence = prompt("Enter a sentence!");


function shortener(input) {
  return (input.charAt(0) + input.charAt(input.length-1)).toUpperCase();
};

function reverse(input) {
  return input.charAt(1) + input.charAt(0);
};

console.log(reverse(shortener(userSentence)));