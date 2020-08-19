export const steps = (input) => {
  if (input < 1) {
		throw new Error("Only positive numbers are allowed");
    }
    
	let count = 0;
	while (input !== 1) {
		if (input%2 === 0) {
			input /= 2;
		} else {
			input = 3*input + 1;
		}
		count++;
    }
    
    return count;
};
