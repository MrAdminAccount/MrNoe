const discord = require("discord.js");
const got = require("got"); 

module.exports = {
  data: {
  name: "nsfwass",
  category: "NSFW",
  description: "Sends ass pics",
  emoji: `🔞`,
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
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
      got("https://www.reddit.com/r/Asshole/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.EmbedBuilder()
            .setDescription(`**${title}**`)
            .setImage(amazeme)        
            .setColor('#2F3136')
          interaction.reply({ embeds: [wow] });
        })
    } catch (err) {
    console.log(err) 
}}}