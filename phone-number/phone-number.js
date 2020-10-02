export const clean = (input) => {
  if (/\p{L}/ug.test(input)) throw new Error('Letters not permitted');
  if (/[^\p{Pd}\p{Ps}\p{Pe}\.\s\+0-9]/ug.test(input)) throw new Error('Punctuations not permitted');
  let cleaned = input.replace(/[^0-9]+/g,'');

  switch (cleaned.length) {
    case 11:
      if (cleaned.substr(0,1) !== '1') throw new Error('11 digits must start with 1');
      cleaned = cleaned.substr(1,cleaned.length);
    case 10:
      if (cleaned.substr(0,1) === '0') throw new Error('Area code cannot start with zero');
      if (cleaned.substr(0,1) === '1') throw new Error('Area code cannot start with one');
      if (cleaned.substr(3,1) === '0') throw new Error('Exchange code cannot start with zero');
      if (cleaned.substr(3,1) === '1') throw new Error('Exchange code cannot start with one');
      break;
    default:
      if (cleaned.length > 11) throw new Error('More than 11 digits');
      throw new Error('Incorrect number of digits');
  }
  return cleaned;
};
