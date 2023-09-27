/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../Container/Container';
import { Fade } from 'react-reveal'; // Import the animation component you want to use

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <Container>
            <Fade bottom> {/* Add the desired animation to this wrapper */}
                <div className='mx-auto text-center md:w-4/12 my-8'>
                    <h3 style={{ fontFamily: 'cursive', fontSize: '25px' }} className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
                    <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className='text-yellow-200 mb-2'>--- {subHeading} ---</p>
                </div>
            </Fade>
        </Container>
    );
};

export default SectionTitle;
