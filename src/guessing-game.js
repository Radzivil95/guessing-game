class GuessingGame {
    constructor() {}

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
        return this.guessNum = Math.round((this.max + this.min) / 2);
    }

    lower() {
        return this.max = this.guessNum;
    }

    greater() {
        return this.min = this.guessNum;
    }
}

module.exports = GuessingGame;
