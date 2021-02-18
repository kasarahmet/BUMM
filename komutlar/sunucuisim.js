const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let antikor = args.slice(0).join(' ');
  
  if(!antikor) return message.channel.send('Lütfen Bir Sunucu İsmi Belirt!')
  
  
  message.guild.setName(antikor)
  message.react('😈')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["sunucuisim"], 
  permLevel: 0
};

exports.help = {
  name: 'sunucu-ismi',
  description: 'taslak', 
  usage: 'sunucu-ismi'
};
