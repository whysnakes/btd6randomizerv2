import React from 'react';
import { btd6_version, randomizer_version } from '../btd6info.js';


function Version() {
    return (
        <div className="transbox w-100 fixed-bottom text-end">
            <a href="https://github.com/whysnakes/btd6randomizerv2/blob/main/CHANGELOG.md" id="pagefooter" className="cleanlink mx-2">
                Version <strong>{randomizer_version}</strong> based on BTD6 version <strong>{btd6_version}</strong>
            </a>
        </div>
    )
}


export default Version;
