/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaHandshake, FaWarehouse, FaCampground, FaBook } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Card } from '@material-tailwind/react';

const ShortSuccessList = () => {
    const [membershipNumber, setMembershipNumber] = useState(0);
    const [workshopNumber, setWorkshopNumber] = useState(0);
    const [campNumber, setCampNumber] = useState(0);
    const [publicationsNumber, setPublicationsNumber] = useState(0);

    useEffect(() => {
        const membershipTarget = 1200;
        const workshopTarget = 800;
        const campTarget = 500;
        const publicationsTarget = 1000;

        const duration = 2000;
        const interval = 50;

        const membershipIncrement = Math.ceil(membershipTarget / (duration / interval));
        const workshopIncrement = Math.ceil(workshopTarget / (duration / interval));
        const campIncrement = Math.ceil(campTarget / (duration / interval));
        const publicationsIncrement = Math.ceil(publicationsTarget / (duration / interval));

        const membershipTimer = setInterval(() => {
            setMembershipNumber((prevNumber) => {
                if (prevNumber + membershipIncrement >= membershipTarget) {
                    clearInterval(membershipTimer);
                    return membershipTarget;
                } else {
                    return prevNumber + membershipIncrement;
                }
            });
        }, interval);

        const workshopTimer = setInterval(() => {
            setWorkshopNumber((prevNumber) => {
                if (prevNumber + workshopIncrement >= workshopTarget) {
                    clearInterval(workshopTimer);
                    return workshopTarget;
                } else {
                    return prevNumber + workshopIncrement;
                }
            });
        }, interval);

        const campTimer = setInterval(() => {
            setCampNumber((prevNumber) => {
                if (prevNumber + campIncrement >= campTarget) {
                    clearInterval(campTimer);
                    return campTarget;
                } else {
                    return prevNumber + campIncrement;
                }
            });
        }, interval);

        const publicationsTimer = setInterval(() => {
            setPublicationsNumber((prevNumber) => {
                if (prevNumber + publicationsIncrement >= publicationsTarget) {
                    clearInterval(publicationsTimer);
                    return publicationsTarget;
                } else {
                    return prevNumber + publicationsIncrement;
                }
            });
        }, interval);

        return () => {
            clearInterval(membershipTimer);
            clearInterval(workshopTimer);
            clearInterval(campTimer);
            clearInterval(publicationsTimer);
        };
    }, []);

    return (
        <div>
            <SectionTitle
                subHeading={"Our Hero"}
                heading={"Short Success List"}
            >
            </SectionTitle>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-20 items-between justify-center'>
                <Card className="border p-4 rounded-md transition hover:bg-slate-200 hover:text-yellow-200 cursor-pointer">
                    
                        <div className="md:flex items-center ">
                            <FaHandshake className="w-20 h-20"></FaHandshake>
                            <h2 style={{ fontFamily: 'cursive', fontSize: '15px' }} className="text-3xl ml-12 mt-4 font-extrabold">{membershipNumber}</h2>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="font-semibold text-2xl ml-16 ">Membership</p>
                        </div>
                    </Card>
                
                <Card className="border p-4 rounded-md transition hover:bg-slate-200 hover:text-yellow-200 cursor-pointer">
                    <div>
                        <div className="md:flex items-center ">
                            <FaWarehouse className="w-20 h-20"></FaWarehouse>
                            <h2 style={{ fontFamily: 'cursive', fontSize: '15px' }} className="text-3xl ml-12 mt-4 font-extrabold">{workshopNumber}</h2>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="font-semibold text-2xl ml-16 ">Workshop</p>
                        </div>
                    </div>
                </Card>
                <Card className="border p-4 rounded-md transition hover:bg-slate-200 hover:text-yellow-200 cursor-pointer">
                    <div>
                        <div className="md:flex items-center ">
                            <FaCampground className="w-20 h-20"></FaCampground>
                            <h2 style={{ fontFamily: 'cursive', fontSize: '15px' }} className="text-3xl ml-12 mt-4 font-extrabold">{campNumber}</h2>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="font-semibold text-2xl ml-16 ">Organised Camp</p>
                        </div>
                    </div>
                </Card>
                <Card className="border p-4 rounded-md transition hover:bg-slate-200 hover:text-yellow-200 cursor-pointer">
                    <div >
                        <div className="md:flex items-center ">
                            <FaBook className="w-20 h-20"></FaBook>
                            <h2 style={{ fontFamily: 'cursive', fontSize: '15px' }} className="text-3xl ml-12 mt-4 font-extrabold">{publicationsNumber}</h2>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'cursive', fontSize: '15px' }} className="font-semibold text-2xl ml-16 ">Publications</p>
                        </div>
                    </div>
                </Card>
            </div>
            </div>
       
    );
};


export default ShortSuccessList;
