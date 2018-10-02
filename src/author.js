require(`colors`);
const packageAuthor = require(`../package.json`).author;

module.exports = {
  name: `author`,
  description: `печатает имя автора`,
  execute() {
    console.log(packageAuthor.cyan);
  }
};
