const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "start",
    description: "Shows that the ticket will now be receiving support.",
    aliases: ["tstart"],
    category: "Tickets",
    usage: "!start @user",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get("911913469475966976")
        const staffCC = message.guild.roles.cache.get("911640270955749406")

        if (staffCC) {

            const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            const pEmbed = new MessageEmbed()
                .setTitle(`Heartstone Development | Ticket Started`)
                .setColor(color.yellow)
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`
Hello <@!${mentionedMember.user.id}>,

Staff Member: <@!${message.author.id}>

Will help you with your ticket today. Here is some common questions staff will ask in different type of tickets!

**Vehicle**
1. Which vehicle are you trying to buy? 

**EUP**
1. Which EUP Pack are you trying to buy?

**Servers**
1. What type of server are you looking for?
2. What are you looking to add to your server?
3. What platform is your server ran on?
4. Is your server banned by PTD? (Protect The Developers)

**Commissions**
1. What are you looking to get?
2. Will you be alright with us hosting it?
3. Keep in mind our databases on commissions are limited!
4. Keep in mind our commissions take time!

- Regards, 
Heartstone Development
                `)
                .setFooter(client.user.tag, client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(pEmbed)
        } else {
            message.channel.send(`❌ - Only the Staff can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the ticket start command.`))
        }
    }
}