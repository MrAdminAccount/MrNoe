const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  date: {
    name: "dog",
    emoji: "<a:cute_dog:935767368985083904>",
    description: "Shows a picture of a dog",
    category: "animal",
  },
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {
        const data = await fetch(
            "https://dog.ceo/api/breeds/image/random"
          ).then((res) => res.json());

    const embed = new EmbedBuilder()
      .setDescription(`[Click here if image failed to load](${data.message})`)
      .setImage(data.message)
      .setColor("#2F3136")

     interaction.reply({embeds: [embed]});
    }}