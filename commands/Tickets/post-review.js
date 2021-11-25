const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "post-review",
    description: "Notify the member of the ticket to leave a review!",
    aliases: ["poreview"],
    category: "Tickets",
    usage: "!post-review",
    run: (client, message, args) => {

        message.delete()

        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Review Us!`)
            .setColor(color.blue)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Hello <@!${mentionedMember.user.id}>,

Your ticket is about to be done and closed! We ask of you if you would like to write us a review!

You can do this by executing the following command!
\`!review @staffMember [Review Message Here]\`

It should look something like this!
\`!review @Nicole H. She was very helful and explained the fixes for my issues!\`

Thank you! We appreciate you spending your time here at **Heartstone Development**!
For additional perks you can boost our server!

- Regards,
Heartstone Development
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}