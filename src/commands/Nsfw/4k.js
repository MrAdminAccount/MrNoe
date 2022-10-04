const {
	EmbedBuilder,
} = require("discord.js");

const got = require("got");
module.exports = {
	data: {
	name: "nsfw4k",
	category: "NSFW",
	description: "Sends 4k girl pics",
	usage: "[command]",
	botPerms: ["EMBED_LINKS"],
	emoji: `🔞`,
	},
 /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
  run: async (client, interaction) => {

		var errMessage = "This is not an NSFW Channel";
		if (!interaction.channel.nsfw) {
			return interaction.reply(errMessage)
		}
		got("https://www.reddit.com/r/RealGirls/random.json")
			.then((response) => {
				let content = JSON.parse(response.body);
				var title = content[0].data.children[0].data.title;
				var amazeme = content[0].data.children[0].data.url;
				interaction.reply(`${amazeme}`)
		
        })}}