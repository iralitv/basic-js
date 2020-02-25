module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let calculateTurns = (disksNumber) => disksNumber === 1 ? 1 : 2 * calculateTurns(disksNumber - 1) + 1

    return { turns: calculateTurns(disksNumber), seconds: calculateTurns(disksNumber) / (turnsSpeed / 3600) }
}