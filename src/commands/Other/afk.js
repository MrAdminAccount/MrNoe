const { CommandInteraction, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder } = require("discord.js");
const afk = require("../../models/afk");

module.exports = {
    data: {
        name: "afk",
        description: "Away from keyboard",
        options: [],
    },
    timeout: 1000,

    /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const data = await afk.findOne({ afk: true, id: interaction.user.id });
console.log(data)
        if (data) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("❌ You Are Already AFK")
                    .setColor("#2F3136")
            ],
            ephemeral: true
        })

        const modal = new ModalBuilder({
            customId: 'afk_modal',
            title: "AFK Reason",
            components: [
                new ActionRowBuilder({
                    components: [
                        new TextInputBuilder({
                            customId: "afk_reason",
                            label: "Reason",
                            required: true,
                            style: TextInputStyle.Short
                        })
                    ]
                })
            ]
        });

        interaction.showModal(modal);
    }
}