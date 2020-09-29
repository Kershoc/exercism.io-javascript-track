export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return this._scores.reduce((highest, val) => (val > highest) ? val : highest);
  }

  get personalTopThree() {
    return [...this._scores].sort((a, b) => b - a).slice(0, 3);
  }
}
