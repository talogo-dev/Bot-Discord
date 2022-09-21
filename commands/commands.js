const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { Client } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comandos')
		.setDescription('Mostra os comandos existentes.'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Comandos')
			.setDescription(`Comandos que o **MultiBot** possui:`)
			.addFields(
				{ name:'➜ Serverinfo ', value: 'Mostra algumas informações sobre o servidor.' },
				{ name:'➜ Anuncio ', value: 'Cria um anuncio no canal especificado.' },
			);

		return interaction.reply({ embeds: [embed] });
	},
};