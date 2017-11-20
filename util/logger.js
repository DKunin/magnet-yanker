const bunyan = require('bunyan');
const bsyslog = require('bunyan-syslog-udp');

module.exports = config => {
    const logger = bunyan.createLogger({ name: 'magnet-yanker' });
    const udbConfig = config.get('logger');
    logger.addStream({
        type: 'raw',
        level: config.get('logger.level'),
        stream: bsyslog.createBunyanStream(udbConfig)
    });

    return logger;
};
