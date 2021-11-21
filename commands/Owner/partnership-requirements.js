const color = require("../../config/color.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "partnership-requirements",
    description: "Shows the Heartstone Development Partnership Requirements",
    aliases: ["preq", "parterr"],
    category: "Owner",
    usage: "!partnership-requirements",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the partner command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Partnership Requirements`)
            .setColor(color.yellow)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Here are the requirements set for partners. This list can change at any point in time.
Already partnered servers/members are not affected by this change.

1. Server Partner
\`\`\`
- 100+ Members
- Seperate Channel for our advertisement
- Never banned by PTD(Protect The Developers)
- Good Standing with HD Staff
- Active Member Count
- No Toxic Members
\`\`\`

2. Member Partner
\`\`\`
- Your work only.
- Never banned by PTD(Protect The Developers)
- Social Media's linked on Discord (The ones you wish to partner)
\`\`\`

- Regards,
Heartstone Development
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}