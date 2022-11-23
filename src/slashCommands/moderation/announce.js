const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
const { Permissions } = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('announce')
		.setDescription('Announce a message inside of another channel')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.KickMembers || PermissionFlagsBits.BanMembers
		)
		.addStringOption((option) =>
			option
				.setName('string')
				.setDescription('string for announcement')
				.setRequired(true)
		)
		.addChannelOption((option) =>
			option
				.setName('channel')
				.setDescription('channel for announcement')
				.setRequired(true)
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const string = interaction.options.getString('string');
		const channel = interaction.options.getChannel('channel');

		if (
			!interaction.member.permissions.has(
				Permissions.FLAGS.BAN_MEMBERS || Permissions.FLAGS.ADMINISTRATOR
			)
		)
			return interaction.reply(
				"You don't have permission to use that command."
			);
		channel.send(string);
		interaction.reply('Announcement sent!');
	},
};
