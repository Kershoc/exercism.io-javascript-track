export const flatten = (input) => {
  return input.reduce((out, item)=> (Array.isArray(item)) ? [...out,...flatten(item)] : (item != null) ? [...out,item] : out, []);
};
