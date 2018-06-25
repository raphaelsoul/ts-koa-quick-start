/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import {isNumber} from "lodash";
import {getLogger} from "log4js";
import * as Sequelize from "sequelize";
import {Model} from "sequelize";
import {default as UserDefine, IUserAttributes, UserInstance} from "../models/User.pg";

export const logger = getLogger("sql");
logger.level = "debug";

export const sequelize = new Sequelize(process.env.MYSQL_URL || "postgresql://localhost:5432/database", {
    logging: (sql: string, time?: number | Model<any, any>) => {
        logger.debug(isNumber(time) ? `${time}ms` : "", sql);
    },
    pool: {max: 100, min: 10},
    benchmark: true,
    operatorsAliases: false,
    define: {
        underscored: true,
    },
});

export const User = sequelize.import<UserInstance, IUserAttributes>("/user.ts", (db) => UserDefine(db));

// associations
// User.hasMany(SomeOtherModelDefinedHere)
// SomeOtherModelDefinedHere.belongsTo(User)
