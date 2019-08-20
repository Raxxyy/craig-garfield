module.exports = async (bot) => {

    console.log(`${bot.user.username} is currently online!\n`);

    bot.user.setActivity('with toys', { type: 'PLAYING' } );
} 