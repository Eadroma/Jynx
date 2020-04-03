const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const pkmn = require('pokemon');
const capitalize = require('capitalize');

module.exports = class SearchPokemon extends Command {
	constructor(client) {
		super(client, {
			name: 'search',
			aliases: ['find'],
			group: 'pokemon',
			memberName: 'pokemon',
			description: 'Search for a given pokemon.',
			args : [
				{
					key: 'pokemon',
					prompt: 'What pokemon would you like the bot to print ?',
					type: 'string',
					//validate: pokemon => pkmn.all().includes(capitalize(pokemon))
				}
			]
			
		});
	}
    run(message, pokemon) {
		let CPokemon = pokemon.capitalize();
		// const PkmnEmbed = new Discord.MessageEmbed()
		// 	.setTitle(CPokemon)
		// 	.setImage(`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon}.gif`)
        return message.say(CPokemon);
    }
};
