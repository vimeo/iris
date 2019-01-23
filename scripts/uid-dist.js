const fs = require('fs');
const crypto = require("crypto");

const UID = crypto.randomBytes(6).toString("hex");

const removeUID = (data) => data.replace(/dist.*?\//, 'dist/');
const appendUID = (data, UID) => data.replace('dist', `dist-${UID}`);
const updateUID = (data, UID) => appendUID(removeUID(data), UID);

const updateDistDir = UID => fs.renameSync('./dist', `./dist-${UID}`);

const updateModule = (UID, file) => (_, data) =>
    fs.writeFileSync(('./modules/' + file), updateUID(data, UID));

const updateModules = UID => fs.readdirSync('./modules').forEach((file) => {
    fs.readFile(('./modules/' + file), 'utf-8', updateModule(UID, file))
});

if (fs.existsSync('./dist')) {
    console.log(UID);
    updateDistDir(UID);
    console.log(UID);
    updateModules(UID);
    console.log(UID);
} else {
    console.error(
        "\x1b[31m",
        "\nERROR: There is no ./dist directory! Please rebuild Iris ('yarn build').\n"
    );
}