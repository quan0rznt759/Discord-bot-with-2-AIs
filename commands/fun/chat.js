const axios = require('axios');

module.exports = {
    name: 'chat',
    description: 'Chat với Acobot',
    run: async (client, message, interaction) => {
        try {
            const messages = message.content;
            const res = await axios.get(`http://api.brainshop.ai/get?bid=172815&key=nF36OX5wOJcZETEu&uid=1&msg=${encodeURIComponent(messages)}`);
            message.reply(res.data.cnt);
        } catch (e) {
            console.error(e);
            message.reply('Bot hỏng, chúc bạn may mắn lần sau');
        }
    },
};
