const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
    name: "cat",
    emoji: "<:catPOG:935767496491925525>",
    description: "Shows a picture of a cat",
    category: "animal",
  },
    /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
     run: async (client, interaction) => {
        const data = await fetch("https://nekos.life/api/v2/img/meow").then((res) =>
        res.json()
      );

    const embed = new EmbedBuilder()
      .setDescription(`[Click here if image failed to load](${data.url})`)
      .setImage(data.url)
      .setColor("#2F3136")

     interaction.reply({embeds: [embed]});
    }}