export const decodedValue = ([band1, band2]) => {
  return colorCode(band1)*10 + colorCode(band2);
};

const colorCode = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
