import * as bluebird from "bluebird";
import { assert } from "chai";
import {describe} from "mocha";

global.Promise = bluebird.Promise;

describe("unitest running...", () => {
    it('should test something', () => {
        const num = 1;
        assert.equal(num, 1);
    })
});