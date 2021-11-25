const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")

module.exports = {
    name: "profile",
    description: "Show your own or a mentioned users profile",
    // aliases: [""],
    category: "Database",
    usage: "!profile (<@user>)",
    run: async (client, message, args) => {
        
        message.delete()

        const mem = message.author
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        // const banned = db.fetch(`profile.user.ban.${mem.id}`)
        const director = db.fetch(`profile.rank.director.${mem.id}`)
        const supportManager = db.fetch(`profile.rank.supportmanager.${mem.id}`)
        const supportSenior = db.fetch(`profile.rank.supportsenior.${mem.id}`)
        const supportMember = db.fetch(`profile.rank.supportmember.${mem.id}`)
        const supportJunior = db.fetch(`profile.rank.supportjunior.${mem.id}`)
        const Nitro = db.fetch(`profile.rank.nitro.${mem.id}`)
        const VIP = db.fetch(`profile.rank.vip.${mem.id}`)
        const Member = db.fetch(`profile.rank.member.${mem.id}`)

        const main = new Discord.MessageEmbed()
        main.setTitle(`Databse | User Profile`)
        main.setColor(color.blue)
        main.setThumbnail(message.author.displayAvatarURL())
        main.setDescription(`
Heartstone Development checks somethings on your profle! Some of these include the following!

\`\`\`
- Discord ID
- Profile Picture
- Creation / Join Date
- Messages Send

- Badges
\`\`\`

There could be more after this message was posted! This list will update accordingly!
If you want to see all information we have on you you can always request it!

- Regards!
        `)
        main.addField(`❯ | Profile Status`,
        `
❯ HD Director: ${director || "<:NotCheck:911993932873859162>"}
❯ Support Manager: ${supportManager || "<:NotCheck:911993932873859162>"}
❯ Support Senior: ${supportSenior || "<:NotCheck:911993932873859162>"}
❯ Support Member: ${supportMember || "<:NotCheck:911993932873859162"}
❯ Support Junior: ${supportJunior || "<:NotCheck:911993932873859162"}
❯ ${emote.Nitro} Nitro Booster: ${Nitro || "<:NotCheck:911993932873859162"}
❯ VIP: ${VIP || "<:NotCheck:911993932873859162"}
❯ ${emote.Player} Member: ${Member || "<:NotCheck:911993932873859162"}
        `)
        main.setFooter(message.author.tag, message.author.displayAvatarURL())
        main.setTimestamp()

        if (!mentionedMember) return message.channel.send(main)

        const director1 = db.fetch(`profile.rank.director.${mentionedMember.id}`)
        const supportManager1 = db.fetch(`profile.rank.supportmanager.${mentionedMember.id}`)
        const supportSenior1 = db.fetch(`profile.rank.supportsenior.${mentionedMember.id}`)
        const supportMember1 = db.fetch(`profile.rank.supportmember.${mentionedMember.id}`)
        const supportJunior1 = db.fetch(`profile.rank.supportjunior.${mentionedMember.id}`)
        const Nitro1 = db.fetch(`profile.rank.nitro.${mentionedMember.id}`)
        const VIP1 = db.fetch(`profile.rank.member.${mentionedMember.id}`)
        const Member1 = db.fetch(`profile.rank.member.${mentionedMember.id}`)

        const extra = new Discord.MessageEmbed()
        extra.setTitle(`Databse | User Profile`)
        extra.setColor(color.blue)
        extra.setThumbnail(mentionedMember.user.displayAvatarURL())
        extra.setDescription(`
Heartstone Development checks somethings on your profle! Some of these include the following!

\`\`\`
- Discord ID
- Profile Picture
- Creation / Join Date
- Messages Send
        
- Badges
\`\`\`
        
There could be more after this message was posted! This list will update accordingly!
If you want to see all information we have on you you can always request it!
        
- Regards!
        `)
        extra.addField(`❯ | Profile Status`,
        `
❯ HD Director: ${director1 || "<:NotCheck:911993932873859162>"}
❯ Support Manager: ${supportManager1 || "<:NotCheck:911993932873859162>"}
❯ Support Senior: ${supportSenior1 || "<:NotCheck:911993932873859162>"}
❯ Support Member: ${supportMember1 || "<:NotCheck:911993932873859162>"}
❯ Support Junior: ${supportJunior1 || "<:NotCheck:911993932873859162>"}
❯ ${emote.Nitro} Nitro Booster: ${Nitro1 || "<:NotCheck:911993932873859162>"}
❯ VIP: ${VIP1 || "<:NotCheck:911993932873859162>"}
❯ ${emote.Player} Member: ${Member1 || "<:NotCheck:911993932873859162>"}
        `)
        extra.setFooter(mentionedMember.user.tag, mentionedMember.user.displayAvatarURL())
        extra.setTimestamp()

        if (mentionedMember) return message.channel.send(extra)
    }
}