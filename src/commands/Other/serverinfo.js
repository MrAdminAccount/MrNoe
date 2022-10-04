const { ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');
const moment = require("moment");

module.exports = {
  data: {
  name: "serverinfo",
  description: "Displays information about the server",
},
  /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
   run: async (client, interaction) => {
    try {
      const voiceChannelCount = interaction.guild.channels.cache.filter((ch) => ch.type === "GUILD_VOICE").size;
      const textChannelCount = interaction.guild.channels.cache.filter((ch) => ch.type === "GUILD_TEXT").size;
      const categoryCount = interaction.guild.channels.cache.filter((ch) => ch.type === "GUILD_CATEGORY").size;
      const size = interaction.guild.channels.cache.size;
      const all = `${size} Total (Text: ${textChannelCount}, Voice: ${voiceChannelCount}, Categories: ${categoryCount})`

      let boosts = interaction.guild.premiumSubscriptionCount;
      var boostlevel = 0;
      if (boosts >= 2) boostlevel = "1";
      if (boosts >= 15) boostlevel = "2";
      if (boosts >= 30) boostlevel = "3 / ∞";

      const embed = new EmbedBuilder()
        .setTitle(interaction.guild.name)
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setColor("#2F3136")
        .setDescription(
          `**__<:Moderator:906110598725640212> General Information__**
          **ID:** ${interaction.guild.id}
          **Name:** ${interaction.guild.name}
          **Owner:** ${(await interaction.guild.fetchOwner())}
          
          **__<:public:917755496184836106> Counts__**
          **Roles:** ${interaction.guild.roles.cache.size} 
          **Members:** ${interaction.guild.memberCount} Total (${interaction.guild.members.cache.filter(m => !m.user.bot).size} Humans, ${interaction.guild.members.cache.filter(m => m.user.bot).size} Bots)
          **Channels:** ${all}
          **Emojis:** ${interaction.guild.emojis.cache.size} (Regular: ${
          interaction.guild.emojis.cache.filter((e) => !e.animated).size
          }, Animated: ${interaction.guild.emojis.cache.filter((e) => e.animated).size})
          
          **__<:clyde:917799911607640185> Additional Information__**
          **Created At:** ${moment(interaction.guild.createdTimestamp).format("LT")} ${moment(
            interaction.guild.createdTimestamp
          ).format("LL")} ${moment(interaction.guild.createdTimestamp).fromNow()}
          **Boost Level:** ${boostlevel}
          **Boost Count:** ${interaction.guild.premiumSubscriptionCount || "0"}`
        )
        interaction.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e);
    };
  },
};