module.exports = {
    name: 'help',
    description: 'Xem lệnh của bot',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const helpEmbed = {
          color: 0xF5DEB3,
          title: 'Command List',
          fields: [
            {
              name: '#ask',
              value: 'Ask the bot a question',
            },
            {
              name: '#snipe',
              value: 'Get the most recently deleted message in the channel',
            },
            {
              name: '#chat',
              value: 'Chat with Acobot (shes really smart ngl)',
            },
            {
              name: '#kick',
              value: 'Kick a person',
            },
            {
              name: '#ban',
              value: 'Ban a person',
            },
            {
              name: '#say',
              value: 'Force the bot to say somethin',
            },
            {
              name: '#avatar',
              value: 'i think i dont have to explain this',
            },
            {
              name: '#ping',
              value: 'Check latency of the bot',
            },
            {
                name: '#prefix',
                value: 'Change current prefix',
            },
            {
              name: '#calc',
              value: 'Mathhhhhhhhhhhhhhhhhhh baby',
            },
          ],
          timestamp: new Date(),
          footer: {
            text: 'Help is on the way',
            icon_url: 'https://i.imgur.com/L0sBgsi.png',
          },
        };
        await interaction.reply({ embeds: [helpEmbed] });
      },
};