'use strict';

const express = require('express');
const config = require('./config/');
const logger = require('./util/logger')(config);
const jsdom = require('jsdom');
const app = express();
const PORT = config.get('port');
const { JSDOM } = jsdom;

app.get('/api/get', async (req, res) => {
    const { url } = req.query;
    logger.info(`Recieved: ${url}`);
    const unescaped = unescape(url);
    let dom = await JSDOM.fromURL(url);
    let doc = dom.window.document;
    let elems = doc.querySelector('a[href*=magnet]');
    if (elems) {
        logger.info(`Will respond: ${elems.href}`);
        res.send(elems.href);
    } else {
        logger.info('No result');
        res.send('No result');
    }
});

app.listen(PORT);
logger.info(`Listenting on port ${PORT}`);