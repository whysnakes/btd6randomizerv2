import * as BTD6Data from './btd6info';
import * as random from './random';


/**
 * Returns a random BTD6 map.
 * @param  None
 * @return {String}     - Name of a random map.
 */
function getRandomMap() {
    const difficulty = random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object);
    return random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object[difficulty]);
}

/**
 * Returns a random BTD6 game mode.
 * @param  None
 * @return {String}     - Name of a random game mode.
 */
function getRandomMode(isTowerTypeRestricted) {
    let modeArray = [];
    for(var i = 0; i < BTD6Data.btd6_modes.length; i++) {
        if (!isTowerTypeRestricted || !BTD6Data.btd6_only_modes.includes(i)) {
            modeArray.push(BTD6Data.btd6_modes[i]);
        }
    }
    return random.getRandomArrayItem(modeArray);
}

/**
 * Returns a random BTD6 hero.
 * @param  None
 * @return {String}     - Name of a random hero.
 */
function getRandomHero() {
    return random.getRandomObjectKey(BTD6Data.btd6_heroes_object);
}

/**
 * Returns a collection of random towers.
 * @param  {Number}   noOfTowers  - Positive integer that is the number of random towers wanted. Note that there are a maximum of 22 towers, thus anything more than 22 makes no sense.
 * @param  {String}   [towerType] - Optional argument of either "primary", "military", "magic" or "support". If a type is specified, then only towers of that type will be randomly chosen.
 * @return {String[]}             - Array of tower names.
 */
function getRandomTowers(noOfTowers, towerType) {
    let towerArray = [];

    if(!towerType) {
        for(let key in BTD6Data.btd6_towers) {
            for(let tower in BTD6Data.btd6_towers[key]) {
                towerArray.push(BTD6Data.btd6_towers[key][tower]);
            }
        }
    }
    else {
        for(let tower in BTD6Data.btd6_towers[towerType]) {
            towerArray.push(BTD6Data.btd6_towers[towerType][tower]);
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
