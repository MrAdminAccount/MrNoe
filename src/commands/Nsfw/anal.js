const discord = require("discord.js");
const got = require("got"); 

module.exports = {
  data: {
  name: "nsfwanal",
  category: "NSFW",
  description: "Sends anal porn pics",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  emoji: `🔞`,
  },
  run: async (client, interaction, args) => {
    try {
  
      var errMessage = "This is not an NSFW Channel";
      if (!interaction.channel.nsfw) {
        

        return interaction.followUp(errMessage)
      }
      got("https://www.reddit.com/r/anal/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.EmbedBuilder()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
        .setColor('#2F3136')
          interaction.channel.send({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
     console.log(err)
}}}
