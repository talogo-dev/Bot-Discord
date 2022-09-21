const { SlashCommandBuilder, EmbedBuilder, TextInputBuilder} = require('discord.js');
const { Client } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anuncio')
		.setDescription('Criar um anuncio')
		.addChannelOption(option => option.setName('canal').setDescription('Canal no qual enviar o texto').setRequired(true))
		.addStringOption(option => option.setName('titulo').setDescription('Titulo do anuncio').setRequired(true))
		.addStringOption(option => option.setName('texto').setDescription('Texto do anuncio').setRequired(true))
		.addUserOption(option => option.setName('mencao').setDescription('Membro a mencionar'))
		.addRoleOption(option => option.setName('cargo').setDescription('Cargo a mencionar')),
		
	async execute(interaction) {

		const texto = interaction.options.getString('texto');
		const titulo = interaction.options.getString('titulo');
		const canal = interaction.options.getChannel('canal');
		const mencao = interaction.options.getMember('mencao');
		const cargo = interaction.options.getRole('cargo');

		if(mencao == null && cargo == null)
		{
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${titulo}`)
			.setDescription(`${texto}`)

			canal.send({ embeds: [embed] });
			return interaction.reply({ content: 'Anúncio enviado com sucesso!', ephemeral: true })
	

		}else if(mencao != null && cargo == null)
		{
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${titulo}`)
			.setDescription(`${texto}`)

			canal.send({ content: `${mencao}`, embeds: [embed] });
			return interaction.reply({ content: 'Anúncio enviado com sucesso!', ephemeral: true })
	
		}else if(mencao == null && cargo != null)
		{
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`${titulo}`)
			.setDescription(`${texto}`)

			canal.send({ content: `${cargo}`, embeds: [embed] });
			return interaction.reply({ content: 'Anúncio enviado com sucesso!', ephemeral: true })
		}else
		{
			return interaction.reply({ content:'Erro no comando: Nao pode mencionar os dois tipos', ephemeral: true })
		}
	},
};