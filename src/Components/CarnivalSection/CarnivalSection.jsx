/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CarnivalSectionCard from './CarnivalSectionCard';
import { Fade } from 'react-reveal';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const CarnivalSection = () => {
    const CarnivalProgram = [
        {
        id: 1,
        programName:"Conference",
        programVenue:"Conference Hall",
        image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        date:"28 sept 2023"
    },
        {
        id: 2,
        programName:"Tack of Contest",
        programVenue:"Academic Building 4 ",
        image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        date:"28 sept 2023"
    },
        {
        id: 3,
        programName:"Project Show Case",
        programVenue:"Conference Hall",
        image:"https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        date:"29 sept 2023"
    },
        {
        id: 4,
        programName:"Prize Giving Ceremony",
        programVenue:"Conference Hall",
        image:"https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ullam, quod nemo quae laudantium quam rem non dolorem. Eligendi neque maiores sit deserunt velit atque!",
        date:"30 sept 2023"
    },
]   

    return (
        
        <div>
            <SectionTitle
           subHeading={"Registration ongoing"}
           heading={"ICT Carnival 2023"}
           >
           </SectionTitle>
        <Fade>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2  justify-between items-center gap-4'>
             {
                CarnivalProgram.map(program => <CarnivalSectionCard key={program._id} program ={program}></CarnivalSectionCard>)
             }
           </div>
           {/* <button className='btn  border-b-2 border-blue-200'> Explore More </button> */}
        </Fade>
        <Fade>
        <Button variant="outlined" className='mx-auto border-b-2 border-blue-200'><Link to ="/carnival"> Explore More </Link></Button>
        </Fade>

        </div>
    );
};

export default CarnivalSection;