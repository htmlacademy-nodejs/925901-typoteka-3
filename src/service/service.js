'use strict';

const {ExitCode, USER_ARGV_INDEX} = require(`../constants.js`);
const {Cli} = require(`./cli`);

const DEFAULT_COMMAND = `--help`;

const [userCommand, ...commandArgs] = process.argv.slice(USER_ARGV_INDEX);

if (!userCommand) {
  runDefaultCommand();
}

if (!Cli[userCommand]) {
  runDefaultCommand();
}

Cli[userCommand].run(commandArgs);

function runDefaultCommand() {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}
