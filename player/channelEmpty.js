module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more Member in the voice-channel !`);
};
