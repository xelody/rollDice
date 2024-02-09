// Peiyao Xin

function rollDice(input) {
    const regex = /^(\d+)d(\d+)$/;
    // invalid input
    if (!regex.test(input)) {
        throw new Error("Invalid input format. Please use 'NdM' format (eg. '3d6').");
    }

    const [numOfDices, numOfSides] = input.split('d').map(Number);
    if (numOfDices < 1 || numOfDices > 100) {
        throw new Error("Invalid input. First number must be an integer between 1 and 100");
    }
    if (numOfSides < 2 || numOfSides > 100) {
        throw new Error("Invalid input. Second number must be an integer between 2 and 100");
    }
    let total = 0;
    for (let i = 0; i < numOfDices; i++) {
        total += Math.floor(Math.random() * numOfSides) + 1;
    }
    return total;
}

const input = process.argv[2];
try {
    console.log(rollDice(input));
} catch (error) {
    console.error(error.message);
}
