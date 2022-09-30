
const types = require('../utils/types');
module.exports = async (client) => {
    console.log(`${client.user.tag} is online!`);

    client.application.commands.set(client.commands.map(v => v.data));
    client.user.setActivity('Another day...Another...', { type: types.activityType.Playing });
    client.user.setPresence({
        status: "idle",
    })
      
}