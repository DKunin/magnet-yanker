module.exports = {
    env: {
        doc: 'enviroment in which the app is running',
        format: ['production', 'development'],
        default: 'production',
        env: 'APP_ENV'
    },
    port: {
        doc: 'port of the app',
        format: 'port',
        default: 3739,
        env: 'PORT'
    },
    logger: {
        name: {
            doc:'',
            format: String,
            default: 'udptest',
            env: 'SYSLOG_NAME'
        },
        host: {
            doc:'',
            format: String,
            default: 'localhost',
            env: 'SYSLOG_HOST'
        },
        port: {
            doc:'port',
            format: 'port',
            default: 514,
            env: 'SYSLOG_PORT'
        },
        facility: {
            doc:'',
            format: String,
            default: 'user',
            env: 'SYSLOG_FACILITY'
        },
        level: {
            doc: 'logger level',
            format: String,
            default: 'trace',
            env: 'SYSLOG_LEVEL'
        }
    }
};
