const { MessageEmbed } = require('discord.js')
const firstMessage = require('./first-message')

module.exports = (client) => {
  const channelId = '912012172828241950'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    Player: 'Member',
  }

  const reactions = []

  const color = require("../config/color.json")
  
  const embed = new MessageEmbed()
    .setTitle(`Heartstone Development | Verification`)
    .setColor(color.green)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()

  let emojiText = 'React the the emote to verify!\n\n'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }

  firstMessage(client, channelId, embed.setDescription(emojiText), reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '911626817440448512') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}