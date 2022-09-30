const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
  name: "bird",
  emoji: "<a:_bird:935767603576721438>",
  description: "Shows a picture of a birb",
},
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {
    const data = await (
      await fetch("https://some-random-api.ml/img/birb")
    ).json();

    const embed = new EmbedBuilder()
      .setDescription(`[Click here if image failed to load](${data.link})`)
      .setImage(data.link)
      .setColor("#2F3136")

     interaction.reply({embeds: [embed]});
    }}