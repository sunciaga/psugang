const { ChatInputCommandInteraction } = require("discord.js");
const OP = [
    "OP",
    "IDS",
    "GO",
    "729131103654248550"
];

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command)
        return interaction.reply({
    content: "Este comando está desactualizado.",
    ephemeral: true
    });

    if(command.developer && !OP.includes(interaction.user.id))
    //if(command.developer && interaction.user.id != "729131103654248550")
    return interaction.reply({
        content: "Este comando sólo está disponible para los operadores.",
        ephemeral: true
    });
        
        const subCommand = interaction.options.getSubcommand();
        if (subCommand) {
            const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`)
            if (!subCommandFile) return interaction.reply({
                content: "Este subcomando está desactualizado.",
                ephemeral: true
            });
            subCommandFile.execute(interaction, client);
        } else command.execute(interaction, client);
    };
};
