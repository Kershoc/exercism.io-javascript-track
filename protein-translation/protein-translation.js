export const translate = (input = '') => {
  let proteins = [];
  for (let i = 0; i < input.length; i += 3) {
    let chunk = input.substr(i, 3);
    
    if (!codonRNA.hasOwnProperty(chunk)) throw new Error("Invalid codon");
    if (codonRNA[chunk] == "STOP") break;
    
    proteins.push(codonRNA[chunk]);
  }
  return proteins;
};

const codonRNA = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
}
