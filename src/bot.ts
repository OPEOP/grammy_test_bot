import { Bot } from "grammy";

if (process.env.BOT_TOKEN == null) throw new Error("BOT_TOKEN is missing.");
const bot = new Bot(process.env.BOT_TOKEN);

bot.command(
  "start",
  (ctx) => ctx.reply("I'm running on Heroku using long polling!"),
);

bot.start();