const fs = require('fs');

exports.appendToDataFile = (file, content) => {
    fs.readFile(`../../data/${file}.json`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            obj = JSON.parse(data);
            obj.table.push(content);
            json = JSON.stringify(obj);
            fs.writeFile(`../../data/${file}.json`, json, 'utf8', (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Data appended to data file: ${file}`);
                }
            });
        }
    });
};

exports.createDataFile = (file) => {
    fs.writeFile(`../../data/${file}.json`, '', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Created data file: ${file}`);
        }
    });
};

exports.readDataFile = (file) => {
    parsedFile;
    fs.readFile(`../../data/${file}.json`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            obj = JSON.parse(data);
            parsedFile = obj;
        }
    });
    return parsedFile;
}