const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let antikor = args.slice(0).join(' ');
  
  if(!antikor) return message.channel.send('Lütfen Bir Resim Belirt!')
  
  
  message.guild.setIcon(antikor)
  message.react('😈')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'sunucu-pp',
  description: 'taslak', 
  usage: 'sunucu-pp'
};
