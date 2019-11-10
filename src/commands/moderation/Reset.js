const { error } = require('../../Utils');
require('dotenv').config();

module.exports = {
    config: {
        name: 'reset',
        alias: []
    },
    run: async (bot, message, args, ops) => {

        if (message.author.id != ops.OwnerID) return error.notOwner(message, ops);

        resetBot(message.channel);

        function resetBot(channel) {
            console.log('Bot resetting...')
            channel.send('Resetting...')
            .then(message => bot.destroy())
            .then(() => bot.login(process.env.DISCORD_TOKEN));
        }
    }
}


