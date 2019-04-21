import { Guide } from "../../classes/Guide";
import { Message, Client } from "discord.js";
import { Command } from "../../classes/Command";

let hello = new Command();
hello.name = "hello";
hello.funct = function(bot: Client, message: Message, args: string) {
  message.channel.send("Hi!");
};

let hewwo = new Command();
hewwo.name = "hewwo";
hewwo.funct = function(bot: Client, message: Message, args: string) {
  message.channel.send("oh please no.");
};

module.exports = [hello, hewwo];
