
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
require('dotenv').config();
const client = new CommandoClient({
    commandPrefix: process.env.PREFIX,
    owner: process.env.OWNER,
    invite: process.env.INVITE
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['general', 'General commands'],
        ['pokemon', 'Pokemon commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('test');
});

client.on('error', console.error);

client.login(process.env.TOKEN);