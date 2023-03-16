Basic Twitch Chatbot
================
## Installation
```
npm install
```
## Prerequisites
You must define the following environment variables before running the chatbot

| Variable      | Description |
| ------------- | ----------- |
| BOT_USERNAME  | The username of the bot account you intend to use       |
| BOT_PASSWORD  | Password used for the bot, this could be in the form `oauth:<token>`        |
| CHANNEL       | Channel for the bot to join (typically your Twitch channel)        |
| DISCORD_LINK  | Link to be displayed when the !discord command is invoked        |

**Note:** In order for some commands to work the bot must be running locally (e.g. !say plays TTS locally)

## Run

Once all enviroment variables are defined you can simply run the bot with the following command:

```
node bot.js    
```
