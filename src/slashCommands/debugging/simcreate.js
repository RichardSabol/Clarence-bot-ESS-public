const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
	...new SlashCommandBuilder()
		.setName('simulatecreate')
		.setDescription('Simulate guildCreate')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.KickMembers || PermissionFlagsBits.BanMembers
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		client.emit('guildCreate', interaction.guild);
		interaction.reply({ content: 'Simulated', ephemeral: true });
	},
};
