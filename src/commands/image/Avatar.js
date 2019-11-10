const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'avatar',
        alias: ['ava']
    },
    run: async (bot, message, args, ops) => {
        
        let msg = await message.channel.send("Generating avatar...");
        
        let target = message.mentions.users.first() || message.author;

        let jpeg = target.displayAvatarURL.replace('png', 'jpeg');

        let webp = target.displayAvatarURL.replace('png', 'webp');

        const embed = new RichEmbed();
        embed.setAuthor(`${target.tag}'s avatar`, target.displayAvatarURL);
        embed.setDescription(`[png](${target.displayAvatarURL}) | [jpeg](${jpeg}) | [webp](${webp})`);
        embed.setColor(ops.roleColor);
        embed.setImage(target.displayAvatarURL);
        
        return message.channel.send(embed).catch(console.error) && msg.delete();
    }
}