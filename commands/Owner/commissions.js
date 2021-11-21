const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

const moment = require("moment")

module.exports = {
    name: "commissions",
    description: "Shows if Heartstone Development is accepting custom Commissions",
    aliases: ["comms"],
    category: "Owner",
    usage: "!commissions",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the commissions command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Commissions`)
            .setColor(color.blue)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
There are a few Commissions that we can do for you! Here is a list of them and if they are open or not!
Wonder where to open a commission? You can open the commission tickets here | <#911639815722795028>

**Vehicle Liveries**
Status: ${emote.OnlineNormal} - Open
Since: ${moment().add(10, 'days').calendar()}

**Custom Scripts**
Status: ${emote.OnlineNormal} - Open
Since: ${moment().add(10, 'days').calendar()}

**EUP Designs**
Status: ${emote.OnlineNormal} - Open
Since: ${moment().add(10, 'days').calendar()}

**Servers**
Status: ${emote.OnlineNormal} - Open
Since: ${moment().add(10, 'days').calendar()}
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}