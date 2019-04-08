class Block {
    constructor(timestamp, prevHash, hash, payload) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.payload = payload;
    }

    toString() {
        return `
            Block -
                Timestamp: ${this.timestamp}
                Prev Hash: ${this.prevHash.substring(0, 12)}
                Hash: ${this.hash.substring(0, 12)}
                Payload: ${this.payload}`;
    }
}


module.exports = Block;