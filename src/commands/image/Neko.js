const { RichEmbed } = require('discord.js'); 
const { get } = require('superagent');

module.exports = {
    config: {
        name: 'neko',
        alias: []
    },
    run: async (bot, message, args, ops) => {

        const { body } = await get('https://nekos.life/api/neko');

        const embed = new RichEmbed();
        embed.setColor(ops.roleColor);
        embed.setAuthor("i want to die", bot.user.displayAvatarURL);
        embed.setImage(body.neko);

        message.channel.send(embed);
    }
}

