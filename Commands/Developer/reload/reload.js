const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("Recarga los comandos/eventos.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand((options) => options
            .setName("events")
            .setDescription("Recarga los eventos."))
        .addSubcommand((options) => options
            .setName("commands")
            .setDescription("Recarga los comandos.")),
}