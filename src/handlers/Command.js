const { readdirSync } = require("fs");

module.exports = (bot) => {
  
  console.log('\nNow loading commands...');

  const load = dirs => {
    
    const jsFiles = readdirSync(`./src/commands/${dirs}/`).filter(d => d.endsWith('.js'));

      for (let file of jsFiles) {

        const command = require(`../commands/${dirs}/${file}`);

        const cmd = command.config;

        const name = cmd.name;

        const alias = cmd.alias;

        bot.commands.set(name, command);

        console.log(`Loading command: '${name}'`);

        if (alias) alias.forEach(alias => bot.aliases.set(alias, name));
      };
  };
  ["image", "misc", "music"].forEach(x => load(x)); // Directories 
  console.log('\nDone loading commands!');
};
