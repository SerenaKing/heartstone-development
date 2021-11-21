const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "review",
    description: "Let's the author make a review about the service they got.",
    // aliases: [""],
    category: "Tickets",
    usage: "!review [review msg]",
    run: (client, message, args) => {

        message.delete()

        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const reviewChannel = message.guild.channels.cache.get("911976675967918080")

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Review`)
            .setColor(color.blue)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
User: ${message.author.id}
Helped By: ${mentionedMember.user.id}

Review:
${args.slice(" ").join(1)}
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        reviewChannel.send(pEmbed)
    }
}