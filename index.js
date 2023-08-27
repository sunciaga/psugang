const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages], 
    partials: [User, Message, GuildMember, ThreadMember]
});

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();

const { loadEvents } = require("./Handlers/eventHandler")
loadEvents(client);

const { connect } = require("mongoose")
connect(client.config.DatabaseURL, {
}).then(() => console.log("El cliente ahora está conectado a la base de datos."));

client.login(client.config.token);