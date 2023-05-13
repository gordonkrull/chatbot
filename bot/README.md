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
| DATABASE_URL  | The fully-formed URL to connect to the database (including any required credentials). It is assumed that the `chat_messages` table has already been created using the schema provided in `schema.sql` file      |

**Note:** 
- In order for some commands to work the bot must be running locally (e.g. !say plays TTS locally)
- The bot assumes the streamer's current time is the timezone where this bot is running for the purpose of the `!time` command


## Run

Once all enviroment variables are defined you can simply run the bot with the following command:

```
node bot.js    
```
