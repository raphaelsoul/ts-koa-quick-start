/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import {logger} from "../core/app"
import {Context} from "koa"

export default async (ctx: Context, next: Function) => {
    try {
        let start = Date.now();
        logger.info(`<-- ${ctx.method} ${ctx.url}`);
        await next();
        logger.info(`--> ${ctx.method} ${ctx.url} ${ctx.status} ${Date.now() - start}ms`)
    } catch (e) {
        throw e
    }
}