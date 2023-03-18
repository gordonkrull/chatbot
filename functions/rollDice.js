const rollDice = () => {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

export default rollDice;