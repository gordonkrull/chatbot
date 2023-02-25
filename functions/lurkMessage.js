module.exports = {
    get(username) {
        const messages = [
            `Thanks ${username} for lurking the channel!`,
            `${username} is hiding behind the refrigerator watching from a distance.`,
            `${username} is one of our favorite lurkers.`,
            `${username} tears open the pinata with the speed of a mongoose before falling asleep.`,
            `${username} is walking their goldfish.`,
            `${username} has gone to brew more coffee.`,
            `${username} is watching from the bushes.`,
            `${username} has spilled tea on their keyboard so they won't be chatting.`,
            `${username} is lurking in the shadows like a big spooky weirdo.`
        ]
        return messages[Math.floor(Math.random() * messages.length)];
    }
}