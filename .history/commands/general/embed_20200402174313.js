const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'general',
            memberName: 'embed',
            description: 'Embeds the text you provide.',
            examples: ['embed Embeds are cool.'],
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to embed?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new Discord.MessageEmbed().setTitle('Some title');
            if (msg.author.bot) {
                embed.setColor('RANDOM');
            }
        return msg.embed(embed);
    }
};