const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const pkmn = require('pokemon');

module.exports = class SearchPokemon extends Command {
	constructor(client) {
		super(client, {
			args: 'pokemon',
			name: 'search',
			aliases: ['find'],
			group: 'pokemon',
			memberName: 'pokemon',
			description: 'Which pokemon you want to search ?',
			validate : 
		});
	}
    run(message) {
        return message.say(":ping_pong:");
    }
};
