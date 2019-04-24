module.exports = (aprsp) => {
    //importing the login controller 
    const loginController = require('../controllers/loginController')

    /*Routing is made to the controller(logincontroller.js) when the corresponding get or post request is being made*/
    app.route('/').get(loginController.gethome)

    app.route('/api/users').get(loginController.getuser).post(loginController.postuser);

    app.route('/api/login').post(loginController.postlogin);

    app.route('/chatroom/:room').get(loginController.getroom);
}