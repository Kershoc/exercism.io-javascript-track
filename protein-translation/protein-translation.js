export const translate = (input = '') => {
  let proteins = [];
  for (let i = 0; i < input.length; i += 3) {
    let codon = input.substr(i, 3);
    
    if (!codonRNA.hasOwnProperty(codon)) throw new Error("Invalid codon");
    if (codonRNA[codon] == "STOP") break;
    
    proteins.push(codonRNA[codon]);
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
