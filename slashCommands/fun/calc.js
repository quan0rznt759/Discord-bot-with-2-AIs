module.exports = {
    name: 'calc',
    description: 'toán',
    type: 'CHAT_INPUT',
    options: [
      {
        name: 'expression',
        description: 'The expression to evaluate',
        type: 'STRING',
        required: true,
      },
    ],
    run: async (client, interaction) => {
      const expression = interaction.options.getString('expression');
      try {
        const result = eval(expression);
        await interaction.reply(`${expression} = ${result}`);
      } catch (error) {
        await interaction.reply('Invalid expression.');
      }
    },
  };