/* eslint-disable no-unused-vars */
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FacultyCard = ({faculty}) => {
  const handleDetails = (_id)=>{
    
    console.log('Clicked Faculty id:', _id);

  }
    return (
       <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <Card className="w-96  bg-blue-gray-100">
          <CardHeader floated={false} className="h-80">
            <img src={faculty.photoURL} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {faculty.name}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {faculty?.boi}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {faculty.role}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 ">
            
            
        <Link 
        to={`/appointment/${faculty._id}`}>
        <Button
            onClick={()=>handleDetails(faculty._id)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mx-auto"
        >
          Take Appointment
        </Button>
            
            </Link>
          </CardFooter>
        </Card>
       </div>
      );
};

export default FacultyCard;