import React from 'react';

import mechanic1 from '../../../images/mechanic/111.jpg';
import mechanic2 from '../../../images/mechanic/222.jpg';
import mechanic3 from '../../../images/mechanic/333.jpg';
import mechanic4 from '../../../images/mechanic/444.jpg';
import mechanic5 from '../../../images/mechanic/555.jpg';
import mechanic6 from '../../../images/mechanic/666.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Jannat Andra',
        expertize: '-Engine Expert'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'Jhon Smith',
        expertize: '-Polish Expert'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Juwel Rana',
        expertize: '-Alrounder'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Adon Fintch',
        expertize: '-Washing Expert'
    },
    {
        id: 5,
        img: mechanic5,
        name: 'Andray Moor',
        expertize: '-Coloring Expert'
    },
    {
        id: 6,
        img: mechanic6,
        name: 'Steven Smith',
        expertize: '-Engine Expert'
    },
]


const Experts = () => {
    return (
        <div id="experts" className="container" >
            <h2 className="text-primary mt-5" >Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;