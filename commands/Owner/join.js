module.exports = {
    name: "join",
    description: "Fakes a join message.",
    // aliases: [""],
    category: "Owner",
    usage: "!join",
    run: async (client, message, args) => { 
		message.delete()

		client.emit('guildMemberAdd', message.member)
    }
}