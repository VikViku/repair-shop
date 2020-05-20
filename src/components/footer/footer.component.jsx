import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.style.css';

const Footer = () => (
    <div className="footer">
        <div className="ftco-footer-widget">
            <h2>Kontaktinė informacija</h2>
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon="map-marker" />
                        <span className="text"> Adresas</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="phone" />
                        <span className="text"> Telefonas</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="paper-plane" />
                        <span className="text"> E-mail</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="ftco-footer-widget">
        <h2>Darbo valandos</h2>
        <div className="opening-hours">
            <h4>Atidaryta:</h4>
            <p>
                <span>Monday – Friday : 9am to 20 pm</span><br/>
                <span>Saturday : 9am to 17 pm</span>
            </p>
            <h4>Atostogos:</h4>
            <p>
                <span>All Sunday Days</span><br/>
                <span>All Oficial Holidays</span>
            </p>
        </div>

        
    </div>
    </div>
)

export default Footer;