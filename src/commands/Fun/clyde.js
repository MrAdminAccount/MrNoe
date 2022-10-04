const { Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    data: {
  name: "clyde",
  description: "Get a custom clyde message",
  options: [
    {
      name: "text",
      description: "Input some text for clyde",
      type: ApplicationCommandOptionType.String,
      required: true,
    }
  ],
},
 
     /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
      run: async (client, interaction) => {

    const text = interaction.options.getString("text")

    interaction.reply({
      files: [
        {
          attachment: `https://ctk-api.herokuapp.com/clyde/${text}`,
          name: "file.jpg",
        },
      ],
    });
  }
}