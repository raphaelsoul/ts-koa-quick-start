/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import * as Koa from "koa"
import {getLogger} from "log4js"
import * as session from "koa-generic-session"
import * as bodyParser from "koa-bodyparser"
import logging from "../middlewares/logging"

export const isDev = process.env.NODE_ENV === "development";

// 0x01 initialize Application and logger
export const app = new Koa();
export const logger = getLogger("http");
logger.level = isDev ? "debug" : "info";


// 0x02 session support
app.keys = ["keys", "key"]; // make it in configurable
// example for redis store
// import * as redisStore from "koa-redis"
app.use(session({
    key: "PHPSESSIONID",
    // unment if using redis session Store
    // store: redisStore({
    //     url: process.env.REDIS_URL || "redis://127.0.0.1:6379/?db=10"
    // })
}));


// 0x03 body parser
app.use(bodyParser());


// 0x04 logging
app.use(logging);

// 0x05 register all routers
// import {baseRouter} from "../routers"
// app.use(baseRouter.routes())
// app.use(baseRouter.allowedMethods())

// print all router rules
// console.log(baseRouter.stack.map(i => i.path))

// 0x06 error handle
// const errorHandler = require("koa-error")
// app.use(errorHandler())
app.on("error", e => {
    logger.error(e)
});

// 0x07 static serving
// static serving for development
// import * as serve from "koa-static"
// if (isDev) {
//     app.use(serve("./public"))
// }

// 0x08 template engine by pug(jade) need "consolidate"
// import * as path from "path"
// import * as views from "koa-views"
// app.use(views(path.resolve(__dirname, "../../views"), {
//     extension: "pug",
//     map: {
//         pug: "pug",
//         html: "lodash"
//     }
// }))

// 0x09 cors
// import * as cors from "@koa/cors"
// app.use(cors({
//     origin: "*",
//     allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "UPDATE"],
//     exposeHeaders: ["*"],
//     credentials: true
// }))

// 0x10 csrf
// import * as Csrf from "koa-csrf"
// app.use(new Csrf()) // or bind it on some router to avoid csrf globally