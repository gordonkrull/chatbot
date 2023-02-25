const tmi = require('tmi.js');
const helpMessage = require('./functions/helpMessage');
const lurkMessage = require('./functions/lurkMessage');

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_PASSWORD
  },
  channels: [
    process.env.CHANNEL
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  const commandName = msg.trim().split(' ')[0];
  const args = msg.trim().split(' ').slice(1);

  // If the command is known, let's execute it
  if (commandName.startsWith('!')) {
    if (args[0] === "help") {
      client.say(target, helpMessage.get(commandName))
      return;
    }

    switch (commandName) {
      case '!commands':
        client.say(target, `Available commands: !commands, !dice, !discord, !lurk, !so`);
        client.say(target, `Type "<command> help" to see usage instructions`);
        console.log(`* Executed ${commandName} command`);
        break;
      case '!dice':
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
        break;
      case '!discord':
        client.say(target, process.env.DISCORD_LINK);
        console.log(`* Executed ${commandName} command`);
        break;
      case '!lurk':
        client.say(target, lurkMessage.get(context.username));
        console.log(`* Executed ${commandName} command`);
        break;
      case '!so':
        args.forEach((username) => {
          console.log(`* Shouting out ${username}`);
          client.say(target, `/shoutout ${username}`);
        })
        console.log(`* Executed ${commandName} command`);
        break;
      default:
        console.log(`* Unknown command ${commandName}`);
    }
  } else {
    console.log(`* Not a command: ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
