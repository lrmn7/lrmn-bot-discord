module.exports = {
    data: {
        name: `artist`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("764981896072396810");
        await interaction.reply({
            content: `Your role has been updated with Artist`,
            ephemeral: true,
        });
    }
}