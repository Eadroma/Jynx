const { Command } = require('discord.js-commando');

module.exports = class TestCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'tests',
			aliases: ['tests'],
			group: 'general',
			memberName: 'tests',
			description: 'Replies with a pong',
		});
	}
    run(message) {
        return message.say(":ping_pong:");
    }
};
