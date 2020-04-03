const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const pkmn = require('pokemon');
const capitalize = require('capitalize');
const url_check = require('url-exists');
const Pokedex = require('pokedex.js');
const pokedex = new Pokedex('en');

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
					validate: pokemon => pkmn.all().includes(capitalize(pokemon))
				},
				{
					key: 'shiny',
					prompt: 'hello',
					type: 'string',
					default: 'normal',
					validate: shiny => shiny == 'shiny'
				}
			]
			
		});
	}
    run(message, { pokemon }, { shiny }) {
		let CPokemon = capitalize(pokemon);
		let sprite = shiny ? `https://img.pokemondb.net/sprites/black-white/anim/shiny/${pokemon.toLowerCase()}.gif` : 
							 `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.toLowerCase()}.gif`
		let pdx = JSON.parse(pokedex.name(CPokemon).get())[0]
		console.log(pdx);
		console.log(pdx.name);
		console.log(pokemon);
		url_check(sprite, function(err, exists) {
			if (exists) {
				const PkmnEmbed = new Discord.MessageEmbed()
				.setTitle(CPokemon)
				.setImage(sprite)
				.addField("**Pokedex ID**", pkmn.getId(CPokemon), true)
				.addField("**Type**", pdx.type, true)
				.addField("**Generation**", pdx.generation, true);
				return message.say(PkmnEmbed);
			} 
			if (err)
				return message.say("We couldn't find your pokemon !");
		})
	}
};
