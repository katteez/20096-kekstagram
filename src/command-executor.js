const colors = require(`colors/safe`);
const versionCommand = require(`./version.js`);
const authorCommand = require(`./author.js`);
const licenseCommand = require(`./license.js`);
const descriptionCommand = require(`./description.js`);
const helpCommand = require(`./help.js`);

// Формируем объект, св-ва которого являются импортированными командами
const commands = [
  versionCommand,
  authorCommand,
  licenseCommand,
  descriptionCommand,
  helpCommand
].reduce((map, item) => {
  map[`--${item.name}`] = item;
  return map;
}, {});

const greetingMessage = `
  Привет, пользователь!
  Эта программа будет запускать сервер «Кекстаграм».
`;

module.exports = {
  name: `command executer`,
  description: `execute command`,
  execute(userCommand) {

    if (userCommand) {
      if (commands[userCommand]) {
        commands[userCommand].execute(commands);
      } else {
        helpCommand.execute(commands, userCommand);
        process.exit(1);
      }
    } else {
      console.log(colors.cyan(greetingMessage));
    }
  }
};
