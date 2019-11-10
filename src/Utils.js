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
        const embed = new RichEmbed();
        embed.setAuthor(message.author.username, message.author.displayAvatarURL);
        embed.setTitle('ERROR: NOT BOT OWMER');
        embed.addField('Not my bot owner', ops.OwnerTag);

        message.channel.send(embed).then(m => m.delete(6000));
    },

    errorMessage: (message) => {
        message.channel.send('Oopsie, an error happened!');
    },

    noSpotify: (message) => {
        message.channel.send('This user isn\'t listening to Spotify!');
    }
}

module.exports.other = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);
    
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
        
        if (!target) 
            target = message.member;
        
        return target;
    }
}
