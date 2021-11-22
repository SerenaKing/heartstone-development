const color = require("../../config/color.json")
const emote = require("../../config/emotes.json")
const { ownerID } = require("../../config/config.json")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "aboutMe",
    description: "Shows Nicoles About me",
    aliases: ["about"],
    category: "Owner",
    usage: "!aboutMe",
    run: (client, message, args) => {

        message.delete()

        const loggingChannel = message.guild.channels.cache.get('911913469475966976')

        if (!ownerID)
            return message.channel.send(`❌ - Only the bot Owner can execute this command!`)
                .then(loggingChannel.send(`<@!${message.author.id}> Tried running the About Me command.`))

        const pEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | About The Founder`)
            .setColor(color.blue)
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`
Hello! 

I am Nicole H. The **H** Actually standing for Heartstone.
Heartstone is a long used alias of mine starting as a Roleplay name back on the old gen days.

I was born 25th December 2002. Currently reside in the Netherlands and was born here.
I have personally always took an interest in making programs. All-though I'm not much of an artist.

I run a FiveM Server called **San Andreas Life** that's what inspired me to make this!

Here's some more background about me!
\`\`\`
- Currently living with a friend
- Working in a field I did not study for
- Own a tabacco store
- Father has passed away aged 48 | Mother is still alive
- Have 1 little borther & 1 little sister
- Love working on small projects
- Love coding
- Games? Minecraft, Door Kickers 1/2, Payday The Heist/2, War Thunder,
Ghost Recond Wildlands, FiveM, GTA Series
\`\`\`

Here is some of my media!
Website: [\`San Andreas life\`](https://salroleplay.net)
Instagram: [\`_.Serena_King._\`](https://www.instagram.com/_.serena_king._/)
Youtube: [\`LanzanedGaming\`](https://www.youtube.com/channel/UC84lNozK-JdfUJkaGJF0CMg)

- Regards,
Nicole H.
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(pEmbed)
    }
}