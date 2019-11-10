/**
 * @name Craig
 * @author Raxxy
 * @file index.js
 * @licence ISC
 */

if (Number(process.version.slice(1).split('.')[0]) < 12)
throw new Error('Node 12.0.0 or higher is required. Update Node on your system.',);

// Get the Client and Collection class from the 'discord.js' module.
const { Client, Collection } = require('discord.js');
require('dotenv').config(); // Use enviroment variables for the token and prefix.

// Set the bot with the Discord Client.
const bot = new Client({ disableEveryone: true });

// Set the bot.aliases and bot.cammands as the Discord Collection.
["aliases", "commands"].forEach(collection => bot[collection] = new Collection());

// Turning on the handlers.
["Command", "Event"].forEach(handler => require(`./src/handlers/${handler}`)(bot));

bot.login(process.env.DISCORD_TOKEN);
