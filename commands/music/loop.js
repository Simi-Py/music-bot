module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -  Du befindest dich nicht in einem Voice-Channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}- Du befindest dich nicht in dem selben Voice Channel `);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - gerade wird keine Musik gespielt!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - repeat mode **entfernt**! !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **angestellt** Die Schlange wird ab jetzt endlos wiederholt!`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** the current music will be repeated endlessly !`);
            };
        };
    },
};
