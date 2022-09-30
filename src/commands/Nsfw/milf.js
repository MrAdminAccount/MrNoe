const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  data: {
  name: "nsfwmilf",
  category: "NSFW",
  description: "Sends milf pics",
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
      got("https://www.reddit.com/r/milf/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          interaction.reply(`${amazeme}`)
        })
        .catch(console.error);
    } catch (err) {
     console.log(err)
    }}}