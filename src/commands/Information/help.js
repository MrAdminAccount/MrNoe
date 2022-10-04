const {
	EmbedBuilder,
	ChatInputCommandInteraction,
	ActionRowBuilder,
	SelectMenuBuilder,
	ComponentType,
} = require("discord.js");
const {
	readdirSync
} = require("fs");
let color = "#2F3136";
const prefix = `/`
module.exports = {
	data: {
	name: "help",
	description: "Shows All Commands!",
},
	 /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
	  run: async (client, interaction) => {

		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder({
				placeholder: 'Click me to select a category',
				customId: 'main',
				options: [{
						label: 'Animal commands ',
						value: "Option 1",
						emoji: '<:hmm:870269898289479721>',
					},
					{
						label: 'Fun commands ',
						value: "Option 2",
						emoji: '<a:fun:896046101503807549>',
					},
					{
						label: 'Information commands ',
						value: "Option 3",
						emoji: '<a:information:906110361051234315>',
					},
					{
						label: 'Other commands ',
						value: "Option 4",
						emoji: '<:NightShadesmug:900784389238165574>',
					},
					{
						label: 'Nsfw commands',
						value: "Option 5",
						emoji: '<:NSFW_4k:917803547117121586>'
					},

				]
			})


		)


		const emo = {

			Fun: "<a:fun:896046101503807549>",
			Other: "<:NightShadesmug:900784389238165574>",
			Information: "<a:information:906110361051234315>",
			Animals: "<:hmm:870269898289479721>",
			Nsfw: "<:Night_nsfw:900786948254347286>"
		}

		let categories = [];

		let ccate = [];
		readdirSync("./src/commands/").forEach((dir) => {

			const name = `${emo[dir]} - ${dir}`;

			let nome = dir;

			let cats = new Object();


			cats = {
				name: name,
				value: `_ _`,
				inline: true
			}


			categories.push(cats);
			ccate.push(nome);
		});

		const embed = new EmbedBuilder()
			.setTitle(`Bot Commands`, `https://mradminaccount.tk/`)
			.setImage(` https://c.tenor.com/CzjdfcxYTNAAAAAd/neon-city.gif`)
			.setDescription("yo, i'm still in test so..")
			.addFields(categories)
			.setTimestamp()
			.setColor(color)

		let help = await interaction.reply({
			fetchReply: true,
			embeds: [embed],
			components: [row]
		});
		const filter = async interaction => {

			if (interaction.user.id !== interaction.user.id) {
				interaction.reply({
					content: "<:angryEyes:915810713103138886> Don't help other people to select the menu smh",
					ephemeral: true
				});
				return false;
			};
			return true;
		}

		const collector = help.createMessageComponentCollector({
			filter,
			componentType: ComponentType.SelectMenu

		})

		collector.on('collect', async (menu) => {
			menu.deferUpdate();

			if (menu.values[0] === 'Option 1') {
				const fireisgay = new EmbedBuilder()
					.setThumbnail(`https://cdn.discordapp.com/emojis/935767206367731712.gif?size=44&quality=lossless`)
					.setColor("#2F3136")
					.setTitle(`**__Animal Commands__**`)
					.addFields({
						name: `${prefix}Bird`,
						value: "Sends a picture of a bird"
					})
					.addFields({
						name: `${prefix}cat`,
						value: "Sends a picture of a cat"
					})
					.addFields({
						name: `${prefix}catfact`,
						value: "Sends a fact"
					})
					.addFields({
						name: `${prefix}dog`,
						value: "Sends a picture of a dog"
					})
					.addFields({
						name: `${prefix}dogfact`,
						value: "Sends a fact"
					})
					.addFields({
						name: `${prefix}panda`,
						value: "Sends a picture of a panda"
					})
					await 	help.edit({
					embeds: [fireisgay]
				})
			} else if (menu.values[0] === 'Option 2') {
				const fireisgay = new EmbedBuilder()
					.setThumbnail(`https://cdn.discordapp.com/emojis/900785173136805909.webp?size=96&quality=lossless`)
					.setColor("#2F3136")
					.setTitle(`**__Fun Commands__**`)
					.addFields({
						name: `${prefix}8ball`,
						value: "Tells you the future "
					})
					.addFields({
						name: `${prefix}hack`,
						value: "Hack someone"
					})
					.addFields({
						name: `${prefix}kill`,
						value: "Kills someone 👀"
					})
					.addFields({
						name: `${prefix}advice`,
						value: "Get some advice"
					})
					.addFields({
						name: `${prefix}meme`,
						value: `Send's you a *funny* meme, lul`
					})
					.addFields({
						name: `${prefix}ship`,
						value: `Ship someone`
					})
					.addFields({
						name: `${prefix}clyde`,
						value: `make clyde say summ`
					})
					.addFields({
						name: `${prefix}emojify`,
						value: `Emojify your text`
					})

					await 	help.edit({
					embeds: [fireisgay]
				})

			} else if (menu.values[0] === 'Option 3') {
				const fireisgay = new EmbedBuilder()
					.setThumbnail(`https://cdn.discordapp.com/emojis/906110598725640212.webp?size=44&quality=lossless	`)
					.setColor("#2F3136")
					.setTitle(`**__Information Commands__**`)
					.addFields({
						name: `${prefix}About`,
						value: "Bot's info"
					})
					.addFields({
						name: `${prefix}Help`,
						value: "Yay, You found this one"
					})
					.addFields({
						name: `${prefix}Ping`,
						value: "Ping and stuff"
					})
					.addFields({
						name: `${prefix}Uptime`,
						value: "Bot's uptime"
					})
					await 	help.edit({
					embeds: [fireisgay]
				})

			} else if (menu.values[0] === 'Option 4') {
				const fireisgay = new EmbedBuilder()
					.setThumbnail(`https://cdn.discordapp.com/emojis/917755496184836106.webp?size=96&quality=lossless`)
					.setColor("#2F3136")
					.setTitle(`**__Other Commands__**`)
					.addFields({
						name: `${prefix}Afk`,
						value: "Sets you on afk"
					})
					.addFields({
						name: `${prefix}Avatar`,
						value: "Avatar look"
					})
					.addFields({
						name: `${prefix}userinfo`,
						value: "Userinfo"
					})
					.addFields({
						name: `${prefix}serverinfo`,
						value: "Serverinfo"
					})
					await 	help.edit({
					embeds: [fireisgay]
				})
			} else if (menu.values[0] === 'Option 5') {
				const fireisgay = new EmbedBuilder()
				.setThumbnail(`https://cdn.discordapp.com/emojis/917803547117121586.webp?size=96&quality=lossless`)
				.setColor(color)
				.setTitle(`**__Nsfw Commands__**`)
				.addFields({
					name: `${prefix}4k` ,
					value: "Sends 4k girl pics", 
				}) 
				.addFields({
					name: `${prefix}anal`,
					value: "Sends Anal gif"
				})
				.addFields({
					name: `${prefix}ass`,
					value: "ass pics/ gifs"
				})
				.addFields({
					name: `${prefix}blowjob`,
					value: "blowjob gifs"
				})
				.addFields({
					name: `${prefix}cumsluts`,
					value: "Show's cum sluts"
				})
				.addFields({
					name: `${prefix}gonewild`,
					value: "Show's some wild pics"
				})
				.addFields({
					name: `${prefix}hentaiass`,
					value: "hentai ass"
				})
				.addFields({
					name: `${prefix}hentaithigh`,
					value: "hentai thigh"
				})
				.addFields({
					name: `${prefix}Milfs`,
					value: "Mother i wanna..."
				})
				.addFields({
					name: `${prefix}porngifs`,
					value: "porn"
				})
				.addFields({
					name: `${prefix}pussy`,
					value: "pussy pics or gifs idk"
				})
				.addFields({
					name: `${prefix}thigh`,
					value: "thigh pics"
				})
				await help.edit({
					embeds: [fireisgay]
				})
			}

		})
	}
}