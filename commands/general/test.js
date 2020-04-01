const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'test',
			aliases: ['test'],
			group: 'general',
			memberName: 'test',
			description: 'Replies with a pong',
		});
	}
    run(message) {
        return message.say(":ping_pong:");
    }
};
