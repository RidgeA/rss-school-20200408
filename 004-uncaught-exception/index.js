console.log('Working');

setInterval(() => {
  console.log('Still working...');
}, 1000);

setTimeout(() => {
  throw new Error('Oops!');
}, 1500);

// const globalState = {};

process.on('uncaughtException', (error, origin) => {
  console.error(`captured error: ${error.message}`);
  // fs.writeFileSync...
  // process.exit(1);
});

/**
 * Since Node v13.7
 */
process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.error(`captured error: ${error.message}`);
});

