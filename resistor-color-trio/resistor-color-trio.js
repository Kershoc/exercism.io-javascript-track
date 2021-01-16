export class ResistorColorTrio {
  constructor(bands) {
    this._value = decodedValue(bands);
  }

  get label() {
    let unit = 'ohms';
    let value = this._value;
    if (value >= 1000) {
      unit = 'kiloohms';
      value = value / 1000;
    }
    return `Resistor value: ${value} ${unit}`;
  }
}

const decodedValue = ([band1, band2, band3]) => {
  return (colorCode(band1) * 10 + colorCode(band2)) * 10 ** colorCode(band3);
};

const colorCode = (color) => {
  let value = COLORS.indexOf(color);
  if (value < 0) {
    throw new Error(`invalid color ${color}`)
  }
  return value;
};

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
