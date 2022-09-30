const { CommandInteraction, EmbedBuilder } = require('discord.js');
const Fetch = require("node-fetch");

module.exports = {
    data: {
    name: 'meme',
    description: 'Random meme images!',
    },
   /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (args, interaction) => {

        const Reds = [
            "memes",
            "me_irl",
            "dankmemes",
            "comedyheaven",
            "Animemes"
        ];

        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return interaction.reply(`**Type Again Da command pls :pleading_face:**`);

        const data = json[0].data.children[0].data;

        const Embed = new EmbedBuilder()
            .setColor("#2F3136")
            .setURL(`https://reddit.com/${data.permalink}`)
            .setTitle(data.title)
            .setDescription(`:man_pouting:‍ **By : ${data.author}** :man_pouting:‍`)
            .setImage(data.url)
            .setFooter({
                text: `${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`
            })
            .setTimestamp();

        await interaction.reply({ content: `${interaction.user.tag} generated a meme!`, embeds: [Embed]  }); 

    },
}