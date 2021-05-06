// Built for speed when running optional test using all names.

// Randomly choosing names and keeping track of used names
// would take longer the more names that were used.

// Creating all possible names then choosing a name at random was better, 
// but still suffered horrible performance due to splicing.

// Final solution builds all possible names then shuffles them.
// Fast performance as we can just pop names off the end of the stack

// ['A',...,'Z'] Alphabet as array
const ALPHABET = [...Array(26).keys()].map((cnum) => String.fromCharCode(cnum + "A".charCodeAt()));
// ['000',...,'999'] All Suffixes as array
const SUFFIXES = [...Array(1000).keys()].map(i => `${i}`.padStart(3, 0));

export class Robot {
    // Merge two alphabet arrays to form prefixes ['AA',...,'ZZ'] 
    static PossibleNames = ALPHABET.flatMap(begin => ALPHABET.map(letter => begin + letter))
        // Merge prefixes with suffixes creates all possible names ['AA000',...,'ZZ999']
        .flatMap(prefix => SUFFIXES.map(suffix => prefix + suffix));

    // Shuffle all possible names into AvailableNames
    static releaseNames = () => Robot.AvailableNames = [...Robot.PossibleNames].reduce((out, _, first) => {
        const second = Math.floor(Math.random() * first);
        [out[first], out[second]] = [out[second], out[first]];
        return out;
    }, [...Robot.PossibleNames]);

    // ensure AvailableNames is filled for first robot.
    static AvailableNames = Robot.releaseNames();

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
