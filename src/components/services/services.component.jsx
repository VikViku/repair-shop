import React from 'react';

import './services.style.css';

const Services = () => (
    <div className="sekcija">
        <h2>Mes teikiame paslaugas:</h2>

        <div className="paslaugos">

            <div className="item">
                <h5>Stambi buitinė technika</h5>
                <p> Šaldytuvai<br />
                Šaldikliai<br />
                Skalbimo mašinos
            </p>
            </div>
            <div className="item">
                <h5>Garantinis</h5>
                <p>Detailesnė informacija</p>
            </div>
            <div className="item">
                <h5>Miestai</h5>
                <p>Marijampolė<br />
            Kalvarija</p>
            </div>
            <div className="item">
                <h5>Smulki buitinė technika</h5>
                <p> Kavamalės<br />
            Dulkių siurbliai<br />
            Mikseriai</p>
            </div>
            <div className="item">
                <h5>Pogarantinis</h5>
                <p>Detailesnė informacija</p>
            </div>

            <div className="item">
                <h5>Rajonai</h5>
                <p>Želsva.<br />
            30km apie Marijampolę.
            </p>

            </div>


        </div>
    </div>
)

export default Services;