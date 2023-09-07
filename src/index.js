const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({ 
  partials: [
    Partials.User,
    Partials.GuildMember,
    Partials.Message,
    Partials.Reaction
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
  ] 
});

const config = require('../config.json');
const { appendToDataFile } = require('./util/dataUtils');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
});

client.on('messageCreate', async message => {
  console.log(message);
});

client.login(config.secrets.token);