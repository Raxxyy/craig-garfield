const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'carson',
        alias: []
    },
    run: async (bot, message, args, ops) => {

        let pages = ['carsonné', 'carsonné'];

        let pageImage = ['https://cdn.discordapp.com/attachments/551782320588193823/614227679918686219/67109686_735787340184166_7558998179926962712_n.png', 'https://cdn.discordapp.com/attachments/523129786260783104/614213317153652744/66636363_184341995905798_3401156748609271106_n.png'];

        let page = 1;

        let User = message.guild.member.id !== bot.user.id;

        const embed = new RichEmbed();
        embed.setColor(message.guild.me.displayHexColor === '#000000' ? '#ffffff' : message.guild.me.displayHexColor);
        embed.setDescription(pages[page-1]);
        embed.setImage(`${pageImage[page-1]}`);

        message.channel.send(embed).then(msg => {
            msg.react('⬅').then(r => {
                msg.react('➡');
                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅';
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡';
                const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
                backwards.on('collect', r => {
                    if (page === 1) return;
                    page--;
                    embed.setDescription(pages[page-1]);
                    embed.setImage(`${pageImage[page-1]}`);
                    msg.edit(embed);
                });
                forwards.on('collect', r => {
                    if (page === pages.length) return;
                    page++;
                    embed.setDescription(pages[page-1]);
                    embed.setImage(`${pageImage[page-1]}`);
                    msg.edit(embed);
                });
            });
        });
    }
}