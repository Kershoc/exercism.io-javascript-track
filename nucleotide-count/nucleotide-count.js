export class NucleotideCounts {
  static parse(strand) {
    let counts = {
      adenine: 0,
      cytosine: 0,
      guanine: 0,
      thymine: 0
    };
    [...strand].map((nucleotide)=>{
      switch(nucleotide) {
        case 'A':
          counts.adenine++;
          break;
        case 'C':
          counts.cytosine++;
          break;
        case 'G':
          counts.guanine++;
          break;
        case 'T':
          counts.thymine++;
          break;
        default:
          throw new Error('Invalid nucleotide in strand');
      }
    });
    return Object.values(counts).join(' ');
  }
}
