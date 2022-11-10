const validator= require('../lib/validator/validator');
const uniq = require('../lib/universal-query/universalQuery');
const crypto = require('crypto');
const md5 = require('md5');
const xssFilter = require('xss-filters');

/**
 * DOCU: Class Database
 */

class UserModel {
    /**
     * DOCU: Get All Users from Database
     * returns a promise
     */

    async getUsers() {
        return await uniq.queryAll('SELECT * FROM users LIMIT 10;');
    }
}

/**
 * DOCU: Export Database to controllers
 */

module.exports = new UserModel();
