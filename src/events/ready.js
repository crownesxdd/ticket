import Discord from "discord.js"

export default (Bot) => {
  Bot.on("ready", () => {
    Bot.user.setActivity({ name: `🔮 iqo was here.`, type: Discord.ActivityType.Streaming, url: "https://www.twitch.tv/luixsa_"}, 10000);
  });
};