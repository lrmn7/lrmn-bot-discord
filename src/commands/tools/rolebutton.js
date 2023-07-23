const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rolebutton")
    .setDescription("Return the role button panel"),
  async execute(interaction, client) {
    /**************************************************************************/
    //Setting up buttons
    const buttonYt = new ButtonBuilder()
      .setCustomId(`notif-yt`)
      .setEmoji("📹")
      .setStyle(`Secondary`);

    const buttonTwitch = new ButtonBuilder()
      .setCustomId(`notif-twitch`)
      .setEmoji("📺")
      .setStyle(`Secondary`);

    const buttonArtiste = new ButtonBuilder()
      .setCustomId(`artiste`)
      .setEmoji("🎨")
      .setStyle(`Secondary`);

    const buttonGames = new ButtonBuilder()
      .setCustomId(`games`)
      .setEmoji("🎮")
      .setStyle(`Secondary`);

    const buttonTech = new ButtonBuilder()
      .setCustomId(`tech`)
      .setEmoji("💻")
      .setStyle(`Secondary`);

    const buttonClan = new ButtonBuilder()
      .setCustomId(`clan`)
      .setEmoji("♦")
      .setStyle(`Secondary`);
    /**************************************************************************/
    //Setting up the rows
    const row1 = new ActionRowBuilder()
      .addComponents(buttonYt)
      .addComponents(buttonTwitch)
      .addComponents(buttonArtiste);
    const row2 = new ActionRowBuilder()
      .addComponents(buttonGames)
      .addComponents(buttonTech)
      .addComponents(buttonClan);
    /**************************************************************************/
    //Setting up the custom embed !
    let embed = new EmbedBuilder()
      .setTitle(`Choix des rôles :`)
      .addFields([
        {
          name: `📹 Youtube`,
          value: `Don't want to miss any new videos?\nSo tag yourself with this role!\nLet's be up to date with new videos!`,
          inline: true,
        },
        {
          name: `📺 Twitch`,
          value: `You don't want to miss any live?\nSo tag yourself with this role!\nLet's be aware of the lives!`,
          inline: true,
        },
        {
          name: `🎨 Artist`,
          value: `Do you feel like an artist?\nSo tag yourself with this role!\nAllows access to the special category of artists.`,
          inline: true,
        },
        {
          name: `🎮 Games`,
          value: `Are you a real G@MER at heart?\nTag yourself with this role!\nAllow access to the special category of gamers.`,
          inline: true,
        },
        {
          name: `💻 Tech`,
          value: `Are you a real tech at heart?\nSo tag yourself with this role!\nAllows access to the special tech category.`,
          inline: true,
        },
        {
          name: `♦ Clan Warframe`,
          value: `Are you part of the Warframe clan?\nSo tag yourself with this role!\nLets follow the clan news!`,
          inline: true,
        },
      ])
      .setColor("DarkButNotBlack");
    /**************************************************************************/
    //Sending the message
    interaction.channel.send({
      components: [row1, row2],
      embeds: [embed],
    });
    interaction.reply({
      content: `The Notif button has been send !`,
      ephemeral: true,
    });
  },
};
