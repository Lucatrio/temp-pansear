const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity('lucatrio update me', { type: 'WATCHING' })
});
client.login(process.env.TOKEN)
