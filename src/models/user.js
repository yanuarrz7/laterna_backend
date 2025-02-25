const db = require("../helpers/db");
const { promisify } = require("util");
const execPromise = promisify(db.query).bind(db);


exports.getDataUser = () => {
    return execPromise("SELECT * FROM user");
};

exports.createDataUser = (data) => {
    return execPromise(`INSERT INTO user (email, password) VALUES ('${data.email}', '${data.password}')`);
}