'use strict';

const chalk = require(`chalk`);

const textMessage = `

  This utility runs http server and generates file with mock data.

    Guide:

      server <command>;

    Commands:

      --version               prints app version
      --help                  prints this message
      --generate <count>      creates file mock.json with mock data
`;

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.cyan(textMessage));
  },
};
