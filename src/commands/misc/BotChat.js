const api = require('some-random-api');

module.exports = {
    config: {
        name: 'chat',
        alias: []
    },
    run: async (bot, message, args) => {

        let input = `${args.join(' ')}`;
        
        if (!input) return message.channel.send('no input, jon');

        message.channel.startTyping();

        let output = await api.chat(`${input}`);

        message.channel.send(output);
        
        message.channel.stopTyping();
    }
}