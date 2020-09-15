export const convert = (subject) => {
  let output = '';

  if (subject % 3 === 0) output += 'Pling';
  if (subject % 5 === 0) output += 'Plang';
  if (subject % 7 === 0) output += 'Plong';

  return output ? output : subject.toString();
};
