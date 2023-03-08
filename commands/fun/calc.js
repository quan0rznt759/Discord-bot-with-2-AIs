module.exports = {
    name: 'calc', 
    category: 'fun',
    run: (client, message, args) => {
        const expression = message.content.substring(6);
    try {
      const result = eval(expression);
      message.channel.send(`${expression} = ${result}`);
    } catch (error) {
      message.channel.send('Invalid expression.');
    }
  }
}