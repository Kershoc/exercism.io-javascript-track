export const parse = (phrase) => {
  return phrase.split(/[\s\-]+/u).reduce((acronym, word) => {
    return acronym += word.match(/\p{L}/u)[0];
  }, '').toUpperCase();
};
