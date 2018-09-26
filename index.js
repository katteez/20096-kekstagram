const userCommand = process.argv[2];
const appVersion = 'v0.0.1';
const greetingMessage = `
  Привет, пользователь!
  Эта программа будет запускать сервер «Кекстаграм».
  Автор: Екатерина Зощик.
`;

const commands = {
  '--version': {
    description: 'печатает версию приложения',
    action: function() {
      console.log(appVersion);
    }
  },
  '--help': {
    description: 'печатает этот текст',
    action: function() {
      let availableCommands = ``;

      Object.keys(commands).forEach((cmd) => {
        availableCommands += `${cmd} —  ${commands[cmd].description}\n`;
      });

      console.log(`Доступные команды:\n${availableCommands}`);
    }
  }
};

if (userCommand) {
  if (commands[userCommand]) {
    commands[userCommand].action();
  } else {
    console.error(`
      Неизвестная команда ${userCommand}.
      Чтобы прочитать правила использования приложения, наберите "--help".
    `);
    process.exit(1);
  }
} else {
  console.log(greetingMessage);
}
