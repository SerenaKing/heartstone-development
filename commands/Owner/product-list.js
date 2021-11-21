const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "product-list",
    description: "Shows all available products!",
    aliases: ["plist"],
    category: "Owner",
    usage: "!product-list",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the product command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Product List`)
            .setColor(color.red)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
List of products that we over here at **Heartstone Development**! 
We offer FiveM, Minecraft & Way more!

\`\`\`
-- Vehicles

-- EUP

-- Servers

-- Commissions
\`\`\`
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}