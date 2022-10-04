const {  ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
    name: 'invite',
    emoji: `<:Invite_Shade:902424926500315166>`,
    description: `Add the bot `,
    },
   /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setLabel("Invite me")
            .setURL("https://discord.com/oauth2/authorize?client_id=1005886760154312724&scope=bot&permissions=8589934585")
            .setStyle(ButtonStyle.Link)
        )
       interaction.reply({ content: "Thank you for inviting me!", components: [row]}); 
    }
}


