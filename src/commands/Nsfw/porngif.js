const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
  data: {
  name: "nsfwporngif",
  description: "Sends porn gifs.",
  emoji: `🔞`,
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

    const image = await nsfw.pgif();
  
    interaction.reply(`${image}`)
    
  },
};
