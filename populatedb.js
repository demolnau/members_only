#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const User = require("./models/user")
const Message = require("./models/message")

const users = [];
const messages = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

const mongoDB = userArgs[0];
main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createUsers();
    await createMessages();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }

async function userCreate(index, first_name, last_name, username, password, membership){
    const user = new User({first_name: first_name, last_name: last_name, username: username, password: password, membership: membership });
    await user.save();
    users[index] = user;
    console.log(`Added User: ${user}`)
}

async function messageCreate(index, title,  text){
    const message = new Message({
        title: title,
        text: text,
    })
    await message.save()
    messages[index] = message;
    console.log(`Added message: ${message}`)
}

async function createUsers(){
    console.log("Adding Users...")
    await Promise.all([
        userCreate(0,
            "Jane",
            "Doe",
            "jane_doe",
            "password",
            "Active"
            ),
        userCreate(1,
            "John",
            "Smith",
            "john_smith",
            "passie",
            "Inactive"
            ),
    ]);
}
async function createMessages(){
    console.log(`Adding messages...`);
    await Promise.all([
        messageCreate(0,
            "Stinker",
            "I just walked through a fart"
            ),
        messageCreate(1,
            "Smelly Dog",
            "How often are you supposted to wash a dog?"
            ),
    ]);
}