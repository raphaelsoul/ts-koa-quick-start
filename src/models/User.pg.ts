/*
 * Copyright (c) 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import * as sequelize from "sequelize";

const COLUMNS = {
    // id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    uuid: {type: sequelize.UUID, defaultValue: sequelize.UUIDV4, primaryKey: true, unique: true},
    username: {type: sequelize.STRING, unique: true, required: true},
    password: {type: sequelize.STRING, required: true},
    password_hashed: {type: sequelize.STRING},
    email: {type: sequelize.STRING, unique: true},
    roles: {type: sequelize.JSONB, defaultValue: []},
    permissions: {type: sequelize.JSONB, defaultValue: []},
    points: {type: sequelize.INTEGER, defaultValue: 0},
    created_at: {type: sequelize.DATE},
    updated_at: {type: sequelize.DATE},
    deleted_at: {type: sequelize.DATE},
};

const OPTIONS = {
    timestamp: true,
    paranoid: true,
    underscored: true,
    tableName: "common_users",
    version: true,
};

export interface IUserAttributes {
    // id?: number,
    uuid?: string;
    username: string;
    password: string;
    password_hashed?: string;
    email?: string;
    roles?: ENUM_ROLES[];
    permissions?: ENUM_PERMISSIONS[];
    points?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export interface IUserMethods {
    // declare association methods and properties here
    someMethodHere(): void;
}

export enum ENUM_ROLES {
    ADMIN = "admin",
    USER = "user",
}

export enum ENUM_PERMISSIONS {

}

export type UserInstance = sequelize.Instance<IUserAttributes> & IUserAttributes & IUserMethods;

// export a define function rather than a defined model to avoid association problem
export default function(db: sequelize.Sequelize) {
    return db.define<UserInstance, IUserAttributes>("User", COLUMNS, OPTIONS);
}
