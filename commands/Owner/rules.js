const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "rules",
    description: "Shows the rules of the server",
    // aliases: [""],
    category: "Owner",
    usage: "!rules",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the Rules command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Rules & Guidelines`)
            .setColor(color.green)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
1. Have respect for all members & staff.
2. All channels should be respected. Don't know what it's about? Look in topic.
3. All Staff Offices are privated to staff don't ask to join.
4. All information you release about yourself is on you. We are NOT held accountable.
5. Leaking, Affiliation with leaks or providing leaks will result in an instant denial of service.
6. Keep all chats civilized. Do you have an issue open a support ticket!
7. All products that are listed for free should remain as is. Edit only what is important!
8. Immitation of staff is prohibited and will result in a denial of service.
9. Director is the highest level of staff there for their decision is final.
10. Staff holds the right to remove you from our server based on professional standards.
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        const tosEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Terms Of Service`)
            .setColor(color.green)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
1. We are not required to offer our service once banned from **Protect The Developers**.
2. Once a product is paid of it's up to **Nicole H.#9269** to decide whether a refund is eligible.
3. Do not redistribute our work for your own benefit.
4. Redistribution of our work (Even if paid) to other people^ is prohibited


^ People refers to fiends, family or other members.
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
            .then(message.channel.send(tosEmbed))
    }
}