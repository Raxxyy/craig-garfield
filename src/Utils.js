const { RichEmbed } = require('discord.js');


module.exports.error = {
    noPerms: (message, perm) => {  
        const embed = new RichEmbed();
        embed.setAuthor(message.author.username, message.author.displayAvatarURL);
        embed.setTitle('ERROR: NO PERMS');
        embed.addField('Insufficient permissions', perm);
    
        message.channel.send(embed).then(m => m.delete(6000));
    },
    notOwner: (message, ops) => {

    }

}

module.exports.warning = {
    
}
