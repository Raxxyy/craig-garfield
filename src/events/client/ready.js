module.exports = async (bot, message) => {

    console.log(`${bot.user.username} is currently online!\n`);
    
    Pres = [
        zimbabwe = {
            status: 'idle',
            game: {
                name: 'Overtaking Zimbabwe',
                type: 'STREAMING',
                url: 'http://twitch.tv/nigger'
            }
        },
        
        torture = {
            status: 'idle',
            game: {
                name: 'Nigger Disposal Simulator',
                type: 'STREAMING',
                url: 'http://twitch.tv/nigger'
            }
        },
        
        cancer = {
            status: 'idle',
            game: {
                name: 'Obama you msut die',
                type: 'STREAMING',
                url: 'http://twitch.tv/nigger'
            }
        }
    ]

    setInterval(() => {
        const activity = Math.floor(Math.random() * (Pres.length - 1) + 1);
        bot.user.setPresence(Pres[activity]);
    }, 10000);   
} 
