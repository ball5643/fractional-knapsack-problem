const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    // write your code here
    let prof = 0;
    for(let i = 0; i < count; i++) {
        // let m = value.indexOf(Math.max(...value));
        if (capacity - weights[i] >= 0) {
            capacity -= weights[i];
            prof += values[i];
            // value.splice(m, 1);
            // weight.splice(m, 1);
        }
        else {
            // continue;
            prof += capacity * (values[i]/weights[i]);
            break;
        }
    }
    return prof;
    // return value;
}

module.exports = max;
