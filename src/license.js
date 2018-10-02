const colors = require(`colors/safe`);
const packageLicense = require(`../package.json`).license;

module.exports = {
  name: `license`,
  description: `печатает тип лицензии`,
  execute() {
    console.log(colors.magenta(packageLicense));
  }
};
