/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Container from '../../Components/Container/Container';
import CarnivalSection from '../../Components/CarnivalSection/CarnivalSection';
import CpcSection from '../../Components/CpcSection/CpcSection';
import AppointmentSection from '../../Components/AppointmentSection/AppointmentSection';
import Testimonial from '../../Components/Testimonial/Testimonial';
import ShortSuccessList from '../../Components/ShortSuccessList/ShortSuccessList';
import ContactUs from '../../Components/ContactUs/ContactUs';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <CarnivalSection></CarnivalSection>
            <CpcSection></CpcSection>
            <AppointmentSection></AppointmentSection>
            <Testimonial></Testimonial>
            <ShortSuccessList></ShortSuccessList>
            <ContactUs></ContactUs>
        </Container>
    );
};

export default Home;