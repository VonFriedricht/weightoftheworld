import { Message } from "discord.js";
import { Command } from "../Command";
import { CommitGuide, get_commitresponse } from "../CommitGuide";

export async function commits(
  bot: CommitGuide,
  message: Message,
  args: string
) {
  message.channel.send(`Current Day: ${bot.day}`);
  message.channel.send(await get_commitresponse(bot, args));
}

module.exports = new Command("commits", commits);
