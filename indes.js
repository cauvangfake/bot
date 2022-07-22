const express = require('express');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello ')
});

app.listen(3000); //đối với replit


const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.command = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

['command', 'event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

client.login(process.env.TOKEN);
console.log(process.env.TOKEN);



