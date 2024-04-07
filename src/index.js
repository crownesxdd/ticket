import { Client, GatewayIntentBits } from "discord.js";
const Bot = (global.bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
}));

import Utils from "./utils/utils.js";
import config from "./config.js";

Utils.event(Bot);
Utils.login(Bot);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[DİKKAT] Kırmızı Alarm!, Şurada kritik bir hata var:", promise, " Açıklama: ", reason.message);
});

import { joinVoiceChannel } from '@discordjs/voice';
const botungirecegises = config.VOICE_CHANNEL
const sunucid = config.GUILD_ID
Bot.on('ready', () => { 
joinVoiceChannel({
channelId: botungirecegises,
guildId: sunucid,       
adapterCreator: Bot.guilds.cache.get(sunucid).voiceAdapterCreator
    });
});