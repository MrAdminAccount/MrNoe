const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
  data:{
  name: "nsfwhentaiass",
  emoji: `🔞`,
  description: "Sends hentai ass pictures.",
  },
  /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
	  run: async (client, interaction) => {
    var errMessage = "This is not an NSFW Channel";
    if (!interaction.channel.nsfw) {
      

      return interaction.reply(errMessage)
    }

    const image = await nsfw.hentaiass();
    const embed = new Discord.EmbedBuilder()
    .setTitle(`Hentai Ass`)
    .setColor('#2F3136')
    .setImage(image);
    interaction.reply({ embeds: [embed] });
  },
  
};
