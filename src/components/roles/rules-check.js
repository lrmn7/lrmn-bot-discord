module.exports = {
    data: {
        name: `rules-check`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("762449018726907935");
        await interaction.reply({
            content: `Thank you for having read and approved the rules in force, we remind you that you can tag yourself in the lounge provided for this purpose <#763763437041614848> <a:sip:1023992524269944932>`,
            ephemeral: true,
        });
    }
}