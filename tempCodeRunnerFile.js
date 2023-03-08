const { Client, Intents, Collection } = require('discord.js');
const PREFIX = process.env.PREFIX;
const axios = require('axios');
require('dotenv').config()

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

client.on('messageDelete', function(message) {
  if (!message.author.bot) {
    deletedMessages.set(message.channel.id, message);
  }
});

client.on('messageCreate', async function(message){
  if (message.author.bot) return;

if (message.content === '#snipe') {
  const deletedMessage = deletedMessages.get(message.channel.id);

  if (deletedMessage) {
    const snipeEmbed = {
      color: 0xF5DEB3,
      title: 'get snipe nerd',
      author: {
        name: deletedMessage.author.tag,
        icon_url: deletedMessage.author.avatarURL(),
      },
      description: deletedMessage.content,
      footer: {
        text: `In #${message.channel.name}`,
        icon_url: message.guild.iconURL(),
      },
      timestamp: deletedMessage.createdTimestamp,
    };

    message.channel.send({ embeds: [snipeEmbed] });
  } else {
    message.channel.send('There are no deleted messages to snipe!');
  }
}
  console.log(message.content);
});

const OpenAI = require('openai-sdk').OpenAI;
const openai = OpenAI(process.env.OPENAI_API_KEY);

client.on('messageCreate', async message => {
if (message.author.bot) return;

if (message.channel.type === 'text' || message.channel.type === 'ask') {
const conversation = await openai.conversations.create({
bot: 'text-davinci-003',
external_id: message.author.id,
email: process.env.OPENAI_EMAIL,
password: process.env.OPENAI_PASSWORD,
});
const result = await conversation.messages.create({
  text: message.content
});

message.reply(result.data[0].text);
}
});

client.login(process.env.TOKEN);