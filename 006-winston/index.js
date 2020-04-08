const {createLogger, format, transports} = require('winston');

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.cli(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.combine(
        format.uncolorize(),
        format.json()
      )
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(
        format.uncolorize(),
        format.json()
      )
    }),
  ]
});

logger.silly('silly');
logger.debug('debug');
logger.verbose('verbose');
logger.info('info');
logger.warn('warn');
logger.error('error');

logger.log('info', 'info from log');
