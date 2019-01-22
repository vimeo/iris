const fs = require('fs');
const crypto = require("crypto");

const UID = crypto.randomBytes(6)
    .toString("hex");

const appendUID = data => data
    .split('-')[0]
    .replace('dist', `dist-${UID}`);

if (fs.existsSync('./dist')) {
    fs.renameSync('./dist', `./dist-${UID}`);

    fs.readdirSync('./modules')
        .forEach(file => {
            fs.readFile(('./modules/' + file), 'utf-8', (_, data) =>
                fs.writeFileSync(('./modules/' + file), appendUID(data)));
        });
} else {
    console.error("\x1b[31m", "\nThere is no ./dist directory! Please rebuild Iris ('yarn build').\n");
}
