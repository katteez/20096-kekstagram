require(`colors`);
const packageLicense = require(`../package.json`).license;

module.exports = {
  name: `license`,
  description: `печатает тип лицензии`,
  execute() {
    console.log(packageLicense.magenta);
  }
};
