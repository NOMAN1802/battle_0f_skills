/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';
import FacultyCard from './FacultyCard';


const Appointment = () => {
    
    const [faculties, setFaculties] = useState([]);
    useEffect(() => {
        fetch('https://battle-of-skills-server.vercel.app/getFaculty')
            .then(res => res.json())
            .then(data => {
                
                setFaculties(data)
            })
    }, [])
    return (
        <Container>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4'>
              {
                faculties.map(faculty =><FacultyCard key={faculty._id} faculty={faculty}></FacultyCard>)
              }
            </div>
        </Container>
    );
};

export default Appointment;