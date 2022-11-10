const db = require('../models/userModel');
/**
 * DOCU: The class Users loads the specific view page.
 */

class UserController {
    /**
     * DOCU: Loads the index page.
     */

    index(req, res) {
        res.header( "Access-Control-Allow-Origin" );

        const users = db.getUsers();
        
        users.then((result) => {
            console.log(result);
            res.send(result);
        });
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new UserController();