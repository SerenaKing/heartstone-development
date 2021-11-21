const color = require("../../config/color.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "blacklist",
    description: "Shows the Heartstone Development blacklist",
    aliases: ["blist"],
    category: "Owner",
    usage: "!blacklist",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the blacklist command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Blacklist`)
            .setColor(color.red)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Here is the list of currently blacklisted members/servers. There are multiple ways to get blacklisted which we won't list.
If you are banned by PTD(Protect The Developers) You will not be able to make any purchases with us.
We advise all users to refrain from joining or interacting with blacklisted members.
We also ask all users to keep a friendly and positive mindset if you do interact. 
Just because they are banned here doesn't mean you can go out your way and spread hate.

The format for blacklist is displayed below.
\`\`\`
Member:
Member ID - Than Username - Date - Reason

Server:
Server ID - Than Name - Date - Reason
\`\`\`

**Member Blacklist**
N/A

**Server Blacklist**
N/A

- Regards,
Heartstone Development
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}