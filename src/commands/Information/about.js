const {
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
	ChatInputCommandInteraction,
	ComponentType,
	ButtonStyle
} = require("discord.js");
const os = require("os");
const core = os.cpus()[0];
const {
	utc
} = require("moment");
const {
	version: discordjsVersion
 } = require('discord.js');

 module.exports = {
	data: {
	 name: 'about',
	 description: `About MrNoe`,
	 emoji: "<:Moderator:906110598725640212>",
	},
	 /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
	  run: async (client, interaction) => {

		let totalSeconds = (client.uptime / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes, **${seconds}** seconds`
		const homo = new ActionRowBuilder().addComponents(

			new ButtonBuilder()
			.setCustomId("general")
			.setLabel("General")
			.setStyle(ButtonStyle.Primary),


			new ButtonBuilder()
			.setCustomId("other")
			.setLabel("Other")
			.setStyle(ButtonStyle.Success),
		
		)
		const gay = new EmbedBuilder()
			.setColor("#2F3136")
			.setTitle(`Heya i'm Noe`)
			.setThumbnail(client.user.displayAvatarURL({
				dynamic: true
			}))
			.addFields({
				name: "**Guild Count** <:tick:907892001641467934>",

				value: `${client.guilds.cache.size} guilds`,
			})
			.addFields({
				name: `**User(s) Count** <:public:917755496184836106> `,

				value: `${client.users.cache.size} users`,
			})
			.addFields({
				name: '**Commands** <:clyde:917799911607640185> ',

				value: `${client.commands.size} Commands`,
			})
			.addFields({
				name: '**Node** <:node:928911509243957269>',
				value: `${process.version} on ${process.platform} ${process.arch}`,

			})
			.addFields({
				name: '**Cached Data** <:paper:915605675592265738> ',
				value: `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`,
			})
			.addFields({
				name: '**Discord.js** <:Moderator:906110598725640212>',
				value: `${discordjsVersion}`,
			})

			.addFields({
				name: "\u200c",
				value: ("<:Invite_Shade:902424926500315166> [Invite](https://discord.com/oauth2/authorize?client_id=902942822250983445&permissions=8&scope=applications.commands%20bot) `|` <:staff_Shade:902425520036270091> [Support Server](https://discord.gg/PPa659jg49) `|` <:upvote:902426615953367051> [Vote](https://top.gg/bot/902942822250983445)"),
				inline: true
			}, )
			.setThumbnail(client.user.avatarURL())

			.setColor("#2F3136")


		const msg = await interaction.reply({
			fetchReply: true,
			embeds: [gay],
			components: [homo]
		});

		const filter = async interaction => {

			if (interaction.user.id !== interaction.user.id) {
				interaction.reply({
					content: "<:angryEyes:915810713103138886> smh its not your button  ",
					ephemeral: true
				});
				return false;
			};
			return true;
		}

		const collector = msg.createMessageComponentCollector({
			filter,
			componentType: ComponentType.Button
		})

		collector.on("collect", async (interaction) => {
			if (interaction.customId === "other") {
				interaction.deferUpdate()

				const gay = new EmbedBuilder()
					.setColor("#2F3136")
					.setTitle(`Heya i'm Noe`)
					.setThumbnail(client.user.displayAvatarURL({
						dynamic: true
					}))
					.addFields({
						name: '**Uptime** <:staff_Shade:902425520036270091>',

						value: `${uptime}`,
					})
					.addFields({
						name: '**Ping** <:bot:917800257423810580> ',
						value: `${client.ws.ping}ms`,
					})
					.addFields({
						name: '**Creation Date** <:TV_CuteStare:917794487789563924> ',
						value: ` ${utc(client.user.createdTimestamp).format(
								"Do MMMM YYYY HH:mm:ss"
							  )}`
					})
					.addFields({
						name: '**Memory** <:pd_math:917805610425266256> ',
						value: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`,
					})
				msg.edit({
					embeds: [gay]
				})

			}
			if (interaction.customId === "general") {
				interaction.deferUpdate()
				const gay = new EmbedBuilder()
					.setColor("#2F3136")
					.setTitle(`Heya i'm Noe`)
					.setThumbnail(client.user.displayAvatarURL({
						dynamic: true
					}))
					.addFields({
						name: "**Guild Count** <:tick:907892001641467934>",

						value: `${client.guilds.cache.size} guilds`,
					})
					.addFields({
						name: `**User(s) Count** <:public:917755496184836106> `,

						value: `${client.users.cache.size} users`,
					})
					.addFields({
						name: '**Commands** <:clyde:917799911607640185> ',

						value: `${client.commands.size} Commands`,
					})
					.addFields({
						name: '**Node** <:node:928911509243957269>',
						value: `${process.version} on ${process.platform} ${process.arch}`,

					})
					.addFields({
						name: '**Cached Data** <:paper:915605675592265738> ',
						value: `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`,
					})
					.addFields({
						name: '**Discord.js** <:Moderator:906110598725640212>',
						value: `${discordjsVersion}`,
					})

					.addFields({
						name: "\u200c",
						value: ("<:Invite_Shade:902424926500315166> [Invite](https://discord.com/oauth2/authorize?client_id=902942822250983445&permissions=8&scope=applications.commands%20bot) `|` <:staff_Shade:902425520036270091> [Support Server](https://discord.gg/PPa659jg49) `|` <:upvote:902426615953367051> [Vote](https://top.gg/bot/902942822250983445)"),
						inline: true
					}, )
					.setThumbnail(client.user.avatarURL())

					.setColor("#2F3136")
				msg.edit({
					embeds: [gay]


				})

			}
			
		})
	}
	
}