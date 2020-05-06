import React, { useState } from 'react';
import about from '../../images/about.jpg';

import './about-us.style.css';

const AboutUs = () => {

    const initTabs = [
        {
            name: "mission",
            title: "Our Mission",
            text: "aaaaaaaaa",
            status: "active"
        },
        {
            name: "vision",
            title: "Our Vision",
            text: "bbbbbbbb",
            status: ""
        },
        {
            name: "value",
            title: "Our Mission",
            text: "ccccccc",
            status: ""
        }
    ];
    const [tabs, setTabs] = useState(initTabs);
    const [sectionText, setSectionText] = useState(tabs[0].text);
    
    const toggleSection = (e, idx) => {
        let newArr = [...tabs];
        newArr = newArr.map(tab => tab.status === "active" ? {...tab, status: "" } : tab );
        newArr[idx].status = "active"; 
        setSectionText(tabs[idx].text);
        setTabs(newArr);
    };

    return (
        <div className="apie-mus">
            <img src={about} alt="meistras" className="image" />
            <div className="content">
                <h5>Apie mus</h5>
                <h6>Trumpas aprašymas</h6>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                {
                    tabs.map((tab, idx) => (
                        <input className={`${tab.status}`} key={idx} type="button" name={tab.name} value={tab.title} onClick={e => (toggleSection(e, idx))} />
                    ))
                }

                <div>{sectionText}</div>
            </div>
        </div>

    );
};

export default AboutUs;