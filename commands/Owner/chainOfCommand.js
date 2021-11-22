const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "chainOfCommand",
    description: "Shows the servers chain of command.",
    aliases: ["coc"],
    category: "Owner",
    usage: "!chainOfCommand",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the Chain Of Command command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Chain Of Command`)
            .setColor(color.green)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`

            `)
            .addField(`Directors`, `
<@&911640268934103071> - <@!871877975346405388>
<@&911640271136108585> - VACCANT
            `)
            .addField(`Support Managers`, `
<@&911640272419573820> - <@!410595717716115456>
            `)
            .addField(`Senior Support Members`, `
<@&911640273665261578> - VACCANT
            `)
            .addField(`Support Members`, `
<@&911640273233281044> - VACCANT
            `)
            .addField(`Support Junior Members`, `
<@&911640269701652500> - VACCANT
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}