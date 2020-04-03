const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const pkmn = require('pokemon');
const capitalize = require('capitalize');
const url_check = require('url-exists');

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
    run(message, { pokemon }) {
		let CPokemon = capitalize(pokemon);
		let sprite = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.toLowerCase()}.gif`
		url_check(sprite, function(err, exists) {
			if (exists) {
				const PkmnEmbed = new Discord.MessageEmbed()
				.setTitle(CPokemon)
				.setImage(sprite)
				.addField("**Pokedex ID**", pkmn.getId(CPokemon))
				return message.say(PkmnEmbed);
			} else return message.say("We couldn't find your pokemon !");
		})
	}
};
