const express = require("express");
const app = express();
const users = [{ name: "viewee", age: "33"}];
const mongoose = require('mongoose');

const { User } = require('/models/User.js');

const MONGO_URI = 'mongodb://root:password@localhost:27017/?authMechanism=DEFAULT';

const server =async() => {
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });
        //console.log(mongoose);

        // middleware를 사용하여 string을 json으로 받을 수 있도록 가공처리하는 것
        app.use(express.json())

        app.get("/user", function (req, res){
            return res.send({ users: users});
        });

        app.post("/user", function (req, res){
            //	users.push({ name: "viewee", age: 33 });
            console.log(req.body);
            users.push({ name: req.body.name, age: req.body.age });
            return res.send({ success: true });
        });

        app.listen(3000, function() {
            console.log("server listening on port 3000");
        });
    } catch(err){
        console.log(err);
    }
}

server();