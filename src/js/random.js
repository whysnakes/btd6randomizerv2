/**
 * Uses Math.random() to generate a randomized integer from within the specified minimum and maximum. Taken from MDN.
 * 
 * @param  {Number} min - Minimum integer value, inclusive
 * @param  {Number} max - Maximum integer value, exclusive
 * @return {Number}     - A randomized integer
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Uses Fisher-Yates algorithm to shuffle an array (prevent bias with Math.random()). Taken from SO
 * 
 * @param  {Array}  array   - Array to shuffle
 * @param  {Number} [end]   - Last index in array to shuffle for partial shuffles
 * @return {Array}          - Shuffled array
 */
function shuffle(array, end) {
    let shuffle_array = [...array];
    if (!end) {
        end = array.length - 1;
    }
    let counter = 0;

    // While not yet swapped the required number of elements.
    while (counter < end) {
        // Pick a random index.
        let index = getRandomInt(counter, shuffle_array.length);

        // Swap the first element with it.
        let temp = shuffle_array[counter];
        shuffle_array[counter] = shuffle_array[index];
        shuffle_array[index] = temp;

        // And increase counter by 1.
        counter++;
    }
    return shuffle_array;
}

/**
 * Randomly selects 1 item from an array.
 * 
 * @param  {any[]} array    - The array from which a random element is to be selected from.
 * @return {any}            - A random item from the array.
 */
function getRandomArrayItem(array) {
    return array[getRandomInt(0, array.length)];
}

/**
 * Randomly selects 1 property from an Object.
 * 
 * @param  {Object} object  - The object from which a random property is to be selected from.
 * @return                  - A random property from the object.
 */
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