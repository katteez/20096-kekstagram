require(`colors`);
const packageVersion = require(`../package.json`).version;

let packageVersionArray = packageVersion.split(`.`);
const majorVersion = packageVersionArray[0].red;
const minorVersion = packageVersionArray[1].green;
const patchVersion = packageVersionArray[2].blue;

module.exports = {
  name: `version`,
  description: `печатает версию приложения`,
  execute() {
    console.log(`v${majorVersion}.${minorVersion}.${patchVersion}`);
  }
};
