const colors = require(`colors/safe`);
const packageVersion = require(`../package.json`).version;

let packageVersionArray = packageVersion.split(`.`);
const majorVersion = colors.red(packageVersionArray[0]);
const minorVersion = colors.green(packageVersionArray[1]);
const patchVersion = colors.blue(packageVersionArray[2]);

module.exports = {
  name: `version`,
  description: `печатает версию приложения`,
  execute() {
    console.log(`v${majorVersion}.${minorVersion}.${patchVersion}`);
  }
};
