import React from 'react';

import './Homepage.style.css';

import NewsCarousel from '../../components/news-carousel/news-carousel.component';
import Services from '../../components/services/services.component';
import AboutUs from '../../components/about-us/about-us.component';
import ContactForm from '../../components/contact-form/contact-form.component';

const HomePage = () => (
    <div>
        <main>
            <section>
                <NewsCarousel />
            </section>
            <section>
                <Services />
            </section>
            <section>
                <AboutUs />
            </section>
            <section>
                <div className="counter"></div>
                <ContactForm />
            </section>
        </main>
    </div>
)

export default HomePage;