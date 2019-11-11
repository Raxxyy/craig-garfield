const { error } = require('../../Utils');
const talkedRecently = new Set();

module.exports = {
    config: {
        name: 'setavatar',
        alias: []
    },
    run: async (bot, message, args, ops) => {

        IDs = [
            ops.OwnerID,
            '257243318969303041',
            '358516466267586560',
            '421811254185689089',
            '200684310901030912',
            '307526296852758529'
        ];

        try {

            if (talkedRecently.has(message.author.id)) {

                message.channel.send(`Command is on cooldown - ${message.author}`);
                
            } else {
    
                if (message.author.id != IDs[0 || 1 || 2 || 3 || 4 || 5]) return error.notRightID(message);
    
                let avatarURL = args[0];

                bot.user.setAvatar(`${avatarURL}`).then(message.channel.send('Done!'));
    
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
