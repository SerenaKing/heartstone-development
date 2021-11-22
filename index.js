require("dotenv").config()
const { Client, Collection, MessageEmbed } = require("discord.js")

const fs = require("fs")
const ms = require('ms')

const quickdb = require("quick.db")

const chalk = require("chalk")

const { prefix } = require("./config/config.json")

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

const firstMessage = require("./load/first-message.js")
const verification = require("./load/verification.js")

client.on("ready", () => {

    // fs.writeFile('db.txt', JSON.stringify(quickdb.all()), function(e) {
    //     if(e) console.log(e)
    //     console.log('Success!')
    // })

    verification(client)

    client.user.setPresence({
		status: "idle",
		activity: { 
			name: "Heartstone Development",
			type: "WATCHING"
		}
	})

    setTimeout(async function () {
        console.log(chalk.white(`[${chalk.green(`INFO`)}${chalk.white(`] - Connecting...`)}`));
    }, ms('1s'));
    setTimeout(async function () {
        console.log(chalk.white(`[${chalk.green(`INFO`)}${chalk.white(`] - Logged in as: ${client.user.tag}`)}`));
    }, ms('3s'));
})

client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) command.run(client, message, args);

});

client.on("guildMemberAdd", async (member) => {

    const color = require("./config/color.json")

    const moment = require("moment")

    if (member.guild.id) {

        const welcomeChannel = member.guild.channels.cache.get("911626633113399326")
        const loggingChannel = member.guild.channels.cache.get("911626616784957461")

        const loggingEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Entry Logging`)
            .setColor(color.orange)
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`
**Member Information**
*Username:* *${member.user.username}*
*User ID:* *${member.user.id}*
*User Tag:* *${member.user.discriminator}*

*Account Created At:* 
*${moment(member.user.createdAt).utcOffset(-0).format("dddd, MMMM Do YYYY, h:mm:ss A")} UTC*
*Joined Server At:* 
*${moment(member.user.JoinedAt).utcOffset(-0).format("dddd, MMMM Do YYYY, h:mm:ss A")} UTC*

*Avatar:* *${member.user.displayAvatarURL()}*
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        const welcomeEmbed = new MessageEmbed()
            .setTitle(`Heartstone Development | Entry Message`)
            .setColor(color.green)
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`
Hello, <@!${member.user.id}>

Thank you for joining our server! Below you can find a list of important Channels / Items we sell!

**Important Channels**
- Announcements | <#911914898907344896>
- Chain Of Command | <#911914856502947870>
- Tickets | <#911639815722795028>
- Commissions | <#911963251053559958>
- Main Chatroom | <#911914705164054559>

**Listed Products**
- Vehicle Packs
- Individial Vehicles
- EUP Packs
- Individual EUP

- Regards,
Heartstone Development
            `)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()

        loggingChannel.send(loggingEmbed)
            .then(welcomeChannel.send(welcomeEmbed))
    }

    await quickdb.set(`profile.rank.member.${member.id}`, "<:Check:911993932928393296>")
})

client.on('guildMemberUpdate', async (oldMember, newMember) => {

    const color = require("./config/color.json")

	const notBoosting = oldMember.roles.cache.find(role => role.name === 'Nitro Booster');
	const isBoosting = newMember.roles.cache.find(role => role.name === 'Nitro Booster');
	
	const BoosterEmbed = new MessageEmbed()
		.setTitle(`${newMember.user.tag} Thank You!`)
		.setThumbnail(client.user.displayAvatarURL())
		.setColor(color.pink)
		.setDescription(`
Thank you <@!${newMember.user.id}>,

Thank you for boosting **Heartstone Development**!
Seeing as a boost isn't free we will offer some of our service for free or give you a nice discount!

Below are some perks that you get for boosting!
\`\`\`
- Badge on your profile! (!profile)
- 1 Vehicle Pack free to choose!
- 25% Discount on all EUP!
- 20% Discount on all Vehicles!
- $30 Free of Charge!
- Premium Chats!
\`\`\`

- Regards,
Heartstone Development
		`)
		.setFooter(newMember.user.tag, newMember.user.displayAvatarURL())
		.setTimestamp()

	if (!notBoosting) {
        oldMember.guild.channels.cache.get("911922928973664266").send(`${oldMember.user.tag} - Has stopped boosting the server...`)
        await quickdb.set(`profile.rank.booster.${oldMember.user.id}`, "<:NotCheck:911993932873859162>")
	}

    if (isBoosting) {
        newMember.guild.channels.cache.get('911920103367520268').send(`<@!${newMember.user.id}>`, {embed: BoosterEmbed})
            .then(newMember.guild.channels.cache.get("911922928973664266").send(`<@!${newMember.user.id}> - Has started boosting the server!`))
        await quickdb.set(`profile.rank.booster.${newMember.user.id}`, "<:Check:911993932928393296>")
    }

});

client.on("guildMemberRemove", async (member) => {
    await quickdb.set(`profile.rank.member.${member.id}`, "<:NotCheck:911993932873859162>")
})

client.login(process.env.TOKEN);