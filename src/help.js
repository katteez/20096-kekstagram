const os = require(`os`);

module.exports = {
  name: `help`,
  description: `печатает этот текст`,
  execute(commands, unknownCommand) {
    let availableCommands = ``;

    Object.keys(commands).forEach((cmd) => {
      availableCommands += `${cmd} —  ${commands[cmd].description}${os.EOL}`;
    });

    if (unknownCommand) {
      console.error(`Неизвестная команда ${unknownCommand}`);
    }

    console.log(`Доступные команды:${os.EOL}${availableCommands}`);
  }
};
