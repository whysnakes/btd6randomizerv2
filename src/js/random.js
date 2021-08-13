//taken from MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Fisher-Yates algorithm shuffle function taken from SO
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function getRandomArrayItem(array) {
    return array[getRandomInt(0, array.length - 1)];
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
