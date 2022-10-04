const { Client, ChatInputCommandInteraction, EmbedBuilder, Embed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
  name: "advice",
  description: "Get some useful advice for yourself! It will help you in the future.",
},
    /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
     run: async (client, interaction) => {
    fetch(`https://luminabot.xyz/api/json/advice`)
    .then((res) => res.json())
    .then((json) => {
      const embed = new EmbedBuilder()
      .addFields({
				name: '**advice:**',
				value: `${json.advice}`,
			})
      .setColor("#2F3136")
 

      interaction.reply({ embeds: [embed]})
    })
  }
}