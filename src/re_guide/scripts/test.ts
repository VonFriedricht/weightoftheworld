import { Script } from "vnft-commandhandler"
import { Client } from "discord.js";

const test = new Script();

test.funct = (bot: Client) => {
    let vnft = bot.users.find(u=>u.id=="397063436049186818")
    console.log(vnft)
}

test.intervalTime = 60000

module.exports = test;
