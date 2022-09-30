const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
    name: "dogfact",
    emoji: "<a:cute_dog:935767368985083904>",
    description: "Returns a dog fact",
    category: "animal",
  },
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {
        const fact = await fetch("http://dog-api.kinduff.com/api/facts?number=1")
      .then((res) => res.json())
      .then((body) => body.facts[0]);

    const embed = new EmbedBuilder()
      .setTitle(`📢 **Dogfact:**`)
      .setDescription(`*${fact}*`)
      .setColor("#2F3136")

     interaction.reply({embeds: [embed]});
    }}