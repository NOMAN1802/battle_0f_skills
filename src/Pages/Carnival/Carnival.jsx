/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import CarnivalCard from './CarnivalCard';
import Container from '../../Components/Container/Container';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

const Carnival = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch("https://battle-of-skills-server.vercel.app/events")
        .then(res=> res.json())
        .then(data =>{
            // console.log(data); 
            setEvents(data)
        })
    },[])
    return (
        <Container>
             <SectionTitle
           subHeading={"Show must go on"}
           heading={"Ict Carnival 2023"}
           >
           </SectionTitle>
           <Fade>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2  justify-between items-center gap-4'>
             {
                events.map(program => <CarnivalCard key={program._id} program ={program}></CarnivalCard>)
             }
           
           </div>
           
        </Fade>

        <SectionTitle
           subHeading={"Registration on going"}
           heading={"Register for carnival"}
           >
           </SectionTitle>

           
           <Fade>
           <div className='flex flex-col'>
           <h1 className='text-center flex flex-col' style={{ fontFamily: 'cursive', fontSize: '25px'}}>To Register for Carnival <br />Pay only  300 Tk</h1>
           <Link to='/checkOut' className='mx-auto my-8'>
           <Button variant='outlined' className='mx-auto border-b-2 border-blue-200 hover:border-yellow-200 rounded-xl'
           > Pay</Button>
           </Link>
           </div>
           </Fade>
           
        
        </Container>
    );
};

export default Carnival;