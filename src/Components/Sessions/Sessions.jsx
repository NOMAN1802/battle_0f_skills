/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { FaHandPointDown } from 'react-icons/fa';
import Aos from 'aos';
import { Card } from '@material-tailwind/react';

const Sessions = () => {

    useEffect(() => {
        Aos.init();
      }, [])
   
    return (
        <div className='my-12'>
         <Marquee speed={100}> <h2 style={{ fontFamily: 'cursive', fontSize: '40px' }} className='text-3xl text-stone-500 font-semibold text-center my-4'>Our Appointment time periods </h2></Marquee>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 my-8 justify-center items-center'>


                <Card className="w-96 h-24 py-6 bg-gray-200 shadow-2xl rounded-2xl" data-aos="zoom-in">
                    <div className="flex flex-col justify-center items-center">
                               <FaHandPointDown></FaHandPointDown>
                          
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-medium'>Morning Session</p>
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-xs'>9 AM - 12 PM</p>
                    </div>
                </Card>
                <Card className="w-96 h-24 py-6 bg-gray-200 shadow-2xl rounded-2xl" data-aos="zoom-in">
                    <div className="flex flex-col justify-center items-center">
                            <FaHandPointDown></FaHandPointDown>
                           
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-medium'>Day Session</p>
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-xs'>12 PM - 4 PM</p>
                    </div>
                </Card>
                <Card className="w-96 h-24 py-6 bg-gray-200 shadow-2xl rounded-2xl">
                    <div className="flex flex-col justify-center items-center" data-aos="zoom-in">     
                            <FaHandPointDown></FaHandPointDown>  
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-medium'>Evening Session</p>
                        <p style={{ fontFamily: 'cursive', fontSize: '10px' }} className='text-center text-stone-400 text-xs'>4 PM - 8 PM</p>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Sessions;