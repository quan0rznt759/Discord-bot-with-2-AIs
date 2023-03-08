const axios = require('axios');

module.exports = {
    name: 'chat',
    description: 'Chat với Acobot',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'message',
            type: 'STRING',
            description: 'Tin nhắn này được dùng để gửi đến bot',
            required: true,
        },
    ],
    run: async (client, interaction) => {
        try {
            const message = interaction.options.getString('message');
            const res = await axios.get(`http://api.brainshop.ai/get?bid=172815&key=nF36OX5wOJcZETEu&uid=1&msg=${encodeURIComponent(message)}`);
            await interaction.reply(res.data.cnt);
        } catch (e) {
            console.error(e);
            await interaction.reply('Bot hỏng, chúc bạn may mắn lần sau');
        }
    },
};
