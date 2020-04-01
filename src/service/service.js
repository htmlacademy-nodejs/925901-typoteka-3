'use strict';

const {ExitCode, USER_ARGV_INDEX} = require(`../constants.js`);
const {CLI} = require(`./cli`);

const DEFAULT_COMMAND = `--help`;

const [userCommand, ...commandArgs] = process.argv.slice(USER_ARGV_INDEX);

if (!userCommand) {
  runDefaultCommand();
}

if (!CLI[userCommand]) {
  runDefaultCommand();
}

CLI[userCommand].run(commandArgs);

function runDefaultCommand() {
  CLI[DEFAULT_COMMAND].run();
  process.exit(ExitCode.SUCCESS);
}
