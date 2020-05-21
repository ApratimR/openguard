const datastore = require("nedb")
const express = require("express")
const app = express()

//locating database
const user_db =new datastore("database/user.db")
const password_db = new datastore("database/password.db")

//loading database
user_db.loadDatabase()
password_db.loadDatabase()

//Universal CSS
app.use("/public/main.css",express.static(__dirname+"/public/main.css"))


//URL entery point
app.get("/",function(request,response){
    response.sendFile(__dirname+"/public/index.html")
})


//listning port
app.listen(3000)