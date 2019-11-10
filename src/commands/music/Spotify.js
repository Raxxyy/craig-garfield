const { RichEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'spotify',
        alias: ['sp']
    },
    run: async (bot, message, args, ops) => {

        let user = message.mentions.users.first() || message.author;

        if (user.presence.game !== null && user.presence.game.type === 2 && user.presence.game.name === 'Spotify' && user.presence.game.assets !== null) {

            let track = {
                
                trackIMG: `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`,

                trackURL: `https://open.spotify.com/track/${user.presence.game.syncID}`,

                trackName: user.presence.game.details,
        
                trackAuthor: user.presence.game.state,

                trackAlbum: user.presence.game.assets.largeText,

                Track: function() {
                    const embed = new RichEmbed();
                    embed.setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png');
                    embed.setColor(0x1ED761);
                    embed.setThumbnail(this.trackIMG);
                    embed.addField('Song Name', this.trackName, true);
                    embed.addField('Album', this.trackAlbum, true);
                    embed.addField('Author', this.trackAuthor, false);
                    embed.addField('Listen to Track', `[Click here for the track!](${this.trackURL})`, false);

                    return message.channel.send(embed);
                }
            }

            track.Track();

        } else {
            if (user == message.author) {     
                return message.channel.send('You aren\'t listening to Spotify!');
            } else {
                return message.channel.send('This user isn\'t listening to Spotify!');
            }
        }
    }
}