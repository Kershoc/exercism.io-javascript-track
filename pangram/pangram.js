const ALPHABET_LENGTH = 26;

export const isPangram = (sentence) => {
  return ALPHABET_LENGTH == new Set(sentence.toLowerCase().match(/[a-z]/g)).size
};
