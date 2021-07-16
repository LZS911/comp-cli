const ora = require('ora'); // 美化终端交互
const ProgressBar = require('progress'); // 美化终端交互
const chalk = require('chalk');
const spinner = ora();
var bar = new ProgressBar('[ :bar ]', { total: 10 });

let lastMsg = null;

export const logWithSpinner = (symbol, msg) => {
  if (!msg) {
    msg = symbol;
    symbol = chalk.green('✔');
  }
  if (lastMsg) {
    // 清除上次的spinner
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  }
  spinner.text = ' ' + msg;
  lastMsg = {
    symbol: symbol + ' ',
    text: msg,
  };
  spinner.start();
};

export const stopSpinner = persist => {
  if (lastMsg && persist !== false) {
    spinner.stopAndPersist({
      symbol: lastMsg.symbol,
      text: lastMsg.text,
    });
  } else {
    spinner.stop();
  }
  lastMsg = null;
};

export const pauseSpinner = function() {
  spinner.stop();
};

export const resumeSpinner = function() {
  spinner.start();
};
