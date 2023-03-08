const deletedMsg = require('../../globalVar')

module.exports = {
    name: 'snipe',
    description: 'Xem tin nhắn vừa bị xóa',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        var deletedMessage = null
        if(interaction.channel.id in deletedMsg){
            deletedMessage = deletedMsg[interaction.channel.id]
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
                    text: `In #${interaction.channel.name}`,
                    icon_url: interaction.guild.iconURL(),
                },
                timestamp: deletedMessage.createdTimestamp,
            };
  
            interaction.reply({ embeds: [snipeEmbed] });
        } else {
            interaction.reply('There are no deleted messages to snipe!');
        }
    },
};
