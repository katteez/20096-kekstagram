const os = require(`os`);

module.exports = {
  name: `help`,
  description: `печатает этот текст`,
  execute(commands) {
    let availableCommands = ``;

    Object.keys(commands).forEach((cmd) => {
      availableCommands += `${cmd} —  ${commands[cmd].description}${os.EOL}`;
    });

    console.log(`Доступные команды:${os.EOL}${availableCommands}`);
  }
};
