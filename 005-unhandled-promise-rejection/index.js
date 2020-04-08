console.log('Working');

setInterval(() => {
  console.log('Still working...');
}, 1000);

setTimeout(() => {
  Promise.reject(new Error('Oops!'))
}, 1500);

process.on('unhandledRejection', (reason, promise) => {
  console.error(`Unhandled rejection detected: ${reason.message}`);
});
