const ALPHABET = [...Array(26).keys()].map((cnum) => String.fromCharCode(cnum + "A".charCodeAt()));

export class Robot {
    static PossibleNames = ALPHABET.flatMap(begin => ALPHABET.map(letter => begin + letter))
        .flatMap(prefix => [...Array(1000).keys()].map(i => prefix + `${i}`.padStart(3, 0)));

    static releaseNames = () => Robot.AvailableNames = [...Robot.PossibleNames].reduce((out, _, first) => {
        const second = Math.floor(Math.random() * first);
        [out[first], out[second]] = [out[second], out[first]];
        return out;
    }, [...Robot.PossibleNames])

    static AvailableNames = Robot.releaseNames()

    constructor() {
        this.reset();
    }

    get name() {
        return this._name;
    }

    reset() {
        this._name = Robot.AvailableNames.pop();
    }
}
