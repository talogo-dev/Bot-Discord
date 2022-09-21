const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { Client } = require('undici');
const { criador, discord, website, invite, nomeBot } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ajuda')
		.setDescription('Mostra algumas informacões sobre o bot.'),
	async execute(interaction) {

        const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Ajuda')
			.setDescription(`Algumas informações sobre o ${nomeBot}`)
			.addFields(
				{ name:'➜ Comandos', value: 'Pode vê-los pelo comando `/comandos`' },
				{ name:'➜ Developer ', value: `Quem me criou foi o ${criador}`},
                { name:'➜ Links Úteis ', value: `Discord: ${discord}\nWebSite: ${website}\nConvida-me para o teu server: ${invite}`},        
			)
            

		return interaction.reply({ embeds: [embed] });
	},
};