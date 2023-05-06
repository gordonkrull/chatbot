const getHelpMessage = (commandName) => {
    const messages = {
        "!commands": "Lists all available commands",
        "!dice": "Rolls a dice, resulting in a number between 1 and 6",
        "!discord": "Displays the Discord link! Join in for updates and fun chat.",
        "!lurk": "Display a random lurk message for when you'll be AFK but still hanging out.",
        "!so": "Gives a shoutout to one or more channels. Please use the command followed by a space-separated list of usernames!",
        "!say": "Says whatever follows the command as a TTS message",
        "!time": "Display the streamer's current time"
    }

    if (!Object.keys(messages).includes(commandName)) {
        return `You have attempted to get help for an invalid command: ${commandName}`
    }

    return messages[commandName]
}

export default getHelpMessage;