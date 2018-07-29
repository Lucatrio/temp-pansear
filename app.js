const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log('yeet yeet potato skeet');
  client.user.setActivity('lucatrio update me', { type: 'WATCHING' })
});
client.login(process.env.TOKEN)
