require('dotenv').config();

module.exports = {
    config: {
        name: 'craiglet',
        alias: []
    },
    run: async (bot, message, args, ops) => {
        
        let channel = message.guild.channels.find("name", 'craiglet');

        message.delete();

        if (message.channel != channel){
            return message.channel.send('pepega');
        }
        
        function interval() { 
            setInterval(function () {
                message.channel.send('<@&576037298253070336>');
            }, 1 * 10000);
        }

        interval()
    }
}