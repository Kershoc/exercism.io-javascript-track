const DNA2RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = (input) => {
  return [...input].map(
    (nucleotide) => (DNA2RNA[nucleotide]) ? DNA2RNA[nucleotide] : nucleotide
  ).join('');
};
