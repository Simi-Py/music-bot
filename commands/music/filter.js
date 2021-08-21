odule.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -  Du befindest dich nicht in einem Voice-Channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du befindest dich nicht in demselben Voice-Channel`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Gerade wird keine Musik gespielt`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Gib bitte einen gültigen Filter ein!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Dieser Filter existiert nicht!Versuche es mit anderen (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Ich **füge** den Filter hinzu,||Dies könnte ein paar Sekunden brauchen||`);
        else message.channel.send(`${client.emotes.music} -Ich **entferne** den Filter ,||Dies könnte ein paar Sekunden brauchen||`);
    },
};
