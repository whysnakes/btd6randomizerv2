import * as BTD6Data from './btd6info';
import * as random from './random';


function getRandomMap() {
    const difficulty = random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object);
    return random.getRandomObjectKey(BTD6Data.btd6_maps_by_difficulty_object[difficulty]);
}

function getRandomMode(isTowerTypeRestricted) {
    let modeArray = [];
    for(var i = 0; i < BTD6Data.btd6_modes.length; i++) {
        if (!isTowerTypeRestricted || !BTD6Data.btd6_only_modes.includes(i)) {
            modeArray.push(BTD6Data.btd6_modes[i]);
        }
    }
    return random.getRandomArrayItem(modeArray);
}

function getRandomHero() {
    return random.getRandomObjectKey(BTD6Data.btd6_heroes_object);
}

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
