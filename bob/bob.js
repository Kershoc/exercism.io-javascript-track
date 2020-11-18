export const hey = (message) => {
  message = message.replace(/\s+/ug, '');

  if (message === '') {
    return "Fine. Be that way!";
  }

  if (isShouting(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShouting(message)) {
    return "Whoa, chill out!";
  }

  if (isQuestion(message)) {
    return "Sure.";
  }

  return "Whatever.";
};

const isShouting = (msg) => {
  return msg.toUpperCase() === msg && msg.match(/\p{L}/u);
}
const isQuestion = (msg) => {
  return msg.endsWith("?");
}
