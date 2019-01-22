const fs = require('fs');
const crypto = require("crypto");

const UID = crypto.randomBytes(6)
    .toString("hex");

const removeUID = data => data.replace(/dist.*?\//, 'dist/');
const appendUID = data => data.replace('dist', `dist-${UID}`);

if (fs.existsSync('./dist')) {
    fs.renameSync('./dist', `./dist-${UID}`);

    fs.readdirSync('./modules')
        .forEach((file, i) => {
            fs.readFile(('./modules/' + file), 'utf-8', (_, data) => {
                fs.writeFileSync(('./modules/' + file), appendUID(removeUID(data)));
            })
        });
} else {
    console.error("\x1b[31m", "\nERROR: There is no ./dist directory! Please rebuild Iris ('yarn build').\n");
}