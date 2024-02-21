import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6916280310:AAFtcQ7bg6iYb_TcRV1A8YKXd4QtzXL73IQ";
const webAppUrl = "https://ang-test-tg-app.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, для запуска",
    Markup.keyboard([
      Markup.button.webApp("Отправить сообщение", webAppUrl + "/feedback"),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? "empty message");
});

bot.launch();
