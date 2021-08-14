//taken from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Fisher-Yates algorithm shuffle function taken from SO
function shuffle(array, end) {
    if (!end) {
        end = array.length - 1;
    }
    let counter = 0;

    // While not yet swapped the required number of elements.
    while (counter < end) {
        // Pick a random index.
        let index = getRandomInt(counter, array.length);

        // Swap the first element with it.
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;

        // And increase counter by 1.
        counter++;
    }
    return array;
}

function getRandomArrayItem(array) {
    return array[getRandomInt(0, array.length)];
}

function getRandomObjectKey(object) {
    const keys = Object.keys(object);
    return getRandomArrayItem(keys);
}


export {
    getRandomInt,
    shuffle,
    getRandomArrayItem,
    getRandomObjectKey
}
