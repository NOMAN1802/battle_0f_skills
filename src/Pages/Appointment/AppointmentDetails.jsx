/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import TakeAppointment from './TakeAppointment';

const AppointmentDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    
   
    
    useEffect(() => {
        fetch(`https://battle-of-skills-server.vercel.app/getFaculty/${id}`)
          .then((res) => res.json())
          .then((data) => setDetails(data));
      }, [id]);
      
       
  
     
    return (
        <Container>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
          <Card className="w-96 bg-blue-gray-100 items-center">
          <CardHeader floated={false} className="h-80">
            <img src={details?.photoURL} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {details?.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {details.boi}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {details.email}
            </Typography>
            
            <Typography color="blue-gray" className="font-medium" textGradient>
              {details.role}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 ">
            
            
          
          </CardFooter>
        </Card>
        <TakeAppointment details={details}></TakeAppointment>
          </div>
        </Container>
    );
};

export default AppointmentDetails;