const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
    name: "catfact",
    emoji: "<:catPOG:935767496491925525>",
    description: "Returns a cat fact",
    category: "animal",
  },
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {
        const fact = await fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then(({ fact }) => fact);

    const embed = new EmbedBuilder()
      .setTitle("**Here's an interesting fact**")
      .setDescription(fact)
      .setColor("#2F3136")

     interaction.reply({embeds: [embed]});
    }}