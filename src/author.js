const colors = require(`colors/safe`);
const packageAuthor = require(`../package.json`).author;

module.exports = {
  name: `author`,
  description: `печатает имя автора`,
  execute() {
    console.log(colors.cyan(packageAuthor));
  }
};
