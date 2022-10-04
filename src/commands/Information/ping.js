const { Client, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
    name: 'ping',
    description: 'Gets the websocket ping.',
},
   /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        try {
            let ping = new EmbedBuilder()
            .setColor("#2F3136")
            .setDescription(`<:Wumpus_Ping:917801320742805504> Ping Pong! \`${client.ws.ping}ms\``)

            interaction.reply({embeds : [ping], ephemeral: true})
        } catch (e) {
                console.log(e);
        }

    },
};