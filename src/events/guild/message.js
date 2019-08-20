require('dotenv').config(); 

module.exports = async (bot, message) => { 
    
    if(message.author.bot || message.channel.type === "dm") return; 

    var ops = {
        OwnerID: process.env.OWNER
    };

    let prefix = process.env.PREFIX;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(commandfile) commandfile.run(bot, message, args, ops);
} 