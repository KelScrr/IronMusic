module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    return message.channel.send({embed: {
      description: `• Meu Convite: [[Convite]](https://discord.com/oauth2/authorize?client_id=778409269787230218&permissions=70282305&scope=bot)`,
      color: 0xF8F8FF,
    }})
      
      .catch(console.error);
  }
};
