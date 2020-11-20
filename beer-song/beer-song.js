export const recite = (initialBottlesCount, takeDownCount) => {
  let count = initialBottlesCount;
  let lyrics = [];
  while (takeDownCount > 0) {
    lyrics.push(`${count == 0 ? 'No more' : count} bottle${count != 1 ? 's' : ''} of beer on the wall, ${count == 0 ? 'no more' : count} bottle${count != 1 ? 's' : ''} of beer.`);
    lyrics.push(`Take ${count > 1 ? 'one' : 'it'} down and pass it around, ${--count == 0 ? 'no more' : count} bottle${count != 1 ? 's' : ''} of beer on the wall.`);
    if (count < 0) {
      count = 99;
      lyrics.pop();
      lyrics.push(`Go to the store and buy some more, ${count} bottles of beer on the wall.`);
    }
    takeDownCount--;
    if (takeDownCount > 0) lyrics.push('');
  }
  return lyrics;
};
