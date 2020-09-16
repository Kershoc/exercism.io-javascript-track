export const transform = (input) => {
  let output = {};
  for (let score in input) {
    input[score].map((letter) => {output[letter.toLowerCase()] = parseInt(score)});
  }
  return output;
};
