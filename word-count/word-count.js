export const countWords = (phrase) => {
  const words = {};
  phrase.trim().toLowerCase().split(/[\s,]+/g).map(word => {
    word = word.replace(/^'+|[^a-z0-9']|'+$/g,'');
    if (word) words[word] ? words[word]++ : words[word]=1;
  });
  return words;
};
