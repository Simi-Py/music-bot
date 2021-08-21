module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht in einem Voice-Channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du bist nicht in demselben Voice-Channel!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -keine Musik wird in diesem Moment gespielt!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Es gibt nur einen Song in der queue.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Die Schlange wurde **removed** !`);
    },
};
