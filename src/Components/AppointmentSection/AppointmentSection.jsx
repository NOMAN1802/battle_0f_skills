/* eslint-disable no-unused-vars */
import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../SectionTitle/SectionTitle';
import Sessions from '../Sessions/Sessions';

const AppointmentSection = () => {
    return (
        <div>
            <Fade>
            <SectionTitle
           subHeading={"solve your problem"}
           heading={"Appointment"}
           >
           </SectionTitle>
           <Sessions></Sessions>
            </Fade>
        </div>
    );
};

export default AppointmentSection;