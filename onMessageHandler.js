import getHelpMessage from './functions/getHelpMessage.js';
import getLurkMessage from './functions/getLurkMessage.js';
import say from 'say';
import rollDice from './functions/rollDice.js';
import { format } from 'date-fns-tz';
import getWeather from './functions/getWeather.js';

const onMessageHandler = (client) => async (target, context, msg, self) => {
    if (self) {
        return;
    } // Ignore messages from the bot

    const commandName = msg.trim().split(' ')[0];
    const args = msg.trim().split(' ').slice(1);

    // If the command is known, let's execute it
    if (commandName.startsWith('!')) {
        if (args[0] === "help") {
            client.say(target, getHelpMessage(commandName))
            return;
        }

        switch (commandName) {
            case '!commands':
                client.say(target, `Available commands: !commands, !dice, !discord, !lurk, !so, and !time`);
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
                client.say(target, getLurkMessage(context.username));
                console.log(`* Executed ${commandName} command`);
                break;
            case '!so':
                args.forEach((username) => {
                    console.log(`* Shouting out ${username}`);
                    client.say(target, `/shoutout ${username}`);
                })
                console.log(`* Executed ${commandName} command`);
                break;
            case '!say':
                const words = args.join(" ")
                say.speak(words)
                console.log(`* Executed ${commandName} command`);
                break;
            case '!time':
                client.say(target, `The streamer's current time is ${format(new Date(), 'HH:mm:ss (zzzzz z)')}`);
                console.log(`* Executed ${commandName} command`);
                break;
            case '!weather':
                const location = args.join(" ")
                client.say(target, await getWeather(location));
                console.log(`* Executed ${commandName} command`);
                break;
            default:
                console.log(`* Unknown command ${commandName}`);
        }
    } else {
        console.log(`Chat message: ${msg.trim()}`);
    }
}

export default onMessageHandler;