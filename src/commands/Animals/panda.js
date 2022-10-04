const {  EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: {
    name: "panda",
  emoji: "<a:pandaReeRun:935766902679166986>",
  description: "Shows a picture of a panda",
  category: "animal",
  },
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {
        const data = await fetch(
            "https://some-random-api.ml/img/panda"
          ).then((res) => res.json());
      

    const embed = new EmbedBuilder()
    .setDescription(`[Click here if image failed to load](${data.link})`)
    .setColor("#2F3136")
    .setImage(data.link);

     interaction.reply({embeds: [embed]});
    }}