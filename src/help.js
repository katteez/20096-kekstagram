const os = require(`os`);
const colors = require(`colors/safe`);

module.exports = {
  name: `help`,
  description: `печатает этот текст`,
  execute(commands, unknownCommand) {
    let availableCommands = ``;

    Object.keys(commands).forEach((cmd) => {
      availableCommands += `${colors.gray(cmd)} —  ${colors.green(commands[cmd].description)}${os.EOL}`;
    });

    if (unknownCommand) {
      console.error(`Неизвестная команда: ${colors.red(unknownCommand)}`);
    }

    console.log(`Доступные команды:${os.EOL}${availableCommands}`);
  }
};
