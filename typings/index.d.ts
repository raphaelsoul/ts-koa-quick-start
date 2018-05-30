/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

// typing your untyped js modules here
// example : declare module "foobar"
declare module "@koa/cors" {
    import * as Koa from "koa";
    namespace cors {
        interface Options {
            origin?: string | ((ctx: Koa.Context) => boolean | string);
            exposeHeaders?: string[];
            maxAge?: number;
            credentials?: boolean;
            allowMethods?: string[];
            allowHeaders?: string[];
        }
    }

    function cors(options?: cors.Options): Koa.Middleware;

    export = cors;
}