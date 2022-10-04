require('dotenv').config();

const { Client, GatewayIntentBits, Collection,  } = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');
const {EmbedBuilder} = require("discord.js")

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database Connected")).catch(() => console.log("Database Connection Failed"))

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();
client.timeouts = new Collection();
client.events = readdirSync(join(__dirname, "./events"));
client.categories = readdirSync(join(__dirname, "./commands"));

for (let i = 0; i < client.categories.length; i++) {
    const commands = readdirSync(join(__dirname, `./commands/${client.categories[i]}`));

    for (let j = 0; j < commands.length; j++) {
        const command = require(`./commands/${client.categories[i]}/${commands[j]}`);

        if (!command || !command.run || !command.data) continue;

        command.category = client.categories[i]

        client.commands.set(command.data.name, command);
    }
}




for (let i = 0; i < client.events.length; i++) {
    const event = require(`./events/${client.events[i]}`);

    if (typeof event !== "function") continue;

    client.on(client.events[i].split(".")[0], (...args) => event(client, ...args));
}
//error handle 

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
  
    const exceptionembed = new EmbedBuilder()
    .setTitle("Uncaught Exception")
    .setDescription(`${err}`)
    .setColor("Red")
    client.channels.cache.get("915618584468799538").send({ embeds: [exceptionembed] })
  });
  
  process.on("unhandledRejection", (reason, promise) => {
    console.log(
      "[FATAL] Possibly Unhandled Rejection at: Promise ",
      promise,
      " reason: ",
      reason.message
    );
  
     const rejectionembed = new EmbedBuilder()
    .setTitle("Unhandled Promise Rejection")
    .addFields([
      { name: "Promise", value: `${promise}` },
      { name: "Reason", value: `${reason.message}` },
    ])
    .setColor("Red")
    client.channels.cache.get("915618584468799538").send({ embeds: [rejectionembed] })
  });
  



client.login(process.env.TOKEN);