const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "fivem-sahp",
    description: "The sahp pack created by Heartstone Development.",
    aliases: ["sahp"],
    category: "Products",
    usage: "!fivem-sahp",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the sahp command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | SAHP PACK`)
            .setColor(color.red)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
A simple yet good looking SAHP Department pack. The vehicles are listed below!
All vehicles will work properly when entering upon your server. It's no more than drag and drop!

Having issues? <#911639815722795028> Open a support ticket!
Want this pack but custom? <#911639815722795028> Open a commission!

\`\`\`
- CVPI
- Charger
- Tahoe
\`\`\`

Pre-Order: $5.00
Price: $2.00
Early Access: $7.00
Download: SOON!
Preview: SOON!
            `)
            // .setImage(``)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}