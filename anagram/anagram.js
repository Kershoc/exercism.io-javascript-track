export const findAnagrams = (needle, haystack) => {
  const normalize = word => [...word.toLowerCase()].sort().join('');
  const baseline = normalize(needle);
  return haystack.filter(subject => baseline == normalize(subject) 
    && needle.toLowerCase() !== subject.toLowerCase());
}
