const { ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
  name: "avatar",
  description: "Get the avatar of the specified member",
  options: [
    {
      name: "member",
      description: "Input member to get avatar",
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
},
  /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
   run: async (client, interaction) => {
    const { user } = interaction.options.get("member");

    const embed = new EmbedBuilder()
      .setTitle(`${user.tag}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true }))
      .setColor("#2F3136")

    interaction.reply({ embeds: [embed] });
  },
};