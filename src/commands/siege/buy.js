const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'buy',
	aliases: [''],
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (message) => {
		const embed = new MessageEmbed()
			.setColor('ORANGE')
			.setFooter({ text: `Called By: ${message.author.tag}` })
			.setTimestamp()
			.setTitle('Purchase')
			.addField(
				`While Kieran and others are not affiliated with CD Keys, we have had good experiences with CD keys, buy siege here: `,
				`https://www.cdkeys.com/tom-clancy-s-rainbow-six-siege-pc-cd-key-uplay`
			);
		message.channel.send({ embeds: [embed] });
	},
};
