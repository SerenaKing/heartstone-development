const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "end",
    description: "Shows that the ticket will no longer receive support.",
    aliases: ["tend"],
    category: "Tickets",
    usage: "!end @user",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get("911913469475966976")
        const staffCC = message.guild.roles.cache.get("911640270955749406")

        if (staffCC) {

            const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            const pEmbed = new MessageEmbed()
                .setTitle(`Heartstone Development | Ticket Ended`)
                .setColor(color.yellow)
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`
Hello <@!${mentionedMember.user.id}>,

Staff Member: <@!${message.author.id}>

Has decided it's time to close your ticket. This ticket will be archived here <#911643300090503229>! 
Please if you haven't post a review using our review command! *This command should've displayed already!*

If you feel like your ticket is not yet ready to be closed let our staff know ASAP! If it's ready to be closed you can type the following:
\`Confirm\` and a member of support will close it!

- Regards, 
Heartstone Development
                `)
                .setFooter(client.user.tag, client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(pEmbed)
        } else {
            message.channel.send(`❌ - Only the Staff can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the ticket end command.`))
        }
    }
}