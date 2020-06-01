const userSentence = prompt("Enter a sentence!");


function shortener(input) {
  return (input.charAt(0) + input.charAt(input.length-1)).toUpperCase();
};

function reverse(input) {
  return input.charAt(1) + input.charAt(0);
};

function combiner(input) {
  return input+reverse(shortener(input));
};

function adder(input) {
  const x = Math.floor(input.length/2);
  return input.charAt(x)+combiner(input);
}