const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  EmbedBuilder,
  Embed,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Return the rules button panel"),
  async execute(interaction, client) {
    /**************************************************************************/
    //Setting up button
    const buttonRules = new ButtonBuilder()
      .setCustomId(`rules-check`)
      .setEmoji("✅")
      .setLabel("Read and approved")
      .setStyle(`Success`);
    /**************************************************************************/
    //Setting up the custom embed.s !
    let embedcgu = new EmbedBuilder()
      .setTitle(`CGU DISCORD :`)
      .setURL(`https://discord.com/terms`)
      .setDescription(
        `⚠️ The discord rules (CGU) are applicable to this discord server, by having joined this community and by having registered on discord you have accepted these conditions.`
      )
      .setColor("Red");
    let embedrulespec = new EmbedBuilder()
      .setTitle(`Rules specific to this discord:`)
      .addFields([
        {
          name: `⛔ Art.1`,
          value: `Advertising, whatever its form (youtube, discord, kickstarter or other crowdfunding platform for unfinished games/products.) is strictly prohibited.`,
          inline: true,
        },
        {
          name: `⛔ Art.2`,
          value: `Unnecessary or mass mentions (ex:everyone..) are prohibited. Mentions to subs, etc. out of conversation are also prohibited. Mentions to staff members are prohibited and will be sanctioned by a warning and then a ban.`,
          inline: true,
        },
        {
          name: `⛔ Art.3`,
          value: `Insults, hatred, racism, harassment or any other form of lack of respect will be punished.`,
          inline: true,
        },
        {
          name: `⛔ Art.4`,
          value: `Spam or flood and full caps, no matter what, are prohibited. Send your message once, it will be seen.`,
          inline: true,
        },
        {
          name: `⛔ Art.5`,
          value: `Trolling is not recommended, you have to know when to stop, if you're teasing someone, it's fun 5 minutes, no more.`,
          inline: true,
        },
        {
          name: `⛔ Art.6`,
          value: `The spoiler, whatever its form, whether true or false, is prohibited outside the channel provided for this purpose.`,
          inline: true,
        },
        {
          name: `⛔ Art.7`,
          value: `No mention in the channel "spoil" is tolerated.`,
          inline: true,
        },
        {
          name: `⛔ Art.8`,
          value: `Nicknames with cancer characters are prohibited (emotes, special characters, offensive)`,
          inline: true,
        },
        {
          name: `⛔ Art.9`,
          value: `Spamming Connect/Disconnect to voice channels. And avoid logging in for less than a minute not to talk.`,
          inline: true,
        },
        {
          name: `⛔ Art.10`,
          value: `Advertising or spam in mp (private message) is prohibited (by Discord's terms of use). If you want to report it it's here -> https://dis.gd/contact`,
          inline: true,
        },
        {
          name: `⛔ Art.11`,
          value: `Spamming commands in channels is prohibited.`,
          inline: true,
        },
        {
          name: `⛔ Art.12`,
          value: `Political debates, sensitive subjects (religions/p*rn/etc.) and offensive emoji reactions are liable to be kicked or even banned!`,
          inline: true,
        },
        {
          name: `⚠️ Art.13`,
          value: `A ban on youtube/twitch can also be effective on this discord.`,
          inline: true,
        },
        {
          name: `⚠️ Art.14`,
          value: `Custom statuses must respect the rule on nicknames.`,
          inline: true,
        },
        {
          name: `⚠️ Art.15`,
          value: `The spoiler channel is in NSFW but it is forbidden to post NSFW in it.`,
          inline: true,
        },
      ])
      .setFooter({
        text: `⚠️The moderation reserves the right to add, remove, or modify these rules at any time and without warning. Therefore, you are required to stay informed about any modifications.`,
      })
      .setColor("Blue");
    let embedrulessupp = new EmbedBuilder()
      .setTitle(`Additional information about the rules:`)
      .addFields([
        {
          name: `👮 Paragraph 1`,
          value: `If someone commits an offense (advertising, etc...), mention a moderator: they will apply a sanction. The severity of the punishment may vary depending on the gravity of the offense.`,
          inline: true,
        },
        {
          name: `⚠️ Paragraph 2`,
          value: `This list is not exhaustive; if a moderator deems that you have committed an offense despite it not being explicitly listed here, they will still take appropriate action. We trust your common sense.`,
          inline: true,
        },
      ])
      .setFooter({
        text: `any abuse of mentioning staff members will be severely punished`,
      })
      .setColor("Yellow");
    let embedrulesyoucando = new EmbedBuilder()
      .setTitle(`What you can do:`)
      .addFields([
        {
          name: `✅`,
          value: `Be respectful and spread love everywhere, as long as it's not spam!`,
          inline: true,
        },
        {
          name: `✅`,
          value: `Use appropriate and courteous language.`,
          inline: true,
        },
        {
          name: `✅`,
          value: `Have a minimum level of correct and readable spelling.`,
          inline: true,
        },
      ])
      .setFooter({
        text: `any abuse of mentioning staff members will be severely punished`,
      })
      .setColor("Green");
    let embedreadandapprove = new EmbedBuilder()
      .setFooter({
        text: `By clicking the "read and approve" button, you confirm that you have read the rules and agree to abide by them.`,
      })
      .setColor("DarkButNotBlack");
    /**************************************************************************/
    //Sending the message
    interaction.channel.send({
      content: `**Welcome to the community Discord of landerf!**\n\n**Please read these rules 👇 *CAREFULLY*  !**`,
      embeds: [
        embedcgu,
        embedrulespec,
        embedrulessupp,
        embedrulesyoucando,
        embedreadandapprove,
      ],
      components: [new ActionRowBuilder().addComponents(buttonRules)],
    });
    interaction.reply({
      content: `The rules button has been sent!`,
      ephemeral: true,
    });
  },
};
