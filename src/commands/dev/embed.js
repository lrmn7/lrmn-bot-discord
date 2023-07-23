const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Return an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Hey Greetings👋🏼`)
      .setDescription(`I am L RMN! , Im not very good at social interactions , but I'm always up for a chat ! As far as hobbies go , I like to code , virtual photography that's about it`)
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.youtube.com/channel/UC3yqDQ62iwvmQBrvy4WzFhQ`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL(`https://www.youtube.com/channel/UC3yqDQ62iwvmQBrvy4WzFhQ`)
      .addFields([
        {
          name: `Instagram`,
          value: `https://instagram.com/romanroman.nya`,
          inline: true,
        },
        {
          name: `Discord`,
          value: `https://discord.gg/WFfjrQxnfH`,
          inline: true,
        },
      ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
