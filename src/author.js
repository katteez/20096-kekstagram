const packageInfo = require(`../package.json`);

module.exports = {
  name: `author`,
  description: `печатает имя автора`,
  execute() {
    console.log(packageInfo.author);
  }
};
