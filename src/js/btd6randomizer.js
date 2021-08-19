import * as BTD6Data from './btd6info';
import * as random from './random';


/**
 * Returns a random BTD6 map.
 * 
 * @param  None
 * @return {String} - Name of a random map.
 */
function getRandomMap() {
    const difficulty = random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object);
    return random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object[difficulty]);
}

/**
 * Returns a random BTD6 game mode.
 * Will not return "X Monkeys Only" game modes if towers are randomized.
 * 
 * @param  {Boolean} [isTowersRandomized]   - Flag indicating if towers are randomized
 * @return {String}                         - Name of a random game mode.
 */
function getRandomMode(isTowersRandomized) {
    let modeArray = [];
    for(var i = 0; i < BTD6Data.btd6_modes.length; i++) {
        if (!isTowersRandomized || !BTD6Data.btd6_only_modes.includes(i)) {
            modeArray.push(BTD6Data.btd6_modes[i]);
        }
    }
    return random.getRandomArrayItem(modeArray);
}

/**
 * Returns a random BTD6 hero.
 * 
 * @param  None
 * @return {String} - Name of a random hero.
 */
function getRandomHero() {
    return random.getRandomObjectKey(BTD6Data.btd6_heroes_object);
}

/**
 * Returns a collection of random towers.
 * 
 * @param  {Number}   noOfTowers    - Positive integer that is the number of random towers wanted. Note that there are a maximum of 22 towers, thus anything more than 22 makes no sense.
 * @param  {String}   [towerType]   - Optional argument of either "primary", "military", "magic" or "support". If a type is specified, then only towers of that type will be randomly chosen. Ignores this parameter if the input tower type is invalid.
 * @return {String[]}               - Array of tower names.
 */
function getRandomTowers(noOfTowers, towerType) {
    const towerArray = [];
    const validTowerTypes = Object.keys(BTD6Data.btd6_towers_object)

    if (!towerType || !validTowerTypes.includes(towerType)) {
        for (const key of validTowerTypes) {
            for (const tower in BTD6Data.btd6_towers_object[key]) {
                towerArray.push(tower);
            }
        }
    }
    else {
        for (const tower in BTD6Data.btd6_towers_object[towerType]) {
            towerArray.push(tower);
        }
    }

    return random.shuffle(towerArray, noOfTowers).slice(0, noOfTowers);
}

export {
    getRandomMap,
    getRandomMode,
    getRandomHero,
    getRandomTowers
}
