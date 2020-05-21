const datastore = require("nedb")

//locating database
const user_db =new datastore("database/user.db")
const password_db = new datastore("database/password.db")

//loading database
user_db.loadDatabase()
password_db.loadDatabase()
