const os = require(`os`);
require(`colors`);

module.exports = {
  name: `help`,
  description: `печатает этот текст`,
  execute(commands, unknownCommand) {
    let availableCommands = ``;

    Object.keys(commands).forEach((cmd) => {
      availableCommands += `${cmd.gray} — ${commands[cmd].description.green}${os.EOL}`;
    });

    if (unknownCommand) {
      console.error(`Неизвестная команда: ${unknownCommand.red}`);
    }

    console.log(`Доступные команды:${os.EOL}${availableCommands}`);
  }
};
