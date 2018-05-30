/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import * as bluebird from "bluebird"
// http service
import {app, logger} from "./core/app"
import * as http from "http"

global.Promise = bluebird.Promise;

const server = http.createServer(app.callback()).listen(3000, (e: Error) => {
    if (e) return logger.error(e.stack);
    return logger.info(`Application listing on ${(<any>server.address()).address}:${(<any>server.address()).port}`)
});
