'use strict';

const help = require(`./help`);
const version = require(`./version`);

const Cli = {
  [help.name]: help,
  [version.name]: version,
};

module.exports = {
  Cli,
};
