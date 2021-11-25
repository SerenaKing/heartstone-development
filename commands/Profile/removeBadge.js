const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const colour = require("../../config/color.json")

module.exports = {
    name: "removeBadge",
    description: "Add a badge to a mentioned user",
    aliases: ["badgeremove", "badr"],
    category: "Owner",
    usage: "!removeBadge <@user> <BadgeTag>",
    run: async (client, message, args) => {
        message.delete()

        const mentionedUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const loggingChannel = message.guild.channels.cache.get("912235074722856960")

        const msgEmbed = new MessageEmbed()
            .setTitle("Heartstone Development | Badge Removed")
            .setColor(colour.green)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Database Member: <@!${message.author.id}>
Badge: ${args[1]}
Member: <@!${mentionedUser.user.id}>
            `)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()

        const loggingEmbed = new MessageEmbed()
            .setTitle("Heartstone Development | Badge Removed Logs")
            .setColor(colour.orange)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Database Member: <@!${message.author.id}>
Badge: ${args[1]}
Member: <@!${mentionedUser.user.id}>
            `)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()

        const failEmbed = new MessageEmbed()
            .setTitle("Heartstone Development | Badge System FAILED")
            .setColor(colour.red)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
The system has failed. Make sure that you mentioned a user by @ / ID & That the name of the badge is correct.
            `)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()

        let badge = (args[1])

        if (badge == "Director") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.director.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "SupportManager") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.supportmanager.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "SupportSenior") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.supportsenior.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "SupportMember") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.supportmember.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "SupportJunior") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.supportjunior.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "Nitro") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.nitro.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "VIP") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.vip.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else if (badge == "Member") {
            message.channel.send(msgEmbed)
            await db.set(`profile.rank.member.${mentionedUser.user.id}`, `<:NotCheck:911993932873859162>`)
            loggingChannel.send(loggingEmbed)
        } else {
            message.channel.send(failEmbed)
        }
    }
}