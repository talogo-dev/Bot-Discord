const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Mostra algumas informações sobre o server.'),
	async execute(interaction) {
		let afkTime = interaction.guild.afkTimeout / 60;
		let hasAfkChannel = interaction.guild.afkChannel;

		if(hasAfkChannel == null){ hasAfkChannel = "Não tem um canal definido"; }
		else{ hasAfkChannel = interaction.guild.afkChannel; }

		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Informações Sobre o Servidor')
		.addFields(
			{ name:'➜ Nome do Servidor', value: `${interaction.guild.name}` },
			{ name:'➜ Número Total de Membros ', value: `${interaction.guild.memberCount}`},
			{ name:'➜ Tempo do Servidor ', value: `${interaction.guild.createdAt}`},
			{ name:'➜ Número Total de Boosts', value: `${interaction.guild.premiumSubscriptionCount}`},
			{ name:'➜ Canal de AFK ', value: `${hasAfkChannel}`},
			{ name:'➜ Tempo de AFK ', value: `${afkTime} minutos`},
			
		)
		

		return interaction.reply({ embeds: [embed] });
	
	},
};