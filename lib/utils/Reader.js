const fs = require("fs");

class Reader {
    static readerJSONFile(path) {
        const rawdata = fs.readFileSync(path);
        const visualpartnerts = JSON.parse(rawdata);
        return visualpartnerts;
    }
}

module.exports = Reader;