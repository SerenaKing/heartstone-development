const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "fivem-discord",
    description: "Shows how to get a discord status for your fivem server.",
    aliases: ["discordrpc"],
    category: "Products",
    usage: "!fivem-discord",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the FiveM Discord command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | FiveM to Discord`)
            .setColor(color.red)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
FiveM Rich Presence for Discord.

This will allow you to customize the presence that shows when you are in-game.
It might take up to a full minute before the presence will actually show.

⚠ - If you use the buttons you will not be able to press them yourself.
This is a limitation by discord. You should ask your friends to press them.

Price: $0.00
Download: https://mega.nz/folder/F2RUFJYI#mHFXnaLzzUEzslMMrkAacg
Preview: https://i.imgur.com/j4gh60z.png
            `)
            .setImage(`https://i.imgur.com/j4gh60z.png`)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}