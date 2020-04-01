'use strict';

const chalk = require(`chalk`);
const {version} = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    console.log(chalk.cyan(version));
  },
};
