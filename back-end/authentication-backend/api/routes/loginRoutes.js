module.exports = (aprsp) => {
    const loginController = require('../controllers/loginController')

    app.route('/').get(loginController.gethome)

    app.route('/api/users').get(loginController.getuser).post(loginController.postuser);

    app.route('/api/login').post(loginController.postlogin);

    app.route('/chatroom/:room').get(loginController.getroom);
}