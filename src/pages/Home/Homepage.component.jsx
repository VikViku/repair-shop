import React from 'react';

import './Homepage.style.css';

import NewsCarousel from '../../components/news-carousel/news-carousel.component';
import Services from '../../components/services/services.component';
import AboutUs from '../../components/about-us/about-us.component';

const HomePage = () => (
    <div>
        <main>
            <section>
                <NewsCarousel/>
            </section>
            <section>
                <Services/>
            </section>
            <section>
                <AboutUs/>
            </section>
        </main>
    </div>
)

export default HomePage;