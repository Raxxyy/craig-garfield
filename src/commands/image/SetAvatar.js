const { error } = require('../../Utils');
const talkedRecently = new Set();

module.exports = {
    config: {
        name: 'setavatar',
        alias: []
    },
    run: async (bot, message, args, ops) => {

        try {

            if (talkedRecently.has(message.author.id)) {

                message.channel.send(`Command is on cooldown - ${message.author}`);
                
            } else {
    
                if (message.author.id != ops.OwnerID) return error.notOwner(message, ops.OwnerTag);
    
                let avatarURL = args[0];
    
                bot.user.setAvatar(`${avatarURL}`)
                .then(message.channel.send('Done!'));
    
                talkedRecently.add(message.author.id);
    
                setTimeout(() => {
                    talkedRecently.delete(message.author.id);
                }, 500000);
            }
        } catch (err) {
            console.log(err) && message.channel.send(error.errorMessage);
            message.channel.send('Yo nigga use an URL');
        }
    }
}