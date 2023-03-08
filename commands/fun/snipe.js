const deletedMsg = require('../../globalVar')

module.exports = {
  name: 'snipe',
  category: 'fun',
  description: 'Xem tin nhắn vừa bị xóa',
  run: async (client, message, args) => {
    console.log(message.channel)
    var deletedMessage = null
    if (message.channel.id in deletedMsg) {
      deletedMessage = deletedMsg[message.channel.id]
    }
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
  },
};