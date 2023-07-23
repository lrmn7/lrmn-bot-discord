const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  VoiceChannel,
  GuildEmoji,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Complete music system.")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("play")
        .setDescription("Play music.")
        .addStringOption((option) =>
          option
            .setName("query")
            .setDescription("Search for music.")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("volume")
        .setDescription("Adjust music volume.")
        .addIntegerOption((option) =>
          option
            .setName("percent")
            .setDescription("10 = 10% | 100 = 100%")
            .setMinValue(1)
            .setMaxValue(100)
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("settings")
        .setDescription("Select an option.")
        .addStringOption((option) =>
          option
            .setName("options")
            .setDescription("Select an option.")
            .setRequired(true)
            .addChoices(
              { name: "queue", value: "queue" },
              { name: "skip", value: "skip" },
              { name: "pause", value: "pause" },
              { name: "resume", value: "resume" },
              { name: "stop", value: "stop" }
            )
        )
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const { options, member, guild, channel } = interaction;

    const subcommand = options.getSubcommand();
    const query = options.getString("query");
    const volume = options.getInteger("percent");
    const option = options.getString("options");
    const voiceChannel = member.voice.channel;

    const embed = new EmbedBuilder();

    if (!voiceChannel) {
      embed.setColor("Red");
      embed.setTitle("⛔ Error");
      embed
        .setDescription(
          "You must be in a voice channel to use this command."
        )
        .setFooter({
          text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
        });
      return interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
    if (!member.voice.channelId === guild.members.me.voice.channelId) {
      embed.setColor("Yellow");
      embed.setTitle("⚠️ Attention");
      embed.setDescription(
        "You must be in the same voice channel as me to use this command."
      );
      embed
        .addFields([
          {
            name: `Salon vocal actuel :`,
            value: `<#${guild.members.me.voice.channelId}>`,
            inline: true,
          },
        ])
        .setFooter({
          text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
        });
      return interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }

    try {
      switch (subcommand) {
        case "play":
          client.distube.play(voiceChannel, query, {
            textChannel: channel,
            member: member,
          });
          return await interaction.reply({
            content: "⏱️ Currently researching...",
            ephemeral: true,
          });
        case "volume":
          client.distube.setVolume(voiceChannel, volume);
          return await interaction.reply({
            content: `🔊 The volume has been set to${volume}%`,
            ephemeral: true,
          });
        case "settings":
          const queue = await client.distube.getQueue(voiceChannel);
          if (!queue) {
            embed.setColor("Red");
            embed.setTitle("⛔ Error");
            embed
              .setDescription(
                "No music is playing on the playback track."
              )
              .setFooter({
                text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
              });
            return await interaction.reply({
              embeds: [embed],
              ephemeral: true,
            });
          }
          switch (option) {
            case "skip":
              await queue.skip();
              embed
                .setColor("Blue")
                .setDescription("⏭️ The music has been played.")
                .setFooter({
                  text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
                });
              return await interaction.reply({
                embeds: [embed],
                ephemeral: true,
              });
            case "stop":
              await queue.stop();
              embed
                .setColor("Red")
                .setTitle("⏹️ Playback track has been stopped.")
                .setFooter({
                  text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
                });
              return await interaction.reply({
                embeds: [embed],
                ephemeral: true,
              });
            case "pause":
              await queue.pause();
              embed
                .setColor("Orange")
                .setTitle("⏸️ The music has been paused.")
                .setFooter({
                  text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
                });
              return await interaction.reply({
                embeds: [embed],
                ephemeral: true,
              });
            case "resume":
              await queue.resume();
              embed
                .setColor("Green")
                .setTitle("⏯️ The music was restarted.")
                .setFooter({
                  text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
                });
              return await interaction.reply({
                embeds: [embed],
                ephemeral: true,
              });
            case "queue":
              embed
                .setColor("Purple")
                .setTitle(
                  "📜 Here is the list of music currently playing:"
                )
                .setDescription(
                  `${queue.songs.map(
                    (song, id) =>
                      `\n**${id + 1}.** ${song.name} -\`${
                        song.formattedDuration
                      }\``
                  )}`
                )
                .setFooter({
                  text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
                });
              return await interaction.reply({
                embeds: [embed],
              });
          }
      }
    } catch (err) {
      console.log(err);
      embed
        .setColor("Red")
        .setTitle("⛔ | Something strange happened...")
        .setFooter({
          text: `Powered by Distube \nUpdated by L RMN \n© L RMN all rights reserved`,
        });
      return interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  },
};
