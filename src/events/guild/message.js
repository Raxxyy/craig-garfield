const fs = require('fs');
require('dotenv').config();

module.exports = async (bot, message) => { 

    var ops = {
        OwnerID: process.env.OWNER,
        roleColor: message.guild.me.displayHexColor === '#000000' ? '#ffffff' : message.guild.me.displayHexColor,
        OwnerTag: 'Raxxy#7027',
        errorMessage: `Hrrrrrng colonel, im trying to execute a command but im dummy thicc and the clap of my ass cheeks keeps destroying the code`
    };

    let prefix = process.env.PREFIX;

    let args = message.content.substring(prefix.length).split(/ +/g);

    let cmd = args.shift().toLowerCase();
    
    if (!message.content.startsWith(prefix)) return;

    if (cmd !== 'apply' && message.channel.type === "dm") return;
    
    if (message.author.bot) return;

    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));

    if (commandfile) commandfile.run(bot, message, args, ops);
}
