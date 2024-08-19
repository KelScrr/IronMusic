const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume of currently playing music",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("**Não está tocando no momento.**").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("**Você não está em um canal de voz!**").catch(console.error);

    if (!args[0]) return message.reply(`🔊 O volume atual é: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Por favor, coloque um valor para ser o volume.").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.reply("Por favor, use um número de 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Volume alterado para: **${args[0]}%**`).catch(console.error);
  }
};
