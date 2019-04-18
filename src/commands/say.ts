import { Command } from "../Command";
import { CommitGuide } from "../CommitGuide";
import { Message } from "discord.js";

function say(bot: CommitGuide, message: Message, args: string): void {
  message.channel.send(args);
}

function sayd(bot: CommitGuide, message: Message, args: string): void {
  message.channel.send(args);
  message.delete();
}

module.exports = [new Command("say", say), new Command("sayd", sayd)];
