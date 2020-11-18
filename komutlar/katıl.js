exports.run = async (client, message) => {
if(!message.member.roles.has("551431814124798002")) return message.channel.send(`Bu komutu kullanabilmek için \`TeyitGörevlisi\` yetkisine sahip olmasınız.`);
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Ses kanalında olman lazım bu komutu yazarken kanka"); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Odaya girmek için yetkim yok"); }
  message.member.voiceChannel.join();
  return message.channel.send(`${message.member.voiceChannel} Sesli Kanalında hazırım.`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['girr'],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "girr",
  description: "Bot ses kanalına giriş yapar.",
  usage: "girr"
};