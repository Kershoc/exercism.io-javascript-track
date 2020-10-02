export const largestProduct = (input, size) => {
  if (size < 0) throw new Error('Span must be greater than zero');
  if (size === 0) return 1;
  if (input.length < size) throw new Error('Span must be smaller than string length');
  if (/\D/.test(input)) throw new Error('Digits input must only contain digits');

  let result = 0;
  for (let i=0; i<=input.length-size;i++){
    const product = [...input].slice(i,i+size).reduce((a,b)=>a*b,1);
    result = (product > result) ? product : result;
  }
  return result;
};
