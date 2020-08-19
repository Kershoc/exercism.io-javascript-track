export const toRoman = (num) => {
  let result = '';
  for (let [arabicNumeral, romanNumeral] of NUMBERS) {
    while (num >= arabicNumeral) {
      result += romanNumeral;
      num -= arabicNumeral;
    }
  }
  return result;
};

const kvNumbers = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
 ];

 const NUMBERS = new Map(kvNumbers);
