const { Client, Intents, Collection } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const axios = require('axios');

require('dotenv').config()

const deletedMsg = require('./globalVar')

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

const deletedMessages = new Collection();

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

['command', 'event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

client.on('messageDelete', function (message) {
  // console.log(deletedMsg)
  if (!message.author.bot) {
    deletedMsg[message.channel.id] = message;
  }
});

client.login(process.env.TOKEN);