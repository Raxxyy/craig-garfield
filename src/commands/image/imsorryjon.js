const { RichEmbed } = require('discord.js');
const snekfetch = require('snekfetch');

module.exports = {
    config: {
        name: 'imsorryjon',
        alias: []
    },
    run: async (bot, message, args) => {

        try {
            const { body } = await snekfetch
            .get('https://www.reddit.com/r/imsorryjon.json?sort=top&t=week')
            .query({ limit: 800 });

            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);

            if (!allowed.length) return message.channel.send('Im sorry jon but i cant torture you for now..');

            const randomnumber = Math.floor(Math.random() * allowed.length);
            
            const embed = new RichEmbed();
            embed.setColor('D68717');
            embed.setImage(allowed[randomnumber].data.url);

            message.channel.send(embed);
        } catch (err) {
            return console.log(err);
        }
    }
}