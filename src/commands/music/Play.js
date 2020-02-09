const ytdl = require('ytdl-core');

module.exports = {
    config: {
        name: 'play',
        alias: ['p', 'yt']
    },
    
    run: asnyc (bot, message, args, ops) => {
    
    if (!messag.member.voiceChannel) return message.channel.send('go to vc retard');
    
    if (messag.guild.me.voiceChannel) return message.channel.send('already in a channel sweetie ;)))');
    
    if (!args[0]) return message.channel.send('add a link dingus');
    
    let validate = ytdl.validateURL(args[0]);
    
    if (!validate) return message.channel.send('put a YOUTUBE link');
    
    let info = await ytdl.getInfo(args[0]);
    
    let connection = await message.member.voiceChannel.join();
    
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly', quality: '134', birate: '128000' });
                                           
    message.channel.send('playing ${info.title}');                                          
}
