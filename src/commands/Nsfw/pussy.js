const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  data: {
  name: "nsfwpussy",
  category: "NSFW",
  description: "Sends pussy pics",
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
    try {
      //command
      var errMessage = "This is not an NSFW Channel";
      if (!interaction.channel.nsfw) {
        

        return interaction.reply(errMessage)
      }
      got("https://www.reddit.com/r/pussy/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.EmbedBuilder()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
            .setColor('#2F3136')
          interaction.reply({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
   console.log(err)
    }
  },
};
